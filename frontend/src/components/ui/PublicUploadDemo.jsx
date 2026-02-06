import React from 'react';
import { FileText, Target, Zap, ArrowRight, User, BarChart3, LogOut } from 'lucide-react';

const PublicUploadDemo = () => {
  return (
    <div className="min-h-full bg-[#000000] transform scale-[0.8] origin-top-left overflow-y-auto md:overflow-y-hidden"
      style={{ width: '125%', height: '125%' }}
    >
      {/* Header/Navbar */}
      <header className="bg-[#000000] shadow-lg border-b border-[#171717] sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-3 sm:px-5 lg:px-7">
          <div className="flex justify-between items-center h-14">
            {/* Logo/Brand */}
            <div className="flex items-center">
              <h1 className="text-lg sm:text-xl font-bold text-white">Reats</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <span className="text-[#A3A3A3] border border-[#262626] px-2.5 py-1 rounded-full bg-[#171717]/50 flex items-center space-x-1.5 max-w-40">
                <User className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="text-sm truncate">Ankush Rajpoot</span>
              </span>
              <nav className="flex space-x-2.5">
                <a
                  href="#"
                  className="text-[#A3A3A3] hover:text-white border border-white hover:border-white px-2.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 bg-[#171717]/30 hover:bg-[#171717]/50 flex items-center space-x-1.5 relative overflow-hidden border-white text-white"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    style={{
                      animation: 'shine 2s ease-in-out infinite'
                    }}
                  ></div>
                  <Zap className="w-3.5 h-3.5 relative z-10" />
                  <span className="relative z-10">Analyze</span>
                </a>
                <a
                  href="#"
                  className="text-[#A3A3A3] hover:text-white border border-[#262626] hover:border-white px-2.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 bg-[#171717]/30 hover:bg-[#171717]/50 flex items-center space-x-1.5 relative overflow-hidden"
                >
                  <BarChart3 className="w-3.5 h-3.5 relative z-10" />
                  <span className="relative z-10">Dashboard</span>
                </a>
                <button className="text-[#A3A3A3] hover:text-red-400 border border-[#262626] hover:border-red-400 px-2.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 bg-[#171717]/30 hover:bg-red-500/20 flex items-center space-x-1.5">
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Logout</span>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="py-3 sm:py-5 relative overflow-hidden">
      {/* Animated Zigzag Thread Background */}
      <div className="absolute inset-0 opacity-20 sm:opacity-30">
        <svg
          className="w-full h-full"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          {/* Base Thread Path */}
          <path
            d="M 0 0 L 200 100 L 100 200 L 300 300 L 200 400 L 400 500 L 300 600 L 500 700 L 400 800 L 600 900 L 500 1000 L 700 1080"
            stroke="url(#threadGradient)"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="4,4"
            style={{
              animation: 'dashOffset 2s linear infinite'
            }}
          />
          
          {/* Shimmer Effect Path */}
          <path
            d="M 0 0 L 200 100 L 100 200 L 300 300 L 200 400 L 400 500 L 300 600 L 500 700 L 400 800 L 600 900 L 500 1000 L 700 1080"
            stroke="url(#shimmerGradient1)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            style={{
              animation: 'shimmer 4s ease-in-out infinite',
              animationDelay: '2s'
            }}
          />
          
          <defs>
            <linearGradient id="threadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#373737" stopOpacity="0.2" />
              <stop offset="25%" stopColor="#525252" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#737373" stopOpacity="0.6" />
              <stop offset="75%" stopColor="#A3A3A3" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#373737" stopOpacity="0.2" />
            </linearGradient>
            
            {/* Shimmer Gradient */}
            <linearGradient id="shimmerGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A3A3A3" stopOpacity="0" />
              <stop offset="30%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#A3A3A3" stopOpacity="1" />
              <stop offset="70%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#A3A3A3" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <style>{`
          @keyframes dashOffset {
            to {
              stroke-dashoffset: -8;
            }
          }
          @keyframes shimmer {
            0%, 100% {
              stroke-dasharray: 0 1000;
              opacity: 0;
            }
            50% {
              stroke-dasharray: 1000 0;
              opacity: 1;
            }
          }
        `}</style>
      </div>
      
      <div className="max-w-6xl mx-auto px-3 sm:px-5 lg:px-7 relative z-10">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-5">
          <h1 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Analyze Your Resume
          </h1>
          <p className="text-sm sm:text-base text-[#737373] max-w-lg mx-auto px-4">
            Upload your resume and job description to get an instant ATS compatibility score
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-4 sm:mb-5">
          <div className="flex items-center space-x-2 sm:space-x-2.5 px-2">
            <div className="flex items-center space-x-1 px-2 sm:px-2.5 py-1 rounded-full transition-all duration-300 relative overflow-hidden bg-gradient-to-r from-white/20 to-white/10 text-white border border-white/30 shadow-sm shadow-white/20">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                style={{
                  animation: 'shine 2s ease-in-out infinite'
                }}
              />
              <FileText className="w-3 h-3 relative z-10" />
              <span className="text-xs font-medium relative z-10 text-gray-200">Resume</span>
            </div>
            <ArrowRight className="w-2 sm:w-2.5 h-2 sm:h-2.5 text-[#525252]" />
            <div className="flex items-center space-x-1 px-2 sm:px-2.5 py-1 rounded-full bg-[#171717]/50 text-[#737373] border border-[#262626]/50">
              <Target className="w-3 h-3" />
              <span className="text-xs font-medium">Job Desc.</span>
            </div>
            <ArrowRight className="w-2 sm:w-2.5 h-2 sm:h-2.5 text-[#525252]" />
            <div className="flex items-center space-x-1 px-2 sm:px-2.5 py-1 rounded-full bg-[#171717]/50 text-[#737373] border border-[#262626]/50">
              <Zap className="w-3 h-3" />
              <span className="text-xs font-medium">Analyze</span>
            </div>
          </div>
        </div>
        <style>{`
          @keyframes shine {
            0%, 100% {
              transform: translateX(-100%);
            }
            50% {
              transform: translateX(100%);
            }
          }
        `}</style>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Resume Upload Card */}
          <div className="h-full border-[#262626]/50 bg-[#0a0a0a]/80 backdrop-blur-sm hover:border-white/50 transition-all duration-300 hover:shadow-lg hover:shadow-white/10 overflow-hidden rounded-lg border">
            <div className="bg-black border-b border-[#262626] px-3 sm:px-5 py-2.5 sm:py-3">
              <div className="flex items-center text-sm sm:text-base text-white">
                <span className="relative flex items-center space-x-2 px-2 sm:px-2.5 py-1 rounded-full border border-[#262626] bg-[#0a0a0a]/30 hover:bg-[#0a0a0a]/50 transition-all duration-200 overflow-hidden">
                  <FileText className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-white" />
                  <span className="text-xs text-gray-400">Upload Resume</span>
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-1 sm:mt-1.5">
                Upload your resume in PDF, DOC, DOCX, or TXT format
              </p>
            </div>
            <div className="pt-2 sm:pt-3 px-3 sm:px-6 pb-4 sm:pb-6">
              <div className="mt-1 sm:mt-1.5">
                {/* Upload Area */}
                <div className="border-2 border-dashed border-[#262626]/50 rounded-lg p-8 text-center bg-[#0a0a0a]/30 hover:border-[#525252] transition-colors">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#171717] flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-gray-300 mb-1">Upload your resume</p>
                  <p className="text-xs text-gray-500">Drag and drop your file here, or click to browse</p>
                  <p className="text-xs text-[#525252] mt-2">Supports PDF, DOC, DOCX, TXT • Max 10 MB</p>
                </div>
              </div>
            </div>
          </div>

          {/* Job Description Card */}
          <div className="h-full border-[#262626]/50 bg-[#0a0a0a]/80 backdrop-blur-sm hover:border-white/50 transition-all duration-300 hover:shadow-lg hover:shadow-white/10 overflow-hidden rounded-lg border">
            <div className="bg-black border-b border-[#262626] px-3 sm:px-5 py-2.5 sm:py-3">
              <div className="flex items-center text-sm sm:text-base text-white">
                <span className="relative flex items-center space-x-2 px-2 sm:px-2.5 py-1 rounded-full border border-[#262626] bg-[#0a0a0a]/30 hover:bg-[#0a0a0a]/50 transition-all duration-200 overflow-hidden">
                  <Target className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-white" />
                  <span className="text-xs text-gray-400">Job Description</span>
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-1 sm:mt-1.5">
                Paste the job description you want to optimize your resume for
              </p>
            </div>
            <div className="pt-2 sm:pt-3 px-3 sm:px-6 pb-4 sm:pb-6">
              <div className="mt-1 sm:mt-1.5">
                <textarea
                  readOnly
                  placeholder="Paste the complete job description here. Include all requirements, skills, and qualifications mentioned in the posting..."
                  className="w-full h-32 sm:h-40 px-2 sm:px-2.5 py-2 border border-[#262626]/50 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white/50 resize-none transition-all duration-200 bg-[#0a0a0a]/80 text-white placeholder-[#737373] hover:border-[#525252] text-xs backdrop-blur-sm cursor-default"
                />
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-1.5 space-y-1 sm:space-y-0">
                  <span className="text-xs text-[#737373]">0 characters</span>
                  <span className="text-xs text-[#737373]">Minimum 50 characters required</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Analyze Button */}
        <div className="text-center mt-4 sm:mt-6">
          <button
            disabled
            className="inline-flex items-center space-x-2 px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-semibold shadow-lg transition-all duration-300 opacity-50 cursor-not-allowed bg-white text-black rounded-lg"
          >
            <Zap className="w-4 h-4" />
            <span>Analyze Resume</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default PublicUploadDemo;
