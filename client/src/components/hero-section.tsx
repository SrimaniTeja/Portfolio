import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const targetPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section ref={ref} id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-electric rounded-full animate-pulse delay-100"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-neon-purple rounded-full animate-pulse delay-200"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-neon-pink rounded-full animate-pulse delay-300"></div>
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Hi, I'm <span className="text-neon-green glitch-text" data-text="Srimani Teja">Srimani Teja</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 mb-4"
            >
              Cybersecurity Developer
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg text-gray-400 mb-8 leading-relaxed"
            >
              Computer Science undergrad with cybersecurity training seeking to apply my full-stack development skills in software engineering. I love building applications that are as secure as they are functional.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-electric hover:bg-electric/90 text-slate-dark font-semibold px-8 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-electric/20"
              >
                View My Work
              </button>
              <button 
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/attached_assets/EJJAGIRI SRIMANI TEJA_Doc_1753720987976.pdf';
                  link.download = 'Srimani_Teja_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="border-2 border-neon-green text-neon-green hover:bg-neon-green hover:text-slate-dark font-semibold px-8 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-neon-green/20"
              >
                Download Resume
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-electric text-electric hover:bg-electric hover:text-slate-dark font-semibold px-8 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-electric/20"
              >
                Get In Touch
              </button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center"
          >
            <div className="relative inline-block">
              <motion.div 
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(0, 255, 255, 0.5)",
                    "0 0 30px rgba(128, 0, 255, 0.8)",
                    "0 0 20px rgba(255, 0, 255, 0.5)"
                  ]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-electric via-neon-purple to-neon-pink p-1 relative overflow-hidden"
              >
                <div className="w-full h-full rounded-full flex items-center justify-center relative overflow-hidden">
                  <img 
                    src="/attached_assets/WhatsApp Image 2025-07-28 at 23.44.05_9158ffd0_1753730799847.jpg"
                    alt="Srimani Teja Ejjagiri"
                    className="w-full h-full rounded-full object-cover"
                    style={{
                      filter: 'contrast(1.1) brightness(1.05) saturate(1.1) drop-shadow(0 0 20px rgba(0,255,255,0.3))'
                    }}
                    onError={(e) => {
                      console.log('Image failed to load, showing fallback');
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-full rounded-full bg-gradient-to-br from-neon-purple to-electric items-center justify-center">
                    <div className="text-6xl text-white">
                      <i className="fas fa-user-shield"></i>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Decorative elements */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.7, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-neon-green rounded-full"
              />
              <motion.div 
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.6, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-electric rounded-full"
              />
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [1, 0.8, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute top-8 -left-8 w-4 h-4 bg-neon-pink rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
