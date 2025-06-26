import React, { useState, useEffect } from 'react';

const WhatsApp3DButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [ripples, setRipples] = useState([]);

  // Show button with entrance animation after component mounts
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Handle WhatsApp redirect
  const handleWhatsAppClick = () => {
    const phoneNumber = "+919638788466"; // Replace with your phone number
    const message = "Hello! I'd like to get in touch."; // Replace with your default message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Create ripple effect on click
  const createRipple = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    const newRipple = {
      x,
      y,
      size,
      id: Date.now()
    };
    
    setRipples(prev => [...prev, newRipple]);
    
    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);
    
    handleWhatsAppClick();
  };

  return (
    <div className={`fixed bottom-22 right-8 z-50 transition-all duration-700 ease-out ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
    }`}>
      {/* Floating particles effect */}
      <div className="absolute -inset-4 opacity-30">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-green-400 rounded-full animate-ping`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: '2s'
            }}
          />
        ))}
      </div>

      {/* Glow effect */}
      <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-green-600 blur-xl transition-all duration-300 ${
        isHovered ? 'scale-110 opacity-70' : 'scale-100 opacity-40'
      }`} />

      {/* Main button */}
      <button
        onClick={createRipple}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          relative cursor-pointer overflow-hidden
          w-12 h-12 rounded-full
          bg-gradient-to-br from-green-400 via-green-500 to-green-600
          shadow-lg hover:shadow-2xl
          transform transition-all duration-300 ease-out
          ${isHovered ? 'scale-110 -rotate-12' : 'scale-100 hover:scale-105'}
          border-4 border-white/20
          backdrop-blur-sm
          group
          active:scale-95
        `}
        style={{
          boxShadow: isHovered 
            ? '0 20px 40px rgba(34, 197, 94, 0.4), inset 0 1px 0 rgba(255,255,255,0.3)' 
            : '0 10px 25px rgba(34, 197, 94, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
        }}
      >
        {/* Ripple effects */}
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute bg-white/30 rounded-full animate-ping"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: ripple.size,
              height: ripple.size,
              animationDuration: '0.6s'
            }}
          />
        ))}

        {/* Inner glow */}
        <div className="absolute inset-1 rounded-full bg-gradient-to-t from-transparent to-white/20" />
        
        {/* WhatsApp Icon */}
        <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${
          isHovered ? 'scale-110 rotate-12' : 'scale-100'
        }`}>
          <svg
            className="w-5 h-5 text-white drop-shadow-lg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.891 3.426"/>
          </svg>
        </div>

        {/* Pulse ring */}
        <div className={`absolute inset-0 rounded-full border-2 border-white/30 transition-all duration-1000 ${
          isHovered ? 'scale-150 opacity-0' : 'scale-100 opacity-100'
        }`} />
      </button>

      {/* Tooltip */}
      <div className={`absolute right-20 top-1/2 -translate-y-1/2 transition-all duration-300 ${
        isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
      }`}>
        <div className="bg-gradient-to-r from-[#133FAD] via-[#ED3237] to-transparent hover:to-[#C89641] text-white px-3 py-2 rounded-lg text-sm font-medium shadow-lg whitespace-nowrap">
          Chat with us on WhatsApp
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-l-4 border-l-gray-900 border-y-4 border-y-transparent" />
        </div>
      </div>

      {/* Floating message indicator */}
      {/* <div className={`absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg transition-all duration-300 ${
        isVisible ? 'scale-100 animate-bounce' : 'scale-0'
      }`}>
        1
      </div> */}
    </div>
  );
};

export default WhatsApp3DButton;