import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { updateSEO, addStructuredData } from '../utils/SEO';

const Home = () => {
  // Home page specific SEO
  useEffect(() => {
    updateSEO({
      title: 'Safezone Tech | Empowering African Businesses Through Digital Innovation',
      description: 'Safezone Tech provides cloud services, software development, cybersecurity and ICT training to help African businesses achieve digital transformation. Located in Arusha, Tanzania.',
      keywords: 'Safezone Tech, IT services Tanzania, cloud computing, software development Tanzania, ICT training, cybersecurity services, digital transformation Africa, IT solutions Arusha',
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24">
          {[
            { number: '100+', label: 'Projects Completed' },
            { number: '300+', label: 'Happy Clients' },
            { number: '400+', label: 'Trained Professionals' },
            { number: '30+', label: 'Years Experience' }
          ].map((stat, index) => (
            <div key={index} className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-3">
                {stat.number}
          </div>
              <div className="text-gray-600 text-lg">{stat.label}</div>
          </div>
          ))}
        </div>

        {/* Featured Services with Hover Effects */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold mb-16 text-center">
            Our Core <span className="text-primary">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Cloud Services',
                description: 'Expert cloud solutions to scale your business efficiently',
                image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
              },
              {
                title: 'Software Development',
                description: 'Custom software solutions tailored to your unique needs',
                image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
              },
              {
                title: 'ICT Training',
                description: 'Empowering professionals with cutting-edge skills',
                image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
              }
            ].map((service, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white/90 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {service.description}
                  </p>
                  <Link 
                    to="/services" 
                    className="inline-flex items-center text-white hover:text-primary transition-colors"
                  >
                    Learn More 
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
            </div>
            </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us with Interactive Icons */}
        <div className="mb-24 py-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl">
          <h2 className="text-4xl font-bold mb-16 text-center">
            Why Choose <span className="text-primary">Safezone Tech</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 container mx-auto px-4">
            {[
              {
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Expert Team",
                description: "Certified professionals with extensive industry experience"
              },
              {
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "Fast Delivery",
                description: "Quick turnaround time without compromising quality"
              },
              {
                icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                title: "Security First",
                description: "Top-tier security measures for all our solutions"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-block p-4 rounded-full bg-gradient-to-r from-primary to-secondary transform group-hover:scale-110 transition-transform duration-300">
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
                    <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                </svg>
              </div>
            </div>
                <h3 className="text-2xl font-bold mt-6 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Active Products Section */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold mb-16 text-center">
            Our <span className="text-primary">Active Products</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-5xl mx-auto">
            <div className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
              {/* Header Section */}
              <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-secondary/5 p-8 border-b border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-800">MatokeoChap</h3>
                        <a 
                          href="https://matokeochap.com/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors inline-flex items-center text-sm font-medium"
                        >
                          <span className="mr-1">matokeochap.com</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      <strong>Your One-Stop Platform for All Academic Information in Tanzania</strong> - Say goodbye to scrolling through thousands of schools on official NECTA pages! MatokeoChap simplifies academic information access, helping students and parents find results, selections, and educational data instantly.
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
                    <div className="flex items-start p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-1">Student Results</h5>
                        <p className="text-sm text-gray-600">Check individual student examination results across all NECTA exams instantly</p>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-1">School Results</h5>
                        <p className="text-sm text-gray-600">View comprehensive results for all students in any school across Tanzania</p>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-1">Selection Check</h5>
                        <p className="text-sm text-gray-600">Check Form One and Form Five/College selection status instantly</p>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-1">JKT Selection</h5>
                        <p className="text-sm text-gray-600">Check your JKT (National Service) selection status for Form 6 students</p>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg hover:from-purple-100 hover:to-pink-100 transition-colors border border-purple-100">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-1">AI-Powered Course Suggestions</h5>
                        <p className="text-sm text-gray-600">Get personalized Form 5 subject combination recommendations based on your CSEE results</p>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-1">Quick Search</h5>
                        <p className="text-sm text-gray-600">Find information by school number or exam number - no more endless scrolling!</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Choose MatokeoChap */}
                <div className="mb-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">Why Choose MatokeoChap?</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Save Time:</strong> Access all academic information in one place instead of navigating multiple official pages</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Easy Access:</strong> Search by school number or exam number - no need to scroll through thousands of schools</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Complete Information:</strong> Get results, selections, and all NECTA-related information in one platform</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Smart Recommendations:</strong> AI-powered course suggestions to help you choose the best Form 5 subjects</span>
                    </li>
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">Academic Results</span>
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">School Search</span>
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">NECTA Integration</span>
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">Selection Info</span>
                  <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">AI Recommendations</span>
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">JKT Check</span>
                </div>

                {/* CTA Button */}
                <a
                  href="https://matokeochap.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                >
                  Visit MatokeoChap Now
                  <svg className="w-6 h-6 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="relative px-8 py-16 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your technology goals
            </p>
            <div className="space-x-6">
            <Link 
              to="/booking" 
                className="bg-white text-primary px-10 py-4 rounded-full hover:shadow-lg hover:shadow-black/20 transition-all duration-300 inline-block"
            >
              Book a Consultation
            </Link>
            <Link 
              to="/contact" 
                className="border-2 border-white text-white px-10 py-4 rounded-full hover:bg-white hover:text-primary transition-all duration-300 inline-block"
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