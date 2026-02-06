import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import useAuthStore from '../store/authStore';
import Background from './Background';
import LandingNavbar from './LandingNavbar';
import SafariMockup from '../components/ui/SafariMockup';
import PublicUploadDemo from '../components/ui/PublicUploadDemo';

const LandingPage = () => {
    const { isAuthenticated } = useAuthStore();
    const navigate = useNavigate();

    // Redirect to dashboard if already authenticated
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/dashboard', { replace: true });
        }
    }, [isAuthenticated, navigate]);

    return (
        <div className="relative min-h-screen text-white overflow-hidden selection:bg-white/20">
            <Background />
            <LandingNavbar />

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
                    </div>
                </section>

                {/* Safari Mockup Section */}
                <section className="py-12 md:py-24 px-4 md:px-6 border-t border-white/5">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-12 items-center">
                            {/* Left Side - Slogan */}
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="space-y-4 text-center lg:text-left order-2 lg:order-1"
                            >
                                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/40 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white/80"></span>
                                    </span>
                                    <span className="text-xs font-medium tracking-wider uppercase text-white/60">AI-Powered Analysis</span>
                                </div>
                                
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight">
                                    Beat the ATS.<br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">
                                        Land Your Dream Job.
                                    </span>
                                </h2>
                                
                                <p className="text-sm md:text-base text-white/50 leading-relaxed">
                                    Upload your resume and get instant feedback on ATS compatibility, keyword optimization, and expert recommendations to stand out from the competition.
                                </p>
                                
                                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => navigate('/auth')}
                                        className="px-5 py-2.5 bg-white text-black font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-sm"
                                    >
                                        Get Started Free
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-5 py-2.5 bg-white/5 border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 text-sm"
                                    >
                                        See How It Works
                                    </motion.button>
                                </div>
                            </motion.div>

                            {/* Right Side - Mockup */}
                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative order-1 lg:order-2"
                            >
                                <SafariMockup 
                                    url="reats.in/upload" 
                                    component={PublicUploadDemo}
                                    className="w-full"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default LandingPage;
