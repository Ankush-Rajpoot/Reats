import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const LandingNavbar = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10"
    >
      <div className="w-full mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img 
              src="/favicon_io/favicon-32x32.png" 
              alt="Reats" 
              className="w-8 h-8 group-hover:scale-110 transition-transform"
            />
            <span className="text-xl font-bold tracking-tight">Reats</span>
          </Link>

          {/* Get Started Button */}
          <Link
            to="/register"
            className="group relative mr-2"
          >
            {/* Animated gradient border - comet effect */}
            <div className="absolute inset-[-1px] rounded-lg opacity-100 pointer-events-none overflow-hidden">
              <div 
                className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%]"
                style={{
                  background: 'conic-gradient(from 0deg, transparent, transparent, #ffffff, hsl(210, 100%, 80%), hsl(210, 100%, 60%), hsl(210, 100%, 40%), transparent, transparent)',
                  animation: 'getstarted-border-spin 5s linear infinite'
                }}
              />
            </div>
            
            {/* Inner background - black with border */}
            <div 
              className="relative z-10 px-6 py-2.5 bg-[#000000] text-white rounded-lg font-medium overflow-hidden transition-all hover:bg-[#0a0a0a] border border-white/20"
            >
              <span className="relative z-10 flex items-center text-sm gap-2">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                Get Started
              </span>
            </div>
            
            {/* CSS Keyframe Animation */}
            <style>{`
              @keyframes getstarted-border-spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}</style>
          </Link>
        </div>
      </div>
    </motion.header>
  );
};

export default LandingNavbar;
