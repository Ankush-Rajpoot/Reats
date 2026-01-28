import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Shield, Target } from 'lucide-react';
import useAuthStore from '../store/authStore';
import Background from './Background';
import LandingNavbar from './LandingNavbar';
import CardSwap, { Card } from './CardSwap';
import FeatureContent from './FeatureContent';
import { MiniScoreCard, MiniDashboardChart, MiniRecommendations } from './MiniFeatureCards';

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

                {/* Features / CardSwap Section */}
                <section className="py-24 px-6 border-t border-white/5 min-h-screen flex items-center">
                    <div className="max-w-7xl mx-auto w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
                            {/* Left side - Content with synchronized animations */}
                            <FeatureContent />

                            {/* Right side - CardSwap positioned at right edge */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative h-[600px] hidden lg:block"
                            >
                                <CardSwap
                                    cardDistance={60}
                                    verticalDistance={85}
                                    delay={2500}
                                    pauseOnHover={false}
                                    skewAmount={12}
                                    easing="elastic"
                                    width={700}
                                    height={400}
                                >
                                    <Card customClass="bg-gradient-to-br from-black via-black to-[#0a0a0a] border border-white/10 shadow-2xl overflow-hidden">
                                        <MiniScoreCard />
                                    </Card>
                                    <Card customClass="bg-gradient-to-br from-black via-black to-[#0a0a0a] border border-white/10 shadow-2xl overflow-hidden">
                                        <MiniDashboardChart />
                                    </Card>
                                    <Card customClass="bg-gradient-to-br from-black via-black to-[#0a0a0a] border border-white/10 shadow-2xl overflow-hidden">
                                        <MiniRecommendations />
                                    </Card>
                                </CardSwap>
                            </motion.div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default LandingPage;
