import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Target, Shield } from 'lucide-react';

const features = [
    {
        icon: Zap,
        title: "AI-Powered Resume Analysis",
        description: "Advanced NLP algorithms analyze your resume against job descriptions, providing instant ATS compatibility scores with keyword matching, skills extraction, and actionable recommendations."
    },
    {
        icon: Target,
        title: "Personalized Dashboard & Insights",
        description: "Track your progress with an interactive dashboard showing score trends, analysis history, and personalized improvement suggestions tailored to your career goals."
    },
    {
        icon: Shield,
        title: "Detailed Reports & Recommendations",
        description: "Get comprehensive PDF reports with section-by-section breakdowns, missing skills analysis, keyword density insights, and expert suggestions to optimize your resume."
    }
];

const FeatureContent = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % features.length);
        }, 2500); // Match the CardSwap delay

        return () => clearInterval(interval);
    }, []);

    const currentFeature = features[activeIndex];
    const Icon = currentFeature.icon;

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 z-10"
        >
            {/* Static Header */}
            <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Why ATSChecker?
                </h2>
                <p className="text-white/40 text-lg">
                    Explore our powerful features designed to get you hired. Watch the cards animate to see what makes us different.
                </p>
            </div>

            {/* Animated Feature Content */}
            <div className="relative min-h-[200px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <div className="flex items-start space-x-4">
                            <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                                <Icon className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-3">{currentFeature.title}</h3>
                                <p className="text-white/50 text-lg leading-relaxed">
                                    {currentFeature.description}
                                </p>
                            </div>
                        </div>

                        {/* Progress Indicators */}
                        <div className="flex space-x-2 pt-4">
                            {features.map((_, index) => (
                                <div
                                    key={index}
                                    className={`h-1 flex-1 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-white' : 'bg-white/20'
                                        }`}
                                />
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default FeatureContent;
