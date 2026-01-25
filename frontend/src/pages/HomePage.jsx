import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, Zap, Shield, Target, ArrowRight, CheckCircle2 } from 'lucide-react';
import useAuthStore from '../store/authStore';
import Background from '../components/ui/Background';

const HomePage = () => {
  const { isAuthenticated } = useAuthStore();

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Analysis",
      description: "Get your ATS score in seconds with our high-performance processing engine."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Keyword Matching",
      description: "Identify missing critical keywords that recruiters are looking for."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Privacy First",
      description: "Your data is encrypted and never shared. We value your professional privacy."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <div className="relative min-h-screen text-white overflow-hidden selection:bg-white/20">
      <Background />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/40 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white/80"></span>
              </span>
              <span className="text-xs font-medium tracking-wider uppercase text-white/60">v2.0 is now live</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[1.1]"
            >
              Optimize for the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">
                Future of Hiring.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              ATSChecker uses advanced algorithms to ensure your resume bypasses automated filters and reaches human recruiters.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              {isAuthenticated ? (
                <Link
                  to="/dashboard"
                  className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold overflow-hidden transition-all hover:scale-105 active:scale-95"
                >
                  <span className="relative z-10 flex items-center">
                    Go to Dashboard <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ) : (
                <>
                  <Link
                    to="/register"
                    className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold overflow-hidden transition-all hover:scale-105 active:scale-95"
                  >
                    <span className="relative z-10 flex items-center">
                      Get Started <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                  <Link
                    to="/login"
                    className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-semibold transition-all"
                  >
                    Sign In
                  </Link>
                </>
              )}
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 px-6 border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-white/40 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Social Proof / Stats */}
        <section className="py-24 px-6 bg-white/[0.01]">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-sm font-medium tracking-[0.2em] uppercase text-white/30 mb-12"
            >
              Trusted by candidates at
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-20 grayscale invert">
              {/* Placeholder for logos */}
              <div className="text-2xl font-bold tracking-tighter">META</div>
              <div className="text-2xl font-bold tracking-tighter">GOOGLE</div>
              <div className="text-2xl font-bold tracking-tighter">AMAZON</div>
              <div className="text-2xl font-bold tracking-tighter">APPLE</div>
              <div className="text-2xl font-bold tracking-tighter">NETFLIX</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-white/5">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                <FileText className="w-4 h-4 text-black" />
              </div>
              <span className="font-bold tracking-tight">ATSChecker</span>
            </div>
            <div className="flex space-x-8 text-sm text-white/40">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
            <div className="text-sm text-white/20">
              © 2026 ATSChecker. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
