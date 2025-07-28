import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function SectionDivider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    if (isInView) {
      // Trigger glitch effect when section comes into view
      const timer = setTimeout(() => {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 500);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const triggerGlitch = () => {
    setGlitch(true);
    setTimeout(() => setGlitch(false), 500);
  };

  return (
    <div className="my-8 px-6">
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, scaleX: 0 }}
        animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`section-divider ${glitch ? 'glitch-effect' : ''}`}
        style={{
          height: '3px',
          background: 'linear-gradient(90deg, transparent 0%, #8B5CF6 20%, #06B6D4 50%, #10B981 80%, transparent 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
        onClick={triggerGlitch}
      >
        {/* Enhanced glitch effect overlay */}
        <motion.div 
          className="absolute inset-0"
          animate={glitch ? {
            background: [
              'linear-gradient(90deg, #FF0080 0%, #00FFFF 50%, #FF0080 100%)',
              'linear-gradient(90deg, #00FFFF 0%, #FF0080 50%, #00FFFF 100%)',
              'linear-gradient(90deg, #8B5CF6 0%, #06B6D4 50%, #10B981 100%)'
            ],
            scaleY: [1, 2, 0.5, 1],
            filter: [
              'hue-rotate(0deg) saturate(1)',
              'hue-rotate(180deg) saturate(2)',
              'hue-rotate(0deg) saturate(1)'
            ]
          } : {}}
          transition={{ duration: 0.5, times: [0, 0.5, 1] }}
        />
      </motion.div>
    </div>
  );
}