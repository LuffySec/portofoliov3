import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile-image.jpg';

const HeroSection = () => {
  const scrollToExperience = () => {
    const element = document.getElementById('experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden pt-20 sm:pt-24 lg:pt-28 xl:pt-32 pb-20 sm:pb-24 lg:pb-28 xl:pb-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 animate-fade-in"></div>
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-center order-1 lg:order-1 mt-8 sm:mt-12 lg:mt-0 animate-fade-in-delay-1">
            <div className="relative w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 rounded-full overflow-hidden glow-soft animate-float">
              <img 
                src={profileImage} 
                alt="Fawwaz Aryasatya" 
                className="w-full h-full object-cover transition-smooth hover-scale"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-20 mix-blend-overlay"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-primary/20 rounded-full blur-xl animate-glow-pulse animate-fade-in-delay-2"></div>
            <div className="absolute -bottom-6 sm:-bottom-8 -left-6 sm:-left-8 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 bg-accent/10 rounded-full blur-2xl animate-fade-in-delay-3"></div>
          </div>

          {/* About Me Content */}
          <div className="text-center lg:text-left space-y-4 sm:space-y-6 animate-fade-in-delay-2 order-2 lg:order-2 mt-6 sm:mt-8 lg:mt-0">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight animate-fade-in-delay-3">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Hello, I'm
                </span>
                <br />
                <span className="text-foreground text-shadow-lg">
                  Fawwaz Aryasatya
                </span>
              </h1>
              
              <h2 className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-semibold text-primary text-glow animate-fade-in-delay-4">
                Cyber Security Enthusiast & CTF Player
              </h2>
            </div>

            <p className="text-base sm:text-lg lg:text-lg xl:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-in-delay-5 mt-3 sm:mt-4 lg:mt-6">
            Passionate Cyber Security with 3+ years of focused study and 1+ year of competitive CTF experience. I’ve competed in 50+ CTFs with my team STELK_CSC, sharpening skills in digital forensic and web exploitation while staying calm under pressure. I’m currently leveling up in backend development and exploring AI/ML for security use cases.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 animate-fade-in-delay-6">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:glow-primary transition-all duration-300 ease-in-out text-lg px-8"
                onClick={scrollToExperience}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 ease-in-out text-lg px-8"
                onClick={() => window.open('https://www.linkedin.com/in/fawwaz-aryasatya-8b3967290/', '_blank')}
              >
                LinkedIn Profile
              </Button>
            </div>

            {/* Blog Link - Same color as primary button, not too big */}
            <div className="flex justify-center lg:justify-start pt-4 animate-fade-in-delay-7">
              <Button 
                variant="default" 
                size="lg" 
                className="bg-gradient-primary hover:glow-primary transition-all duration-300 ease-in-out text-lg px-8 shadow-lg hover:shadow-xl transform hover:scale-105"
                onClick={() => window.open('https://hack4funacademy.medium.com/', '_blank')}
              >
                <span className="mr-2 text-xl">📝</span>
                Read My Blog
                <span className="ml-2 text-sm opacity-80">→</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;