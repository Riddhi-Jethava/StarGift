import React, { useState, useEffect, useRef } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Gift,
  Heart,
  Star,
  Crown,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUp,
  Sparkles
} from 'lucide-react';
import logo from '../assets/StaticImg/brandLogo.jpeg';
import bgImg from '../assets/HomeImg/sliderbg.jpg'
import box from '../assets/StaticImg/footerbox.png'

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const sectionRef = useRef(null);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Scroll-to-top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Quick Links Data
  const quickLinks = [
    { icon: Gift, label: 'Shop All', href: '#' },
    { icon: Heart, label: 'Gift Boxes', href: '#' },
    { icon: Star, label: 'Personalized Gifts', href: '#' },
    { icon: Crown, label: 'Luxury Collections', href: '#' },
    { icon: Sparkles, label: 'Occasions', href: '#' }
  ];

  // Social Media Links
  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#', color: 'hover:text-[#133FAD]' },
    { icon: Instagram, label: 'Instagram', href: '#', color: 'hover:text-[#ED3237]' },
    { icon: Twitter, label: 'Twitter', href: '#', color: 'hover:text-[#969394]' },
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:text-[#133FAD]' },
    { icon: Youtube, label: 'YouTube', href: '#', color: 'hover:text-[#ED3237]' }
  ];

  return (
    <footer ref={sectionRef} className="relative bg-[#221F20] overflow-hidden">
      <img src={box} alt="" className='absolute w-50 bottom-0 right-0 z-30 opacity-80' />
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImg}
          alt="Luxury footer background"
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        {/* <div className="absolute inset-0 bg-gradient-to-br from-[#133FAD]/20 via-transparent to-[#ED3237]/20"></div> */}
      </div>

      {/* Animated Orbs */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-[#133FAD]/15 to-[#ED3237]/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-[#ED3237]/15 to-[#133FAD]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-gradient-to-br from-[#969394]/10 to-[#133FAD]/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-gift absolute top-20 left-10 text-[#ED3237]/20 animate-bounce">
          <Gift size={40} />
        </div>
        <div className="floating-gift absolute top-32 right-20 text-[#133FAD]/20 animate-pulse">
          <Heart size={35} />
        </div>
        <div className="floating-gift absolute bottom-32 left-20 text-[#221F20]/20 animate-bounce">
          <Sparkles size={45} />
        </div>
        <div className="floating-gift absolute top-1/2 right-10 text-[#ED3237]/20 animate-pulse">
          <Gift size={30} />
        </div>
        <div className="floating-gift absolute bottom-20 right-32 text-[#133FAD]/20 animate-bounce">
          <Heart size={38} />
        </div>

        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-[#133FAD]/15 via-[#ED3237]/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-[#ED3237]/15 via-[#133FAD]/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#221F20]/10 via-[#ED3237]/5 to-transparent rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Sparkle Particles */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#ED3237] rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main Footer Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 z-20">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Section 1: Logo & Description */}
          <div  data-aos="zoom-in-right" className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-white/20 hover:border-[#ED3237]/50 transition-all duration-500 h-full">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <img src={logo} alt="LuxuryGifts Logo" className="w-50 mx-auto h-full rounded-3xl object-contain" />
                  <div className="absolute -inset-1 bg-gradient-to-br from-[#133FAD]/30 to-[#ED3237]/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-6">
                Elevate every occasion with our curated collection of premium gifts, designed to bring joy and sophistication to life’s special moments.
              </p>
            </div>
          </div>

          {/* Section 2: Address & Contact Info */}
          <div  data-aos="zoom-in-right" className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-white/20 hover:border-[#ED3237]/50 transition-all duration-500 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#133FAD]/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#133FAD]" />
                </div>
                <h3 className="text-xl font-bold text-white">Contact Info</h3>
              </div>
              <div className="space-y-6">
                {/* Address */}
                <div className="group">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-[#221F20]/20 border border-white/10 hover:border-[#ED3237]/30 transition-all duration-300">
                    <div className="w-8 h-8 bg-[#133FAD]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:animate-spin-slow">
                      <MapPin className="w-4 h-4 text-[#ED3237]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-1">Address</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Somnath Ind., area-5,
                        Shiv Chowk Street,
                        Nr. Sarvoday Fastner,
                        opp. Krishna Park Hotel,
                        Gondal Road, Rajkot-360022.
                        Gujarat, India.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Phone */}
                <div className="group">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-[#221F20]/20 border border-white/10 hover:border-[#ED3237]/30 transition-all duration-300">
                    <div className="w-8 h-8 bg-[#133FAD]/20 rounded-lg flex items-center justify-center group-hover:animate-spin-slow">
                      <Phone className="w-4 h-4 text-[#ED3237]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-1">Phone</h4>
                      <p className="text-gray-400 text-sm">+91 96387 88466</p>
                    </div>
                  </div>
                </div>
                {/* Email */}
                <div className="group">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-[#221F20]/20 border border-white/10 hover:border-[#ED3237]/30 transition-all duration-300">
                    <div className="w-8 h-8 bg-[#133FAD]/20 rounded-lg flex items-center justify-center group-hover:animate-spin-slow">
                      <Mail className="w-4 h-4 text-[#ED3237]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-1">Email</h4>
                      <p className="text-gray-400 text-sm">7stargifts@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Quick Links */}
          <div  data-aos="zoom-in-left" className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-white/20 hover:border-[#ED3237]/50 transition-all duration-500 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#133FAD]/20 rounded-xl flex items-center justify-center">
                  <Gift className="w-5 h-5 text-[#133FAD]" />
                </div>
                <h3 className="text-xl font-bold text-white">Quick Links</h3>
              </div>
              <div className="space-y-2">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="group flex items-center gap-4 p-3 rounded-xl bg-[#221F20]/20 border border-white/10 hover:border-[#ED3237]/30 hover:bg-[#ED3237]/5 transition-all duration-300 hover:translate-x-2 relative"
                  >
                    <div className="w-8 h-8 bg-[#133FAD]/20 rounded-lg flex items-center justify-center group-hover:bg-[#ED3237]/30 transition-all duration-300">
                      <link.icon className="w-4 h-4 text-[#133FAD] group-hover:text-[#ED3237] group-hover:animate-bounce" />
                    </div>
                    <span className="text-gray-400 group-hover:text-white transition-colors duration-300 font-medium">
                      {link.label}
                    </span>
                    {/* Sparkle Trail */}
                    <div
                      className="absolute inset-0 flex items-center justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-sparkle-trail"
                    >
                      <div className="w-2 h-2 bg-[#ED3237] rounded-full blur-sm"></div>
                      <div className="w-1.5 h-1.5 bg-[#ED3237] rounded-full blur-sm ml-2"></div>
                      <div className="w-1 h-1 bg-[#ED3237] rounded-full blur-sm ml-2"></div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Section 4: Follow Us */}
          <div  data-aos="zoom-in-left" className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-white/20 hover:border-[#ED3237]/50 transition-all duration-500 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#ED3237]/20 rounded-xl flex items-center justify-center">
                  <Heart className="w-5 h-5 text-[#ED3237]" />
                </div>
                <h3 className="text-xl font-bold text-white">Follow Us</h3>
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Stay connected for exclusive gift ideas, promotions, and inspiration.
              </p>
              {/* Social Media Grid */}
              <div className="grid grid-cols-3 gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`group relative w-full aspect-square bg-[#221F20]/30 rounded-xl border border-white/20 hover:border-[#ED3237]/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${social.color}`}
                    onMouseEnter={() => setHoveredSocial(social.label)}
                    onMouseLeave={() => setHoveredSocial(null)}
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-current transition-colors duration-300" />
                    {/* Tooltip */}
                    {hoveredSocial === social.label && (
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#221F20]/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-lg whitespace-nowrap">
                        {social.label}
                      </div>
                    )}
                    {/* Hover Glow */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#ED3237]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`border-t border-white/20 pt-8 transform transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span>© 2025 7 STAR GIFTS. All rights reserved.</span>
              <span>Designed by <span className="text-[#ED3237]">Rudra Branding</span></span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-[#133FAD]/80 to-[#ED3237]/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg shadow-[#133FAD]/30 hover:scale-110 transition-all duration-300 z-50 group"
          aria-label="Scroll to top"
        >
          <div className="absolute inset-0 transform rotate-45 bg-gradient-to-br from-[#ED3237]/50 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-spin-slow rounded"></div>
          <ArrowUp className="w-5 h-5 text-white relative z-10 group-hover:text-[#ED3237] transition-colors duration-300" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-[#ED3237] rounded-full animate-ping" style={{ animationDelay: '0.1s' }}></div>
            <div className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-[#ED3237] rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
          </div>
        </button>
      )}

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1); }
        }
        @keyframes sparkle-trail {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { transform: translateX(0); opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
        .animate-sparkle-trail {
          animation: sparkle-trail 0.5s ease-out forwards;
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;