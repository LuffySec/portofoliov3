import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  activeSection: string;
}

const Navbar = ({ activeSection }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'skills', label: 'Skills' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
      isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-3 sm:px-4 md:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Navigation Links - Hidden on mobile, shown on larger screens */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className={`text-sm lg:text-base font-medium transition-smooth hover:text-primary ${
                  activeSection === item.id 
                    ? 'text-primary text-glow' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile Navigation Menu */}
          <div className="flex md:hidden items-center space-x-2 sm:space-x-3">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className={`text-xs font-medium transition-smooth hover:text-primary px-1 sm:px-2 ${
                  activeSection === item.id 
                    ? 'text-primary text-glow' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Name/Brand - Shortened on mobile */}
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            <span className="hidden sm:inline">Fawwaz Aryasatya</span>
            <span className="sm:hidden">Fawwaz</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;