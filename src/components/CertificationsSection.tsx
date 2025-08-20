import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Award, Calendar, ExternalLink } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

// Ensure assets resolve correctly in production builds (e.g., GitHub Pages)
const certImage = (n: number) => new URL(`../assets/${n}.png`, import.meta.url).href;

const certifications = [
  {
    title: "Medallion For Excellent (MOE) Bidang Teknologi Keamanan Siber",
    issuer: "Pusat Prestasi Nasional (Purpresnas)",
    date: "2025",
    image: certImage(1),
    description: "National recognition for outstanding achievements in cybersecurity technology, demonstrating exceptional skills and dedication in the field.",
    skills: ["Cyber Security", "CTF"]
  },
  {
    title: "BNSP Certified Cyber Security",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    date: "2025",
    image: certImage(2),
    description: "Professional national certification that validates cybersecurity competencies and meets Indonesian professional standards.",
    skills: ["Cyber Security", "Threat Intelligence"]
  },
  {
    title: "Practical Web Hacking",
    issuer: "The Cyber Mentor (TCM) Security Academy",
    date: "2024",
    image: certImage(3),
    description: "Hands-on training in web application hacking techniques, covering vulnerability assessment and exploitation methods.",
    skills: ["Web Exploitation"]
  },
  {
    title: "Juara 3 Web Design Competition",
    issuer: "Politeknik Negeri Ujung Pandang (PNUP)",
    date: "2024",
    image: certImage(4),
    description: "Third place achievement in web design competition, showcasing creative frontend development and design skills.",
    skills: ["Web Design", "Frontend"]
  },
  {
    title: "Cyber Security Officer",
    issuer: "Telkom Indonesia",
    date: "2024",
    image: certImage(5),
    description: "Certification as a cybersecurity officer with focus on SOC analysis, security engineering, and incident response.",
    skills: ["Cyber Security", "SOC Analyst", "Security Engineer"]
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2024",
    image: certImage(6),
    description: "Certification in responsive web design principles, ensuring websites work seamlessly across all devices and screen sizes.",
    skills: ["Web Development", "Frontend"]
  },
  {
    title: "Security Engineer",
    issuer: "TryHackMe",
    date: "2024",
    image: certImage(7),
    description: "Comprehensive security engineering training covering secure development lifecycle and threat management practices.",
    skills: ["Cyber Security", "SDLC", "Threat & Vulnerability Management"]
  },
  {
    title: "SOC Analyst Level 1",
    issuer: "TryHackMe",
    date: "2024",
    image: certImage(8),
    description: "Level 1 SOC analyst certification focusing on threat hunting, SIEM operations, and incident handling procedures.",
    skills: ["SOC Analyst", "Threat Hunting", "SIEM", "SOAR", "Incident Handling"]
  },
  {
    title: "Cyber Security Analyst (CySA+) Training",
    issuer: "Dion Training",
    date: "2024",
    image: certImage(9),
    description: "CySA+ training program covering data analysis, incident response, and threat analysis methodologies.",
    skills: ["Data Analysis", "Incident Response", "Threat Analysis"]
  },
  {
    title: "Ethical Hacking Essentials | EHE",
    issuer: "EC-Council",
    date: "2023",
    image: certImage(10),
    description: "Foundation certification in ethical hacking, providing core understanding of cybersecurity principles and techniques.",
    skills: ["Ethical Hacking", "Cyber Security"]
  },
  {
    title: "SOC Analyst",
    issuer: "LetsDefend",
    date: "2023",
    image: certImage(11),
    description: "Practical SOC analyst training with hands-on experience in security incident handling and response.",
    skills: ["SOC Analyst", "Incident Handling"]
  },
  {
    title: "Practical Ethical Hacking",
    issuer: "The Cyber Mentor (TCM) Security Academy",
    date: "2023",
    image: certImage(12),
    description: "Hands-on ethical hacking course teaching practical techniques and methodologies for security testing.",
    skills: ["Ethical Hacking"]
  },
  {
    title: "Open Source Intelligence (OSINT) Training",
    issuer: "The Cyber Mentor (TCM) Security Academy",
    date: "2023",
    image: certImage(13),
    description: "OSINT training covering information gathering techniques and reconnaissance methods for security assessments.",
    skills: ["OSINT"]
  },
  {
    title: "Linux Privilege Escalation",
    issuer: "The Cyber Mentor (TCM) Security Academy",
    date: "2023",
    image: certImage(14),
    description: "Specialized training in Linux privilege escalation techniques and system security testing.",
    skills: ["Privilege Escalation"]
  },
  {
    title: "Practical Bug Bounty",
    issuer: "The Cyber Mentor (TCM) Security Academy",
    date: "2023",
    image: certImage(15),
    description: "Practical bug bounty training covering web vulnerability discovery and responsible disclosure practices.",
    skills: ["Bug Bounty", "Web Exploitation"]
  },
  {
    title: "Cyber Threat Hunting Training",
    issuer: "Active Countermeasures",
    date: "2024",
    image: certImage(16),
    description: "Threat hunting training program teaching proactive techniques to detect hidden security threats.",
    skills: ["Threat Hunt"]
  },
  {
    title: "Red Teaming",
    issuer: "TryHackMe",
    date: "2023",
    image: certImage(17),
    description: "Red teaming certification covering attack simulation and security testing methodologies.",
    skills: ["Red Team"]
  }
];

const CertificationsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
    triggerOnce: true
  });

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === certifications.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === certifications.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? certifications.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentCert = certifications[currentIndex];

  return (
    <section 
      ref={ref}
      id="certifications" 
      className={`py-20 bg-background transition-all duration-1000 ${
        isIntersecting 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 delay-200 ${
          isIntersecting 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-accent bg-clip-text text-transparent text-shadow-lg">
              Certifications
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that validate my expertise in modern technologies
          </p>
        </div>

        <div className={`max-w-6xl mx-auto transition-all duration-700 delay-400 ${
          isIntersecting 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          {/* Main slideshow */}
          <div 
            className="relative overflow-hidden rounded-2xl bg-gradient-dark p-1"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="bg-card rounded-xl">
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8">
                {/* Certificate Image */}
                <div className="relative">
                  <div className="aspect-video rounded-lg overflow-hidden bg-muted/20 group">
                    <img 
                      src={currentCert.image} 
                      alt={currentCert.title}
                      className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-primary/10 opacity-0 group-hover:opacity-100 transition-smooth"></div>
                  </div>
                  
                  {/* Navigation arrows */}
                  <button 
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-card/80 backdrop-blur-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-smooth"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-card/80 backdrop-blur-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-smooth"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Certificate Details */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2 text-primary">
                        <Award className="w-5 h-5" />
                        <span className="text-sm font-medium">{currentCert.issuer}</span>
                      </div>
                      <Badge variant="outline" className="text-accent border-accent">
                        {currentCert.date}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground text-shadow-lg">
                      {currentCert.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {currentCert.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-2">Skills Validated</h4>
                      <div className="flex flex-wrap gap-2">
                        {currentCert.skills.map((skill, index) => (
                          <Badge 
                            key={index} 
                            variant="secondary"
                            className="bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-smooth"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 pt-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">Issued {currentCert.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm">Issued {currentCert.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dot navigation */}
          <div className={`flex justify-center gap-2 mt-8 transition-all duration-700 delay-600 ${
            isIntersecting 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            {certifications.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-smooth ${
                  index === currentIndex 
                    ? 'bg-primary glow-primary' 
                    : 'bg-muted hover:bg-primary/50'
                }`}
              />
            ))}
          </div>

          {/* Mini certificates preview */}
          <div className={`grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-9 xl:grid-cols-17 gap-3 sm:gap-4 mt-8 sm:mt-12 transition-all duration-700 delay-800 ${
            isIntersecting 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className={`cursor-pointer transition-smooth hover-scale ${
                  index === currentIndex 
                    ? 'ring-2 ring-primary glow-primary' 
                    : 'hover:ring-1 hover:ring-primary/50'
                }`}
                onClick={() => goToSlide(index)}
              >
                <CardContent className="p-3">
                  <div className="aspect-video rounded overflow-hidden mb-2">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xs font-medium text-center line-clamp-2">
                    {cert.title}
                  </h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
