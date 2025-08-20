import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, ExternalLink, BookOpen, ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const articles = [
  {
    title: "STELK_LKS CTF 2025 WriteUp",
    category: "CTF WriteUp",
    date: "April 30, 2025",
    description: "STELK_LKS CTF adalah Seleksi LKS Tingkat Sekolah SMK Telkom Makassar untuk memasuki Lomba Kompetensi Siswa Tingkat Nasional Cyber Security. Tim kami berhasil menyelesaikan berbagai challenge dengan kategori Cryptography, Forensic, Reverse Engineering, dan Web Exploitation.",
    tags: ["CTF", "Cyber Security", "WriteUp", "LKS"],
    readTime: "8 min read",
    fullArticle: "https://hack4funacademy.medium.com/"
  },
  {
    title: "ACECTF 2025 WriteUp | LuffySec | STELK_CSC",
    category: "CTF WriteUp",
    date: "February 28, 2025",
    description: "Tim kami, Stelk_CSC, berpartisipasi dalam ACECTF 2025 dan berhasil menyelesaikan 23 challenge dengan variasi kategori Cryptography, Forensic, Reverse Engineering, dan Web Exploitation. Artikel ini membahas solusi dan teknik yang digunakan.",
    tags: ["CTF", "ACECTF", "LuffySec", "WriteUp"],
    readTime: "12 min read",
    fullArticle: "https://hack4funacademy.medium.com/"
  },
  {
    title: "KashiCTF 2025 WriteUp | LuffySec | STELK_CSC",
    category: "CTF WriteUp",
    date: "February 26, 2025",
    description: "Tim kami berpartisipasi dalam KashiCTF 2025 dan berhasil menyelesaikan 10 challenge dengan variasi kategori Cryptography, Forensic, Reverse Engineering, dan Web Exploitation. Artikel ini membahas solusi dan teknik yang digunakan.",
    tags: ["CTF", "KashiCTF", "LuffySec", "WriteUp"],
    readTime: "10 min read",
    fullArticle: "https://hack4funacademy.medium.com/"
  },
  {
    title: "EHAXCTF 2025 WriteUp | LuffySec | STELK_CSC",
    category: "CTF WriteUp",
    date: "February 17, 2025",
    description: "Tim kami berpartisipasi dalam EHAXCTF 2025 dan berhasil menyelesaikan 4 challenge dengan variasi kategori Cryptography, Forensic, Reverse Engineering, dan Web Exploitation. Artikel ini membahas solusi dan teknik yang digunakan.",
    tags: ["CTF", "EHAXCTF", "LuffySec", "WriteUp"],
    readTime: "6 min read",
    fullArticle: "https://hack4funacademy.medium.com/"
  },
  {
    title: "BroncoCTF 2025 WriteUp | LuffySec | STELK_CSC",
    category: "CTF WriteUp",
    date: "February 17, 2025",
    description: "Tim kami berpartisipasi dalam BroncoCTF 2025 dan berhasil menyelesaikan 12 challenge dengan variasi kategori Cryptography, Forensic, Reverse Engineering, dan Web Exploitation. Artikel ini membahas solusi dan teknik yang digunakan.",
    tags: ["CTF", "BroncoCTF", "LuffySec", "WriteUp"],
    readTime: "9 min read",
    fullArticle: "https://hack4funacademy.medium.com/"
  },
  {
    title: "BITSCTF 2025 WriteUp | LuffySec | STELK_CSC",
    category: "CTF WriteUp",
    date: "February 11, 2025",
    description: "Tim kami berpartisipasi dalam BITSCTF 2025 dan berhasil menyelesaikan 7 challenge dengan variasi kategori Cryptography, Forensic, Reverse Engineering, dan Web Exploitation. Artikel ini membahas solusi dan teknik yang digunakan.",
    tags: ["CTF", "BITSCTF", "LuffySec", "WriteUp"],
    readTime: "7 min read",
    fullArticle: "https://hack4funacademy.medium.com/"
  },
  {
    title: "ECTF 2025 WriteUp | LuffySec | STELK_CSC",
    category: "CTF WriteUp",
    date: "February 3, 2025",
    description: "Tim kami berpartisipasi dalam ECTF 2025 dan berhasil menyelesaikan 16 challenge dengan variasi kategori Cryptography, Forensic, Reverse Engineering, dan Web Exploitation. Artikel ini membahas solusi dan teknik yang digunakan.",
    tags: ["CTF", "ECTF", "LuffySec", "WriteUp"],
    readTime: "11 min read",
    fullArticle: "https://hack4funacademy.medium.com/"
  },
  {
    title: "CyberDef Dokumentasi | Time-Based Blind SQLI",
    category: "Cyber Security",
    date: "November 8, 2024",
    description: "Artikel ini membahas tentang Time-Based Blind SQL Injection, teknik serangan yang memanfaatkan delay response untuk mengekstrak informasi dari database. Dibahas teknik, tools, dan cara mitigasi serangan ini.",
    tags: ["SQL Injection", "Cyber Security", "Penetration Testing", "Web Security"],
    readTime: "15 min read",
    fullArticle: "https://hack4funacademy.medium.com/"
  },
  {
    title: "Menguasai Reconnaissance: Metode Lengkap",
    category: "Cyber Security",
    date: "September 16, 2024",
    description: "Reconnaissance adalah langkah pertama yang dilakukan oleh pentester untuk mendapatkan kerentanan di suatu website. Artikel ini membahas metode lengkap untuk mengumpulkan informasi dan melakukan footprinting.",
    tags: ["Reconnaissance", "Penetration Testing", "OSINT", "Footprinting"],
    readTime: "18 min read",
    fullArticle: "https://hack4funacademy.medium.com/"
  }
];

const ExperienceSection = () => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
    triggerOnce: true
  });

  return (
    <section 
      ref={ref}
      id="experience" 
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
              Article/CTF WriteUp
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of my cyber security articles and CTF challenge solutions
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {articles.map((article, index) => (
            <Card 
              key={index} 
              className={`bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-700 hover-float hover-glow group cursor-pointer flex flex-col ${
                isIntersecting 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${300 + (index * 100)}ms`
              }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <BookOpen className="w-4 h-4" />
                    <span className="text-sm">{article.category}</span>
                  </div>
                  <Badge variant="outline" className="text-primary border-primary">
                    {article.readTime}
                  </Badge>
                </div>
                
                <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-smooth text-shadow-lg line-clamp-2">
                  {article.title}
                </CardTitle>
                
                <CardDescription className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{article.date}</span>
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3 flex-1">
                  {article.description}
                </p>
                
                <div className="space-y-3 mt-auto">
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-2">Tags</h4>
                    <div className="flex flex-wrap gap-1">
                      {article.tags.map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex} 
                          variant="secondary" 
                          className="text-xs bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-smooth"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <Button 
                      size="sm" 
                      className="w-full bg-gradient-primary hover:glow-primary transition-all duration-300 ease-in-out"
                      onClick={() => window.open(article.fullArticle, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Read Full Article
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Section */}
        <div className={`text-center transition-all duration-700 delay-1000 ${
          isIntersecting 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 ease-in-out text-lg px-8 py-6 group"
            onClick={() => window.open('https://hack4funacademy.medium.com/', '_blank')}
          >
            <span className="mr-2">View More Articles</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          <p className="text-muted-foreground mt-4 text-sm">
            Discover more cyber security insights and CTF write-ups on my blog
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;