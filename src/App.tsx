import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeTicker from './components/MarqueeTicker';
import About from './components/About';
import CoreActivities from './components/CoreActivities';
import MeetTeam from './components/MeetTeam';
import VolunteerMonth from './components/VolunteerMonth';
import Activities from './components/Activities';
import Blogs from './components/Blogs';
import Donate from './components/Donate';
import Volunteer from './components/Volunteer';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EmergencyBar from './components/EmergencyBar';

export default function App() {
  return (
    <div className="bg-bg text-ink overflow-x-hidden min-h-screen font-sans scroll-smooth">
      <Navbar />
      <Hero />
      
      <MarqueeTicker />
      
      {/* About Us Section */}
      <section id="about" className="px-6 container mx-auto max-w-[1180px] relative">
        <CoreActivities />
        <div className="grid lg:grid-cols-12 gap-8 items-stretch pb-12 md:pb-16">
          <About />
          <MeetTeam />
        </div>
      </section>
      
      <VolunteerMonth />
      <Activities />
      <Blogs />
      <Donate />
      <Volunteer />
      <Contact />
      <Footer />

      {/* Floating Rescue Helpline Bar */}
      <EmergencyBar />
    </div>
  );
}
