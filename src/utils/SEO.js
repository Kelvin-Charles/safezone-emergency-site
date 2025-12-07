/**
 * SEO Utility Component
 * Helps manage dynamic meta tags for different pages
 */
export const updateSEO = (options = {}) => {
  const {
    title = 'Safezone Tech - Digital Solutions & ICT Training in Tanzania',
    description = 'Safezone Tech delivers cloud services, software development, cybersecurity and ICT training to empower African businesses through digital innovation.',
    keywords = 'Safezone Tech, IT services Tanzania, cloud services, software development, ICT training, cybersecurity',
    image = '/logo512.png',
    url = typeof window !== 'undefined' ? window.location.href : 'https://safezonetz.com',
    type = 'website',
    noindex = false
  } = options;

  // Update document title
  document.title = title;

  // Helper function to update or create meta tag
  const updateMetaTag = (attribute, value, content) => {
    let element = document.querySelector(`meta[${attribute}="${value}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attribute, value);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  // Update or create meta tags
  updateMetaTag('name', 'title', title);
  updateMetaTag('name', 'description', description);
  updateMetaTag('name', 'keywords', keywords);
  
  // Robots meta tag
  if (noindex) {
    updateMetaTag('name', 'robots', 'noindex, nofollow');
  } else {
    updateMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
  }

  // Open Graph tags
  updateMetaTag('property', 'og:title', title);
  updateMetaTag('property', 'og:description', description);
  updateMetaTag('property', 'og:type', type);
  updateMetaTag('property', 'og:url', url);
  updateMetaTag('property', 'og:image', image);

  // Twitter Card tags
  updateMetaTag('name', 'twitter:title', title);
  updateMetaTag('name', 'twitter:description', description);
  updateMetaTag('name', 'twitter:image', image);
  updateMetaTag('name', 'twitter:url', url);

  // Update canonical URL
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', url);
};

/**
 * Add structured data (JSON-LD) to page
 */
export const addStructuredData = (data) => {
  // Remove existing structured data for this page
  const existingScript = document.querySelector('script[type="application/ld+json"][data-seo="true"]');
  if (existingScript) {
    existingScript.remove();
  }

  // Add new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-seo', 'true');
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

/**
 * Breadcrumb structured data
 */
export const addBreadcrumbs = (items) => {
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
  addStructuredData(breadcrumbData);
};

