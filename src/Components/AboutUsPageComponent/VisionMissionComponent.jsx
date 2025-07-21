import React, { useState, useEffect } from 'react';
import { 
  Eye,
  Target,
  Sparkles,
  Award,
  Star,
  Zap,
  Crown,
  Diamond,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const VisionMissionComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const visionPoints = [
    {
      icon: <Crown className="w-5 h-5" />,
      text: "To be the leading manufacturer of premium metal gifts globally"
    },
    {
      icon: <Diamond className="w-5 h-5" />,
      text: "Setting new standards in quality and craftsmanship excellence"
    },
    {
      icon: <Star className="w-5 h-5" />,
      text: "Creating timeless pieces that celebrate human achievements"
    }
  ];

  const missionPoints = [
    {
      icon: <Award className="w-5 h-5" />,
      text: "Deliver exceptional custom metal gifts with uncompromising quality"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      text: "Innovate continuously with cutting-edge manufacturing techniques"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "Exceed customer expectations through personalized service"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#ED3237]/15 via-[#133FAD]/10 to-transparent rounded-full blur-3xl animate-pulse opacity-25"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#133FAD]/15 via-[#ED3237]/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000 opacity-25"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-[#ED3237]/10 via-[#133FAD]/5 to-transparent rounded-full blur-3xl animate-pulse delay-2000 opacity-20"></div>

      {/* Interactive Light Trail */}
      <div
        className="absolute w-80 h-80 bg-gradient-radial from-[#133FAD]/10 via-[#ED3237]/5 to-transparent rounded-full blur-2xl transition-all duration-300 opacity-50"
        style={{
          left: mousePosition.x - 160,
          top: mousePosition.y - 160,
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Centered Header Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
        }`}>
          <div data-aos="zoom-in-up" className="relative inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#133FAD]/10 to-[#ED3237]/10 rounded-full border border-[#133FAD]/20 mb-6">
            <Sparkles className="w-5 h-5 text-[#6787d7]" />
            <span className="text-sm font-semibold text-[#6787d7] tracking-wider uppercase">Our Direction</span>
          </div>
          <h2 data-aos="zoom-in-up" className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-black/90 via-[#133FAD] to-[#ED3237] bg-clip-text text-transparent">
              Vision & Mission
            </span>
          </h2>
          <p data-aos="zoom-in-up" className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the driving force behind Radhey Exim's commitment to excellence in metal craftsmanship and our journey towards becoming the world's most trusted metal gifts manufacturer.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Vision Card */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}
          >
            <div className="relative bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-br from-[#ED3237] via-[#133FAD] to-[#ED3237] opacity-0 hover:opacity-75 rounded-3xl blur-sm transition-opacity duration-500"></div>
              <div className="relative p-8 pb-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-[#ED3237]">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                    <div className="h-1 w-12 rounded-full mt-2 bg-gray-300"></div>
                  </div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  To revolutionize the metal gifts industry through innovation, excellence, and unmatched craftsmanship, becoming the global benchmark for premium awards and commemorative items.
                </p>
              </div>
              <div className="relative px-8 pb-8">
                <div className="space-y-4">
                  {visionPoints.map((point, index) => (
                    <div
                      key={index}
                      className={`flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-[#ED3237]/5 hover:to-[#133FAD]/5`}
                      onMouseEnter={() => setHoveredPoint(`vision-${index}`)}
                      onMouseLeave={() => setHoveredPoint(null)}
                    >
                      <div className={`p-2 rounded-lg flex-shrink-0 transition-all duration-300 ${
                        hoveredPoint === `vision-${index}` 
                          ? 'bg-gradient-to-br from-[#ED3237] to-[#133FAD] text-white scale-110' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {point.icon}
                      </div>
                      <p className="text-gray-700 leading-relaxed flex-1">{point.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
                <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-gray-100"></div>
                <Sparkles className="absolute top-4 right-4 w-6 h-6 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div
            className={`transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
          >
            <div className="relative bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-br from-[#133FAD] via-[#ED3237] to-[#133FAD] opacity-0 hover:opacity-75 rounded-3xl blur-sm transition-opacity duration-500"></div>
              <div className="relative p-8 pb-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-[#133FAD]">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                    <div className="h-1 w-12 rounded-full mt-2 bg-gray-300"></div>
                  </div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  To create extraordinary metal gifts that honor achievements and preserve memories, while providing our clients with exceptional service and unparalleled craftsmanship in every piece we create.
                </p>
              </div>
              <div className="relative px-8 pb-8">
                <div className="space-y-4">
                  {missionPoints.map((point, index) => (
                    <div
                      key={index}
                      className={`flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-[#133FAD]/5 hover:to-[#ED3237]/5`}
                      onMouseEnter={() => setHoveredPoint(`mission-${index}`)}
                      onMouseLeave={() => setHoveredPoint(null)}
                    >
                      <div className={`p-2 rounded-lg flex-shrink-0 transition-all duration-300 ${
                        hoveredPoint === `mission-${index}` 
                          ? 'bg-gradient-to-br from-[#133FAD] to-[#ED3237] text-white scale-110' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {point.icon}
                      </div>
                      <p className="text-gray-700 leading-relaxed flex-1">{point.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
                <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-gray-100"></div>
                <Target className="absolute top-4 right-4 w-6 h-6 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes rotate-360 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .group-hover\\/main\\:rotate-360:hover {
          animation: rotate-360 0.7s ease-in-out;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-bounce { animation: bounce 2s infinite; }
      `}</style>
    </div>
  );
};

export default VisionMissionComponent;