import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" ref={ref} className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-neon-green glitch-text" data-text="Me">Me</span>
          </h2>
          <div className="w-24 h-1 bg-electric mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Hey there! I’m currently persuing my BTech in Computer Science with a Cybersecurity focus at CVR College of Engineering. I’m passionate about building applications that don’t just work well but stay secure, too. I’ve explored from malware analysis to network security through CTFs, Projects, Hackathons and Academics. Lately, I’ve been fascinated by how secure software powers industries like insurance — from fraud detection to risk assessment. I love learning new things, solving challenges, and turning ideas into real, secure solutions.
            </p>
            

          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-4"
          >
            <div className="bg-slate-dark/50 p-6 rounded-lg card-hover">
              <h3 className="text-xl font-semibold text-neon-green mb-4">Key Details</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt text-electric w-6"></i>
                  <span>Karimnagar, Telangana, India</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-graduation-cap text-electric w-6"></i>
                  <span>BTech - CSE(CS) at CVR College of Engineering</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-shield-alt text-electric w-6"></i>
                  <span>Cybersecurity Enthusiast</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-code text-electric w-6"></i>
                  <span>Full-Stack Developer</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-birthday-cake text-electric w-6"></i>
                  <span>DOB: October 25, 2004</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
