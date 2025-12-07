import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Home page specific SEO (title + meta description)
  useEffect(() => {
    const title = 'MicroSkills IT | Empowering African Businesses Through Digital Innovation';
    const description =
      'MicroSkills IT provides cloud services, software development, cybersecurity and ICT training to help African businesses achieve digital transformation.';

    document.title = title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
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
              MicroSkills IT delivers cutting-edge technology solutions and professional training to drive your business forward
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
            Why Choose <span className="text-primary">MicroSkills IT</span>
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

        {/* Testimonials with Modern Cards */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold mb-16 text-center">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Institute of Accountancy Arusha",
                role: "System Administrator",
                image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
                quote: "MicroSkills IT transformed our business operations with their cloud solutions. Their expertise and professional approach exceeded our expectations.",
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHFsZ1w4OcXbm6lCESr5to7oujgdkiNA-Cmw&s"
              },
              {
                name: "Habari Node",
                role: "Network Engineer",
                image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
                quote: "Their network solutions are top-notch. The team's expertise in infrastructure setup is unmatched.",
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqu1CBCVoBFcbmNKzfW6xsB2CqyXBV01NgYA&s"
              },
              {
                name: "Tanzania Revenue Authority",
                role: "Chief Information Officer",
                image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
                quote: "MicroSkills IT helped us modernize our systems with cutting-edge solutions that improved our operational efficiency.",
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDXoAnb3o72qfFigBAndSH89WO-obs5kMCKQ&s"
              },
              {
                name: "Tanzania Communication Regulatory Authority",
                role: "Cloud Architect",
                image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
                quote: "Outstanding cloud architecture and implementation services. They've helped us achieve our digital transformation goals.",
                logo: "https://media.licdn.com/dms/image/v2/C560BAQFABxqGkME8Rg/company-logo_200_200/company-logo_200_200/0/1649428898264?e=2147483647&v=beta&t=zke_VxxJ-N1F9vGTP-1sq9pS5B1iV7ZJXH5TIK3P4DI"
              },
              {
                name: "Tanzania Bureau of Standards",
                role: "Incidence Response Team",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-pbID9wa6rzgqJl0VwpXHO9vJ4gjiye7VRw&s",
                quote: "Their cybersecurity solutions and incident response training have significantly enhanced our security posture.",
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPBzxzc5XN80mg7rJHoqE0K30p5qgns0lJSQ&s"
              },
              {
                name: "Exim Bank Tanzania",
                role: "IT Security Manager",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
                quote: "MicroSkills IT's expertise in banking security and infrastructure has been invaluable for our digital transformation journey.",
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhiISgWbctVtn0NBWAqkd3-1EwhxECzR7J5w&s"
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