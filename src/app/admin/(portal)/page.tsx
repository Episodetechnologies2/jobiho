import pool from '@/lib/db';
import { 
  MapPin, 
  Globe, 
  FileEdit, 
  Clock, 
  ChevronRight, 
  MessageSquare, 
  Clock3, 
  CheckCircle, 
  Archive, 
  Eye, 
  Sparkles 
} from 'lucide-react';
import Link from 'next/link';
import { getSession } from '@/lib/auth';

export const revalidate = 0; // Disable caching so stats are always up to date

export default async function DashboardPage() {
  let stats = { total: 0, published: 0, draft: 0 };
  let enquiryStats = { total: 0, pending: 0, reviewed: 0, contacted: 0, archived: 0 };
  let recentTours: any[] = [];
  let recentEnquiries: any[] = [];
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
    // Fetch package counts in one query
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

    // Fetch enquiry counts
    const [enqCountsResult]: any = await pool.query(`
      SELECT 
        COUNT(*) as total,
        SUM(CASE WHEN status = 'pending' THEN 1 ELSE 0 END) as pending,
        SUM(CASE WHEN status = 'reviewed' THEN 1 ELSE 0 END) as reviewed,
        SUM(CASE WHEN status = 'contacted' THEN 1 ELSE 0 END) as contacted,
        SUM(CASE WHEN status = 'archived' THEN 1 ELSE 0 END) as archived
      FROM enquiries
    `);

    if (enqCountsResult && enqCountsResult[0]) {
      enquiryStats = {
        total: Number(enqCountsResult[0].total) || 0,
        pending: Number(enqCountsResult[0].pending) || 0,
        reviewed: Number(enqCountsResult[0].reviewed) || 0,
        contacted: Number(enqCountsResult[0].contacted) || 0,
        archived: Number(enqCountsResult[0].archived) || 0
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

    // Fetch 5 recent enquiries
    const [enquiriesResult]: any = await pool.query(`
      SELECT id, package_name, user_name, user_email, user_phone, status, created_at 
      FROM enquiries 
      ORDER BY created_at DESC 
      LIMIT 5
    `);
    recentEnquiries = enquiriesResult;
  } catch (err) {
    console.error('Error loading dashboard stats:', err);
  }

  // 1. Tour Package Stats (Restored to exact design in user screenshot)
  const packageStatCards = [
    {
      title: 'TOTAL TOUR & PACKAGES',
      value: stats.total,
      description: 'Total packages configured in database',
      icon: MapPin,
      color: 'bg-blue-50 text-[#1565C0] border-blue-100',
      href: '/admin/tour-packages'
    },
    {
      title: 'PUBLISHED PACKAGES',
      value: stats.published,
      description: 'Active and visible on public map/site',
      icon: Globe,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-100',
      href: '/admin/tour-packages'
    },
    {
      title: 'DRAFT PACKAGES',
      value: stats.draft,
      description: 'Unpublished packages under configuration',
      icon: FileEdit,
      color: 'bg-amber-50 text-amber-700 border-amber-100',
      href: '/admin/tour-packages'
    }
  ];

  // 2. Customer Enquiry Metric Cards (Only 3 cards: Total, Pending, Archived as requested)
  const enquiryStatCards = [
    {
      title: 'TOTAL ENQUIRIES',
      value: enquiryStats.total,
      description: 'All customer package requests received',
      icon: MessageSquare,
      color: 'bg-indigo-50 text-indigo-700 border-indigo-100',
      href: '/admin/enquiries'
    },
    {
      title: 'PENDING ACTION',
      value: enquiryStats.pending,
      description: 'Enquiries requiring response or follow-up',
      icon: Clock3,
      color: enquiryStats.pending > 0 ? 'bg-amber-50 text-amber-700 border-amber-200' : 'bg-gray-50 text-gray-600 border-gray-100',
      href: '/admin/enquiries?status=pending'
    },
    {
      title: 'ARCHIVED ENQUIRIES',
      value: enquiryStats.archived,
      description: 'Completed or archived customer enquiries',
      icon: Archive,
      color: 'bg-gray-100 text-gray-700 border-gray-200',
      href: '/admin/enquiries?status=archived'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold font-heading text-gray-800">Welcome Back, {adminName}!</h2>
          <p className="text-sm text-gray-500 mt-1">Here is a real-time overview of your packages and customer enquiries.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link 
            href="/admin/enquiries"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-bold px-4 py-2.5 rounded-xl shadow-sm transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            Enquiries ({enquiryStats.pending} Pending)
          </Link>
          <Link 
            href="/admin/tour-packages/add"
            className="inline-flex items-center gap-2 bg-[#1565C0] hover:bg-[#0D47A1] text-white text-sm font-bold px-4 py-2.5 rounded-xl shadow-sm transition-all"
          >
            + Add Tour Package
          </Link>
        </div>
      </div>

      {/* SECTION 1: Tour Package Overview Cards (Matches user screenshot exactly) */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">Tour & Package Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packageStatCards.map((card) => (
            <Link 
              key={card.title}
              href={card.href}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center justify-between group hover:shadow-md transition-all duration-300"
            >
              <div className="space-y-1">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{card.title}</p>
                <h3 className="text-3xl font-extrabold font-heading text-gray-800">{card.value}</h3>
                <p className="text-xs text-gray-400">{card.description}</p>
              </div>
              <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${card.color}`}>
                <card.icon className="w-6 h-6" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* SECTION 2: Customer Enquiries Overview Cards (Only Total, Pending Action, Archived) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">Customer Enquiries Overview</h3>
          <Link href="/admin/enquiries" className="text-xs font-bold text-[#1565C0] hover:underline flex items-center gap-1">
            Manage All Enquiries →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {enquiryStatCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center justify-between group hover:shadow-md transition-all duration-300"
            >
              <div className="space-y-1">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{card.title}</p>
                <h3 className="text-3xl font-extrabold font-heading text-gray-800">{card.value}</h3>
                <p className="text-xs text-gray-400">{card.description}</p>
              </div>
              <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${card.color}`}>
                <card.icon className="w-6 h-6" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* SECTION 3: Two Column Tables (Recent Enquiries & Recent Packages) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Customer Enquiries Table */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
          <div className="p-6 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
            <h3 className="font-bold font-heading text-gray-800 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-amber-500" />
              Recent Customer Enquiries
            </h3>
            <Link 
              href="/admin/enquiries"
              className="text-xs font-bold text-[#1565C0] hover:text-[#0D47A1] transition-colors flex items-center gap-0.5"
            >
              View All Enquiries
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100 text-xs font-bold uppercase tracking-wider text-gray-500">
                  <th className="px-6 py-3.5">Client Name</th>
                  <th className="px-6 py-3.5">Package</th>
                  <th className="px-6 py-3.5">Status</th>
                  <th className="px-6 py-3.5">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 text-gray-600 font-medium">
                {recentEnquiries.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-8 text-center text-gray-400 text-sm">
                      No customer enquiries received yet.
                    </td>
                  </tr>
                ) : (
                  recentEnquiries.map((enq) => (
                    <tr key={enq.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <p className="text-gray-900 font-bold text-sm">{enq.user_name}</p>
                        <p className="text-xs text-gray-400">{enq.user_email}</p>
                      </td>
                      <td className="px-6 py-4 text-xs font-semibold text-[#1565C0]">
                        {enq.package_name}
                      </td>
                      <td className="px-6 py-4">
                        <span 
                          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${
                            enq.status === 'pending'
                              ? 'bg-amber-50 text-amber-700 border border-amber-200'
                              : enq.status === 'contacted'
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : enq.status === 'archived'
                              ? 'bg-gray-100 text-gray-600 border border-gray-200'
                              : 'bg-blue-50 text-blue-700 border border-blue-200'
                          }`}
                        >
                          {enq.status.charAt(0).toUpperCase() + enq.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-xs text-gray-400 whitespace-nowrap">
                        {new Date(enq.created_at).toLocaleDateString(undefined, {
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

        {/* Recently Updated Packages Table */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
          <div className="p-6 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
            <h3 className="font-bold font-heading text-gray-800 flex items-center gap-2">
              <Clock className="w-5 h-5 text-gray-400" />
              Recently Updated Packages
            </h3>
            <Link 
              href="/admin/tour-packages"
              className="text-xs font-bold text-[#1565C0] hover:text-[#0D47A1] transition-colors flex items-center gap-0.5"
            >
              View All Packages
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100 text-xs font-bold uppercase tracking-wider text-gray-500">
                  <th className="px-6 py-3.5">Tour Name</th>
                  <th className="px-6 py-3.5">Destination</th>
                  <th className="px-6 py-3.5">Status</th>
                  <th className="px-6 py-3.5">Updated</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 text-gray-600 font-medium">
                {recentTours.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-8 text-center text-gray-400 text-sm">
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
                      <td className="px-6 py-4 text-xs text-gray-400 whitespace-nowrap">
                        {new Date(tour.updated_at).toLocaleDateString(undefined, {
                          month: 'short',
                          day: 'numeric'
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
    </div>
  );
}
