import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setAnimateSkills(true), 500);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const programmingSkills = [
    { name: "Java", icon: "fab fa-java", gradient: "from-orange-500 to-orange-300" },
    { name: "JavaScript", icon: "fab fa-js-square", gradient: "from-yellow-400 to-yellow-200" },
    { name: "React.js", icon: "fab fa-react", gradient: "from-blue-400 to-blue-200" },
    { name: "Node.js", icon: "fab fa-node-js", gradient: "from-green-400 to-green-200" },
    { name: "HTML/CSS", icon: "fab fa-html5", gradient: "from-red-400 to-red-200" },
    { name: "Python", icon: "fab fa-python", gradient: "from-blue-300 to-blue-100" }
  ];

  const securityTools = [
    { name: "Malware Analysis", icon: "fas fa-virus", gradient: "from-electric to-neon-green" },
    { name: "Network Security", icon: "fas fa-network-wired", gradient: "from-neon-green to-electric" },
    { name: "Web App Security", icon: "fas fa-shield-alt", gradient: "from-neon-purple to-electric" },
    { name: "Vulnerability Assessment", icon: "fas fa-search", gradient: "from-electric to-neon-purple" }
  ];

  const technologies = [
    { name: "Git/GitHub", icon: "fab fa-github", gradient: "from-gray-400 to-gray-200" },
    { name: "MongoDB", icon: "fas fa-leaf", gradient: "from-green-400 to-green-200" },
    { name: "Wireshark", icon: "fas fa-wifi", gradient: "from-blue-400 to-blue-200" },
    { name: "Burp Suite", icon: "fas fa-bug", gradient: "from-orange-400 to-orange-200" },
    { name: "Nmap", icon: "fas fa-broadcast-tower", gradient: "from-purple-400 to-purple-200" },
    { name: "Kali Linux", icon: "fab fa-linux", gradient: "from-red-400 to-red-200" },
    { name: "IntelliJ", icon: "fas fa-code", gradient: "from-orange-500 to-orange-300" },
    { name: "IDA", icon: "fas fa-cog", gradient: "from-purple-500 to-purple-300" },
    { name: "VS Code", icon: "fas fa-file-code", gradient: "from-blue-500 to-blue-300" }
  ];

  return (
    <section id="skills" ref={ref} className="py-20 bg-slate-dark/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Technical <span className="text-neon-green glitch-text" data-text="Skills">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-electric mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="bg-slate-dark/50 p-6 rounded-lg card-hover"
          >
            <h3 className="text-xl font-semibold text-neon-green mb-4 flex items-center">
              <i className="fas fa-code mr-3"></i>Programming
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {programmingSkills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className={`group bg-gradient-to-br ${skill.gradient} p-3 rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl`}
                >
                  <div className="flex items-center justify-center flex-col text-white">
                    <i className={`${skill.icon} text-2xl mb-2`}></i>
                    <span className="font-medium text-sm text-center">{skill.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Cybersecurity */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-slate-dark/50 p-6 rounded-lg card-hover"
          >
            <h3 className="text-xl font-semibold text-neon-green mb-4 flex items-center">
              <i className="fas fa-shield-alt mr-3"></i>Cybersecurity
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {securityTools.map((tool, index) => (
                <motion.div 
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  className={`group bg-gradient-to-br ${tool.gradient} p-3 rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl`}
                >
                  <div className="flex items-center justify-center flex-col text-white">
                    <i className={`${tool.icon} text-2xl mb-2`}></i>
                    <span className="font-medium text-sm text-center leading-tight">{tool.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-slate-dark/50 p-6 rounded-lg card-hover"
          >
            <h3 className="text-xl font-semibold text-neon-green mb-4 flex items-center">
              <i className="fas fa-tools mr-3"></i>Tools & Tech
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {technologies.map((tech, index) => (
                <motion.div 
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1.0 + index * 0.05, duration: 0.3 }}
                  className={`group bg-gradient-to-br ${tech.gradient} p-3 rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl`}
                >
                  <div className="flex items-center justify-center flex-col text-white">
                    <i className={`${tech.icon} text-2xl mb-2`}></i>
                    <span className="font-medium text-sm text-center leading-tight">{tech.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}