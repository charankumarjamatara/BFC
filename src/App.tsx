import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoreActivities from './components/CoreActivities';
import MeetTeam from './components/MeetTeam';
import VolunteerMonth from './components/VolunteerMonth';
import Activities from './components/Activities';
import ActivitiesPage from './components/ActivitiesPage';
import Blogs from './components/Blogs';
import BlogsPage from './components/BlogsPage';
import Donate from './components/Donate';
import DonatePage from './components/DonatePage';
import Adoption from './components/Adoption';
import Volunteer from './components/Volunteer';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activePage, setActivePage] = useState<'home' | 'team' | 'activities' | 'blogs' | 'donate'>(() => {
    const hash = window.location.hash.replace('#', '');
    if (['team', 'activities', 'blogs', 'donate'].includes(hash)) {
      return hash as any;
    }
    return 'home';
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  useEffect(() => {
    // Replace initial state so we have a valid state object
    window.history.replaceState({ page: activePage }, '', window.location.hash || window.location.pathname);
    
    const handlePopState = (event: PopStateEvent) => {
      if (event.state && event.state.page) {
        setActivePage(event.state.page);
      } else {
        const hash = window.location.hash.replace('#', '');
        if (['team', 'activities', 'blogs', 'donate'].includes(hash)) {
          setActivePage(hash as any);
        } else {
          setActivePage('home');
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: 'home' | 'team' | 'activities' | 'blogs' | 'donate') => {
    if (page !== activePage) {
      if (page === 'home') {
        window.history.pushState({ page }, '', window.location.pathname);
      } else {
        window.history.pushState({ page }, '', `#${page}`);
      }
      setActivePage(page);
    }
  };

  if (activePage === 'team') {
    return (
      <div className="bg-bg text-ink overflow-x-hidden min-h-screen font-sans scroll-smooth flex flex-col">
        <Navbar onNavigate={navigateTo} />
        <div className="flex-grow">
          <MeetTeam onBack={() => navigateTo('home')} /> 
        </div>
        <Footer />
      </div>
    );
  }

  if (activePage === 'activities') {
    return (
      <div className="bg-bg text-ink overflow-x-hidden min-h-screen font-sans scroll-smooth flex flex-col">
        <Navbar onNavigate={navigateTo} />
        <div className="flex-grow">
          <ActivitiesPage onBack={() => navigateTo('home')} />
        </div>
        <Footer />
      </div>
    );
  }

  if (activePage === 'blogs') {
    return (
      <div className="bg-bg text-ink overflow-x-hidden min-h-screen font-sans scroll-smooth flex flex-col">
        <Navbar onNavigate={navigateTo} />
        <div className="flex-grow">
          <BlogsPage onBack={() => navigateTo('home')} />
        </div>
        <Footer />
      </div>
    );
  }

  if (activePage === 'donate') {
    return (
      <div className="bg-bg text-ink overflow-x-hidden min-h-screen font-sans scroll-smooth flex flex-col">
        <Navbar onNavigate={navigateTo} />
        <div className="flex-grow">
          <DonatePage onBack={() => navigateTo('home')} />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-bg text-ink overflow-x-hidden min-h-screen font-sans scroll-smooth">
      <Navbar onNavigate={navigateTo} transparentOnTop={true} />
      <Hero onDonateClick={() => navigateTo('donate')} />
      
      {/* About Us Section */}
      <section id="about" className="section-wrapper border-t-0">
        <div className="section-container">
          <CoreActivities />
          <div className="mt-12 flex justify-center">
            <button 
              onClick={() => navigateTo('team')}
              className="btn-outline"
            >
              Know more about us
            </button>
          </div>
        </div>
      </section>
      
      <VolunteerMonth />
      <Activities onKnowMore={() => navigateTo('activities')} />
      <Blogs onKnowMore={() => navigateTo('blogs')} />
      <Donate onDonateClick={() => navigateTo('donate')} />
      <Adoption />
      <Volunteer />
      <Contact />
      <Footer />
    </div>
  );
}
