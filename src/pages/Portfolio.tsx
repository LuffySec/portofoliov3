import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import CertificationsSection from '@/components/CertificationsSection';
import SkillsSection from '@/components/SkillsSection';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'experience', 'certifications', 'skills'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar activeSection={activeSection} />
      <main>
        <HeroSection />
        <ExperienceSection />
        <CertificationsSection />
        <SkillsSection />
      </main>
      
      {/* Footer */}
      <footer className="py-6 sm:py-8 bg-card/50 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm sm:text-base text-muted-foreground">
            &copy; 2025 Fawwaz Aryasatya. Built with React, TypeScript, and passion.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;