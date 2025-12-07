import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams, useLocation, useHistory } from 'react-router-dom';
import PageHero from '../components/PageHero';

// Sample news data - in a real app, you would fetch this from an API
const newsData = [
  {
    id: 1,
    title: "The Future of Digital Skills in 2023",
    excerpt: "Discover the most in-demand digital skills that will shape the job market in the coming year.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Sed vitae enim eget nisl aliquam aliquam. Sed vitae enim eget nisl aliquam aliquam. Sed vitae enim eget nisl aliquam aliquam.\n\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.\n\nVestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.",
    category: "Digital Trends",
    author: "Mohamed Mfuu",
    date: "June 15, 2023",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    featured: true,
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "How AI is Transforming Education",
    excerpt: "Artificial intelligence is revolutionizing how we learn and teach. Here's what you need to know.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.",
    category: "Technology",
    author: "Ezekiel Eliapenda",
    date: "May 28, 2023",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    featured: true,
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "5 Essential Skills Every Web Developer Needs in 2023",
    excerpt: "Stay ahead of the curve with these must-have skills for modern web development.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.",
    category: "Web Development",
    author: "Gift Mshana",
    date: "April 12, 2023",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80",
    featured: false,
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "The Rise of Remote Learning Platforms",
    excerpt: "How online education platforms are changing the way we acquire new skills.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.",
    category: "Education",
    author: "Rogers Aaron",
    date: "March 5, 2023",
    image: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    featured: false,
    readTime: "4 min read"
  },
  {
    id: 5,
    title: "Why Data Analysis is the Skill of the Future",
    excerpt: "The growing importance of data literacy in today's digital economy.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.",
    category: "Data Science",
    author: "Joel Mwakyusa",
    date: "February 18, 2023",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    featured: false,
    readTime: "8 min read"
  },
  {
    id: 6,
    title: "The Growing Demand for Cybersecurity Professionals",
    excerpt: "As cyber threats increase, so does the need for skilled security experts.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.",
    category: "Cybersecurity",
    author: "Mohamed Mfuu",
    date: "January 30, 2023",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    featured: false,
    readTime: "5 min read"
  },
  {
    id: 7,
    title: "How to Build a Successful Career in UX Design",
    excerpt: "Expert tips for breaking into the field of user experience design.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.",
    category: "Design",
    author: "Ezekiel Eliapenda",
    date: "January 15, 2023",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    featured: false,
    readTime: "6 min read"
  },
  {
    id: 8,
    title: "The Impact of Blockchain on Digital Skills Training",
    excerpt: "How blockchain technology is creating new opportunities and challenges in skills development.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.",
    category: "Blockchain",
    author: "Gift Mshana",
    date: "December 10, 2022",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    featured: false,
    readTime: "7 min read"
  }
];

// Add readTime and longer content to all news items
newsData.forEach(item => {
  if (!item.readTime) {
    item.readTime = `${Math.floor(Math.random() * 10) + 3} min read`;
  }
  if (item.content.length < 500) {
    item.content += "\n\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.\n\nVestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.";
  }
});

// Background Effects Component
const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient Orbs with more vibrant blue theme */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-gradient-to-br from-blue-600/70 via-indigo-500/70 to-sky-500/70 rounded-full mix-blend-soft-light filter blur-2xl opacity-90 animate-blob"></div>
      <div className="absolute top-1/4 -right-4 w-96 h-96 bg-gradient-to-br from-cyan-500/70 via-blue-600/70 to-indigo-500/70 rounded-full mix-blend-soft-light filter blur-2xl opacity-90 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-gradient-to-br from-sky-500/70 via-blue-500/70 to-cyan-500/70 rounded-full mix-blend-soft-light filter blur-2xl opacity-90 animate-blob animation-delay-4000"></div>
      
      {/* Floating Shapes with more visible gradients */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-600/30 to-indigo-500/30 border-4 border-blue-500/40 rounded-lg rotate-12 animate-float backdrop-blur-sm"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-sky-500/30 to-blue-600/30 border-4 border-sky-500/40 rounded-full animate-float animation-delay-2000 backdrop-blur-sm"></div>
      <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-br from-cyan-500/30 to-blue-600/30 border-4 border-cyan-500/40 rotate-45 animate-float animation-delay-4000 backdrop-blur-sm"></div>
      
      {/* Grid Pattern with stronger blue tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      {/* Additional decorative elements with higher visibility */}
      <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-to-br from-blue-700/40 to-indigo-600/40 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-gradient-to-br from-sky-600/40 to-blue-700/40 rounded-lg blur-xl animate-pulse animation-delay-2000"></div>
      
      {/* Extra light effects with higher opacity */}
      <div className="absolute top-1/4 right-1/2 w-48 h-48 bg-blue-500/50 rounded-full filter blur-3xl mix-blend-soft-light"></div>
      <div className="absolute bottom-1/4 left-1/2 w-48 h-48 bg-indigo-500/50 rounded-full filter blur-3xl mix-blend-soft-light"></div>
    </div>
  );
};

// Article Modal Component
const ArticleModal = ({ article, isOpen, onClose, onReadMoreClick }) => {
  const [animateIn, setAnimateIn] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const shareMenuRef = useRef(null);
  
  useEffect(() => {
    if (isOpen) {
      // Prevent body scrolling when modal is open
      document.body.style.overflow = 'hidden';
      // Trigger animation after a small delay
      setTimeout(() => setAnimateIn(true), 50);
    } else {
      // Re-enable scrolling when modal is closed
      document.body.style.overflow = 'auto';
      setAnimateIn(false);
      setShowShareOptions(false);
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  
  // Close share menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (shareMenuRef.current && !shareMenuRef.current.contains(event.target)) {
        setShowShareOptions(false);
      }
    }
    
    // Add event listener only when share options are shown
    if (showShareOptions) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [showShareOptions]);
  
  // Share functions
  const shareArticle = (platform) => {
    const shareUrl = window.location.origin + `/news/${article.id}`;
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank');
        break;
      case 'email':
        window.open(`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(`Check out this article: ${shareUrl}`)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(shareUrl)
          .then(() => {
            setCopySuccess(true);
            setTimeout(() => setCopySuccess(false), 2000);
          })
          .catch(err => {
            console.error('Failed to copy: ', err);
          });
        break;
      default:
        break;
    }
    
    // Close share menu after action
    setShowShareOptions(false);
  };
  
  if (!isOpen) return null;
  
  // Format content with paragraphs
  const formattedContent = article.content.split('\n\n').map((paragraph, index) => (
    <p key={index} className="mb-6 text-gray-200 leading-relaxed">{paragraph}</p>
  ));
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
         style={{ opacity: animateIn ? 1 : 0 }}
         onClick={onClose}>
      <div 
        className={`bg-gradient-to-b from-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] shadow-2xl border border-white/10 transition-all duration-500 ${animateIn ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        onClick={e => e.stopPropagation()}>
        
        {/* Article Header Image */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
          
          {/* Close Button */}
          <button 
            className="absolute top-4 right-4 bg-black/70 text-white p-2 rounded-full hover:bg-black transition-colors shadow-lg"
            onClick={onClose}
            aria-label="Close article"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Category Badge */}
          <div className="absolute bottom-4 left-4">
            <span className="inline-block px-4 py-1.5 bg-blue-600 text-white text-xs font-semibold rounded-full shadow-lg">
              {article.category}
            </span>
          </div>
        </div>
        
        {/* Article Content */}
        <div className="overflow-y-auto p-6 md:p-8 bg-gradient-to-b from-gray-900/90 to-gray-800/90 backdrop-blur-xl" style={{ maxHeight: 'calc(90vh - 20rem)' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">{article.title}</h2>
          
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-700">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-blue-600/50 flex items-center justify-center text-blue-200 mr-4 shadow-md">
                {article.author.split(' ').map(name => name[0]).join('')}
              </div>
              <div>
                <p className="text-white font-medium">{article.author}</p>
                <div className="flex items-center text-gray-400 text-sm mt-1">
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <button className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
              </button>
              <button className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="prose prose-lg prose-invert max-w-none">
            {formattedContent}
          </div>
        </div>
        
        {/* Article Footer */}
        <div className="border-t border-white/10 p-6 bg-gradient-to-b from-gray-900/80 to-gray-800/80 backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <button className="flex items-center text-white bg-blue-600/20 px-4 py-2 rounded-full hover:bg-blue-600/30 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                </svg>
                Like
              </button>
              <button className="flex items-center text-white bg-blue-600/20 px-4 py-2 rounded-full hover:bg-blue-600/30 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                </svg>
                Comment
              </button>
            </div>
            
            <div className="flex items-center space-x-3 relative">
              {/* Share Button */}
              <div className="relative" ref={shareMenuRef}>
                <button 
                  className="flex items-center text-white bg-blue-600/20 px-4 py-2 rounded-full hover:bg-blue-600/30 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowShareOptions(!showShareOptions);
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                  Share
                </button>
                
                {/* Share Options Dropdown */}
                {showShareOptions && (
                  <div className="absolute right-0 bottom-full mb-2 bg-gray-800 rounded-xl shadow-xl border border-gray-700 p-2 w-48 z-20">
                    <button 
                      onClick={() => shareArticle('twitter')}
                      className="flex items-center p-2 hover:bg-gray-700 rounded-lg text-white w-full text-left"
                    >
                      <svg className="w-5 h-5 mr-3 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                      Twitter
                    </button>
                    <button 
                      onClick={() => shareArticle('facebook')}
                      className="flex items-center p-2 hover:bg-gray-700 rounded-lg text-white w-full text-left"
                    >
                      <svg className="w-5 h-5 mr-3 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      Facebook
                    </button>
                    <button 
                      onClick={() => shareArticle('linkedin')}
                      className="flex items-center p-2 hover:bg-gray-700 rounded-lg text-white w-full text-left"
                    >
                      <svg className="w-5 h-5 mr-3 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      LinkedIn
                    </button>
                    <button 
                      onClick={() => shareArticle('email')}
                      className="flex items-center p-2 hover:bg-gray-700 rounded-lg text-white w-full text-left"
                    >
                      <svg className="w-5 h-5 mr-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Email
                    </button>
                    <button 
                      onClick={() => shareArticle('copy')}
                      className="flex items-center p-2 hover:bg-gray-700 rounded-lg text-white w-full text-left"
                    >
                      <svg className="w-5 h-5 mr-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                      Copy Link
                    </button>
                  </div>
                )}
                
                {/* Copy Success Toast */}
                {copySuccess && (
                  <div className="absolute right-0 bottom-full mb-2 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-30">
                    Link copied!
                  </div>
                )}
              </div>
              
              <button className="flex items-center text-white bg-blue-600/20 px-4 py-2 rounded-full hover:bg-blue-600/30 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
                Save
              </button>
            </div>
          </div>
          
          {/* Related Articles Teaser */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <h3 className="text-white font-semibold mb-3">You might also like</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {newsData.filter(item => item.category === article.category && item.id !== article.id).slice(0, 3).map((relatedArticle) => (
                <div 
                  key={relatedArticle.id} 
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-xl p-3 border border-white/10 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300 cursor-pointer"
                  onClick={() => {
                    onClose();
                    setTimeout(() => {
                      onReadMoreClick(relatedArticle);
                    }, 300);
                  }}
                >
                  <p className="text-blue-400 text-xs mb-1">{relatedArticle.category}</p>
                  <p className="text-white text-sm font-medium">{relatedArticle.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Featured Article Card Component
const FeaturedArticleCard = ({ article, onReadMore }) => {
  return (
    <div className="relative group overflow-hidden rounded-2xl shadow-lg shadow-blue-200/50 hover:shadow-2xl hover:shadow-blue-300/50 h-full bg-white transition-all duration-500 transform hover:-translate-y-2">
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500 z-[5]"></div>
      <img 
        src={article.image} 
        alt={article.title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <div className="space-y-4">
          <span className="inline-block px-4 py-1.5 bg-primary text-white text-xs font-semibold rounded-full shadow-lg backdrop-blur-sm transform group-hover:scale-110 transition-transform duration-300">
          {article.category}
        </span>
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">{article.title}</h3>
          <p className="text-gray-200 mb-4 line-clamp-2 opacity-90 transform group-hover:translate-x-2 transition-transform duration-300">{article.excerpt}</p>
          <div className="flex items-center justify-between pt-4 border-t border-white/20">
            <div className="flex items-center transform group-hover:translate-x-2 transition-transform duration-300">
              <div className="w-10 h-10 rounded-full bg-primary/50 backdrop-blur-sm flex items-center justify-center text-white font-semibold mr-3 shadow-lg group-hover:shadow-primary/50">
              {article.author.split(' ').map(name => name[0]).join('')}
            </div>
              <div>
                <span className="text-white text-sm font-medium block">{article.author}</span>
                <span className="text-gray-300 text-xs">{article.date} · {article.readTime}</span>
              </div>
          </div>
          <button 
            onClick={() => onReadMore(article)}
              className="text-white hover:text-primary transition-colors font-medium flex items-center group/btn px-4 py-2 rounded-full hover:bg-white/10 backdrop-blur-sm"
          >
            Read More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover/btn:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Regular Article Card Component
const ArticleCard = ({ article, onReadMore }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg shadow-blue-200/50 hover:shadow-2xl hover:shadow-blue-300/50 transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col group">
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500 z-[5]"></div>
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-block px-4 py-1.5 bg-primary text-white text-xs font-semibold rounded-full shadow-lg backdrop-blur-sm transform group-hover:scale-110 transition-transform duration-300">
            {article.category}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow group-hover:bg-gray-50/50 transition-colors duration-500">
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2 transform group-hover:translate-x-2 transition-transform">{article.title}</h3>
        <p className="text-gray-600 mb-6 line-clamp-2 flex-grow transform group-hover:translate-x-2 transition-transform duration-300">{article.excerpt}</p>
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center transform group-hover:translate-x-2 transition-transform duration-300">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold mr-3 shadow-md group-hover:shadow-lg group-hover:shadow-primary/30 transition-shadow duration-300">
              {article.author.split(' ').map(name => name[0]).join('')}
            </div>
            <div>
              <span className="text-gray-800 text-sm font-medium block">{article.author}</span>
              <span className="text-gray-500 text-xs">{article.date} · {article.readTime}</span>
            </div>
          </div>
          <button 
            onClick={() => onReadMore(article)}
            className="text-primary hover:text-white transition-colors font-medium flex items-center group/btn px-4 py-2 rounded-full hover:bg-primary shadow-sm hover:shadow-md"
          >
            Read
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform group-hover/btn:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

// Category Pill Component
const CategoryPill = ({ category, isActive, onClick }) => {
  return (
    <button
      onClick={() => onClick(category)}
      className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
        isActive 
          ? 'bg-primary text-white shadow-lg hover:shadow-primary/25' 
          : 'bg-white text-gray-700 hover:text-primary hover:border-primary/50 border border-gray-200 shadow hover:shadow-lg'
      }`}
    >
      {category}
    </button>
  );
};

// Main News Component
function News() {
  const { articleId } = useParams();
  const location = useLocation();
  const history = useHistory();
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredNews, setFilteredNews] = useState(newsData);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [highlightedArticleId, setHighlightedArticleId] = useState(null);
  const highlightedArticleRef = useRef(null);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribing email:', email);
      setSubscribed(true);
      setEmail('');
      setTimeout(() => {
        setSubscribed(false);
      }, 3000);
    }
  };

  // Handle URL-based article loading
  useEffect(() => {
    if (articleId) {
      const article = newsData.find(a => a.id.toString() === articleId);
      if (article) {
        setSelectedArticle(article);
        setModalOpen(true);
        setHighlightedArticleId(article.id);
      }
    }
  }, [articleId]);
  
  // Handle article selection for modal
  const handleReadMore = (article) => {
    setSelectedArticle(article);
    setModalOpen(true);
    history.push(`/news/${article.id}`);
  };
  
  // Close modal
  const handleCloseModal = () => {
    setModalOpen(false);
    history.push('/news');
    setTimeout(() => {
      setSelectedArticle(null);
      setHighlightedArticleId(null);
    }, 300);
  };
  
  // Filter news by category
  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredNews(newsData);
    } else {
      setFilteredNews(newsData.filter(article => article.category === activeCategory));
    }
  }, [activeCategory]);
  
  // Extract unique categories
  const categories = ['All', ...new Set(newsData.map(item => item.category))];
  
  // Featured articles
  const featuredArticles = newsData.filter(article => article.featured);
  
  // Modify ArticleCard to handle highlighting
  const renderArticleCard = (article) => {
    const isHighlighted = article.id.toString() === articleId;
    const cardRef = isHighlighted ? highlightedArticleRef : null;

    return (
      <div 
        ref={cardRef}
        className={`stagger-item animate-fadeIn ${
          isHighlighted ? 'ring-4 ring-primary ring-offset-4 transform scale-105 transition-all duration-1000' : ''
        }`}
      >
        <ArticleCard article={article} onReadMore={handleReadMore} />
      </div>
    );
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
      
      @keyframes float {
        0% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(5deg); }
        100% { transform: translateY(0px) rotate(0deg); }
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
      
      .bg-grid-pattern {
        background-image: linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px);
        background-size: 40px 40px;
      }
      
      .hover-card {
        position: relative;
        z-index: 1;
      }
      
      .hover-card::before {
        content: '';
        position: absolute;
        inset: -1px;
        background: linear-gradient(-45deg, #3b82f6, #60a5fa, #93c5fd);
        z-index: -1;
        border-radius: inherit;
        transition: opacity 0.3s;
        opacity: 0;
      }
      
      .hover-card:hover::before {
        opacity: 1;
      }
      
      /* ... rest of your existing animations ... */
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="relative bg-gray-50/80 min-h-screen">
      <BackgroundEffects />
      
      {/* Hero Section */}
      <PageHero 
        title="Latest News & Insights" 
        subtitle="Stay updated with the latest trends, tips, and stories in digital skills and technology."
      />
      
      {/* Update the container div to have a glass effect */}
      <div className="container mx-auto px-4 relative z-10">
        <section className="py-16 -mt-10">
          <div className="backdrop-blur-sm bg-white/40 p-8 rounded-2xl shadow-xl border border-white/20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
              <span className="w-10 h-1 bg-primary mr-4"></span>
          Featured Articles
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredArticles.map((article, index) => (
                <div key={article.id} className="stagger-item animate-fadeIn hover-card">
              <FeaturedArticleCard article={article} onReadMore={handleReadMore} />
            </div>
          ))}
            </div>
        </div>
      </section>
      
        {/* Categories Section with glass effect */}
        <section className="py-8">
          <div className="backdrop-blur-sm bg-white/40 p-8 rounded-2xl shadow-xl border border-white/20">
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map(category => (
            <CategoryPill 
              key={category} 
              category={category} 
              isActive={activeCategory === category}
              onClick={setActiveCategory}
            />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((article) => renderArticleCard(article))}
            </div>
        </div>
      </section>
      
        {/* Newsletter Section with enhanced gradient */}
        <section className="py-16">
          <div className="bg-gradient-to-r from-primary via-blue-500 to-secondary rounded-2xl p-10 relative overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500">
            {/* Add animated shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32 blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-slow"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-white/90 mb-8">
              Subscribe to our newsletter to receive the latest news, articles, and resources directly in your inbox.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-grow px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                required
              />
              <button
                type="submit"
                  className="px-6 py-3 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                {subscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
            
            <p className="text-white/70 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
        </div>
      
      {/* Article Modal */}
      {selectedArticle && (
        <ArticleModal 
          article={selectedArticle} 
          isOpen={modalOpen} 
          onClose={handleCloseModal}
          onReadMoreClick={handleReadMore}
        />
      )}
    </div>
  );
}

export default News; 