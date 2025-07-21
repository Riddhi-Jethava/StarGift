import React, { useState, useEffect } from 'react';
import { Sparkles, X } from 'lucide-react';
import gallery from '../../assets/GalleryImg/gallery.jpg'
import gallery1 from '../../assets/GalleryImg/gallery1.jpg'
// import gallery2 from '../../assets/GalleryImg/gallery2.jpg'

const GalleryComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const events = [
    { image: gallery },
    { image: gallery1 },
    { image: gallery },
    { image: gallery1 },
    { image: gallery },
    { image: gallery1 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-[#ED3237]/20 via-[#133FAD]/15 to-transparent rounded-full blur-3xl animate-pulse opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-[#133FAD]/20 via-[#ED3237]/15 to-transparent rounded-full blur-3xl animate-pulse delay-1000 opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 -translateNicholas-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-[#ED3237]/15 via-[#133FAD]/10 to-transparent rounded-full blur-3xl animate-pulse delay-2000 opacity-25"></div>

      {/* Interactive Light Trail */}
      <div
        className="absolute w-96 h-96 bg-gradient-radial from-[#133FAD]/15 via-[#ED3237]/10 to-transparent rounded-full blur-2xl transition-all duration-300 opacity-60"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
        }`}>
          <div data-aos="zoom-in-up" className="relative inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#133FAD]/10 to-[#ED3237]/10 rounded-full border border-[#133FAD]/20 mb-6">
            <Sparkles className="w-5 h-5 text-[#6787d7]" />
            <span className="text-sm font-semibold text-[#6787d7] tracking-wider uppercase">Event Gallery</span>
          </div>
          <h2 data-aos="zoom-in-up" className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-black/90 via-[#133FAD] to-[#ED3237] bg-clip-text text-transparent">
              Moments in Metal
            </span>
          </h2>
          <p data-aos="zoom-in-up" className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in our gallery of events, where Radhey Exim's exquisite metal creations shine in celebration of remarkable achievements.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden border border-gray-200/50 shadow-lg group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#ED3237]/30 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              data-aos="fade-up"
              onClick={() => setSelectedImage(event.image)}
            >
              <div className="relative h-80">
                <img
                  src={event.image}
                  alt={`Event ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer"></div>
                {/* Glassmorphism Overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-[#ED3237]/10 to-[#133FAD]/10 opacity-0 group-hover:opacity-80 transition-opacity duration-500 backdrop-blur-sm"></div> */}
                {/* Glowing Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#ED3237]/50 group-hover:shadow-[0_0_20px_rgba(237,50,55,0.4)] transition-all duration-500 rounded-2xl"></div>
                {/* Corner Sparkle */}
                <div className="absolute top-2 right-2 w-6 h-6">
                  <Sparkles className="w-6 h-6 text-[#6787d7] group-hover:text-[#ED3237] group-hover/sparkles:rotate-360 transition-all duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Full-Screen Image */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 overflow-hidden">
            <div className="relative max-w-4xl w-full mx-4 mt-10 overflow-hidden">
              <img
                src={selectedImage}
                alt="Selected Event"
                className="w-full h-auto max-h-[60vh] object-contain rounded-2xl shadow-2xl overflow-hidden"
              />
              {/* Shimmer Effect in Modal */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 shimmer rounded-2xl"></div>
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 p-3 bg-gradient-to-br from-[#ED3237] to-[#133FAD] rounded-full text-white hover:scale-110 transition-all duration-300 shadow-lg"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}

        {/* Pulsing Dots */}
        <div className="flex justify-center mt-20 space-x-3">
          <div className="w-4 h-4 bg-[#ED3237] rounded-full animate-pulse shadow-lg"></div>
          <div className="w-4 h-4 bg-[#133FAD] rounded-full animate-pulse shadow-lg" style={{ animationDelay: '0.3s' }}></div>
          <div className="w-4 h-4 bg-[#ED3237] rounded-full animate-pulse shadow-lg" style={{ animationDelay: '0.6s' }}></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .shimmer {
          animation: shimmer 2s infinite;
        }
        @keyframes rotate-360 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .group-hover\\/sparkles\\:rotate-360:hover .sparkles {
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

export default GalleryComponent;