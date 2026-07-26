import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CoreActivities from './components/CoreActivities';
import MeetTeam from './components/MeetTeam';
import VolunteerMonth from './components/VolunteerMonth';
import Activities from './components/Activities';
import Blogs from './components/Blogs';
import Donate from './components/Donate';
import QRDonate from './components/QRDonate';
import Volunteer from './components/Volunteer';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#FAF8F3] text-[#232323] overflow-x-hidden min-h-screen font-sans scroll-smooth">
      <Navbar />
      <Hero />
      
      {/* Spacer */}
      <div className="h-28"></div>
      
      {/* About Us Section */}
      <section id="about" className="px-6 container mx-auto max-w-[1440px] relative">
        <CoreActivities />
        <div className="grid lg:grid-cols-12 gap-10 items-stretch pb-24">
          <About />
          <MeetTeam />
        </div>
      </section>
      
      <VolunteerMonth />
      <Activities />
      <Blogs />
      <Donate />
      <QRDonate />
      <Volunteer />
      <Contact />
      <Footer />
    </div>
  );
}
