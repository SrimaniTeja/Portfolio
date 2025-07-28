import { useState } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isGlitching, setIsGlitching] = useState(false);

  const triggerGlitchAndScroll = (sectionId: string) => {
    // Trigger screen glitch effect
    setIsGlitching(true);
    
    // Add glitch effect to entire screen
    document.body.classList.add('screen-glitch');
    
    setTimeout(() => {
      // Remove glitch and scroll after 0.2s
      setIsGlitching(false);
      document.body.classList.remove('screen-glitch');
      
      const element = document.getElementById(sectionId);
      if (element) {
        const navHeight = 80;
        const targetPosition = element.offsetTop - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }, 200);
    
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Achievements", id: "achievements" },
    { label: "Education", id: "education" },
    { label: "Contact", id: "contact" }
  ];

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/attached_assets/EJJAGIRI SRIMANI TEJA_Doc_1753720987976.pdf';
    link.download = 'Srimani_Teja_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-dark/95 backdrop-blur-md border-b border-electric/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-bold text-neon-green"
          >
            SE
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => triggerGlitchAndScroll(item.id)}
                className="nav-link hover:text-neon-green transition-colors"
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * navItems.length }}
              onClick={downloadResume}
              className="bg-electric hover:bg-electric/90 text-slate-dark font-semibold px-4 py-2 rounded-lg transition-all hover:shadow-lg hover:shadow-electric/20 ml-4"
            >
              RESUME
            </motion.button>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (navItems.length + 1) }}
              className="ml-4"
            >
              <ThemeToggle />
            </motion.div>
          </div>
          
          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-dark/95 border-t border-electric/20 mt-4"
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => triggerGlitchAndScroll(item.id)}
                  className="block hover:text-neon-green transition-colors w-full text-left"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={downloadResume}
                className="bg-electric hover:bg-electric/90 text-slate-dark font-semibold px-4 py-2 rounded-lg transition-all hover:shadow-lg hover:shadow-electric/20 w-full"
              >
                RESUME
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
