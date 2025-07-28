import { motion } from "framer-motion";
import { useState } from "react";

interface GlitchButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function GlitchButton({ children, onClick, className = "" }: GlitchButtonProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  const handleClick = () => {
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 300);
    if (onClick) onClick();
  };

  return (
    <motion.button
      onClick={handleClick}
      className={`${className} ${isGlitching ? 'glitch-effect' : ''} relative overflow-hidden`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      {isGlitching && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-neon-pink via-electric to-neon-green opacity-20"
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 0.5, 0]
          }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.button>
  );
}