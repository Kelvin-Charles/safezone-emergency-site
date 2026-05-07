import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { updateSEO, addStructuredData } from '../utils/SEO';

const Home = () => {
  // Home page specific SEO
  useEffect(() => {
    updateSEO({
      title: 'Safezone Tech | IT Solutions, Digital Marketing & Software Development in Tanzania',
      description: 'Safezone Tech delivers cloud services, software development, digital marketing (SEO, Google Ads, Meta Ads), cybersecurity and ICT training to empower African businesses. Located in Arusha, Tanzania.',
      keywords: 'Safezone Tech, IT services Tanzania, cloud computing, software development Tanzania, ICT training, cybersecurity, digital marketing Tanzania, SEO Tanzania, Google Ads Tanzania, Meta Ads Tanzania, digital transformation Africa, IT solutions Arusha',
      url: window.location.href
    });

    // Add organization structured data for home page
    addStructuredData({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Safezone Tech',
      url: 'https://safezonetz.com',
      logo: 'https://safezonetz.com/logo512.png',
      description: 'Safezone Tech delivers cloud services, software development, cybersecurity and ICT training to empower African businesses.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Near Clock Tower',
        addressLocality: 'Arusha',
        addressRegion: 'Arusha',
        postalCode: '23109',
        addressCountry: 'TZ'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+255-615-898-768',
        contactType: 'customer service',
        email: 'info@safezonetz.com'
      }
    });
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Background Image */}
      <div className="relative h-[60vh] mb-16 flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          {/* Local Video Background */}
          <div className="relative w-full h-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
            >
              <source src="/hero-video/hero-bg-video1.mp4" type="video/mp4" />
            </video>
          </div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10"></div>
        </div>
        
        {/* Content - Added padding-top to create space below navbar */}
        <div className="relative container mx-0 px-2 md:pl-0 lg:pl-2 py-6 z-20 pt-24">
          <div className="animate-fadeIn max-w-2xl ml-4 mt-8"> {/* Added margin-top */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-tight backdrop-blur-sm bg-black/5 p-4 rounded-lg">
              Empowering African Businesses Through{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Digital Innovation
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-xl backdrop-blur-sm bg-black/5 p-4 rounded-lg">
              Safezone Tech delivers cutting-edge technology solutions and professional training to drive your business forward
            </p>
            <div className="space-x-4 backdrop-blur-sm bg-black/5 p-4 rounded-lg inline-block">
              <Link 
                to="/services" 
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 md:px-10 py-3 md:py-4 text-base md:text-lg rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 inline-block"
              >
                Explore Our Services
              </Link>
              <Link 
                to="/contact" 
                className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-6 md:px-10 py-3 md:py-4 text-base md:text-lg rounded-full hover:bg-white/20 transition-all duration-300 inline-block"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce z-20">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Stats Section with Animated Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {[
            { number: '20+', label: 'Projects Delivered', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
            { number: '10+', label: 'Happy Clients', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
            { number: '50+', label: 'Trained Professionals', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
            { number: '5+', label: 'Years of Excellence', icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' }
          ].map((stat, index) => (
            <div key={index} className="group bg-white p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-gray-50">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mx-auto mb-4 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                </svg>
              </div>
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
                {stat.number}
              </div>
              <div className="text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Services with Hover Effects */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Our Core <span className="text-primary">Services</span>
          </h2>
          <p className="text-center text-gray-500 mb-16 text-lg">End-to-end technology solutions for modern businesses</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Cloud Services',
                description: 'Scalable cloud infrastructure, migration, and managed services to power your business 24/7',
                image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                badge: 'Infrastructure'
              },
              {
                title: 'Software Development',
                description: 'Custom web apps, mobile apps, and enterprise software built to your exact specifications',
                image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                badge: 'Development'
              },
              {
                title: 'Digital Marketing',
                description: 'SEO, Google Ads, and Meta Ads campaigns that grow your audience and drive real revenue',
                image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                badge: 'New Service'
              },
              {
                title: 'ICT Training',
                description: 'Professional certification programs and hands-on workshops to upskill your team',
                image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                badge: 'Training'
              }
            ].map((service, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent z-10"></div>
                {service.badge === 'New Service' && (
                  <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-secondary text-white text-xs font-bold rounded-full shadow-lg">
                    NEW
                  </div>
                )}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[380px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full mb-3">{service.badge}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white/85 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-white font-semibold hover:text-blue-300 transition-colors text-sm"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-1.5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us with Interactive Icons */}
        <div className="mb-24 py-16 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-100 rounded-3xl">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Why Choose <span className="text-primary">Safezone Tech</span>
          </h2>
          <p className="text-center text-gray-500 mb-16 text-lg">What sets us apart from the rest</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto px-8">
            {[
              {
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Expert Team",
                description: "Certified professionals with deep industry experience across IT, security, and digital marketing",
                color: "from-blue-500 to-primary"
              },
              {
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "Fast Delivery",
                description: "Agile delivery approach ensuring quick turnaround without ever compromising on quality",
                color: "from-primary to-indigo-600"
              },
              {
                icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                title: "Security First",
                description: "Enterprise-grade security baked into every solution we build and every system we touch",
                color: "from-indigo-600 to-secondary"
              },
              {
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                title: "Measurable Results",
                description: "Data-driven approach with clear KPIs and transparent reporting so you always know your ROI",
                color: "from-secondary to-pink-500"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className={`inline-block p-1 rounded-full bg-gradient-to-r ${feature.color} transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
                    <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mt-6 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-center text-gray-500 mb-16 text-lg max-w-2xl mx-auto">
            A snapshot of the real-world solutions we've delivered for businesses across Tanzania
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: 'Web Development',
                categoryColor: 'bg-blue-100 text-blue-700',
                title: 'Elevated Tanzania Safaris — Booking & Web Platform',
                description: 'Built a full-featured tourism website with an integrated online booking system, itinerary management, and client portal for one of Arusha\'s leading safari operators.',
                tags: ['Web Design', 'Booking System', 'CMS'],
                icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
                gradient: 'from-blue-500 to-cyan-400'
              },
              {
                category: 'Cloud & Infrastructure',
                categoryColor: 'bg-purple-100 text-purple-700',
                title: 'Tanzania Camping Safaris — Cloud Infrastructure',
                description: 'Migrated the company\'s entire IT infrastructure to the cloud, setting up secure cloud storage, automated backups, and remote-access systems to modernize operations.',
                tags: ['Cloud Migration', 'AWS', 'DevOps'],
                icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
                gradient: 'from-purple-500 to-indigo-500'
              },
              {
                category: 'Digital Marketing',
                categoryColor: 'bg-orange-100 text-orange-700',
                title: 'Migsam Safaris — Digital Growth Campaign',
                description: 'Ran a comprehensive SEO and Meta Ads campaign that significantly boosted organic traffic, online enquiries, and brand visibility in international tourism markets.',
                tags: ['SEO', 'Meta Ads', 'Analytics'],
                icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
                gradient: 'from-orange-500 to-pink-500'
              },
              {
                category: 'EdTech Platform',
                categoryColor: 'bg-green-100 text-green-700',
                title: 'JR Institute of IT — Learning Management System',
                description: 'Developed a custom LMS for JR Institute enabling online course delivery, student tracking, certificate generation, and tutor management for ICT courses.',
                tags: ['LMS', 'Software Dev', 'Education'],
                icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
                gradient: 'from-green-500 to-teal-400'
              },
              {
                category: 'Cybersecurity',
                categoryColor: 'bg-red-100 text-red-700',
                title: 'Gofan Safaris — Security Audit & Hardening',
                description: 'Conducted a comprehensive cybersecurity audit, penetration testing, and implemented security hardening measures to protect client data and business operations.',
                tags: ['Pen Testing', 'Security Audit', 'Firewall'],
                icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                gradient: 'from-red-500 to-rose-400'
              },
              {
                category: 'Mobile App',
                categoryColor: 'bg-teal-100 text-teal-700',
                title: 'Kwembe Adventures — Mobile Booking App',
                description: 'Designed and built a cross-platform mobile app for Kwembe Adventures allowing customers to browse tours, make bookings, and manage trips from their smartphones.',
                tags: ['React Native', 'iOS & Android', 'UX Design'],
                icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
                gradient: 'from-teal-500 to-cyan-400'
              }
            ].map((project, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                {/* Top gradient bar */}
                <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`}></div>
                <div className="p-6">
                  {/* Icon + Category */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={project.icon} />
                      </svg>
                    </div>
                    <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${project.categoryColor}`}>{project.category}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3 leading-snug">{project.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{project.description}</p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/contact" className="inline-flex items-center px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300">
              Start Your Project
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Clients Section */}
        <div className="mb-24 py-16 bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl px-8">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Trusted by <span className="text-primary">Great Clients</span>
          </h2>
          <p className="text-center text-gray-500 mb-14 text-lg">Companies across Tanzania that rely on Safezone Tech</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: 'Elevated Tanzania Safaris', industry: 'Safari & Tourism' },
              { name: 'Migsam Safaris', industry: 'Safari & Tourism' },
              { name: 'Gofan Safaris', industry: 'Safari & Tourism' },
              { name: 'Tanzania Camping Safaris', industry: 'Safari & Tourism' },
              { name: 'Kwembe Adventures', industry: 'Adventure Tourism' },
              { name: 'Crest Adventures', industry: 'Adventure Tourism' },
              { name: 'Okaka Safaris', industry: 'Safari & Tourism' },
              { name: 'Furahini Adventures', industry: 'Adventure Tourism' },
              { name: 'JR Institute of IT', industry: 'Education' },
              { name: 'SchoolHub', industry: 'EdTech' }
            ].map((client, index) => (
              <div key={index} className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col items-center text-center group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-3 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                  <span className="text-2xl font-black text-primary">{client.name.charAt(0)}</span>
                </div>
                <h4 className="text-sm font-bold text-gray-800 leading-tight mb-1">{client.name}</h4>
                <p className="text-xs text-gray-400">{client.industry}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Digital Marketing Highlight Banner */}
        <div className="mb-24 rounded-3xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1976d2] via-[#6a11cb] to-[#dc004e] opacity-90"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="relative px-8 py-14 md:py-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-center md:text-left max-w-2xl">
                <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white text-sm font-bold rounded-full mb-4 uppercase tracking-widest">New Service</span>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                  Grow Your Business with <br className="hidden md:block"/>Digital Marketing
                </h2>
                <p className="text-white/85 text-lg mb-6 leading-relaxed">
                  We now offer full-service digital marketing — SEO, Google Ads, and Meta Ads (Facebook & Instagram) — to help you reach more customers, generate quality leads, and grow your revenue online.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  {['SEO Optimization', 'Google Ads', 'Meta Ads'].map((item, i) => (
                    <span key={i} className="flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm text-white rounded-full text-sm font-semibold border border-white/20">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3 flex-shrink-0">
                <Link
                  to="/services"
                  className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:shadow-xl hover:shadow-black/20 transition-all duration-300 text-center whitespace-nowrap"
                >
                  Explore Digital Marketing
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-primary transition-all duration-300 text-center whitespace-nowrap"
                >
                  Get a Free Audit
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Active Products Section */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Our <span className="text-primary">Active Products</span>
          </h2>
          <p className="text-center text-gray-500 mb-16 text-lg">Homegrown software solutions built for Africa</p>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-5xl mx-auto">
            {/* SchoolHub Product Card */}
            <div className="group bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-blue-100">
              {/* Decorative top bar */}
              <div className="h-2 bg-gradient-to-r from-primary via-blue-400 to-secondary"></div>

              {/* Header Section */}
              <div className="p-8 border-b border-blue-100">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg flex-shrink-0">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="text-3xl font-bold text-gray-800">SchoolHub</h3>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-wide">Live</span>
                    </div>
                    <a
                      href="https://schoolhub.ac.tz/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors inline-flex items-center text-sm font-medium mb-4"
                    >
                      <span className="mr-1">schoolhub.ac.tz</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      <strong>Tanzania's Complete School Management & Academic Platform</strong> — SchoolHub empowers schools, students, and parents with a modern digital hub for academic records, results, timetables, and school administration — all in one place.
                    </p>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="p-8">
                {/* Key Features Grid */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                    <svg className="w-6 h-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
                        title: "Student Results Portal",
                        desc: "Instant access to NECTA exam results for students across all levels — PSLE, CSEE, ACSEE",
                        color: "primary"
                      },
                      {
                        icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                        title: "School Management",
                        desc: "Complete admin tools for schools — manage classes, teachers, timetables and student records",
                        color: "primary"
                      },
                      {
                        icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                        title: "Selection & Placement",
                        desc: "Check Form One, Form Five, and College placement selections in real time",
                        color: "primary"
                      },
                      {
                        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
                        title: "Academic Reports",
                        desc: "Generate and download detailed academic reports and transcripts for any student",
                        color: "primary"
                      },
                      {
                        icon: "M13 10V3L4 14h7v7l9-11h-7z",
                        title: "AI Course Advisor",
                        desc: "AI-powered subject combination recommendations based on CSEE performance",
                        color: "purple",
                        purple: true
                      },
                      {
                        icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                        title: "Instant Search",
                        desc: "Find any student or school by index number or school code — fast and accurate",
                        color: "primary"
                      }
                    ].map((feature, i) => (
                      <div key={i} className={`flex items-start p-4 rounded-xl hover:scale-[1.02] transition-transform duration-200 ${feature.purple ? 'bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100' : 'bg-primary/5 hover:bg-primary/10'}`}>
                        <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${feature.purple ? 'bg-gradient-to-br from-purple-500 to-pink-500' : 'bg-primary/20'}`}>
                          <svg className={`w-5 h-5 ${feature.purple ? 'text-white' : 'text-primary'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                          </svg>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-1">{feature.title}</h5>
                          <p className="text-sm text-gray-600">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why SchoolHub */}
                <div className="mb-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">Why SchoolHub?</h4>
                  <ul className="space-y-3 text-gray-700">
                    {[
                      { label: 'One Platform', desc: 'Schools, students, and parents all in one place — no more switching between multiple portals' },
                      { label: 'Built for Tanzania', desc: 'Designed around the Tanzanian education system — NECTA, PSLE, CSEE, ACSEE fully integrated' },
                      { label: 'Real-Time Data', desc: 'Results and selections updated in real time so you\'re always the first to know' },
                      { label: 'Smart AI Features', desc: 'AI advisor helps students pick the right subjects and career paths after exams' }
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong>{item.label}:</strong> {item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {['School Management', 'Academic Results', 'NECTA Integration', 'Selection Check', 'AI Advisor', 'Tanzania EdTech'].map((tag, i) => (
                    <span key={i} className={`px-4 py-2 rounded-full text-sm font-medium ${i === 4 ? 'bg-purple-100 text-purple-700' : 'bg-primary/10 text-primary'}`}>{tag}</span>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href="https://schoolhub.ac.tz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                >
                  Visit SchoolHub
                  <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials with Modern Cards */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold mb-16 text-center">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Elevated Tanzania Safaris",
                role: "Operations Manager",
                image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
                quote: "Safezone Tech transformed our business operations with their cloud solutions. Their expertise and professional approach exceeded our expectations.",
                logo: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              },
              {
                name: "Migsam Safaris",
                role: "Digital Marketing Director",
                image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
                quote: "Their web development and digital marketing solutions are top-notch. The team's expertise helped us reach more customers online.",
                logo: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              },
              {
                name: "Gofan Safaris",
                role: "General Manager",
                image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
                quote: "Safezone Tech helped us modernize our booking system with cutting-edge solutions that improved our operational efficiency.",
                logo: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              },
              {
                name: "Tanzania Camping Safaris",
                role: "IT Coordinator",
                image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
                quote: "Outstanding IT infrastructure and cloud services. They've helped us achieve our digital transformation goals seamlessly.",
                logo: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              },
              {
                name: "Kwembe Adventures Tours",
                role: "Business Development Manager",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
                quote: "Their software development and IT consulting services have significantly enhanced our business operations and customer experience.",
                logo: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              },
              {
                name: "Crest Adventures",
                role: "Managing Director",
                image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
                quote: "Safezone Tech's expertise in cybersecurity and IT infrastructure has been invaluable for our business growth and digital journey.",
                logo: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              },
              {
                name: "Okaka Safaris",
                role: "Operations Director",
                image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
                quote: "Excellent cloud solutions and professional training services. Safezone Tech has transformed how we manage our operations.",
                logo: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              },
              {
                name: "JR Institute of Information Technology",
                role: "Director",
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
                quote: "Their ICT training programs and technology solutions have helped us deliver quality education to our students. Highly professional team!",
                logo: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              },
              {
                name: "Furahini Adventures",
                role: "CEO",
                image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
                quote: "Safezone Tech's innovative technology solutions have revolutionized our adventure tourism business. Their support and expertise are unmatched!",
                logo: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 right-4 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
                    <img 
                      src={testimonial.logo}
                      alt={`${testimonial.name} logo`}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <div className="font-bold text-xl text-gray-800 mb-1 line-clamp-1">{testimonial.name}</div>
                  <div className="text-primary font-medium text-sm">{testimonial.role}</div>
                </div>
                <div className="relative">
                  <svg className="absolute -top-4 -left-2 w-8 h-8 text-primary/20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-600 italic leading-relaxed pl-6">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Verified Client
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section with Gradient Background */}
        <div className="relative overflow-hidden rounded-3xl mb-24">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="relative px-8 py-20 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Whether you need software built, your cloud modernized, or your marketing scaled — Safezone Tech is your trusted partner in Arusha and beyond.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/booking"
                className="bg-white text-primary px-10 py-4 rounded-full font-bold hover:shadow-xl hover:shadow-black/20 transition-all duration-300 inline-block hover:-translate-y-1"
              >
                Book a Free Consultation
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-primary transition-all duration-300 inline-block hover:-translate-y-1"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 