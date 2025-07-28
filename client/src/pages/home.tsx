import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import AchievementsSection from "@/components/achievements-section";
import EducationSection from "@/components/education-section";
import ContactSection from "@/components/contact-section";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  return (
    <div className="min-h-screen gradient-bg text-white">
      <Navigation />
      <HeroSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <SkillsSection />
      <SectionDivider />
      <ProjectsSection />
      <SectionDivider />
      <AchievementsSection />
      <SectionDivider />
      <EducationSection />
      <SectionDivider />
      <ContactSection />
      
      <SectionDivider />
      
      {/* Footer */}
      <footer className="bg-navy py-8 border-t border-electric/20 relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">&copy; 2025 Srimani Teja Ejjagiri. All rights reserved.</p>
          <p className="text-sm text-gray-500 mt-2">Built with passion for cybersecurity and clean code.</p>
          
          {/* Matrix rain effect */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="matrix-rain absolute top-0 left-0 w-full h-full opacity-10">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-pulse"
                  style={{
                    left: `${i * 5}%`,
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: `${2 + Math.random() * 3}s`
                  }}
                >
                  {Array.from({ length: 10 }).map((_, j) => (
                    <div
                      key={j}
                      className="text-neon-green text-xs"
                      style={{ 
                        opacity: Math.random(),
                        marginBottom: '2px'
                      }}
                    >
                      {String.fromCharCode(33 + Math.floor(Math.random() * 94))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
