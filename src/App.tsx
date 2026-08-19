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
  const [activePage, setActivePage] = useState<'home' | 'team' | 'activities' | 'blogs' | 'donate'>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  if (activePage === 'team') {
    return (
      <div className="bg-bg text-ink overflow-x-hidden min-h-screen font-sans scroll-smooth flex flex-col">
        <Navbar onNavigate={setActivePage} />
        <div className="flex-grow">
          <MeetTeam onBack={() => setActivePage('home')} /> 
        </div>
        <Footer />
      </div>
    );
  }

  if (activePage === 'activities') {
    return (
      <div className="bg-bg text-ink overflow-x-hidden min-h-screen font-sans scroll-smooth flex flex-col">
        <Navbar onNavigate={setActivePage} />
        <div className="flex-grow">
          <ActivitiesPage onBack={() => setActivePage('home')} />
        </div>
        <Footer />
      </div>
    );
  }

  if (activePage === 'blogs') {
    return (
      <div className="bg-bg text-ink overflow-x-hidden min-h-screen font-sans scroll-smooth flex flex-col">
        <Navbar onNavigate={setActivePage} />
        <div className="flex-grow">
          <BlogsPage onBack={() => setActivePage('home')} />
        </div>
        <Footer />
      </div>
    );
  }

  if (activePage === 'donate') {
    return (
      <div className="bg-bg text-ink overflow-x-hidden min-h-screen font-sans scroll-smooth flex flex-col">
        <Navbar onNavigate={setActivePage} />
        <div className="flex-grow">
          <DonatePage onBack={() => setActivePage('home')} />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-bg text-ink overflow-x-hidden min-h-screen font-sans scroll-smooth">
      <Navbar onNavigate={setActivePage} transparentOnTop={true} />
      <Hero onDonateClick={() => setActivePage('donate')} />
      
      {/* About Us Section */}
      <section id="about" className="section-wrapper border-t-0 pt-12 md:pt-16">
        <div className="section-container">
          <CoreActivities />
          <div className="mt-12 flex justify-center">
            <button 
              onClick={() => setActivePage('team')}
              className="btn-outline"
            >
              Know more about us
            </button>
          </div>
        </div>
      </section>
      
      <VolunteerMonth />
      <Activities onKnowMore={() => setActivePage('activities')} />
      <Blogs onKnowMore={() => setActivePage('blogs')} />
      <Donate onDonateClick={() => setActivePage('donate')} />
      <Adoption />
      <Volunteer />
      <Contact />
      <Footer />
    </div>
  );
}
