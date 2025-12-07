import React, { useState, useEffect } from 'react';
import PageHero from '../components/PageHero';
import { useLocation } from 'react-router-dom';
import { updateSEO, addStructuredData } from '../utils/SEO';

// Background Effects Component
const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-gradient-to-br from-blue-600/40 via-indigo-500/40 to-sky-500/40 rounded-full mix-blend-soft-light filter blur-2xl opacity-90 animate-blob"></div>
      <div className="absolute top-1/4 -right-4 w-96 h-96 bg-gradient-to-br from-sky-500/40 via-blue-600/40 to-indigo-500/40 rounded-full mix-blend-soft-light filter blur-2xl opacity-90 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-gradient-to-br from-blue-500/40 via-blue-500/40 to-sky-500/40 rounded-full mix-blend-soft-light filter blur-2xl opacity-90 animate-blob animation-delay-4000"></div>
      
      {/* Grid Pattern using CSS gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/[0.07] to-transparent"></div>
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(99, 102, 241, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99, 102, 241, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px'
        }}
      ></div>
    </div>
  );
};

const Booking = () => {
  // Get URL parameters first
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category');
  const serviceParam = queryParams.get('service');

  // SEO configuration for Booking page
  useEffect(() => {
    updateSEO({
      title: 'Book IT Services & Training | Safezone Tech Tanzania',
      description: 'Book IT services, cloud solutions, software development, and ICT training with Safezone Tech. Schedule a consultation for your business needs in Tanzania.',
      keywords: 'book IT services, IT consultation booking, Safezone Tech booking, schedule IT training, IT services Tanzania',
      url: window.location.href
    });

    addStructuredData({
      '@context': 'https://schema.org',
      '@type': 'Reservation',
      reservationFor: {
        '@type': 'Service',
        name: 'IT Services and Training',
        provider: {
          '@type': 'Organization',
          name: 'Safezone Tech'
        }
      }
    });
  }, []);

  // Form state with URL parameters included
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    serviceCategory: categoryParam || '',
    specificService: serviceParam || '',
    participantsCount: '1',
    preferredDate: '',
    preferredTime: '',
    additionalRequirements: '',
    howDidYouHear: '',
    agreeToTerms: false
  });
  
  // Validation state
  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState(null); // null, 'submitting', 'success', 'error'
  
  // Service categories and specific services
  const serviceCategories = [
    {
      name: 'Web Development',
      services: [
        'Frontend Development (HTML, CSS, JavaScript)',
        'Backend Development (Node.js, Python, PHP)',
        'Full Stack Development',
        'WordPress Development',
        'E-commerce Development',
        'Progressive Web Apps (PWA)'
      ]
    },
    {
      name: 'Data Science & Analytics',
      services: [
        'Data Analysis Fundamentals',
        'Python for Data Science',
        'Data Visualization',
        'Machine Learning Basics',
        'Statistical Analysis',
        'Big Data Technologies'
      ]
    },
    {
      name: 'Digital Marketing',
      services: [
        'Social Media Marketing',
        'Search Engine Optimization (SEO)',
        'Content Marketing',
        'Email Marketing',
        'Google Ads',
        'Digital Marketing Strategy'
      ]
    },
    {
      name: 'UI/UX Design',
      services: [
        'User Interface Design',
        'User Experience Design',
        'Wireframing and Prototyping',
        'Design Thinking',
        'Mobile App Design',
        'Web Design'
      ]
    },
    {
      name: 'Business Skills',
      services: [
        'Project Management',
        'Business Analysis',
        'Agile Methodologies',
        'Leadership & Management',
        'Communication Skills',
        'Presentation Skills'
      ]
    },
    {
      name: 'Custom Training',
      services: [
        'Corporate Training Programs',
        'Team Skill Assessment',
        'Customized Curriculum Development',
        'One-on-One Coaching',
        'Technical Consultation'
      ]
    }
  ];
  
  // Available specific services based on selected category
  const [availableServices, setAvailableServices] = useState([]);
  
  // Update available services when category changes
  useEffect(() => {
    if (formData.serviceCategory) {
      const category = serviceCategories.find(cat => cat.name === formData.serviceCategory);
      setAvailableServices(category ? category.services : []);
      setFormData(prev => ({...prev, specificService: ''}));
    } else {
      setAvailableServices([]);
    }
  }, [formData.serviceCategory]);
  
  // Validate category and service from URL parameters
  useEffect(() => {
    if (categoryParam && serviceParam) {
      const categoryExists = serviceCategories.some(cat => cat.name === categoryParam);
      
      if (categoryExists) {
        const category = serviceCategories.find(cat => cat.name === categoryParam);
        const serviceExists = category.services.includes(serviceParam);
        
        if (!serviceExists) {
          setFormData(prev => ({...prev, specificService: ''}));
        }
      } else {
        setFormData(prev => ({
          ...prev, 
          serviceCategory: '',
          specificService: ''
        }));
      }
    }
  }, [categoryParam, serviceParam, serviceCategories]);
  
  // Form input change handler
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when field is updated
    if (errors[name]) {
      setErrors(prev => ({...prev, [name]: ''}));
    }
  };
  
  // Form validation
  const validateForm = () => {
    const newErrors = {};
    
    // Required fields
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.serviceCategory) newErrors.serviceCategory = 'Please select a service category';
    if (!formData.specificService) newErrors.specificService = 'Please select a specific service';
    if (!formData.preferredDate) newErrors.preferredDate = 'Please select a preferred date';
    if (!formData.preferredTime) newErrors.preferredTime = 'Please select a preferred time';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Scroll to the first error
      const firstError = document.querySelector('.error-message');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }
    
    setFormStatus('submitting');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setFormStatus('success');
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          organization: '',
          serviceCategory: '',
          specificService: '',
          participantsCount: '1',
          preferredDate: '',
          preferredTime: '',
          additionalRequirements: '',
          howDidYouHear: '',
          agreeToTerms: false
        });
        setFormStatus(null);
      }, 5000);
    } catch (error) {
      setFormStatus('error');
    }
  };
  
  // Get minimum date (tomorrow)
  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };
  
  // Add animation styles
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes blob {
        0% { transform: translate(0px, 0px) scale(1); }
        33% { transform: translate(30px, -50px) scale(1.1); }
        66% { transform: translate(-20px, 20px) scale(0.9); }
        100% { transform: translate(0px, 0px) scale(1); }
      }
      
      .animate-blob {
        animation: blob 7s infinite;
      }
      
      .animation-delay-2000 {
        animation-delay: 2s;
      }
      
      .animation-delay-4000 {
        animation-delay: 4s;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  return (
    <div className="relative bg-gray-50/80 min-h-screen">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-0 -left-4 w-96 h-96 bg-gradient-to-br from-blue-600/40 via-indigo-500/40 to-sky-500/40 rounded-full mix-blend-soft-light filter blur-2xl opacity-90 animate-blob"></div>
        <div className="absolute top-1/4 -right-4 w-96 h-96 bg-gradient-to-br from-sky-500/40 via-blue-600/40 to-indigo-500/40 rounded-full mix-blend-soft-light filter blur-2xl opacity-90 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-gradient-to-br from-blue-500/40 via-blue-500/40 to-sky-500/40 rounded-full mix-blend-soft-light filter blur-2xl opacity-90 animate-blob animation-delay-4000"></div>
        
        {/* Grid Pattern using CSS gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/[0.07] to-transparent"></div>
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(99, 102, 241, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(99, 102, 241, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px'
          }}
        ></div>
      </div>

      <PageHero 
        title="Book Your Session" 
        subtitle="Fill out the form below to book a training session or consultation with our expert team."
      />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          {formStatus === 'success' && (
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm text-green-800 p-6 rounded-xl mb-8 animate-fadeIn shadow-xl border border-green-500/20">
              <div className="flex items-center">
                <div className="bg-green-500 bg-opacity-20 rounded-full p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-700 mb-2">Booking Request Submitted!</h3>
                  <p className="text-green-700">Thank you for your booking request. We'll contact you within 24 hours to confirm your session.</p>
                </div>
              </div>
            </div>
          )}
          
          {/* Error message */}
          {formStatus === 'error' && (
            <div className="bg-red-50 text-red-800 p-6 rounded-xl mb-8 animate-fadeIn shadow-xl border border-red-200">
              <div className="flex items-center">
                <div className="bg-red-100 rounded-full p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Something went wrong</h3>
                  <p>We couldn't process your booking request. Please try again or contact us directly.</p>
                </div>
              </div>
            </div>
          )}
          
          {/* Booking Form */}
          <div className="backdrop-blur-sm bg-white/60 rounded-2xl p-8 shadow-xl border border-white/20">
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">Book Your Session</h2>
              <div className="flex items-center text-gray-500 text-sm">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                All fields marked with * are required
              </div>
            </div>
            
            {/* Form Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div className="stagger-item animate-fadeIn group">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-600 mb-2 group-focus-within:text-primary transition-colors">Full Name *</label>
                <div className="relative">
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/50 border ${errors.fullName ? 'border-red-500' : 'border-gray-200'} rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300`}
                    placeholder="John Doe"
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 to-blue-400/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
                {errors.fullName && <p className="mt-1 text-sm text-red-500 error-message">{errors.fullName}</p>}
              </div>
              
              <div className="stagger-item animate-fadeIn group">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2 group-focus-within:text-primary transition-colors">Email Address *</label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/50 border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300`}
                    placeholder="john@example.com"
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 to-blue-400/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
                {errors.email && <p className="mt-1 text-sm text-red-500 error-message">{errors.email}</p>}
              </div>
              
              <div className="stagger-item animate-fadeIn group">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-600 mb-2 group-focus-within:text-primary transition-colors">Phone Number *</label>
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/50 border ${errors.phone ? 'border-red-500' : 'border-gray-200'} rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300`}
                    placeholder="+255 123 456 789"
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 to-blue-400/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
                {errors.phone && <p className="mt-1 text-sm text-red-500 error-message">{errors.phone}</p>}
              </div>
              
              <div className="stagger-item animate-fadeIn group">
                <label htmlFor="organization" className="block text-sm font-medium text-gray-600 mb-2 group-focus-within:text-primary transition-colors">Organization/Company</label>
                <div className="relative">
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/50 border ${errors.organization ? 'border-red-500' : 'border-gray-200'} rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300`}
                    placeholder="Company Name (Optional)"
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 to-blue-400/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              </div>
              
              {/* Service Selection */}
              <div className="stagger-item animate-fadeIn group">
                <label htmlFor="serviceCategory" className="block text-sm font-medium text-gray-600 mb-2 group-focus-within:text-primary transition-colors">Service Category *</label>
                <div className="relative">
                  <select
                    id="serviceCategory"
                    name="serviceCategory"
                    value={formData.serviceCategory}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/50 border ${errors.serviceCategory ? 'border-red-500' : 'border-gray-200'} rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300`}
                  >
                    <option value="" className="bg-gray-800 text-white">Select a category</option>
                    {serviceCategories.map(category => (
                      <option key={category.name} value={category.name} className="bg-gray-800 text-white">{category.name}</option>
                    ))}
                  </select>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 to-blue-400/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
                {errors.serviceCategory && <p className="mt-1 text-sm text-red-500 error-message">{errors.serviceCategory}</p>}
              </div>
              
              <div className="stagger-item animate-fadeIn group">
                <label htmlFor="specificService" className="block text-sm font-medium text-gray-600 mb-2 group-focus-within:text-primary transition-colors">Specific Service *</label>
                <div className="relative">
                  <select
                    id="specificService"
                    name="specificService"
                    value={formData.specificService}
                    onChange={handleChange}
                    disabled={!formData.serviceCategory}
                    className={`w-full px-4 py-3 bg-white/50 border ${errors.specificService ? 'border-red-500' : 'border-gray-200'} rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300 ${!formData.serviceCategory ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <option value="">Select a service</option>
                    {availableServices.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 to-blue-400/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
                {errors.specificService && <p className="mt-1 text-sm text-red-500 error-message">{errors.specificService}</p>}
              </div>
              
              <div className="stagger-item animate-fadeIn group">
                <label htmlFor="participantsCount" className="block text-sm font-medium text-gray-600 mb-2 group-focus-within:text-primary transition-colors">Number of Participants</label>
                <div className="relative">
                  <select
                    id="participantsCount"
                    name="participantsCount"
                    value={formData.participantsCount}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/50 border ${errors.participantsCount ? 'border-red-500' : 'border-gray-200'} rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300`}
                  >
                    {[1, 2, 3, 4, 5, '6-10', '11-20', '21-50', '50+'].map(count => (
                      <option key={count} value={count}>{count}</option>
                    ))}
                  </select>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 to-blue-400/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              </div>
              
              {/* Scheduling */}
              <div className="stagger-item animate-fadeIn group">
                <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-600 mb-2 group-focus-within:text-primary transition-colors">Preferred Date *</label>
                <div className="relative">
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    min={getMinDate()}
                    className={`w-full px-4 py-3 bg-white/50 border ${errors.preferredDate ? 'border-red-500' : 'border-gray-200'} rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300`}
                    style={{ colorScheme: 'light' }}
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 to-blue-400/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
                {errors.preferredDate && <p className="mt-1 text-sm text-red-500 error-message">{errors.preferredDate}</p>}
              </div>
              
              <div className="stagger-item animate-fadeIn group">
                <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-600 mb-2 group-focus-within:text-primary transition-colors">Preferred Time *</label>
                <div className="relative">
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/50 border ${errors.preferredTime ? 'border-red-500' : 'border-gray-200'} rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300`}
                  >
                    <option value="">Select a time</option>
                    <option value="Morning (9:00 AM - 12:00 PM)">Morning (9:00 AM - 12:00 PM)</option>
                    <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                    <option value="Evening (5:00 PM - 8:00 PM)">Evening (5:00 PM - 8:00 PM)</option>
                  </select>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 to-blue-400/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
                {errors.preferredTime && <p className="mt-1 text-sm text-red-500 error-message">{errors.preferredTime}</p>}
              </div>
            </div>
            
            {/* Additional Information */}
            <div className="mt-8 stagger-item animate-fadeIn group">
              <label htmlFor="additionalRequirements" className="block text-sm font-medium text-gray-600 mb-2 group-focus-within:text-primary transition-colors">Additional Requirements or Questions</label>
              <div className="relative">
                <textarea
                  id="additionalRequirements"
                  name="additionalRequirements"
                  value={formData.additionalRequirements}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full px-4 py-3 bg-white/50 border ${errors.additionalRequirements ? 'border-red-500' : 'border-gray-200'} rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300`}
                  placeholder="Tell us about any specific requirements or questions you have..."
                ></textarea>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 to-blue-400/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </div>
            
            <div className="mt-6 stagger-item animate-fadeIn group">
              <label htmlFor="howDidYouHear" className="block text-sm font-medium text-gray-600 mb-2 group-focus-within:text-primary transition-colors">How did you hear about us?</label>
              <div className="relative">
                <select
                  id="howDidYouHear"
                  name="howDidYouHear"
                  value={formData.howDidYouHear}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/50 border ${errors.howDidYouHear ? 'border-red-500' : 'border-gray-200'} rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300`}
                >
                  <option value="">Select an option</option>
                  <option value="Search Engine">Search Engine</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Friend or Colleague">Friend or Colleague</option>
                  <option value="Advertisement">Advertisement</option>
                  <option value="Event">Event</option>
                  <option value="Other">Other</option>
                </select>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 to-blue-400/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </div>
            
            {/* Terms and Conditions */}
            <div className="mt-8 stagger-item animate-fadeIn group">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="agreeToTerms"
                    name="agreeToTerms"
                    type="checkbox"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="w-4 h-4 bg-gray-50 border border-gray-200 rounded focus:ring-primary focus:ring-offset-gray-800"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="agreeToTerms" className="text-gray-600">
                    I agree to the <a href="/terms" className="text-blue-400 hover:text-blue-300 underline">Terms and Conditions</a> and <a href="/privacy" className="text-blue-400 hover:text-blue-300 underline">Privacy Policy</a>
                  </label>
                  {errors.agreeToTerms && <p className="mt-1 text-sm text-red-500 error-message">{errors.agreeToTerms}</p>}
                </div>
              </div>
            </div>
            
            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                disabled={formStatus === 'submitting' || formStatus === 'success'}
                className={`w-full py-4 px-6 rounded-lg font-medium text-white ${
                  formStatus === 'success' 
                    ? 'bg-green-600 hover:bg-green-700' 
                    : 'bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90'
                } transition-all duration-300 flex items-center justify-center hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-primary/25`}
                onClick={handleSubmit}
              >
                {formStatus === 'submitting' ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : formStatus === 'success' ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Booking Submitted
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                    </svg>
                    Submit Booking Request
                  </>
                )}
              </button>
            </div>
          </div>
          
          {/* What happens next section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="backdrop-blur-sm bg-white/40 rounded-xl p-6 shadow-lg border border-white/20 transform hover:-translate-y-1 transition-all duration-300">
              <div className="bg-primary/10 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Review Request</h3>
              <p className="text-gray-600">We'll review your booking request and check availability for your preferred date and time.</p>
            </div>
            
            <div className="backdrop-blur-sm bg-white/40 rounded-xl p-6 shadow-lg border border-white/20 transform hover:-translate-y-1 transition-all duration-300">
              <div className="bg-primary/10 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Confirmation Email</h3>
              <p className="text-gray-600">You'll receive a confirmation email within 24 hours with details about your session.</p>
            </div>
            
            <div className="backdrop-blur-sm bg-white/40 rounded-xl p-6 shadow-lg border border-white/20 transform hover:-translate-y-1 transition-all duration-300">
              <div className="bg-primary/10 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Final Details</h3>
              <p className="text-gray-600">Our team will contact you to discuss any specific requirements and finalize the details.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking; 