"use client";

import { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Trash2, 
  Plus, 
  ArrowRight,
  Globe,
  MapPin,
  Clock,
  Compass,
  FileText,
  Image as ImageIcon,
  CheckCircle,
  HelpCircle,
  Loader2,
  Upload
} from 'lucide-react';
import { BASE_PATH, asset } from '@/lib/basePath';
import { toast } from 'sonner';

interface ItineraryDay {
  day: number;
  title: string;
  location: string;
  description: string;
  highlights: string[];
  image: string;
}

interface ThingToDo {
  title: string;
  description: string;
  iconName: string;
}

interface TourPackageFormProps {
  initialData?: any;
  onSubmit: (data: any) => void;
  loading: boolean;
  submitLabel: string;
}

const REGION_OPTIONS = [
  'South Asia',
  'East Asia',
  'Southeast Asia',
  'North America',
  'South America',
  'Middle East',
  'Europe',
  'Africa'
];

const TAG_COLOR_OPTIONS = [
  { label: 'Slate Gray (Corporate)', class: 'bg-slate-600', text: 'text-white' },
  { label: 'Violet (Spiritual)', class: 'bg-violet-500', text: 'text-white' },
  { label: 'Amber (Historical)', class: 'bg-amber-600', text: 'text-white' },
  { label: 'Emerald (City/General)', class: 'bg-emerald-500', text: 'text-white' },
  { label: 'Cyan (Island)', class: 'bg-cyan-500', text: 'text-white' },
  { label: 'Teal (Wellness/Nature)', class: 'bg-teal-500', text: 'text-white' },
  { label: 'Orange (Sports)', class: 'bg-orange-500', text: 'text-white' },
  { label: 'Blue (Beach/Luxury)', class: 'bg-blue-500', text: 'text-white' },
  { label: 'Green (Safari)', class: 'bg-green-600', text: 'text-white' },
  { label: 'Purple (Heritage)', class: 'bg-purple-500', text: 'text-white' }
];

const ICON_OPTIONS = [
  'Camera', 'Utensils', 'Mountain', 'Waves', 'Landmark', 'BookOpen', 
  'Heart', 'Dumbbell', 'GraduationCap', 'Globe', 'MapPin', 'Lightbulb', 
  'Phone', 'Car', 'CheckCircle2', 'Sun', 'Wine', 'Sailboat'
];

export default function TourPackageForm({ initialData, onSubmit, loading, submitLabel }: TourPackageFormProps) {
  // 1. Accordion expansion states
  const [activeTab, setActiveTab] = useState<'basic' | 'facts' | 'itinerary' | 'things' | 'tips-gallery'>('basic');

  // 2. Form states
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('South Asia');
  const [tagline, setTagline] = useState('');
  const [heroImage, setHeroImage] = useState('');
  const [overview, setOverview] = useState('');
  const [coordsLon, setCoordsLon] = useState(0);
  const [coordsLat, setCoordsLat] = useState(0);
  
  // Card meta
  const [tag, setTag] = useState('');
  const [tagColor, setTagColor] = useState('bg-slate-600');
  const [shortDescription, setShortDescription] = useState('');
  const [thumbnailImage, setThumbnailImage] = useState('');
  const [status, setStatus] = useState<'published' | 'draft'>('published');
  const [price, setPrice] = useState('');
  const [duration, setDuration] = useState('');

  // Quick Facts
  const [capital, setCapital] = useState('');
  const [currency, setCurrency] = useState('');
  const [climate, setClimate] = useState('');
  const [bestSeason, setBestSeason] = useState('');
  const [languages, setLanguages] = useState('');
  const [timeZone, setTimeZone] = useState('');
  const [drivingSide, setDrivingSide] = useState('Left');

  // Repeatable Arrays
  const [itinerary, setItinerary] = useState<ItineraryDay[]>([]);
  const [thingsToDo, setThingsToDo] = useState<ThingToDo[]>([]);
  const [travelTips, setTravelTips] = useState<string[]>([]);
  const [gallery, setGallery] = useState<string[]>([]);

  const [uploadingState, setUploadingState] = useState<{ [key: string]: boolean }>({});

  const uploadImageFile = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch(`${BASE_PATH}/api/upload`, {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || 'Upload failed');
    }
    return data.url;
  };

  const handleFileUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string,
    callback: (url: string) => void
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingState((prev) => ({ ...prev, [key]: true }));

    try {
      const url = await uploadImageFile(file);
      callback(url);
      toast.success('Image uploaded successfully!');
    } catch (err: any) {
      console.error(err);
      toast.error(err.message || 'Error uploading file');
    } finally {
      setUploadingState((prev) => ({ ...prev, [key]: false }));
    }
  };

  // Automatically generate slug from name
  useEffect(() => {
    if (!initialData && name) {
      const generated = name
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
      setSlug(generated);
    }
  }, [name, initialData]);

  const [regions, setRegions] = useState<string[]>([]);
  const [loadingRegions, setLoadingRegions] = useState(true);

  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const res = await fetch(`${BASE_PATH}/api/regions`);
        if (!res.ok) throw new Error('Failed to fetch regions');
        const data = await res.json();
        let names = data.map((r: any) => r.name);
        
        if (names.length === 0) {
          names = [...REGION_OPTIONS];
        }
        
        if (initialData?.region && !names.includes(initialData.region)) {
          names.push(initialData.region);
        }
        
        setRegions(names);
        
        if (!initialData && names.length > 0) {
          if (names.includes('South Asia')) {
            setRegion('South Asia');
          } else {
            setRegion(names[0]);
          }
        }
      } catch (err: any) {
        console.error(err);
        const defaults = [...REGION_OPTIONS];
        if (initialData?.region && !defaults.includes(initialData.region)) {
          defaults.push(initialData.region);
        }
        setRegions(defaults);
      } finally {
        setLoadingRegions(false);
      }
    };
    fetchRegions();
  }, [initialData]);

  // Load initial data if editing
  useEffect(() => {
    if (initialData) {
      setName(initialData.name || '');
      setSlug(initialData.slug || '');
      setCountry(initialData.country || '');
      setRegion(initialData.region || 'South Asia');
      setTagline(initialData.tagline || '');
      setHeroImage(initialData.heroImage || initialData.hero_image || '');
      setOverview(initialData.overview || '');
      setCoordsLon(initialData.coords_lon || (initialData.coords ? initialData.coords[0] : 0));
      setCoordsLat(initialData.coords_lat || (initialData.coords ? initialData.coords[1] : 0));
      
      setTag(initialData.tag || '');
      setTagColor(initialData.tagColor || initialData.tag_color || 'bg-slate-600');
      setShortDescription(initialData.shortDescription || initialData.short_description || '');
      setThumbnailImage(initialData.thumbnailImage || initialData.thumbnail_image || '');
      setStatus(initialData.status || 'published');
      setPrice(initialData.price || '');
      setDuration(initialData.duration || '');

      const qf = initialData.quickFacts || {};
      setCapital(qf.capital || '');
      setCurrency(qf.currency || '');
      setClimate(qf.climate || '');
      setBestSeason(qf.bestSeason || '');
      setLanguages(qf.languages || '');
      setTimeZone(qf.timeZone || '');
      setDrivingSide(qf.drivingSide || 'Left');

      setItinerary(initialData.itinerary || []);
      setThingsToDo(initialData.thingsToDo || []);
      setTravelTips(initialData.travelTips || []);
      setGallery(initialData.gallery || []);
    }
  }, [initialData]);

  // 3. Repeatable Array Handlers
  
  // Itinerary
  const addItineraryDay = () => {
    const nextDay = itinerary.length + 1;
    setItinerary([
      ...itinerary,
      {
        day: nextDay,
        title: '',
        location: '',
        description: '',
        highlights: [''],
        image: ''
      }
    ]);
  };

  const removeItineraryDay = (index: number) => {
    const updated = itinerary.filter((_, i) => i !== index).map((day, i) => ({
      ...day,
      day: i + 1 // Re-index day numbers sequentially
    }));
    setItinerary(updated);
  };

  const handleItineraryChange = (index: number, field: keyof ItineraryDay, value: any) => {
    setItinerary(prev => prev.map((day, i) => i === index ? { ...day, [field]: value } : day));
  };

  const addHighlightToDay = (dayIndex: number) => {
    setItinerary(prev => prev.map((day, i) => {
      if (i === dayIndex) {
        return { ...day, highlights: [...day.highlights, ''] };
      }
      return day;
    }));
  };

  const removeHighlightFromDay = (dayIndex: number, hlIndex: number) => {
    setItinerary(prev => prev.map((day, i) => {
      if (i === dayIndex) {
        return { ...day, highlights: day.highlights.filter((_, h) => h !== hlIndex) };
      }
      return day;
    }));
  };

  const handleHighlightChange = (dayIndex: number, hlIndex: number, value: string) => {
    setItinerary(prev => prev.map((day, i) => {
      if (i === dayIndex) {
        const hls = [...day.highlights];
        hls[hlIndex] = value;
        return { ...day, highlights: hls };
      }
      return day;
    }));
  };

  // Things to Do
  const addThingToDo = () => {
    setThingsToDo([...thingsToDo, { title: '', description: '', iconName: 'Camera' }]);
  };

  const removeThingToDo = (index: number) => {
    setThingsToDo(thingsToDo.filter((_, i) => i !== index));
  };

  const handleThingChange = (index: number, field: keyof ThingToDo, value: string) => {
    setThingsToDo(prev => prev.map((thing, i) => i === index ? { ...thing, [field]: value } : thing));
  };

  // Travel Tips
  const addTravelTip = () => {
    setTravelTips([...travelTips, '']);
  };

  const removeTravelTip = (index: number) => {
    setTravelTips(travelTips.filter((_, i) => i !== index));
  };

  const handleTipChange = (index: number, value: string) => {
    const updated = [...travelTips];
    updated[index] = value;
    setTravelTips(updated);
  };

  // Gallery
  const addGalleryImage = () => {
    setGallery([...gallery, '']);
  };

  const removeGalleryImage = (index: number) => {
    setGallery(gallery.filter((_, i) => i !== index));
  };

  const handleGalleryChange = (index: number, value: string) => {
    const updated = [...gallery];
    updated[index] = value;
    setGallery(updated);
  };

  // Form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate
    if (!name || !slug || !country) {
      alert('Please fill out all required fields (Name, Slug, Country).');
      return;
    }

    const payload = {
      name,
      slug,
      country,
      region,
      tagline,
      heroImage,
      overview,
      coords_lon: Number(coordsLon),
      coords_lat: Number(coordsLat),
      tag,
      tagColor,
      shortDescription,
      thumbnailImage,
      status,
      price,
      duration,
      quickFacts: {
        capital: capital || undefined,
        currency,
        climate,
        bestSeason,
        languages,
        timeZone,
        drivingSide: drivingSide || undefined
      },
      // Clean highlights and filter empty strings in arrays
      itinerary: itinerary.map(d => ({
        ...d,
        highlights: d.highlights.filter(h => h.trim() !== '')
      })),
      thingsToDo,
      travelTips: travelTips.filter(t => t.trim() !== ''),
      gallery: gallery.filter(g => g.trim() !== '')
    };

    onSubmit(payload);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl pb-16 font-semibold text-gray-700">
      {/* 1. BASIC INFORMATION TAB */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <button
          type="button"
          onClick={() => setActiveTab(activeTab === 'basic' ? 'facts' : 'basic')}
          className="w-full px-6 py-5 flex items-center justify-between border-b border-gray-50 text-left cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <Compass className="w-5 h-5 text-[#1565C0]" />
            <div>
              <h3 className="text-base font-bold font-heading text-gray-800">1. Basic Information & Card Meta</h3>
              <p className="text-xs text-gray-400 font-medium">Define names, locations, maps, description, pricing, status</p>
            </div>
          </div>
          {activeTab === 'basic' ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
        </button>

        {activeTab === 'basic' && (
          <div className="p-6 space-y-6">
            <div>
              {/* Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Tour Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tokyo Adventures"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none transition-all focus:bg-white focus:border-[#1565C0]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Country */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Country *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Japan"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none transition-all focus:bg-white focus:border-[#1565C0]"
                />
              </div>

              {/* Region */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Region *</label>
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none transition-all focus:bg-white focus:border-[#1565C0] font-semibold text-gray-700"
                >
                  {regions.map(r => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>

              {/* Status */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Status</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value as any)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none transition-all focus:bg-white focus:border-[#1565C0] font-semibold text-gray-700"
                >
                  <option value="published">Published (Visible on site)</option>
                  <option value="draft">Draft (Hidden from public)</option>
                </select>
              </div>
            </div>

            {/* Tagline */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Tagline</label>
              <input
                type="text"
                placeholder="e.g. A volcanic jewel of white and blue, suspended between sea and sky"
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none transition-all focus:bg-white focus:border-[#1565C0]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Hero Image */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Hero Image URL</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="e.g. /images/dest-1.jpg or https://..."
                    value={heroImage}
                    onChange={(e) => setHeroImage(e.target.value)}
                    className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none transition-all focus:bg-white focus:border-[#1565C0]"
                  />
                  <label className="cursor-pointer flex items-center justify-center gap-1.5 px-3 py-2.5 bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-700 rounded-xl text-xs font-bold transition-all flex-shrink-0">
                    {uploadingState['hero'] ? (
                      <Loader2 className="w-4 h-4 animate-spin text-[#1565C0]" />
                    ) : (
                      <Upload className="w-4 h-4 text-gray-500" />
                    )}
                    <span>{uploadingState['hero'] ? 'Uploading...' : 'Upload'}</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleFileUpload(e, 'hero', setHeroImage)}
                      disabled={uploadingState['hero']}
                    />
                  </label>
                </div>
                {heroImage && (
                  <div className="mt-2 relative w-full h-24 rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
                    <img
                      src={heroImage.startsWith('/') ? asset(heroImage) : heroImage}
                      alt="Hero preview"
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => setHeroImage('')}
                      className="absolute top-1 right-1 p-1 bg-black/60 hover:bg-black/80 text-white rounded transition-colors text-[10px] font-bold cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>

              {/* Thumbnail Image */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Thumbnail / Card Image URL</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="e.g. /images/city-2.jpg or https://..."
                    value={thumbnailImage}
                    onChange={(e) => setThumbnailImage(e.target.value)}
                    className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none transition-all focus:bg-white focus:border-[#1565C0]"
                  />
                  <label className="cursor-pointer flex items-center justify-center gap-1.5 px-3 py-2.5 bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-700 rounded-xl text-xs font-bold transition-all flex-shrink-0">
                    {uploadingState['thumbnail'] ? (
                      <Loader2 className="w-4 h-4 animate-spin text-[#1565C0]" />
                    ) : (
                      <Upload className="w-4 h-4 text-gray-500" />
                    )}
                    <span>{uploadingState['thumbnail'] ? 'Uploading...' : 'Upload'}</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleFileUpload(e, 'thumbnail', setThumbnailImage)}
                      disabled={uploadingState['thumbnail']}
                    />
                  </label>
                </div>
                {thumbnailImage && (
                  <div className="mt-2 relative w-full h-24 rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
                    <img
                      src={thumbnailImage.startsWith('/') ? asset(thumbnailImage) : thumbnailImage}
                      alt="Thumbnail preview"
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => setThumbnailImage('')}
                      className="absolute top-1 right-1 p-1 bg-black/60 hover:bg-black/80 text-white rounded transition-colors text-[10px] font-bold cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Overview */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Overview Description</label>
              <textarea
                rows={5}
                placeholder="Detailed summary displayed in details tab..."
                value={overview}
                onChange={(e) => setOverview(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none transition-all focus:bg-white focus:border-[#1565C0] font-normal"
              />
            </div>

            <div className="h-px bg-gray-100 my-2" />
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#1565C0] mb-2">Map & Card Coordinates</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Map Longitude */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Longitude Coords</label>
                <input
                  type="number"
                  step="any"
                  placeholder="e.g. 139.69"
                  value={coordsLon || ''}
                  onChange={(e) => setCoordsLon(Number(e.target.value))}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none transition-all focus:bg-white focus:border-[#1565C0]"
                />
              </div>

              {/* Map Latitude */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Latitude Coords</label>
                <input
                  type="number"
                  step="any"
                  placeholder="e.g. 35.69"
                  value={coordsLat || ''}
                  onChange={(e) => setCoordsLat(Number(e.target.value))}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none transition-all focus:bg-white focus:border-[#1565C0]"
                />
              </div>
            </div>

            <div className="h-px bg-gray-100 my-2" />
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#1565C0] mb-2">Card Metadata & Info</h4>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Duration */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Duration</label>
                <input
                  type="text"
                  placeholder="e.g. 5 Days"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none transition-all focus:bg-white focus:border-[#1565C0]"
                />
              </div>

              {/* Price */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Price String</label>
                <input
                  type="text"
                  placeholder="e.g. $1,200 or ₹95,000"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none transition-all focus:bg-white focus:border-[#1565C0]"
                />
              </div>

              {/* Tag Label */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Category Tag</label>
                <input
                  type="text"
                  placeholder="e.g. Spiritual, Sports"
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none transition-all focus:bg-white focus:border-[#1565C0]"
                />
              </div>

              {/* Tag Color Class */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Tag Theme Color</label>
                <select
                  value={tagColor}
                  onChange={(e) => setTagColor(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none transition-all focus:bg-white focus:border-[#1565C0] font-semibold text-gray-700"
                >
                  {TAG_COLOR_OPTIONS.map(opt => (
                    <option key={opt.class} value={opt.class}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Short Description */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Short Description (For map cards)</label>
              <textarea
                rows={3}
                placeholder="Brief summary displayed on the map card tooltip..."
                value={shortDescription}
                onChange={(e) => setShortDescription(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none transition-all focus:bg-white focus:border-[#1565C0] font-normal"
              />
            </div>
          </div>
        )}
      </div>

      {/* 2. QUICK FACTS TAB */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <button
          type="button"
          onClick={() => setActiveTab(activeTab === 'facts' ? 'itinerary' : 'facts')}
          className="w-full px-6 py-5 flex items-center justify-between border-b border-gray-50 text-left cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <Globe className="w-5 h-5 text-[#1565C0]" />
            <div>
              <h3 className="text-base font-bold font-heading text-gray-800">2. Quick Facts</h3>
              <p className="text-xs text-gray-400 font-medium">Define currency, season, languages, time zones</p>
            </div>
          </div>
          {activeTab === 'facts' ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
        </button>

        {activeTab === 'facts' && (
          <div className="p-6 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Capital */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Capital City</label>
                <input
                  type="text"
                  placeholder="e.g. Tokyo (national capital)"
                  value={capital}
                  onChange={(e) => setCapital(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none transition-all focus:bg-white focus:border-[#1565C0]"
                />
              </div>

              {/* Currency */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Currency Name & Symbol</label>
                <input
                  type="text"
                  placeholder="e.g. Japanese Yen (¥)"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none transition-all focus:bg-white focus:border-[#1565C0]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Climate */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Climate Summary</label>
                <input
                  type="text"
                  placeholder="e.g. Humid subtropical; warm summers"
                  value={climate}
                  onChange={(e) => setClimate(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none transition-all focus:bg-white focus:border-[#1565C0]"
                />
              </div>

              {/* Best Season */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Best Travel Season</label>
                <input
                  type="text"
                  placeholder="e.g. March–May (spring)"
                  value={bestSeason}
                  onChange={(e) => setBestSeason(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none transition-all focus:bg-white focus:border-[#1565C0]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Languages */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Languages Spoken</label>
                <input
                  type="text"
                  placeholder="e.g. Japanese"
                  value={languages}
                  onChange={(e) => setLanguages(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none transition-all focus:bg-white focus:border-[#1565C0]"
                />
              </div>

              {/* Time Zone */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Time Zone</label>
                <input
                  type="text"
                  placeholder="e.g. JST (UTC+9)"
                  value={timeZone}
                  onChange={(e) => setTimeZone(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none transition-all focus:bg-white focus:border-[#1565C0]"
                />
              </div>

              {/* Driving Side */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Driving Side</label>
                <select
                  value={drivingSide}
                  onChange={(e) => setDrivingSide(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none transition-all focus:bg-white focus:border-[#1565C0] font-semibold text-gray-700"
                >
                  <option value="Left">Left</option>
                  <option value="Right">Right</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 3. ITINERARY TAB */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <button
          type="button"
          onClick={() => setActiveTab(activeTab === 'itinerary' ? 'things' : 'itinerary')}
          className="w-full px-6 py-5 flex items-center justify-between border-b border-gray-50 text-left cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-[#1565C0]" />
            <div>
              <h3 className="text-base font-bold font-heading text-gray-800">3. Itinerary (Days Scheduler)</h3>
              <p className="text-xs text-gray-400 font-medium">Add, remove, and configure day schedules and lists of highlights</p>
            </div>
          </div>
          {activeTab === 'itinerary' ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
        </button>

        {activeTab === 'itinerary' && (
          <div className="p-6 space-y-6">
            {itinerary.length === 0 ? (
              <div className="text-center py-8 text-gray-400 border-2 border-dashed border-gray-100 rounded-2xl">
                <p className="font-semibold text-sm">No days configured. Click button below to start building itinerary.</p>
              </div>
            ) : (
              <div className="space-y-6 divide-y divide-gray-100">
                {itinerary.map((day, dIdx) => (
                  <div key={dIdx} className={`${dIdx > 0 ? 'pt-6' : ''} space-y-4`}>
                    <div className="flex justify-between items-center bg-gray-50 p-3 rounded-xl">
                      <h4 className="text-sm font-bold text-[#1565C0]">Day {day.day} Configuration</h4>
                      <button
                        type="button"
                        onClick={() => removeItineraryDay(dIdx)}
                        className="p-1.5 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-lg transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Day Title */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Day Title *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Explore Traditional Asakusa"
                          value={day.title}
                          onChange={(e) => handleItineraryChange(dIdx, 'title', e.target.value)}
                          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none transition-all focus:bg-white focus:border-[#1565C0]"
                        />
                      </div>

                      {/* Day Location */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Location *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Asakusa, Tokyo"
                          value={day.location}
                          onChange={(e) => handleItineraryChange(dIdx, 'location', e.target.value)}
                          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none transition-all focus:bg-white focus:border-[#1565C0]"
                        />
                      </div>
                    </div>

                    {/* Day Image */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Day Image URL</label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="e.g. /images/tour-1.jpg or https://..."
                          value={day.image}
                          onChange={(e) => handleItineraryChange(dIdx, 'image', e.target.value)}
                          className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none transition-all focus:bg-white focus:border-[#1565C0]"
                        />
                        <label className="cursor-pointer flex items-center justify-center gap-1.5 px-3 py-2.5 bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-700 rounded-xl text-xs font-bold transition-all flex-shrink-0">
                          {uploadingState[`day-${dIdx}`] ? (
                            <Loader2 className="w-4 h-4 animate-spin text-[#1565C0]" />
                          ) : (
                            <Upload className="w-4 h-4 text-gray-500" />
                          )}
                          <span>{uploadingState[`day-${dIdx}`] ? 'Uploading...' : 'Upload'}</span>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handleFileUpload(e, `day-${dIdx}`, (url) => handleItineraryChange(dIdx, 'image', url))}
                            disabled={uploadingState[`day-${dIdx}`]}
                          />
                        </label>
                      </div>
                      {day.image && (
                        <div className="mt-2 relative w-full h-24 rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
                          <img
                            src={day.image.startsWith('/') ? asset(day.image) : day.image}
                            alt={`Day ${day.day} preview`}
                            className="w-full h-full object-cover"
                          />
                          <button
                            type="button"
                            onClick={() => handleItineraryChange(dIdx, 'image', '')}
                            className="absolute top-1 right-1 p-1 bg-black/60 hover:bg-black/80 text-white rounded transition-colors text-[10px] font-bold cursor-pointer"
                          >
                            Remove
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Day Description */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Day Description</label>
                      <textarea
                        rows={3}
                        placeholder="Detailed itinerary schedule description..."
                        value={day.description}
                        onChange={(e) => handleItineraryChange(dIdx, 'description', e.target.value)}
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none transition-all focus:bg-white focus:border-[#1565C0] font-normal"
                      />
                    </div>

                    {/* Day Highlights */}
                    <div className="space-y-3 pt-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500">Day Highlights / Activities</label>
                      <div className="space-y-2">
                        {day.highlights.map((hl, hlIdx) => (
                          <div key={hlIdx} className="flex gap-2 items-center">
                            <input
                              type="text"
                              placeholder="e.g. Take a rickshaw tour near Sensoji temple"
                              value={hl}
                              onChange={(e) => handleHighlightChange(dIdx, hlIdx, e.target.value)}
                              className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs outline-none transition-all focus:bg-white focus:border-[#1565C0] font-semibold text-gray-600"
                            />
                            <button
                              type="button"
                              onClick={() => removeHighlightFromDay(dIdx, hlIdx)}
                              className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>
                      <button
                        type="button"
                        onClick={() => addHighlightToDay(dIdx)}
                        className="inline-flex items-center gap-1.5 text-xs text-[#1565C0] hover:text-[#0D47A1] font-bold mt-1.5 cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" /> Add Highlight
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <button
              type="button"
              onClick={addItineraryDay}
              className="w-full py-3 border-2 border-dashed border-[#1565C0]/30 hover:border-[#1565C0] text-[#1565C0] text-sm font-bold rounded-2xl flex items-center justify-center gap-2 transition-all hover:bg-[#1565C0]/5 cursor-pointer"
            >
              <Plus className="w-4 h-4" /> Add Itinerary Day
            </button>
          </div>
        )}
      </div>

      {/* 4. THINGS TO DO TAB */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <button
          type="button"
          onClick={() => setActiveTab(activeTab === 'things' ? 'tips-gallery' : 'things')}
          className="w-full px-6 py-5 flex items-center justify-between border-b border-gray-50 text-left cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-[#1565C0]" />
            <div>
              <h3 className="text-base font-bold font-heading text-gray-800">4. Things to Do (Key Experiences)</h3>
              <p className="text-xs text-gray-400 font-medium">Add key activities and associate them with icons</p>
            </div>
          </div>
          {activeTab === 'things' ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
        </button>

        {activeTab === 'things' && (
          <div className="p-6 space-y-6">
            {thingsToDo.length === 0 ? (
              <div className="text-center py-8 text-gray-400 border-2 border-dashed border-gray-100 rounded-2xl">
                <p className="font-semibold text-sm">No experiences configured. Click button below to add things to do.</p>
              </div>
            ) : (
              <div className="space-y-6 divide-y divide-gray-100">
                {thingsToDo.map((thing, idx) => (
                  <div key={idx} className={`${idx > 0 ? 'pt-6' : ''} space-y-4`}>
                    <div className="flex justify-between items-center bg-gray-50 p-2.5 rounded-xl">
                      <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#1565C0]">Experience #{idx + 1}</h4>
                      <button
                        type="button"
                        onClick={() => removeThingToDo(idx)}
                        className="p-1.5 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-lg transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Experience Title */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Experience Title *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Sushi Omakase Experience"
                          value={thing.title}
                          onChange={(e) => handleThingChange(idx, 'title', e.target.value)}
                          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none transition-all focus:bg-white focus:border-[#1565C0]"
                        />
                      </div>

                      {/* Icon selector */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Icon Representation</label>
                        <select
                          value={thing.iconName}
                          onChange={(e) => handleThingChange(idx, 'iconName', e.target.value)}
                          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none transition-all focus:bg-white focus:border-[#1565C0] font-semibold text-gray-700"
                        >
                          {ICON_OPTIONS.map((icon) => (
                            <option key={icon} value={icon}>{icon}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Experience Description */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Experience Description</label>
                      <textarea
                        rows={2}
                        placeholder="Brief summary of the experience activity..."
                        value={thing.description}
                        onChange={(e) => handleThingChange(idx, 'description', e.target.value)}
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none transition-all focus:bg-white focus:border-[#1565C0] font-normal"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            <button
              type="button"
              onClick={addThingToDo}
              className="w-full py-3 border-2 border-dashed border-[#1565C0]/30 hover:border-[#1565C0] text-[#1565C0] text-sm font-bold rounded-2xl flex items-center justify-center gap-2 transition-all hover:bg-[#1565C0]/5 cursor-pointer"
            >
              <Plus className="w-4 h-4" /> Add Experience (Thing to Do)
            </button>
          </div>
        )}
      </div>

      {/* 5. TRAVEL TIPS & GALLERY TAB */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <button
          type="button"
          onClick={() => setActiveTab(activeTab === 'tips-gallery' ? 'basic' : 'tips-gallery')}
          className="w-full px-6 py-5 flex items-center justify-between border-b border-gray-50 text-left cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <HelpCircle className="w-5 h-5 text-[#1565C0]" />
            <div>
              <h3 className="text-base font-bold font-heading text-gray-800">5. Travel Tips & Photo Gallery</h3>
              <p className="text-xs text-gray-400 font-medium">Add general tips and list additional images</p>
            </div>
          </div>
          {activeTab === 'tips-gallery' ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
        </button>

        {activeTab === 'tips-gallery' && (
          <div className="p-6 space-y-6">
            {/* Travel Tips */}
            <div className="space-y-4">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#1565C0]">Travel Tips (List)</h4>
              <div className="space-y-2">
                {travelTips.map((tip, idx) => (
                  <div key={idx} className="flex gap-2 items-center">
                    <input
                      type="text"
                      placeholder="e.g. Purchase an unlimited rail pass before landing"
                      value={tip}
                      onChange={(e) => handleTipChange(idx, e.target.value)}
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs outline-none transition-all focus:bg-white focus:border-[#1565C0] font-semibold text-gray-600"
                    />
                    <button
                      type="button"
                      onClick={() => removeTravelTip(idx)}
                      className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={addTravelTip}
                className="inline-flex items-center gap-1.5 text-xs text-[#1565C0] hover:text-[#0D47A1] font-bold cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" /> Add Travel Tip
              </button>
            </div>

            <div className="h-px bg-gray-100" />

            {/* Gallery */}
            <div className="space-y-4">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#1565C0]">Photo Gallery</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {gallery.map((url, idx) => (
                  <div key={idx} className="p-3 border border-gray-100 bg-gray-50/50 rounded-xl space-y-2">
                    <div className="flex gap-2 items-center">
                      <input
                        type="text"
                        placeholder="Image URL or upload a file"
                        value={url}
                        onChange={(e) => handleGalleryChange(idx, e.target.value)}
                        className="flex-1 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs outline-none transition-all focus:bg-white focus:border-[#1565C0] font-semibold text-gray-600"
                      />
                      <label className="cursor-pointer flex items-center justify-center p-1.5 bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-700 rounded-lg text-xs transition-all flex-shrink-0">
                        {uploadingState[`gallery-${idx}`] ? (
                          <Loader2 className="w-3.5 h-3.5 animate-spin text-[#1565C0]" />
                        ) : (
                          <Upload className="w-3.5 h-3.5 text-gray-500" />
                        )}
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleFileUpload(e, `gallery-${idx}`, (uploadedUrl) => handleGalleryChange(idx, uploadedUrl))}
                          disabled={uploadingState[`gallery-${idx}`]}
                        />
                      </label>
                      <button
                        type="button"
                        onClick={() => removeGalleryImage(idx)}
                        className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    {url && (
                      <div className="relative w-full h-24 rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
                        <img
                          src={url.startsWith('/') ? asset(url) : url}
                          alt={`Gallery image ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => handleGalleryChange(idx, '')}
                          className="absolute top-1 right-1 p-1 bg-black/60 hover:bg-black/80 text-white rounded transition-colors text-[10px] font-bold cursor-pointer"
                        >
                          Clear
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={addGalleryImage}
                className="inline-flex items-center gap-1.5 text-xs text-[#1565C0] hover:text-[#0D47A1] font-bold cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" /> Add Photo to Gallery
              </button>
            </div>
          </div>
        )}
      </div>

      {/* SUBMIT BUTTON */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#1565C0] hover:bg-[#0D47A1] disabled:bg-gray-300 text-white font-semibold py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-sm transition-all hover:shadow-[0_4px_12px_rgba(21,101,192,0.2)]"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Saving Changes...
          </>
        ) : (
          <>
            {submitLabel}
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
