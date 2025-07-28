import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const education = [
    {
      degree: "Bachelor of Technology (CSE - Cyber Security)",
      institution: "CVR College of Engineering, Hyderabad",
      period: "2022–2026",
      grade: "CGPA: 8.4",
      coursework: "OOPs (Java), Database Systems, Web Technologies, Network Security",
      icon: "fas fa-graduation-cap",
      color: "electric"
    },
    {
      degree: "Intermediate Education",
      institution: "Alphores Junior College, Karimnagar",
      period: "2020–2022",
      grade: "Percentage: 86%",
      coursework: "",
      icon: "fas fa-school",
      color: "neon-green"
    },
    {
      degree: "SSC Education",
      institution: "Vivekananda Residential School",
      period: "2019–2020",
      grade: "Percentage: 83%",
      coursework: "",
      icon: "fas fa-book",
      color: "neon-pink"
    }
  ];

  const certifications = [
    {
      title: "Google Cybersecurity Professional Certificate",
      provider: "Coursera",
      icon: "fab fa-google"
    },
    {
      title: "Oracle Database Programming",
      provider: "SQL/PLSQL, Database Design",
      icon: "fas fa-database"
    },
    {
      title: "Cybersecurity Specializations",
      provider: "Palo Alto Networks, Fortinet, Zscaler",
      icon: "fas fa-shield-alt"
    },
    {
      title: "ML for Cybersecurity Bootcamp",
      provider: "C-DAC - FutureSkills Prime",
      icon: "fas fa-brain"
    }
  ];

  return (
    <section id="education" ref={ref} className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Education & <span className="text-neon-green">Certifications</span></h2>
          <div className="w-24 h-1 bg-electric mx-auto"></div>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="space-y-6">
            <motion.h3 
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-2xl font-semibold text-neon-green mb-6"
            >
              Education
            </motion.h3>
            
            {education.map((edu, index) => (
              <motion.div 
                key={edu.degree}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
                className="bg-slate-dark/50 p-6 rounded-lg card-hover"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${edu.color === 'electric' ? 'bg-electric' : edu.color === 'neon-green' ? 'bg-neon-green' : 'bg-neon-pink'} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <i className={`${edu.icon} text-white`}></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{edu.degree}</h4>
                    <p className="text-neon-green">{edu.institution}</p>
                    <p className="text-gray-400">{edu.period} | {edu.grade}</p>
                    {edu.coursework && (
                      <p className="text-sm text-gray-300 mt-2">Relevant Coursework: {edu.coursework}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <motion.h3 
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-2xl font-semibold text-neon-green mb-6"
            >
              Certifications
            </motion.h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={cert.title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  className="bg-slate-dark/50 p-4 rounded-lg flex items-center space-x-4 card-hover"
                >
                  <i className={`${cert.icon} text-2xl ${
                    index === 0 ? 'text-electric' :
                    index === 1 ? 'text-neon-green' :
                    index === 2 ? 'text-neon-purple' :
                    'text-electric'
                  }`}></i>
                  <div>
                    <h4 className="font-semibold">{cert.title}</h4>
                    <p className="text-sm text-gray-400">{cert.provider}</p>
                  </div>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-6 text-center"
              >
                <a 
                  href="/certificates"
                  className="inline-block bg-electric hover:bg-electric/90 text-slate-dark font-semibold px-6 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-electric/20"
                >
                  View All Certificates
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
