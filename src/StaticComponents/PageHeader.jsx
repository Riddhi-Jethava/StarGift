import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom'

const PageHeader = ({
  title = "Modern Design",
  subtitle = "for Every Home",
  description = "Create your dream's place that can evoke the spirit of life.",
  breadcrumbs = [
    { label: "Home", href: "/", icon: Home },
    // { label: "Pages", href: "/pages" },
    { label: "About Us", href: "/about" }
  ],
  backgroundImage = "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  ctaPrimary = "Explore Now",
  ctaSecondary = "View Portfolio"
}) => {
  return (
    <div className="relative min-h-[600px] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-transparent via-blue-500/5 to-transparent rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex min-h-[600px]">
        {/* Left Content Section */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-20 py-16">
           {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 opacity-0 animate-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                {title}
              </span>
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent opacity-0 animate-slide-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              {subtitle}
            </h2>
          </div>

          {/* Description */}
          <p className="text-slate-300 text-lg md:text-xl max-w-lg mb-12 leading-relaxed opacity-0 animate-slide-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            {description}
          </p>
          {/* Breadcrumbs */}
          <div className="animate-slide-up-delayed bg-white/10 backdrop-blur-3xl w-60 p-3 rounded-2xl">
            <nav className="flex items-center justify-center space-x-2">
              <div className="flex items-center space-x-2 group">
                <div className="p-2 bg-gradient-to-r from-[#B72025] to-[#B72025]/70 rounded-full backdrop-blur-sm border border-white/10 transition-all duration-300">
                  <Home className="w-4 h-4 text-white" />
                </div>
                <Link to="/">
                  <span className="text-gray-300 text-md hover:text-[#B72025] transition-colors duration-300 cursor-pointer">
                    Home
                  </span>
                </Link>
                <ChevronRight className="w-5 h-5 text-[#B72025]" />
                <span className="text-white text-md transition-colors duration-300">
                  {title}
                </span>
              </div>
            </nav>
          </div>
         

          {/* CTA Buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-slide-up" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                        <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <span className="relative flex items-center justify-center space-x-2">
                                <span>{ctaPrimary}</span>
                                <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                        </button>

                        <button className="group px-8 py-4 border-2 border-slate-400 text-slate-300 font-semibold rounded-xl hover:border-white hover:text-white transition-all duration-300 hover:bg-white/5 backdrop-blur-sm">
                            {ctaSecondary}
                        </button>
                    </div> */}
        </div>

        {/* Right Image Section with Arrow Shape */}
        <div className="flex-1 relative">
          {/* Arrow Shape Overlay */}
          <div
            className="absolute inset-0 opacity-0 animate-slide-in-right"
            style={{
              animationDelay: '0.3s',
              animationFillMode: 'forwards',
              clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 20% 100%, 0% 50%)',
              background: `linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%), url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay'
            }}
          >
            {/* Animated Overlay Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

            {/* Floating Elements */}
            <div className="absolute top-20 right-20 w-4 h-4 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '2.5s' }}></div>
            <div className="absolute bottom-40 right-16 w-5 h-5 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>

            {/* Shine Effect */}
            <div className="absolute inset-0 opacity-0 animate-shine bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12"></div>
          </div>

          {/* Decorative Border */}
          <div
            className="absolute inset-0 opacity-0 animate-slide-in-right"
            style={{
              animationDelay: '0.5s',
              animationFillMode: 'forwards',
              clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 20% 100%, 0% 50%)',
              background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.5) 0%, rgba(147, 51, 234, 0.5) 100%)',
              filter: 'blur(1px)',
              transform: 'scale(1.02)'
            }}
          ></div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-right {
          from { 
            opacity: 0;
            transform: translateX(100px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes shine {
          0% {
            opacity: 0;
            transform: translateX(-100%) skewX(-12deg);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateX(300%) skewX(-12deg);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 1s ease-out;
        }
        
        .animate-shine {
          animation: shine 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }
      `}</style>
    </div>
  );
};

export default PageHeader

