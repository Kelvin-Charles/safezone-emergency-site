import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { updateSEO } from '../utils/SEO';

const services = [
  {
    id: 'seo',
    icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
    title: 'Search Engine Optimization (SEO)',
    tagline: 'Rank higher. Get found. Grow organically.',
    gradient: 'from-blue-500 to-primary',
    bg: 'from-blue-50 to-indigo-50',
    border: 'border-blue-200',
    badge: 'bg-blue-100 text-blue-700',
    description:
      'We optimize your website so it appears at the top of Google search results when potential customers are looking for your services. Our SEO strategies are built for long-term, sustainable growth — not quick tricks that fade.',
    features: [
      { icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2', label: 'Keyword Research & Strategy', desc: 'Find the exact words your customers use to search for your products' },
      { icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', label: 'Technical SEO', desc: 'Fix site speed, mobile-friendliness, crawlability and indexing issues' },
      { icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', label: 'On-Page Optimization', desc: 'Optimize titles, meta tags, headings, content and internal linking' },
      { icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1', label: 'Link Building', desc: 'Build authoritative backlinks that boost your domain ranking' },
      { icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z', label: 'Local SEO', desc: 'Dominate Google Maps and local searches in Arusha and Tanzania' },
      { icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', label: 'Monthly Reports', desc: 'Clear performance reports showing rankings, traffic and conversions' }
    ],
    results: [
      { metric: '3x', label: 'Avg. organic traffic increase' },
      { metric: 'Top 5', label: 'Google rankings achieved' },
      { metric: '6 mo', label: 'Typical time to see results' }
    ],
    price: 'Starting from $300/month'
  },
  {
    id: 'google-ads',
    icon: 'M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122',
    title: 'Google Ads Management',
    tagline: 'Show up instantly. Pay only for results.',
    gradient: 'from-orange-500 to-yellow-400',
    bg: 'from-orange-50 to-yellow-50',
    border: 'border-orange-200',
    badge: 'bg-orange-100 text-orange-700',
    description:
      'Google Ads puts your business at the very top of search results immediately — before organic results even show up. We create, manage, and optimize your campaigns to get you the most clicks, leads, and sales for every shilling you spend.',
    features: [
      { icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7', label: 'Campaign Strategy & Setup', desc: 'Research-backed campaign structure targeting the right audiences' },
      { icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z', label: 'Ad Copywriting', desc: 'Compelling ad text that grabs attention and drives clicks' },
      { icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', label: 'Bid & Budget Management', desc: 'Smart bidding strategies that maximize ROI on your ad spend' },
      { icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', label: 'Conversion Tracking', desc: 'Track every call, form fill, and purchase back to the exact ad' },
      { icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15', label: 'Continuous Optimization', desc: 'Weekly A/B testing and adjustments to improve performance' },
      { icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', label: 'Detailed Reporting', desc: 'Transparent weekly and monthly reports on spend, clicks, and leads' }
    ],
    results: [
      { metric: '4x', label: 'Average ROAS achieved' },
      { metric: '48h', label: 'To go live after setup' },
      { metric: '-35%', label: 'Avg. cost-per-click reduction' }
    ],
    price: 'Starting from $500/month + Ad Spend'
  },
  {
    id: 'meta-ads',
    icon: 'M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z',
    title: 'Meta Ads (Facebook & Instagram)',
    tagline: 'Find your customers where they scroll.',
    gradient: 'from-[#4267B2] to-[#E1306C]',
    bg: 'from-blue-50 to-pink-50',
    border: 'border-purple-200',
    badge: 'bg-purple-100 text-purple-700',
    description:
      'With billions of active users on Facebook and Instagram, Meta Ads let you target your exact ideal customer by age, location, interests, and behaviour. We design eye-catching creatives and manage campaigns that turn scrollers into buyers.',
    features: [
      { icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z', label: 'Audience Research & Targeting', desc: 'Laser-targeted audiences by interest, behaviour, location and demographics' },
      { icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z', label: 'Creative Ad Design', desc: 'Scroll-stopping images, videos, carousels, and Reels that get noticed' },
      { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', label: 'Retargeting Campaigns', desc: 'Re-engage people who visited your site but didn\'t convert' },
      { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', label: 'Pixel Setup & Tracking', desc: 'Full Meta Pixel implementation to track conversions accurately' },
      { icon: 'M13 10V3L4 14h7v7l9-11h-7z', label: 'Campaign Scaling', desc: 'Proven strategies to scale winning campaigns without losing efficiency' },
      { icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', label: 'Performance Analytics', desc: 'Clear reporting on reach, engagement, leads, and revenue' }
    ],
    results: [
      { metric: '5x', label: 'Avg. return on ad spend' },
      { metric: '+200%', label: 'Increase in qualified leads' },
      { metric: '2 days', label: 'To launch your first campaign' }
    ],
    price: 'Starting from $400/month + Ad Spend'
  }
];

const faqs = [
  {
    q: 'How long before I see results from SEO?',
    a: 'SEO typically takes 3–6 months to show significant results because it works by building authority over time. However, we start with quick-win optimizations that can improve rankings within weeks. The long-term payoff is traffic that costs you nothing per click — forever.'
  },
  {
    q: 'How much should I budget for Google Ads or Meta Ads?',
    a: 'Our management fee starts from $300–$500/month depending on the service. Your ad spend (what you pay Google or Meta directly) is separate and depends on your goals — we typically recommend a minimum of $300–$500/month in ad spend to see meaningful results, but we can work with any budget.'
  },
  {
    q: 'Can you manage all three services at once?',
    a: 'Absolutely. Running SEO, Google Ads, and Meta Ads together creates a full-funnel digital presence — SEO builds long-term authority, Google Ads captures people actively searching, and Meta Ads builds awareness and retargets visitors. We offer bundle pricing for clients who choose multiple services.'
  },
  {
    q: 'Do you work with businesses outside Tanzania?',
    a: 'Yes. While we are based in Arusha and have deep expertise in the East African market, we manage digital marketing campaigns for clients targeting audiences anywhere in Africa and beyond.'
  },
  {
    q: 'How do you report on campaign performance?',
    a: 'We provide monthly (and weekly for ad campaigns) reports covering all key metrics — traffic, rankings, ad spend, clicks, cost-per-lead, and conversions. We believe in full transparency so you always know exactly what your money is doing.'
  }
];

const DigitalMarketing = () => {
  const [activeService, setActiveService] = useState('seo');
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    updateSEO({
      title: 'Digital Marketing Services — SEO, Google Ads & Meta Ads | Safezone Tech',
      description: 'Safezone Tech offers professional digital marketing in Tanzania — SEO, Google Ads management, and Meta Ads (Facebook & Instagram) to grow your online presence and drive real business results.',
      keywords: 'digital marketing Tanzania, SEO Tanzania, Google Ads Tanzania, Meta Ads Tanzania, Facebook Ads Tanzania, Instagram Ads Arusha, digital marketing agency Tanzania',
      url: window.location.href
    });
  }, []);

  const current = services.find(s => s.id === activeService);

  return (
    <div className="overflow-hidden">
      <PageHero
        title="Digital Marketing"
        description="SEO, Google Ads & Meta Ads — grow your audience, generate quality leads, and drive real revenue"
      />

      {/* Intro strip */}
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border-y border-gray-100">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z', label: 'SEO', desc: 'Long-term organic growth', color: 'text-blue-600', bg: 'bg-blue-100' },
              { icon: 'M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5', label: 'Google Ads', desc: 'Instant targeted traffic', color: 'text-orange-600', bg: 'bg-orange-100' },
              { icon: 'M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z', label: 'Meta Ads', desc: 'Facebook & Instagram reach', color: 'text-purple-600', bg: 'bg-purple-100' }
            ].map((item, i) => (
              <button
                key={i}
                onClick={() => setActiveService(['seo', 'google-ads', 'meta-ads'][i])}
                className={`flex flex-col items-center p-6 rounded-2xl transition-all duration-300 hover:shadow-md cursor-pointer ${activeService === ['seo', 'google-ads', 'meta-ads'][i] ? 'bg-white shadow-lg ring-2 ring-primary/30' : 'bg-white/50 hover:bg-white'}`}
              >
                <div className={`w-14 h-14 ${item.bg} rounded-xl flex items-center justify-center mb-3`}>
                  <svg className={`w-7 h-7 ${item.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 text-lg">{item.label}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">

        {/* Active Service Detail */}
        <div className={`mb-20 rounded-3xl overflow-hidden border ${current.border} bg-gradient-to-br ${current.bg}`}>
          {/* Top gradient bar */}
          <div className={`h-2 bg-gradient-to-r ${current.gradient}`}></div>

          <div className="p-8 md:p-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-10">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${current.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}>
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={current.icon} />
                </svg>
              </div>
              <div className="flex-1">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2 ${current.badge}`}>
                  Digital Marketing
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-2">{current.title}</h2>
                <p className="text-primary font-semibold text-lg mb-4">{current.tagline}</p>
                <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">{current.description}</p>
              </div>
            </div>

            {/* Results row */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {current.results.map((r, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 text-center shadow-sm border border-white">
                  <div className={`text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${current.gradient} mb-1`}>{r.metric}</div>
                  <div className="text-gray-500 text-sm font-medium">{r.label}</div>
                </div>
              ))}
            </div>

            {/* Features */}
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              What's Included
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {current.features.map((f, i) => (
                <div key={i} className="bg-white rounded-xl p-4 shadow-sm border border-white hover:shadow-md transition-shadow duration-200 flex items-start gap-3">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${current.gradient} flex items-center justify-center`}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={f.icon} />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">{f.label}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Price + CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/70">
              <div>
                <p className="text-gray-500 text-sm mb-1">Pricing</p>
                <p className={`text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r ${current.gradient}`}>{current.price}</p>
              </div>
              <div className="flex gap-3 flex-wrap">
                <Link
                  to={`/booking?service=${current.id}`}
                  className={`px-8 py-3 bg-gradient-to-r ${current.gradient} text-white rounded-full font-bold hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5`}
                >
                  Get Started
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-3 border-2 border-primary text-primary rounded-full font-bold hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Why Digital Marketing Matters */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Why Digital Marketing <span className="text-primary">Matters Now</span>
          </h2>
          <p className="text-center text-gray-500 text-lg mb-14 max-w-2xl mx-auto">
            Customers in Tanzania and across Africa are online — if your business isn't visible, your competitors are getting those customers instead.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                stat: '93%',
                label: 'of buying decisions start with an online search',
                icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
                color: 'from-blue-500 to-primary'
              },
              {
                stat: '4.8B',
                label: 'social media users worldwide — your audience is there',
                icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
                color: 'from-purple-500 to-pink-500'
              },
              {
                stat: '200%',
                label: 'average ROI businesses get from well-managed Google Ads',
                icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
                color: 'from-orange-500 to-yellow-400'
              },
              {
                stat: '+47%',
                label: 'internet penetration growth in Tanzania in 3 years',
                icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
                color: 'from-green-500 to-teal-400'
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4`}>
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <div className={`text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${item.color} mb-2`}>{item.stat}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Process */}
        <div className="mb-20 bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-3xl p-8 md:p-14">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Our <span className="text-primary">Process</span>
          </h2>
          <p className="text-center text-gray-500 text-lg mb-14 max-w-xl mx-auto">From onboarding to results — here's how we work</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* connector line (desktop) */}
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary to-secondary opacity-20 z-0"></div>
            {[
              { step: '01', title: 'Discovery & Audit', desc: 'We audit your current online presence, analyse competitors, and understand your business goals and target audience.' },
              { step: '02', title: 'Strategy & Planning', desc: 'We build a customized marketing strategy with clear KPIs, budget allocation, and a content and campaign roadmap.' },
              { step: '03', title: 'Launch & Optimize', desc: 'We set everything up, launch campaigns, and continuously optimize based on real performance data — weekly.' },
              { step: '04', title: 'Report & Scale', desc: 'Monthly reports with clear insights. When something works, we scale it. Always improving, never static.' }
            ].map((step, i) => (
              <div key={i} className="relative z-10 bg-white rounded-2xl p-6 shadow-md border border-gray-100 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white font-black text-lg">{step.step}</span>
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-center text-gray-500 text-lg mb-12">Everything you need to know before getting started</p>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-800">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-60' : 'max-h-0'}`}>
                  <p className="px-6 pb-5 text-gray-600 leading-relaxed text-sm">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="relative overflow-hidden rounded-3xl mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-indigo-600 to-secondary opacity-90"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="relative px-8 py-16 text-center">
            <h2 className="text-4xl font-black text-white mb-4">Ready to Grow Online?</h2>
            <p className="text-xl text-white/90 mb-10 max-w-xl mx-auto">
              Get a free audit of your current digital presence — we'll show you exactly where you're losing customers and how to win them back.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/booking"
                className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-black/20 transition-all duration-300 hover:-translate-y-1"
              >
                Book a Free Audit
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300 hover:-translate-y-1"
              >
                Talk to Us
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DigitalMarketing;
