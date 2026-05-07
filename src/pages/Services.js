import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { updateSEO, addStructuredData } from '../utils/SEO';

const serviceCategories = [
  {
    id: 'consulting',
    name: 'Consulting Services',
    services: [
      {
        id: 1,
        title: 'ICT Consultations',
        description: 'Strategic IT planning, digital transformation roadmaps, and technology adoption consulting.',
        duration: '2-4 weeks',
        price: 'Custom Quote',
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        features: [
          'IT Strategy Development',
          'Digital Transformation Planning',
          'Technology Assessment',
          'IT Governance Framework'
        ]
      }
    ]
  },
  {
    id: 'cloud',
    name: 'Cloud Services',
    services: [
      {
        id: 2,
        title: 'Professional Cloud Services',
        description: 'Comprehensive cloud solutions including migration, management, and optimization.',
        duration: '1-6 months',
        price: 'Starting from $500/month',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        features: [
          'Cloud Migration',
          'Cloud Infrastructure Setup',
          'Cloud Security Implementation',
          'Performance Optimization'
        ]
      }
    ]
  },
  {
    id: 'software',
    name: 'Software Development',
    services: [
      {
        id: 3,
        title: 'Software Design & Development',
        description: 'Custom software solutions tailored to your business needs.',
        duration: '3-12 months',
        price: 'Project-based',
        image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        features: [
          'Custom Software Development',
          'Web Applications',
          'Enterprise Solutions',
          'Software Integration'
        ]
      },
      {
        id: 4,
        title: 'Mobile Applications Development',
        description: 'Native and cross-platform mobile app development.',
        duration: '2-6 months',
        price: 'Project-based',
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        features: [
          'iOS Development',
          'Android Development',
          'Cross-platform Solutions',
          'App Maintenance'
        ]
      }
    ]
  },
  {
    id: 'integration',
    name: 'Integration Services',
    services: [
      {
        id: 5,
        title: 'APIs Development & Integrations',
        description: 'Custom API development and system integration services.',
        duration: '1-3 months',
        price: 'Project-based',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        features: [
          'API Development',
          'System Integration',
          'Middleware Solutions',
          'API Documentation'
        ]
      }
    ]
  },
  {
    id: 'web',
    name: 'Web Services',
    services: [
      {
        id: 6,
        title: 'Website Design & Development',
        description: 'Professional website development and design services.',
        duration: '1-3 months',
        price: 'Starting from $1,000',
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        features: [
          'Responsive Web Design',
          'E-commerce Solutions',
          'CMS Development',
          'Website Maintenance'
        ]
      }
    ]
  },
  {
    id: 'network',
    name: 'Network Services',
    services: [
      {
        id: 7,
        title: 'Network Planning & Installations',
        description: 'Comprehensive network infrastructure solutions.',
        duration: '2-8 weeks',
        price: 'Custom Quote',
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        features: [
          'Network Design',
          'Infrastructure Setup',
          'Network Security',
          'Performance Optimization'
        ]
      },
      {
        id: 8,
        title: 'Server Installation & Configuration',
        description: 'Professional server setup and management services.',
        duration: '1-4 weeks',
        price: 'Custom Quote',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        features: [
          'Server Setup',
          'Configuration',
          'Maintenance',
          'Monitoring'
        ]
      }
    ]
  },
  {
    id: 'security',
    name: 'Security Services',
    services: [
      {
        id: 9,
        title: 'CyberSecurity Testing & Services',
        description: 'Comprehensive security testing and protection solutions.',
        duration: 'Ongoing',
        price: 'Starting from $2,000/month',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        features: [
          'Security Audits',
          'Penetration Testing',
          'Vulnerability Assessment',
          'Security Training'
        ]
      },
      {
        id: 91,
        title: 'Blue Team AI Integration',
        description: 'Advanced AI-powered defensive security solutions for enhanced threat detection and response.',
        duration: '3-6 months',
        price: 'Starting from $3,500/month',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        features: [
          'AI-Powered SIEM Integration',
          'Automated Threat Detection',
          'Machine Learning Security Analytics',
          'Real-time Response Automation'
        ]
      },
      {
        id: 92,
        title: 'Red Team Automation Suite',
        description: 'Modern automated penetration testing and security assessment tools for comprehensive attack simulation.',
        duration: 'Project-based',
        price: 'Custom Quote',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        features: [
          'Automated Penetration Testing',
          'Advanced Attack Simulation',
          'Custom Exploit Development',
          'Security Control Validation'
        ]
      },
      {
        id: 93,
        title: 'Red & Blue Team Operations',
        description: 'Comprehensive security assessment through coordinated red and blue team exercises with detailed reporting.',
        duration: '2-4 months',
        price: 'Project-based',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        features: [
          'Attack Scenario Planning',
          'Defense Strategy Assessment',
          'Detailed Security Reports',
          'Remediation Recommendations'
        ]
      },
      {
        id: 94,
        title: 'Advanced Forensic Investigation',
        description: 'Specialized forensic analysis services for complex cybersecurity incidents and legal requirements.',
        duration: 'Project-based',
        price: 'Custom Quote',
        image: 'https://images.unsplash.com/photo-1557597774-9d475d5e8142?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        features: [
          'Memory Forensics',
          'Network Traffic Analysis',
          'Malware Reverse Engineering',
          'Chain of Custody Management'
        ]
      },
      {
        id: 95,
        title: 'Security Architecture Review',
        description: 'Comprehensive assessment and optimization of security architecture for enhanced resilience.',
        duration: '1-2 months',
        price: 'Project-based',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        features: [
          'Architecture Assessment',
          'Security Control Review',
          'Resilience Planning',
          'Implementation Roadmap'
        ]
      },
      {
        id: 96,
        title: 'Incident Response Planning',
        description: 'Development and implementation of incident response strategies and procedures.',
        duration: '2-3 months',
        price: 'Starting from $10,000',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        features: [
          'Response Strategy Development',
          'Team Training & Exercises',
          'Playbook Development',
          'Tool Implementation'
        ]
      }
    ]
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    services: [
      {
        id: 200,
        title: 'Search Engine Optimization (SEO)',
        description: 'Boost your online visibility and organic traffic with proven SEO strategies tailored for your business in Tanzania and beyond.',
        duration: 'Ongoing',
        price: 'Starting from $300/month',
        image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        features: [
          'Keyword Research & Strategy',
          'On-Page & Technical SEO',
          'Content Optimization',
          'Monthly Performance Reports'
        ]
      },
      {
        id: 201,
        title: 'Google Ads Management',
        description: 'Drive targeted traffic and maximize ROI with expertly managed Google Ads campaigns that reach your ideal customers.',
        duration: 'Ongoing',
        price: 'Starting from $500/month + Ad Spend',
        image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        features: [
          'Campaign Setup & Strategy',
          'Ad Copywriting & Creative',
          'Bid Management & Optimization',
          'Conversion Tracking & Reporting'
        ]
      },
      {
        id: 202,
        title: 'Meta Ads (Facebook & Instagram)',
        description: 'Reach your target audience on Facebook and Instagram with compelling ad campaigns that drive real business results.',
        duration: 'Ongoing',
        price: 'Starting from $400/month + Ad Spend',
        image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        features: [
          'Audience Targeting & Segmentation',
          'Creative Ad Design',
          'Campaign Optimization',
          'Performance Analytics & Reporting'
        ]
      }
    ]
  },
  {
    id: 'training',
    name: 'Training Services',
    services: [
      {
        id: 10,
        title: 'Professional ICT Training',
        description: 'Comprehensive IT training programs for professionals.',
        duration: 'Variable',
        price: 'Per Course',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        features: [
          'Technical Training',
          'Certification Programs',
          'Custom Workshops',
          'Team Training'
        ]
      }
    ]
  },
  {
    id: 'recovery-forensics',
    name: 'Recovery & Forensics',
    services: [
      {
        id: 101,
        title: 'Disaster Recovery Planning',
        description: 'Comprehensive disaster recovery and business continuity planning to ensure operational resilience.',
        duration: '2-4 months',
        price: 'Custom Quote',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        features: [
          'Business Impact Analysis',
          'Recovery Strategy Development',
          'DR Plan Documentation',
          'Recovery Testing & Simulation'
        ]
      },
      {
        id: 102,
        title: 'Digital Forensics Analysis',
        description: 'Advanced digital forensics investigation and analysis services for incident response and legal compliance.',
        duration: 'Project-based',
        price: 'Starting from $5,000',
        image: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        features: [
          'Device & Data Recovery',
          'Malware Analysis',
          'Evidence Collection & Preservation',
          'Expert Witness Services'
        ]
      },
      {
        id: 103,
        title: 'Incident Response & Recovery',
        description: 'Rapid response and recovery services for cybersecurity incidents and system compromises.',
        duration: 'As needed',
        price: 'Emergency Response Rates',
        image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        features: [
          'Emergency Response',
          'Threat Containment',
          'System Recovery',
          'Post-Incident Analysis'
        ]
      },
      {
        id: 104,
        title: 'Business Continuity Management',
        description: 'End-to-end business continuity planning and management services.',
        duration: 'Ongoing',
        price: 'Custom Quote',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        features: [
          'Continuity Strategy Development',
          'Risk Assessment & Mitigation',
          'Emergency Response Planning',
          'Staff Training & Awareness'
        ]
      },
      {
        id: 105,
        title: 'System Repair & Recovery',
        description: 'Specialized system repair and data recovery services for compromised or damaged systems.',
        duration: 'Variable',
        price: 'Based on Complexity',
        image: 'https://images.unsplash.com/photo-1581472723648-909f4851d4ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        features: [
          'Data Recovery',
          'System Restoration',
          'Hardware Repair',
          'Performance Optimization'
        ]
      }
    ]
  }
];

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // SEO configuration for Services page
  useEffect(() => {
    updateSEO({
      title: 'Our Services - IT Solutions, Digital Marketing & Training | Safezone Tech',
      description: 'Comprehensive IT solutions including cloud services, software development, cybersecurity, digital marketing (SEO, Google Ads, Meta Ads), ICT training, and IT consulting. Tailored services to empower your business in Tanzania.',
      keywords: 'IT services Tanzania, cloud services, software development, ICT training, cybersecurity, digital marketing Tanzania, SEO Tanzania, Google Ads Tanzania, Meta Ads Tanzania, IT consulting, web development, network solutions, Tanzania',
      url: window.location.href
    });

    addStructuredData({
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'IT Services and Training',
      provider: {
        '@type': 'Organization',
        name: 'Safezone Tech'
      },
      areaServed: {
        '@type': 'Country',
        name: 'Tanzania'
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'IT Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Cloud Services',
              description: 'Expert cloud solutions to scale your business efficiently'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Software Development',
              description: 'Custom software solutions tailored to your unique needs'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'ICT Training',
              description: 'Empowering professionals with cutting-edge skills'
            }
          }
        ]
      }
    });
  }, []);

  const filteredServices = selectedCategory === 'all' 
    ? serviceCategories.flatMap(cat => cat.services)
    : serviceCategories.find(cat => cat.id === selectedCategory)?.services || [];

  return (
    <div>
      <PageHero 
        title="Our Services"
        description="Comprehensive IT solutions tailored to empower your business with cutting-edge technology"
      />
      
      <div className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="mb-12 -mx-4 px-4 py-2 overflow-x-auto scrollbar-hide">
          <div className="flex space-x-3 md:space-x-4 min-w-max p-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              All Services
            </button>
            {serviceCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map(service => (
            <div 
              key={service.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover-card"
              data-aos="fade-up"
              data-aos-delay={service.id * 100}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <p className="text-white/80 text-sm">{service.duration}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold">{service.price}</span>
                  <Link 
                    to={`/booking?service=${service.id}`}
                    className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && selectedService && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold mb-4">Book {selectedService.title}</h2>
            {/* Add your booking form here */}
            <button
              onClick={() => setShowBookingModal(false)}
              className="mt-4 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default withRouter(Services); 