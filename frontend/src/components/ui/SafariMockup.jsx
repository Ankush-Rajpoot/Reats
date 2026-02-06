import React from 'react';

const SafariMockup = ({ url = 'inspira-ui.com', src, component: Component, className = '' }) => {
    return (
        <div className={`relative rounded-xl overflow-hidden shadow-2xl border border-white/10 ${className}`}>
            {/* Safari Browser Chrome */}
            <div className="px-2 py-2 flex items-center gap-2 border-b border-white/10" style={{ backgroundColor: '#0a0a0a' }}>
                {/* Traffic Lights */}
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                
                {/* URL Bar */}
                <div className="flex-1 flex items-center justify-center px-4">
                    <div className="bg-zinc-950/50 rounded-lg px-4 py-1.5 w-full max-w-md flex items-center gap-2 border border-white/5">
                        <svg 
                            className="w-4 h-4 text-white/40" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
                            />
                        </svg>
                        <span className="text-sm text-white/60">{url}</span>
                    </div>
                </div>
            </div>
            
            {/* Browser Content */}
            <div className="relative bg-white h-[500px] overflow-hidden">
                {Component ? (
                    <Component />
                ) : (
                    <iframe 
                        src={src} 
                        title="Website preview" 
                        className="w-full h-full border-0"
                    />
                )}
            </div>
        </div>
    );
};

export default SafariMockup;
