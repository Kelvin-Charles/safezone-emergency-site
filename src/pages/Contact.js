import React, { useState, useRef, useEffect } from 'react';
import PageHero from '../components/PageHero';

// Internal components
const SocialIcon = ({ type, url }) => {
  const getIcon = () => {
    switch (type) {
      case 'facebook':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        );
      case 'twitter':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
          </svg>
        );
      case 'instagram':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        );
      case 'linkedin':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
    >
      {getIcon()}
    </a>
  );
};

const ContactInfoCard = ({ icon, title, content }) => {
  const getIcon = () => {
    switch (icon) {
      case 'location':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        );
      case 'phone':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        );
      case 'email':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        );
      case 'clock':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
      <div className="text-blue-400 text-2xl mb-3">{getIcon()}</div>
      <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-300">{content}</p>
    </div>
  );
};

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white/10 border border-white/20 rounded-xl overflow-hidden mb-4">
      <button 
        className="w-full text-left p-6 focus:outline-none flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-white text-lg font-medium">{question}</span>
        <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="text-gray-300 px-6 pb-6">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState(null); // null, 'sending', 'success', 'error'
  const [errors, setErrors] = useState({});
  const nameInputRef = useRef(null);

  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formState.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setFormStatus('sending');
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
      
      // Reset form status after 3 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 3000);
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20 animate-fadeIn">
      <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
            ref={nameInputRef}
            value={formState.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
            placeholder="John Doe"
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
          </div>
        
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
            value={formState.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
            placeholder="john@example.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>
        
        <div className="mb-6">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
            value={formState.subject}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-white/5 border ${errors.subject ? 'border-red-500' : 'border-white/10'} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
            placeholder="How can we help you?"
          />
          {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
          </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
            <textarea
              id="message"
              name="message"
            value={formState.message}
            onChange={handleChange}
            rows="5"
            className={`w-full px-4 py-3 bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
            placeholder="Write your message here..."
            ></textarea>
          {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
          </div>
        
            <button
              type="submit"
          disabled={formStatus === 'sending' || formStatus === 'success'}
          className={`w-full py-3 px-6 rounded-lg font-medium text-white ${
            formStatus === 'success' 
              ? 'bg-green-600 hover:bg-green-700' 
              : 'bg-blue-600 hover:bg-blue-700'
          } transition-all duration-300 flex items-center justify-center hover:scale-[1.02] active:scale-[0.98]`}
        >
          {formStatus === 'sending' ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : formStatus === 'success' ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Message Sent
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
              Send Message
            </>
          )}
            </button>
        
        {formStatus === 'error' && (
          <p className="mt-4 text-center text-red-500">
            There was an error sending your message. Please try again.
          </p>
        )}
      </form>
    </div>
  );
};

const MapSection = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      const mapElement = mapRef.current;
      mapElement.style.backgroundImage = "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')";
      mapElement.style.backgroundSize = "cover";
      mapElement.style.backgroundPosition = "center";
    }
  }, []);

  return (
    <div 
      ref={mapRef}
      className="h-64 rounded-2xl overflow-hidden mb-8 shadow-xl animate-fadeIn"
    >
      {/* Map placeholder */}
    </div>
  );
};

// Main Contact Component
const Contact = () => {
  const contactInfo = [
    { icon: 'location', title: 'Our Location', content: 'Near Clock Tower, Arusha, Tanzania, Postal Code: 23109, P.O.BOX 10344' },
    { icon: 'phone', title: 'Phone Number', content: '+255 764 021 233' },
    { icon: 'email', title: 'Email Address', content: 'info@microskills.co.tz' },
    { icon: 'clock', title: 'Working Hours', content: 'Mon - Fri: 9:00 AM - 6:00 PM' },
  ];

  const socialLinks = [
    { type: 'facebook', url: 'https://facebook.com' },
    { type: 'twitter', url: 'https://twitter.com' },
    { type: 'instagram', url: 'https://instagram.com' },
    { type: 'linkedin', url: 'https://linkedin.com' },
  ];

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of digital skills training, including web development, data analysis, digital marketing, and more. Our courses are designed to help you stay competitive in today's digital economy."
    },
    {
      question: "How can I book a consultation?",
      answer: "You can book a consultation through our booking page or by contacting us directly via phone or email. We'll schedule a time that works for you to discuss your needs and how we can help."
    },
    {
      question: "Do you offer custom training programs?",
      answer: "Yes, we specialize in creating custom training programs tailored to your specific needs. Whether you're an individual looking to upskill or a company wanting to train your team, we can develop a program that meets your requirements."
    },
    {
      question: "What is your refund policy?",
      answer: "We offer a 100% satisfaction guarantee. If you're not satisfied with our services within the first 14 days, we'll provide a full refund. Please refer to our terms and conditions for more details."
    }
  ];

  // Add CSS animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes slideInLeft {
        from { opacity: 0; transform: translateX(-30px); }
        to { opacity: 1; transform: translateX(0); }
      }
      
      @keyframes slideInRight {
        from { opacity: 0; transform: translateX(30px); }
        to { opacity: 1; transform: translateX(0); }
      }
      
      .animate-fadeIn {
        animation: fadeIn 0.6s ease-out forwards;
      }
      
      .animate-slideInLeft {
        animation: slideInLeft 0.6s ease-out forwards;
      }
      
      .animate-slideInRight {
        animation: slideInRight 0.6s ease-out forwards;
      }
      
      .delay-100 { animation-delay: 0.1s; }
      .delay-200 { animation-delay: 0.2s; }
      .delay-300 { animation-delay: 0.3s; }
      .delay-400 { animation-delay: 0.4s; }
      .delay-500 { animation-delay: 0.5s; }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <PageHero 
        title="Get in Touch" 
        subtitle="We'd love to hear from you. Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions."
      />
      
      {/* Social Links */}
      <div className="container mx-auto px-4 -mt-10 mb-16 relative z-10">
        <div className="flex justify-center space-x-4">
          {socialLinks.map((social, index) => (
            <div key={index} className={`delay-${index * 100}`} style={{animationDelay: `${index * 0.1}s`}}>
              <SocialIcon type={social.type} url={social.url} />
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slideInLeft">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="animate-slideInRight">
            {/* Map */}
            <MapSection />
            
            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className={`delay-${index * 100}`} style={{animationDelay: `${index * 0.1}s`}}>
                  <ContactInfoCard icon={info.icon} title={info.title} content={info.content} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="container mx-auto px-4 mt-20 animate-fadeIn delay-500" style={{animationDelay: '0.5s'}}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find quick answers to common questions about our services and support.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className={`delay-${index * 100 + 200}`} style={{animationDelay: `${0.2 + index * 0.1}s`}}>
                <FaqItem question={faq.question} answer={faq.answer} />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="container mx-auto px-4 mt-20 pb-16 animate-fadeIn delay-500" style={{animationDelay: '0.7s'}}>
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-10 text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Skills?</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Join thousands of satisfied clients who have enhanced their digital capabilities with MicroSkills.
              Start your journey today!
            </p>
            <a
              href="/booking"
              className="inline-block py-3 px-8 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105 active:scale-95"
            >
              Book Your Session Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 