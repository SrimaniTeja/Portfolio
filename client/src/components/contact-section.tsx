import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const contactInfo = [
    {
      title: "Email",
      value: "srimanitejaejjagiri@gmail.com",
      icon: "fas fa-envelope",
      color: "electric",
      href: "mailto:srimanitejaejjagiri@gmail.com"
    },
    {
      title: "Phone",
      value: "+91 8897229413",
      icon: "fas fa-phone",
      color: "neon-green",
      href: "tel:+918897229413"
    },
    {
      title: "LinkedIn",
      value: "Connect with me",
      icon: "fab fa-linkedin",
      color: "neon-purple",
      href: "https://www.linkedin.com/in/srimani-teja-ejjagiri-8b7b46257/"
    }
  ];

  const socialLinks = [
    {
      icon: "fab fa-github",
      color: "electric",
      href: "https://github.com/SrimaniTeja"
    },
    {
      icon: "fab fa-linkedin",
      color: "neon-green",
      href: "https://www.linkedin.com/in/srimani-teja-ejjagiri-8b7b46257/"
    },
    {
      icon: "fas fa-envelope",
      color: "neon-purple",
      href: "mailto:srimanitejaejjagiri@gmail.com"
    }
  ];

  return (
    <section id="contact" ref={ref} className="py-20 bg-slate-dark/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get In <span className="text-neon-green">Touch</span></h2>
          <div className="w-24 h-1 bg-electric mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about cybersecurity and development.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
          {contactInfo.map((contact, index) => (
            <motion.div 
              key={contact.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
              className="bg-slate-dark/50 p-8 rounded-lg card-hover"
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.4 + 0.2 * index, duration: 0.5, type: "spring" }}
                className={`w-16 h-16 ${
                  contact.color === 'electric' ? 'bg-electric' :
                  contact.color === 'neon-green' ? 'bg-neon-green' :
                  'bg-neon-purple'
                } rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                <i className={`${contact.icon} text-2xl text-white`}></i>
              </motion.div>
              <h3 className="text-xl font-semibold text-neon-green mb-2">{contact.title}</h3>
              <a 
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-gray-300 hover:text-neon-green transition-colors"
              >
                {contact.value}
              </a>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center"
        >
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a 
                key={social.icon}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.3, type: "spring" }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`w-12 h-12 ${
                  social.color === 'electric' ? 'bg-electric hover:bg-blue-600' :
                  social.color === 'neon-green' ? 'bg-neon-green hover:bg-emerald-600' :
                  'bg-neon-purple hover:bg-purple-600'
                } rounded-full flex items-center justify-center transition-colors`}
              >
                <i className={`${social.icon} text-white text-xl`}></i>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
