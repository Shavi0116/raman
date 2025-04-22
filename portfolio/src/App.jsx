import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import CertificatesSection from './components/CertificatesSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import AchievementsSection from './components/AchievementsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="scroll-smooth font-sans">
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificatesSection />
      <AchievementsSection/>
      <EducationSection />
      <ContactSection />
      <Footer/>
    </div>
  );
}

export default App;