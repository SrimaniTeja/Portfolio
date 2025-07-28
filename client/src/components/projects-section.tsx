import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: "SafeSurf",
      description: "Chrome extension for real-time URL monitoring and malicious site blocking using VirusTotal API with custom white and blacklisting.",
      technologies: ["JavaScript", "Chrome API", "VirusTotal"],
      date: "May 2025",
      icon: "fas fa-shield-alt",
      gradient: "from-electric to-neon-green",
      image: "/attached_assets/image_1753724397999.png",
      github: "https://github.com/SrimaniTeja/Chrome-Extension"
    },
    {
      title: "Crypto-Canvas",
      description: "Steganography system to securely embed hidden messages in images along with advanced image editing capabilities.",
      technologies: ["React", "Electron", "Steganography"],
      date: "June 2024",
      icon: "fas fa-image",
      gradient: "from-neon-purple to-electric",
      video: "/attached_assets/Crypto-Canvas - Made with Clipchamp_1753723740594.mp4",
      github: "https://github.com/SrimaniTeja/Crypto-Canvas"
    },
    {
      title: "NVS",
      description: "CLI tool for network vulnerability scanning using Nmap with XML parsing and JavaFX visualization before migrating to Python.",
      technologies: ["Java", "Nmap", "JavaFX"],
      date: "July 2025",
      icon: "fas fa-search",
      gradient: "from-neon-green to-neon-purple",
      image: "/attached_assets/image_1753724472770.png",
      github: "https://github.com/SrimaniTeja/NVS-Stage-1"
    }
  ];

  return (
    <section id="projects" ref={ref} className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="text-neon-green glitch-text" data-text="Projects">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-electric mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
              className="bg-slate-dark/50 rounded-lg overflow-hidden card-hover group cursor-pointer"
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}>
                {project.video ? (
                  <div className="relative w-full h-full">
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
                    >
                      <source src={project.video} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  </div>
                ) : project.image ? (
                  <div className="relative w-full h-full">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ) : null}
                <div className={`absolute inset-0 flex items-center justify-center ${project.video || project.image ? 'bg-black/20 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity' : ''}`}>
                  <i className={`${project.icon} text-6xl text-white`}></i>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-neon-green mb-3 group-hover:text-electric transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-300 mb-4 min-h-[4.5rem]">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={tech}
                      className={`text-xs px-2 py-1 rounded ${
                        techIndex === 0 ? 'bg-electric/20 text-electric' :
                        techIndex === 1 ? 'bg-neon-green/20 text-neon-green' :
                        'bg-neon-purple/20 text-neon-purple'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">{project.date}</span>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-electric hover:text-blue-400 transition-colors"
                  >
                    <i className="fab fa-github text-xl"></i>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
