import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { updateSEO } from './utils/SEO';

// Set default SEO for initial page load
updateSEO({
  title: 'Safezone Tech - Digital Solutions & ICT Training in Tanzania',
  description: 'Safezone Tech delivers cloud services, software development, cybersecurity and ICT training to empower African businesses through digital innovation. Based in Arusha, Tanzania.',
  keywords: 'Safezone Tech, IT services Tanzania, cloud services, software development, ICT training, cybersecurity, IT consulting, Arusha Tanzania',
  url: typeof window !== 'undefined' ? window.location.href : 'https://safezonetz.com'
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
