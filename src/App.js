import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import News from './pages/News';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Admin from './pages/Admin';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/news" component={News} />
            <Route path="/news/:articleId" component={News} />
            <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} />
            <Route path="/booking" component={Booking} />
            <Route path="/admin" component={Admin} />
        </Switch>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
    </Router>
  );
}

export default App;
