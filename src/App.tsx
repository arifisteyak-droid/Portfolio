import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';
import {
  Search,
  Settings,
  FileText,
  Link as LinkIcon,
  Youtube,
  Facebook,
  TrendingUp,
  ShieldCheck,
  BarChart3,
  Mail,
  ArrowRight,
  CheckCircle2,
  Globe,
  Zap,
  Instagram
} from 'lucide-react';

// --- Types ---
interface Service {
  title: string;
  description: string;
  outcomes: string[];
  icon: React.ReactNode;
  primary?: boolean;
}

interface CaseStudy {
  client: string;
  metric: string;
  growth: string;
  description: string;
}

// --- Components ---

const Navbar = ({ profileImage }: { profileImage: string }) => (
  <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full overflow-hidden border border-black/5">
          <img src={profileImage} alt="Avatar" className="w-full h-full object-cover" />
        </div>
        <div className="text-xl font-serif font-bold tracking-tighter">MD ARIF ISTEYAK</div>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
        <a href="#services" className="hover:opacity-60 transition-opacity">Services</a>
        <a href="#portfolio" className="hover:opacity-60 transition-opacity">Portfolio</a>
        <a href="#results" className="hover:opacity-60 transition-opacity">Results</a>
        <a href="#process" className="hover:opacity-60 transition-opacity">Process</a>
        <a href="#contact" className="bg-black text-white px-6 py-3 rounded-full hover:bg-black/80 transition-colors">Consultation</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-black/[0.02] -skew-x-12 transform translate-x-1/4" />
    </div>
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
      <div className="md:col-span-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase mb-6 text-black/50">
            International SEO Consultant
          </span>
          <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-6 tracking-tight">
            Driving Scalable Organic Growth for USA & UK Brands
          </h1>
          <p className="text-lg md:text-xl text-black/60 mb-12 max-w-2xl leading-relaxed">
            Hello, I'm Md Arif Isteyak. Freelancer and Digital Marketer.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="#contact"
              className="bg-black text-white px-10 py-5 rounded-full text-lg font-medium hover:scale-105 transition-transform flex items-center justify-center gap-2 group"
            >
              Request Strategy Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#results"
              className="border border-black/10 px-10 py-5 rounded-full text-lg font-medium hover:bg-black/5 transition-colors flex items-center justify-center"
            >
              View Case Studies
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Positioning = ({ profileImage, onImageChange }: { profileImage: string, onImageChange: (url: string) => void }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageChange(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="section-padding bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 group">
              <img
                src={profileImage}
                alt="Md Arif Isteyak"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              {/* Upload Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm">
                <label className="cursor-pointer bg-white text-black px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  Change Photo
                  <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                </label>
              </div>
            </div>
          </motion.div>
          <div className="lg:col-span-7 space-y-12">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              A Growth Partner, <br />
              <span className="text-white/50">Not Just a Specialist.</span>
            </h2>
            <div className="h-px w-24 bg-white/20" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-lg text-white/70 leading-relaxed"
          >
            <p>
              My name is <span className="text-white font-medium">Md Arif Isteyak</span>, and I am a dedicated SEO Specialist with over 2 years of hands-on experience in search engine optimization and digital marketing. I specialize in helping businesses improve their online visibility, increase organic traffic, and achieve sustainable growth through strategic SEO solutions.
            </p>
            <p>
              Over the past two years, I have worked on website SEO, on-page optimization, off-page authority building, WordPress SEO, YouTube video SEO, and Facebook Ads campaigns. My approach is data-driven, focused on delivering measurable results rather than just rankings.
            </p>
            <p>
              I follow ethical white-hat SEO techniques and stay updated with the latest search engine algorithm changes to ensure long-term performance and stability for my clients. My goal is to help businesses in competitive markets like the USA and UK grow their digital presence and generate real revenue through smart SEO strategies.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
  );
};

const Services = () => {
  const services: Service[] = [
    {
      title: "Advanced Website SEO Strategy",
      description: "A comprehensive roadmap designed to dominate your niche through data-backed insights.",
      outcomes: ["Sustainable ranking dominance", "Market share expansion", "Competitor displacement"],
      icon: <Globe className="w-8 h-8" />,
      primary: true
    },
    {
      title: "Technical SEO",
      description: "Ensuring your site architecture is flawless for both search crawlers and high-intent users.",
      outcomes: ["Faster crawl rates", "Improved Core Web Vitals", "Zero indexing issues"],
      icon: <Settings className="w-8 h-8" />,
      primary: true
    },
    {
      title: "On-Page SEO Optimization",
      description: "Precision content and structure optimization to maximize relevance and conversion.",
      outcomes: ["Higher CTR", "Increased dwell time", "Better user experience"],
      icon: <FileText className="w-8 h-8" />,
      primary: true
    },
    {
      title: "High-Authority Off-Page SEO",
      description: "Building the digital reputation and authority your brand needs to rank for high-value terms.",
      outcomes: ["Premium backlink profile", "Brand authority growth", "Trust signal enhancement"],
      icon: <LinkIcon className="w-8 h-8" />,
      primary: true
    },
    {
      title: "WordPress SEO",
      description: "Specialized optimization for the world's most popular CMS to drive maximum performance.",
      outcomes: ["Optimized plugin stack", "Clean code structure", "Rapid content scaling"],
      icon: <Zap className="w-8 h-8" />,
      primary: true
    },
    {
      title: "YouTube Video SEO",
      description: "Leveraging the world's second-largest search engine to build brand awareness and traffic.",
      outcomes: ["Video ranking dominance", "Brand visibility growth", "Cross-platform synergy"],
      icon: <Youtube className="w-8 h-8" />,
      primary: true
    }
  ];

  const secondaryServices = [
    { title: "Full YouTube Channel SEO", icon: <Youtube className="w-5 h-5" />, url: "https://www.youtube.com/@AILovesAnimals-A2rt" },
    { title: "Facebook Ads Strategy", icon: <Facebook className="w-5 h-5" />, url: "https://www.facebook.com/mai.arif.isteyak.2024" }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-xs font-bold tracking-widest uppercase text-black/40">Core Expertise</span>
          <h2 className="text-5xl font-serif mt-4">Outcome-Focused Solutions</h2>
        </div>
       
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 border border-black/5 hover:border-black/20 transition-all group"
            >
              <div className="mb-8 text-black group-hover:scale-110 transition-transform origin-left">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
              <p className="text-black/60 mb-8 leading-relaxed">{service.description}</p>
              <ul className="space-y-3">
                {service.outcomes.map((outcome, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-black/30" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 pt-12 border-t border-black/5 flex flex-wrap gap-8 items-center justify-center">
          <span className="text-sm font-bold uppercase tracking-widest text-black/40">Secondary Services:</span>
          {secondaryServices.map((s, i) => (
            <a
              key={i}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium bg-black/5 px-6 py-3 rounded-full hover:bg-black/10 transition-colors"
            >
              {s.icon}
              {s.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const trafficData = [
    { name: 'Jan', traffic: 4000 },
    { name: 'Feb', traffic: 3000 },
    { name: 'Mar', traffic: 5000 },
    { name: 'Apr', traffic: 4500 },
    { name: 'May', traffic: 6000 },
    { name: 'Jun', traffic: 8500 },
  ];

  const backlinkData = [
    { name: 'W1', count: 20 },
    { name: 'W2', count: 35 },
    { name: 'W3', count: 30 },
    { name: 'W4', count: 55 },
    { name: 'W5', count: 45 },
    { name: 'W6', count: 70 },
  ];

  const adsData = [
    { name: 'Mon', roi: 2.4 },
    { name: 'Tue', roi: 3.1 },
    { name: 'Wed', roi: 2.8 },
    { name: 'Thu', roi: 4.2 },
    { name: 'Fri', roi: 3.9 },
    { name: 'Sat', roi: 5.1 },
    { name: 'Sun', roi: 4.8 },
  ];

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-blue-600 mb-4 block">Portfolio</span>
          <h2 className="text-5xl font-serif mb-6">Selected SEO & Digital Growth Projects</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1: Website SEO Optimization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-black/5 shadow-xl shadow-black/5 overflow-hidden group"
          >
            <div className="p-6 border-b border-black/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm">Website SEO Optimization</h3>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-green-500 bg-green-50 px-2 py-1 rounded">+112% Growth</span>
            </div>
            <div className="p-6 h-48 bg-slate-50">
              <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                <AreaChart data={trafficData}>
                  <defs>
                    <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Area type="monotone" dataKey="traffic" stroke="#2563eb" strokeWidth={2} fillOpacity={1} fill="url(#colorTraffic)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-black/40">Organic Traffic</span>
                <span className="text-blue-600">8.5k / mo</span>
              </div>
              <div className="w-full bg-black/5 h-1.5 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full w-[85%]" />
              </div>
            </div>
          </motion.div>

          {/* Project 2: On-Page SEO Strategy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl border border-black/5 shadow-xl shadow-black/5 overflow-hidden"
          >
            <div className="p-6 border-b border-black/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm">On-Page SEO Strategy</h3>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-1 rounded">Score: 98/100</span>
            </div>
            <div className="p-8 bg-slate-50 h-48 flex flex-col justify-center gap-4">
              <div className="flex items-center gap-4 bg-white p-3 rounded-xl border border-black/5 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="h-2 w-24 bg-black/5 rounded-full mb-2" />
                  <div className="h-1.5 w-16 bg-black/5 rounded-full" />
                </div>
                <div className="text-[10px] font-bold text-green-600">OPTIMIZED</div>
              </div>
              <div className="flex items-center gap-4 bg-white p-3 rounded-xl border border-black/5 shadow-sm opacity-60">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="h-2 w-20 bg-black/5 rounded-full mb-2" />
                  <div className="h-1.5 w-12 bg-black/5 rounded-full" />
                </div>
                <div className="text-[10px] font-bold text-green-600">OPTIMIZED</div>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-blue-50 rounded-xl">
                  <div className="text-lg font-bold text-blue-600">98%</div>
                  <div className="text-[10px] uppercase font-bold text-blue-600/60">Health</div>
                </div>
                <div className="text-center p-3 bg-black/5 rounded-xl">
                  <div className="text-lg font-bold">0.8s</div>
                  <div className="text-[10px] uppercase font-bold text-black/40">LCP</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 3: Off-Page Authority Building */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl border border-black/5 shadow-xl shadow-black/5 overflow-hidden"
          >
            <div className="p-6 border-b border-black/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                  <LinkIcon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm">Off-Page Authority</h3>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-1 rounded">DA: 45</span>
            </div>
            <div className="p-6 h-48 bg-slate-50">
              <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                <BarChart data={backlinkData}>
                  <Bar dataKey="count" fill="#2563eb" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-black/40 uppercase tracking-widest">Top Referrers</span>
                <span className="text-xs font-bold text-blue-600">View All</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded bg-black/5" />
                  <div className="h-2 flex-1 bg-black/5 rounded-full" />
                  <div className="text-[10px] font-bold">DR 80</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded bg-black/5" />
                  <div className="h-2 flex-1 bg-black/5 rounded-full" />
                  <div className="text-[10px] font-bold">DR 72</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 4: YouTube Video SEO Growth */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl border border-black/5 shadow-xl shadow-black/5 overflow-hidden"
          >
            <div className="p-6 border-b border-black/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-50 rounded-lg text-red-600">
                  <Youtube className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm">YouTube Video SEO</h3>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-red-600 bg-red-50 px-2 py-1 rounded">Viral Growth</span>
            </div>
            <div className="p-6 bg-slate-900 h-48 relative flex items-center justify-center">
              <div className="absolute top-4 left-4 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <div className="text-[8px] font-bold text-white uppercase tracking-widest">Live Stats</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-1 tracking-tighter">42.5k</div>
                <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Views This Week</div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600/20">
                <div className="h-full bg-red-600 w-[65%]" />
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="aspect-video bg-black/5 rounded-lg overflow-hidden relative">
                    <div className="absolute bottom-1 right-1 bg-black/80 text-[6px] text-white px-1 rounded">12:04</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-[10px] font-bold text-black/40 uppercase tracking-widest">Watch Time</span>
                <span className="text-[10px] font-bold text-green-500">+24%</span>
              </div>
            </div>
          </motion.div>

          {/* Project 5: Facebook Ads Campaign Management */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl border border-black/5 shadow-xl shadow-black/5 overflow-hidden"
          >
            <div className="p-6 border-b border-black/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                  <Facebook className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm">Facebook Ads Campaign</h3>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-1 rounded">ROAS: 4.8x</span>
            </div>
            <div className="p-6 h-48 bg-slate-50">
              <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                <BarChart data={adsData}>
                  <Bar dataKey="roi" fill="#2563eb" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold">3.2%</div>
                  <div className="text-[8px] font-bold text-black/40 uppercase tracking-widest">Avg CTR</div>
                </div>
                <div className="w-px h-8 bg-black/5" />
                <div className="text-center">
                  <div className="text-lg font-bold">$0.42</div>
                  <div className="text-[8px] font-bold text-black/40 uppercase tracking-widest">Avg CPC</div>
                </div>
                <div className="w-px h-8 bg-black/5" />
                <div className="text-center">
                  <div className="text-lg font-bold">4.8x</div>
                  <div className="text-[8px] font-bold text-black/40 uppercase tracking-widest">ROAS</div>
                </div>
              </div>
              <button className="w-full py-2 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg hover:bg-blue-700 transition-colors">
                View Campaign Report
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Results = () => {
  const cases: CaseStudy[] = [
    {
      client: "SaaS Enterprise (UK)",
      metric: "Organic Revenue",
      growth: "+142%",
      description: "Complete technical overhaul and content strategy for a competitive B2B market."
    },
    {
      client: "eCommerce Brand (USA)",
      metric: "Keyword Rankings",
      growth: "+310%",
      description: "Dominating high-intent commercial keywords through authority building."
    },
    {
      client: "Global Agency Partner",
      metric: "Qualified Traffic",
      growth: "+85%",
      description: "Scaleable SEO systems implemented across multiple service verticals."
    }
  ];

  return (
    <section id="results" className="section-padding bg-black/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-serif mb-6">Measurable Impact</h2>
          <p className="text-xl text-black/60 max-w-2xl mx-auto">
            Real data from competitive markets. We focus on ROI, not vanity metrics.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-12 shadow-2xl shadow-black/5 border border-black/5"
            >
              <div className="text-sm font-bold uppercase tracking-widest text-black/40 mb-2">{c.client}</div>
              <div className="text-6xl font-serif mb-4 tracking-tighter">{c.growth}</div>
              <div className="text-lg font-medium mb-6">{c.metric} Growth</div>
              <p className="text-black/60 leading-relaxed">{c.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { title: "Deep SEO Audit & Market Analysis", desc: "Uncovering hidden opportunities and competitor weaknesses." },
    { title: "Custom Growth Strategy Development", desc: "A bespoke roadmap aligned with your specific business goals." },
    { title: "Technical & Content Optimization", desc: "Building a rock-solid foundation for sustainable scaling." },
    { title: "Authority Building & Scaling", desc: "Aggressive growth through high-level off-page systems." },
    { title: "Reporting & Continuous Optimization", desc: "Data-driven refinement to maintain market dominance." }
  ];

  return (
    <section id="process" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-4">
            <h2 className="text-5xl font-serif mb-8 sticky top-32">The Strategic <br />Framework</h2>
          </div>
          <div className="lg:col-span-8 space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex gap-8 group"
              >
                <div className="text-4xl font-serif text-black/10 group-hover:text-black transition-colors">0{i + 1}</div>
                <div>
                  <h3 className="text-2xl font-serif mb-4">{step.title}</h3>
                  <p className="text-lg text-black/60 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyMe = () => {
  const points = [
    { title: "USA & UK Market Understanding", icon: <Globe className="w-6 h-6" /> },
    { title: "White Hat & Algorithm-Safe", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "Transparent Reporting", icon: <BarChart3 className="w-6 h-6" /> },
    { title: "Strategic Growth Partner", icon: <TrendingUp className="w-6 h-6" /> },
    { title: "Focus on ROI", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  return (
    <section className="section-padding bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-serif mb-6">Why Partner With Me?</h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            I operate as an extension of your team, focused on the metrics that matter.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {points.map((p, i) => (
            <div key={i} className="p-8 border border-white/10 text-center space-y-4 hover:bg-white/5 transition-colors">
              <div className="flex justify-center text-white/40">{p.icon}</div>
              <h3 className="text-sm font-bold uppercase tracking-widest">{p.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-5xl font-serif mb-8">Let's Discuss Your Growth</h2>
          <p className="text-xl text-black/60 mb-12 leading-relaxed">
            I maintain a limited client intake to ensure every project receives the strategic depth it requires. Serious inquiries only.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-black/40">Direct Email</div>
                <div className="text-lg font-medium">arifisteyak@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
       
        <div className="bg-black/[0.02] p-10 md:p-16 border border-black/5">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <CheckCircle2 className="w-16 h-16 mx-auto mb-6 text-black" />
              <h3 className="text-3xl font-serif mb-4">Inquiry Received</h3>
              <p className="text-black/60">I will review your request and get back to you within 24-48 hours.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest">Full Name</label>
                  <input required type="text" className="w-full bg-transparent border-b border-black/20 py-3 focus:border-black outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest">Work Email</label>
                  <input required type="email" className="w-full bg-transparent border-b border-black/20 py-3 focus:border-black outline-none transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest">Company / Website</label>
                <input required type="text" className="w-full bg-transparent border-b border-black/20 py-3 focus:border-black outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest">Message / Growth Goals</label>
                <textarea required rows={4} className="w-full bg-transparent border-b border-black/20 py-3 focus:border-black outline-none transition-colors resize-none" />
              </div>
              <button type="submit" className="w-full bg-black text-white py-5 rounded-full font-medium hover:scale-[1.02] transition-transform">
                Send Strategy Inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 px-6 border-t border-black/5">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="text-lg font-serif font-bold tracking-tighter">MD ARIF ISTEYAK</div>
      <div className="text-sm text-black/40 font-medium">
        © {new Date().getFullYear()} MD Arif Isteyak. All Rights Reserved.
      </div>
      <div className="flex gap-6">
        <a href="https://www.facebook.com/mai.arif.isteyak.2024" target="_blank" rel="noopener noreferrer" className="text-black/40 hover:text-black transition-colors"><Facebook className="w-5 h-5" /></a>
        <a href="https://www.youtube.com/@AILovesAnimals-A2rt" target="_blank" rel="noopener noreferrer" className="text-black/40 hover:text-black transition-colors"><Youtube className="w-5 h-5" /></a>
        <a href="https://www.instagram.com/maiarifisteyak/" target="_blank" rel="noopener noreferrer" className="text-black/40 hover:text-black transition-colors"><Instagram className="w-5 h-5" /></a>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [profileImage, setProfileImage] = useState("https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop");

  return (
    <div className="selection:bg-black selection:text-white font-sans">
      <Navbar profileImage={profileImage} />
      <main>
        <Hero />
        <Positioning profileImage={profileImage} onImageChange={setProfileImage} />
        <Services />
        <Portfolio />
        <Results />
        <Process />
        <WhyMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
