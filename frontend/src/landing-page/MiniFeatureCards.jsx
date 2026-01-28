import React from 'react';
import { motion } from 'framer-motion';
import { Upload, FileText, TrendingUp, AlertTriangle, Lightbulb, Target, Award, BarChart3 } from 'lucide-react';

// Card 1: Upload/Analyze Interface (matching screenshot 1)
export const MiniScoreCard = () => {
    return (
        <div className="w-full h-full p-6 flex flex-col items-center justify-center space-y-6 bg-gradient-to-br from-[#0a0a0a] to-black">
            {/* Header */}
            <div className="text-center space-y-2">
                <h3 className="text-xl font-bold text-white">Analyze Your Resume</h3>
                <p className="text-xs text-white/40">Upload your resume and job description to get an instant ATS compatibility score</p>
            </div>

            {/* Upload Steps */}
            <div className="flex items-center space-x-2 text-xs">
                <div className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-full flex items-center space-x-1.5">
                    <FileText className="w-3 h-3" />
                    <span className="text-white/80">Resume</span>
                </div>
                <div className="w-2 h-0.5 bg-white/20"></div>
                <div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full flex items-center space-x-1.5">
                    <span className="text-white/40">Job Desc.</span>
                </div>
                <div className="w-2 h-0.5 bg-white/20"></div>
                <div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full flex items-center space-x-1.5">
                    <span className="text-white/40">Analyze</span>
                </div>
            </div>

            {/* Upload Area */}
            <motion.div
                whileHover={{ scale: 1.02 }}
                className="w-full max-w-xs border-2 border-dashed border-white/20 rounded-xl p-6 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
            >
                <div className="flex flex-col items-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                        <Upload className="w-6 h-6 text-white/60" />
                    </div>
                    <div className="text-center">
                        <p className="text-sm font-medium text-white/80">Upload your resume</p>
                        <p className="text-xs text-white/40 mt-1">Drag and drop your file here, or click to browse</p>
                        <p className="text-xs text-white/30 mt-2">Supports PDF, DOC, DOCX, TXT • Max 10 MB</p>
                    </div>
                </div>
            </motion.div>

            {/* Analyze Button */}
            <button className="px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-sm font-medium text-white/80 transition-colors flex items-center space-x-2">
                <span>Analyze Resume</span>
                <span className="text-white/40">→</span>
            </button>
        </div>
    );
};

// Card 2: Dashboard with Score Progress (matching screenshot 2)
export const MiniDashboardChart = () => {
    return (
        <div className="w-full h-full p-6 flex flex-col space-y-4 bg-gradient-to-br from-[#0a0a0a] to-black">
            {/* Stats Pills */}
            <div className="flex flex-wrap gap-2 text-xs">
                <div className="px-2.5 py-1.5 bg-white/5 border border-white/10 rounded-full flex items-center space-x-1.5">
                    <FileText className="w-3 h-3 text-white/60" />
                    <span className="text-white/60">1 Total Reports</span>
                    <span className="text-green-400">+18%</span>
                </div>
                <div className="px-2.5 py-1.5 bg-white/5 border border-white/10 rounded-full flex items-center space-x-1.5">
                    <span className="text-white/60">51% Average Score</span>
                    <span className="text-red-400">-2.1%</span>
                </div>
            </div>

            {/* Score Progress Section */}
            <div className="flex-1 bg-[#0a0a0a] border border-white/10 rounded-xl p-4 space-y-3">
                <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-white/5 rounded-lg flex items-center justify-center border border-white/10">
                        <TrendingUp className="w-3 h-3 text-white/60" />
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-white">ATS Score Progress</h4>
                        <p className="text-xs text-white/40">Track your ATS score improvements over time</p>
                    </div>
                </div>

                {/* Mini Chart */}
                <div className="h-32 flex items-end justify-between space-x-1.5 px-2">
                    {[51].map((height, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center space-y-1">
                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: `${height}%` }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="w-full bg-gradient-to-t from-white/20 to-white/40 rounded-t relative"
                            >
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-white/60">
                                    {height}%
                                </div>
                            </motion.div>
                            <span className="text-xs text-white/40">Report 1</span>
                        </div>
                    ))}
                </div>

                {/* Insights */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                    <div className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-full text-yellow-400">
                        Average Trend: Not enough data yet
                    </div>
                    <div className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-full text-white/60">
                        Best Score: 51% personal best
                    </div>
                </div>
            </div>

            {/* Recent Reports */}
            <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-3 space-y-2">
                <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-white/60" />
                    <h4 className="text-sm font-bold text-white">Recent Reports</h4>
                </div>
                <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex items-center space-x-2">
                        <FileText className="w-4 h-4 text-white/40" />
                        <div>
                            <p className="text-xs font-medium text-white/80">AnkushRajpoot_Resume...</p>
                            <p className="text-xs text-white/40">1/26/2026</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-xs px-2 py-0.5 bg-red-500/20 text-red-400 rounded-full border border-red-500/30">51% ATS</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Card 3: Results with Score and Recommendations (matching screenshot 3)
export const MiniRecommendations = () => {
    return (
        <div className="w-full h-full p-6 flex flex-col space-y-4 bg-gradient-to-br from-[#0a0a0a] to-black overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-bold text-white">ATS Analysis Results</h3>
                    <p className="text-xs text-white/40">AnkushRajpoot_Resume_single page-1.pdf • 1/26/2026</p>
                </div>
            </div>

            <div className="flex-1 grid grid-cols-2 gap-3 overflow-hidden">
                {/* Score Card */}
                <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center space-y-3">
                    {/* Score Circle */}
                    <div className="relative w-24 h-24">
                        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                            <path
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeDasharray="100, 100"
                                className="text-white/10"
                            />
                            <motion.path
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                className="text-red-400"
                                initial={{ strokeDasharray: '0, 100' }}
                                animate={{ strokeDasharray: '51, 100' }}
                                transition={{ duration: 1.5, ease: 'easeOut' }}
                            />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-red-400">51</div>
                                <div className="text-xs text-white/40">ATS Score</div>
                            </div>
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-black border border-white/20 rounded-full flex items-center justify-center">
                            <AlertTriangle className="w-3 h-3 text-red-400" />
                        </div>
                    </div>

                    {/* Status */}
                    <div className="text-center">
                        <p className="text-xs font-bold text-red-400">Needs Significant Improvement</p>
                        <div className="flex items-center justify-center space-x-2 mt-2 text-xs">
                            <span className="text-white/40">&lt;60 Range</span>
                            <span className="text-white/20">•</span>
                            <span className="text-white/40">Low Pass Rate</span>
                            <span className="text-white/20">•</span>
                            <span className="text-white/40">C Grade</span>
                        </div>
                    </div>
                </div>

                {/* Section Breakdown */}
                <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-4 space-y-2">
                    <div className="flex items-center space-x-2 mb-2">
                        <BarChart3 className="w-4 h-4 text-white/60" />
                        <h4 className="text-sm font-bold text-white">Section Breakdown</h4>
                    </div>

                    {/* Sections */}
                    <div className="space-y-2 text-xs">
                        <div>
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-white/60">Formatting</span>
                                <span className="text-yellow-400 font-bold">70%</span>
                            </div>
                            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: '70%' }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                    className="h-full bg-yellow-400"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-white/60">Keywords</span>
                                <span className="text-red-400 font-bold">20%</span>
                            </div>
                            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: '20%' }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                    className="h-full bg-red-400"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-white/60">Experience</span>
                                <span className="text-green-400 font-bold">85%</span>
                            </div>
                            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: '85%' }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                    className="h-full bg-green-400"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-white/60">Skills</span>
                                <span className="text-red-400 font-bold">30%</span>
                            </div>
                            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: '30%' }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                    className="h-full bg-red-400"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Smart Recommendations */}
            <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-3 space-y-2">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Lightbulb className="w-4 h-4 text-white/60" />
                        <h4 className="text-sm font-bold text-white">Smart Recommendations</h4>
                    </div>
                    <span className="text-xs text-green-400 font-bold">+25 Potential Points</span>
                </div>

                <div className="space-y-1.5">
                    <div className="flex items-start space-x-2 p-2 bg-red-500/10 border border-red-500/20 rounded-lg">
                        <AlertTriangle className="w-3 h-3 text-red-400 mt-0.5 flex-shrink-0" />
                        <p className="text-xs text-white/70 leading-relaxed">Your ATS score needs significant improvement. Focus on keyword optimization and skills alignment first.</p>
                    </div>

                    <div className="flex items-start space-x-2 p-2 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                        <Target className="w-3 h-3 text-yellow-400 mt-0.5 flex-shrink-0" />
                        <p className="text-xs text-white/70 leading-relaxed">Add experience with high-demand skills: html, php, angular</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
