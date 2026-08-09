import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeTicker from './components/MarqueeTicker';
import CoreActivities from './components/CoreActivities';
import MeetTeam from './components/MeetTeam';
import VolunteerMonth from './components/VolunteerMonth';
import Activities from './components/Activities';
import Blogs from './components/Blogs';
import Donate from './components/Donate';
import Volunteer from './components/Volunteer';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [showTeamPage, setShowTeamPage] = useState(false);

  if (showTeamPage) {
    return (
      <div className="bg-bg text-ink overflow-x-hidden min-h-screen font-sans scroll-smooth flex flex-col">
        <Navbar />
        <div className="flex-grow pt-32 pb-16 px-6 container mx-auto max-w-[1180px]">
          {/* Back button */}
          <button 
            onClick={() => setShowTeamPage(false)}
            className="mb-8 flex items-center gap-2 text-muted hover:text-ink transition-colors font-bold text-xs uppercase tracking-widest cursor-pointer"
          >
            ← Back to Home
          </button>
          
          {/* Team component that occupies full space */}
          <MeetTeam fullPage={true} /> 
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-bg text-ink overflow-x-hidden min-h-screen font-sans scroll-smooth">
      <Navbar />
      <Hero />
      
      <MarqueeTicker />
      
      {/* About Us Section */}
      <section id="about" className="section-wrapper border-t-0 pt-12 md:pt-16">
        <div className="section-container">
          <CoreActivities />
          <div className="mt-12 flex justify-center">
            <button 
              onClick={() => setShowTeamPage(true)}
              className="btn-outline"
            >
              Know more about us
            </button>
          </div>
        </div>
      </section>
      
      <VolunteerMonth />
      <Activities />
      <Blogs />
      <Donate />
      <Volunteer />
      <Contact />
      <Footer />
    </div>
  );
}
