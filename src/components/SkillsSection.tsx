import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code2, 
  Database, 
  Cloud, 
  Smartphone, 
  Palette, 
  Wrench,
  Brain,
  Users,
  TrendingUp,
  Shield,
  Bug,
  Search,
  Monitor,
  Activity,
  Puzzle,
  Eye,
  GraduationCap,
  Heart
} from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const skillCategories = [
  {
    title: "Cyber Security",
    icon: Shield,
    description: "Comprehensive cybersecurity skills from ethical hacking to threat analysis",
    color: "primary",
    skills: [
      "Ethical Hacking",
      "Threat Hunting",
      "Incident Response",
      "Vulnerability Assessment",
      "Penetration Testing",
      "SOC Analysis",
      "Threat Intelligence",
      "Security Engineering"
    ]
  },
  {
    title: "Web Security & Exploitation",
    icon: Bug,
    description: "Web application security testing and vulnerability exploitation",
    color: "secondary",
    skills: [
      "Web Exploitation",
      "Bug Bounty",
      "OWASP Top 10",
      "Cross-Site Scripting (XSS)",
      "SQL Injection",
      "Web Application Firewall",
      "API Security Testing"
    ]
  },
  {
    title: "Web Development",
    icon: Code2,
    description: "Frontend and responsive web development skills",
    color: "accent",
    skills: [
      "HTML5 & CSS3",
      "JavaScript (ES6+)",
      "Responsive Design",
      "Web Design",
      "Frontend Development",
      "UI/UX Principles",
      "Cross-browser Compatibility"
    ]
  },
  {
    title: "OSINT & Reconnaissance",
    icon: Search,
    description: "Open source intelligence and information gathering",
    color: "destructive",
    skills: [
      "OSINT Techniques",
      "Information Gathering",
      "Social Media Intelligence",
      "Domain Reconnaissance",
      "Network Discovery",
      "Threat Intelligence Gathering"
    ]
  },
  {
    title: "System Security",
    icon: Monitor,
    description: "Operating system security and privilege escalation",
    color: "default",
    skills: [
      "Linux Security",
      "Privilege Escalation",
      "System Hardening",
      "Access Control",
      "Security Monitoring",
      "Log Analysis"
    ]
  },
  {
    title: "Security Operations",
    icon: Activity,
    description: "Security operations center and incident handling",
    color: "outline",
    skills: [
      "SOC Operations",
      "SIEM Management",
      "SOAR Implementation",
      "Incident Handling",
      "Threat Response",
      "Security Monitoring"
    ]
  }
];

const softSkills = [
  {
    title: "Analytical Thinking",
    description: "Strong analytical skills for threat analysis and incident investigation",
    icon: Brain,
    color: "primary"
  },
  {
    title: "Problem Solving",
    description: "Creative problem-solving approach to security challenges",
    icon: Puzzle,
    color: "secondary"
  },
  {
    title: "Attention to Detail",
    description: "Meticulous attention to detail in security assessments",
    icon: Eye,
    color: "accent"
  },
  {
    title: "Continuous Learning",
    description: "Commitment to staying updated with latest security trends",
    icon: GraduationCap,
    color: "destructive"
  },
  {
    title: "Team Collaboration",
    description: "Effective collaboration in security team environments",
    icon: Users,
    color: "default"
  },
  {
    title: "Ethical Mindset",
    description: "Strong ethical foundation in cybersecurity practices",
    icon: Heart,
    color: "outline"
  }
];

const SkillsSection = () => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
    triggerOnce: true
  });

  const getColorClasses = (color: string) => {
    const colorMap = {
      'primary': 'border-primary/50 hover:border-primary bg-primary/5',
      'accent': 'border-accent/50 hover:border-accent bg-accent/5',
      'primary-glow': 'border-primary-glow/50 hover:border-primary-glow bg-primary-glow/5',
      'accent-glow': 'border-accent-glow/50 hover:border-accent-glow bg-accent-glow/5'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <section 
      ref={ref}
      id="skills" 
      className={`py-20 bg-gradient-dark transition-all duration-1000 ${
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
            <span className="bg-gradient-primary bg-clip-text text-transparent text-shadow-lg">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and professional capabilities
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className={`grid sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-12 sm:mb-16 transition-all duration-700 delay-400 ${
          isIntersecting 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className={`${getColorClasses(category.color)} border-2 transition-all duration-700 hover-float hover-glow group ${
                  isIntersecting 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${600 + (index * 100)}ms`
                }}
              >
                <CardHeader className="pb-4">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2">
                      <div className="p-1.5 sm:p-2 rounded-lg bg-gradient-primary">
                        <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-smooth">
                          {category.title}
                        </CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-xs sm:text-sm">
                      {category.description}
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="text-xs bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-smooth"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Soft Skills */}
        <div className={`max-w-4xl mx-auto transition-all duration-700 delay-800 ${
          isIntersecting 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Leadership & Soft Skills
            </span>
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card 
                  key={index}
                  className={`text-center bg-card/50 backdrop-blur-sm border-accent/30 hover:border-accent transition-all duration-700 hover-scale group ${
                    isIntersecting 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    transitionDelay: `${1000 + (index * 100)}ms`
                  }}
                >
                  <CardContent className="p-6 sm:p-8">
                    <div className="mb-3 sm:mb-4 mx-auto w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-accent flex items-center justify-center group-hover:glow-accent transition-smooth">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-accent-foreground" />
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold group-hover:text-accent transition-smooth">
                      {skill.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Skills Summary */}
        <div className={`max-w-3xl mx-auto mt-12 sm:mt-16 text-center transition-all duration-700 delay-1000 ${
          isIntersecting 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <Card className="bg-gradient-primary/10 border-primary/30">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-primary">
                Continuous Learning & Growth
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                I believe in staying up-to-date with the latest technologies and best practices. 
                Currently exploring AI/ML integration, Web3 technologies, and advanced cloud architectures. 
                Always excited to take on new challenges and expand my skill set.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;