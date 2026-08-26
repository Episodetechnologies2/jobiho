import pool from '@/lib/db';
import { MapPin, Globe, FileEdit, Clock, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { getSession } from '@/lib/auth';

export const revalidate = 0; // Disable caching so stats are always up to date

export default async function DashboardPage() {
  let stats = { total: 0, published: 0, draft: 0 };
  let recentTours: any[] = [];
  let adminName = 'Admin';

  try {
    const session = await getSession();
    if (session?.email) {
      const [rows]: any = await pool.query(
        'SELECT name FROM users WHERE username = ?',
        [session.email]
      );
      if (rows && rows.length > 0 && rows[0].name) {
        adminName = rows[0].name;
      } else if (session.name) {
        adminName = session.name;
      }
    }
  } catch (err) {
    console.error('Error fetching admin name for dashboard:', err);
  }

  try {
    // Fetch counts in one optimized query
    const [countsResult]: any = await pool.query(`
      SELECT 
        COUNT(*) as total,
        SUM(CASE WHEN status = 'published' THEN 1 ELSE 0 END) as published,
        SUM(CASE WHEN status = 'draft' THEN 1 ELSE 0 END) as draft
      FROM tour_packages
    `);

    if (countsResult && countsResult[0]) {
      stats = {
        total: countsResult[0].total || 0,
        published: Number(countsResult[0].published) || 0,
        draft: Number(countsResult[0].draft) || 0
      };
    }

    // Fetch 5 recently updated packages
    const [toursResult]: any = await pool.query(`
      SELECT id, name, country, region, status, price, duration, updated_at 
      FROM tour_packages 
      ORDER BY updated_at DESC 
      LIMIT 5
    `);
    
    recentTours = toursResult;
  } catch (err) {
    console.error('Error loading dashboard stats:', err);
  }

  const statCards = [
    {
      title: 'Total Tour & Packages',
      value: stats.total,
      description: 'Total packages configured in database',
      icon: MapPin,
      color: 'bg-blue-50 text-[#1565C0] border-blue-100',
      iconColor: 'text-[#1565C0]'
    },
    {
      title: 'Published Packages',
      value: stats.published,
      description: 'Active and visible on public map/site',
      icon: Globe,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-100',
      iconColor: 'text-emerald-600'
    },
    {
      title: 'Draft Packages',
      value: stats.draft,
      description: 'Unpublished packages under configuration',
      icon: FileEdit,
      color: 'bg-amber-50 text-amber-700 border-amber-100',
      iconColor: 'text-amber-600'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold font-heading text-gray-800">Welcome Back, {adminName}!</h2>
          <p className="text-sm text-gray-500 mt-1">Here is a quick overview of your tours and packages status.</p>
        </div>
        <Link 
          href="/admin/tour-packages/add"
          className="inline-flex items-center gap-2 bg-[#1565C0] hover:bg-[#0D47A1] text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-sm transition-all"
        >
          + Add Tour & Package
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statCards.map((card) => (
          <div 
            key={card.title}
            className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center justify-between group hover:shadow-md transition-shadow duration-300"
          >
            <div className="space-y-1">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{card.title}</p>
              <h3 className="text-3xl font-extrabold font-heading text-gray-800">{card.value}</h3>
              <p className="text-xs text-gray-400">{card.description}</p>
            </div>
            <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${card.color}`}>
              <card.icon className="w-6 h-6" />
            </div>
          </div>
        ))}
      </div>

      {/* Recent Tours Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex justify-between items-center">
          <h3 className="font-bold font-heading text-gray-800 flex items-center gap-2">
            <Clock className="w-5 h-5 text-gray-400" />
            Recently Updated Packages
          </h3>
          <Link 
            href="/admin/tour-packages"
            className="text-xs font-bold text-[#1565C0] hover:text-[#0D47A1] transition-colors flex items-center gap-0.5"
          >
            View All
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-xs font-bold uppercase tracking-wider text-gray-500">
                <th className="px-6 py-4">Tour Name</th>
                <th className="px-6 py-4">Destination</th>
                <th className="px-6 py-4">Duration</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Last Updated</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-gray-600 font-medium">
              {recentTours.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-gray-400 text-sm">
                    No tour packages found in database.
                  </td>
                </tr>
              ) : (
                recentTours.map((tour) => (
                  <tr key={tour.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 text-gray-800 font-bold">{tour.name}</td>
                    <td className="px-6 py-4 text-xs">
                      {tour.country}, {tour.region}
                    </td>
                    <td className="px-6 py-4 text-xs">{tour.duration || 'N/A'}</td>
                    <td className="px-6 py-4 text-xs font-semibold text-[#1565C0]">
                      {tour.price || 'N/A'}
                    </td>
                    <td className="px-6 py-4">
                      <span 
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${
                          tour.status === 'published' 
                            ? 'bg-emerald-50 text-emerald-700' 
                            : 'bg-amber-50 text-amber-700'
                        }`}
                      >
                        {tour.status === 'published' ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-xs text-gray-400 font-normal">
                      {new Date(tour.updated_at).toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
