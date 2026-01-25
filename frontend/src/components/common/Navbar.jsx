import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  FileText, 
  BarChart3, 
  Settings, 
  LogOut, 
  Menu,
  X,
  ArrowRight
} from 'lucide-react';
import useAuthStore from '../../store/authStore';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuthStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { to: '/upload', label: 'Analyze', icon: FileText },
    { to: '/dashboard', label: 'Dashboard', icon: BarChart3 },
    { to: '/settings', label: 'Settings', icon: Settings },
  ];

  const isActiveLink = (path) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`relative flex justify-between items-center px-6 h-16 rounded-2xl transition-all duration-300 ${
          scrolled 
            ? 'bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl' 
            : 'bg-transparent'
        }`}>
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <FileText className="w-5 h-5 text-black" />
            </div>
            <span className="text-xl font-bold tracking-tighter text-white">ATSChecker</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {isAuthenticated ? (
              <>
                {navLinks.map(({ to, label, icon: Icon }) => (
                  <Link
                    key={to}
                    to={to}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      isActiveLink(to)
                        ? 'bg-white/10 text-white'
                        : 'text-white/50 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {label}
                  </Link>
                ))}
                <div className="w-px h-4 bg-white/10 mx-2" />
                <div className="flex items-center space-x-3 pl-2">
                  <img
                    src={user?.avatar || 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'}
                    alt={user?.name || 'User'}
                    className="w-8 h-8 rounded-full border border-white/10"
                  />
                  <button
                    onClick={handleLogout}
                    className="p-2 text-white/40 hover:text-red-400 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  to="/login"
                  className="px-5 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="px-5 py-2 bg-white text-black rounded-full text-sm font-bold hover:scale-105 transition-transform flex items-center"
                >
                  Get Started <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 px-6 pt-2 md:hidden"
          >
            <div className="bg-black/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl">
              <div className="space-y-1">
                {isAuthenticated ? (
                  <>
                    {navLinks.map(({ to, label, icon: Icon }) => (
                      <Link
                        key={to}
                        to={to}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                          isActiveLink(to)
                            ? 'bg-white/10 text-white'
                            : 'text-white/50 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{label}</span>
                      </Link>
                    ))}
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-3 px-4 py-3 text-red-400 hover:bg-red-400/10 rounded-xl transition-colors w-full"
                    >
                      <LogOut className="w-5 h-5" />
                      <span className="font-medium">Sign Out</span>
                    </button>
                  </>
                ) : (
                  <div className="grid grid-cols-2 gap-2 p-2">
                    <Link
                      to="/login"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-center px-4 py-3 text-white/60 hover:text-white border border-white/10 rounded-xl transition-colors"
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/register"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-center px-4 py-3 bg-white text-black font-bold rounded-xl transition-transform"
                    >
                      Join Now
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
