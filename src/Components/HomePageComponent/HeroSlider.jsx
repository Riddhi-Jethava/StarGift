import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, ShoppingBag, Play, Sparkles, Award } from 'lucide-react';
import fixedBgImage from '../../assets/HomeImg/sliderbg.jpg'
import s1 from '../../assets/HomeImage/TableClock.jpg'
import s2 from '../../assets/HomeImage/trophy.jpg'
import s3 from '../../assets/HomeImage/tableTop.jpg'
// import taddy from '../../assets/HomeImg/panda.png'

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [animationState, setAnimationState] = useState('idle'); // 'idle', 'exiting', 'entering', 'bouncing'

  const slides = [
    {
      id: 1,
      productImage: s1,
      title: "Table Clock Collection",
      subtitle: "Luxury Redefined",
      description: "Discover our exclusive range of handcrafted gifts that speak the language of elegance and sophistication.",
      price: "$299",
      originalPrice: "$399",
      rating: 4.9,
      reviews: 127,
      badge: "Best Seller"
    },
    {
      id: 2,
      productImage: s2,
      title: "Trophy Collection",
      subtitle: "Moments to Treasure",
      description: "Celebrate love with our curated wedding gift collection designed to make every moment unforgettable.",
      price: "$199",
      originalPrice: "$249",
      rating: 4.8,
      reviews: 89,
      badge: "New Arrival"
    },
    {
      id: 3,
      productImage: s3,
      title: "Table Top Gifts",
      subtitle: "Professional Excellence",
      description: "Impress your clients and colleagues with our sophisticated corporate gift solutions.",
      price: "$149",
      originalPrice: "$199",
      rating: 4.7,
      reviews: 156,
      badge: "Popular"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      handleSlideChange((currentSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying, slides.length]);

  const handleSlideChange = (newIndex) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Step 1: Exit animation
    setAnimationState('exiting');
    
    setTimeout(() => {
      // Step 2: Change slide and start entering
      setCurrentSlide(newIndex);
      setAnimationState('entering');
      
      setTimeout(() => {
        // Step 3: First bounce (overshoot)
        setAnimationState('bouncing');
        
        setTimeout(() => {
          // Step 4: Second bounce (settle back)
          setAnimationState('bouncing2');
          
          setTimeout(() => {
            // Step 5: Final settle
            setAnimationState('idle');
            setIsTransitioning(false);
          }, 600); // Final settle duration
        }, 500); // First bounce duration
      }, 100); // Small delay before bounce
    }, 600); // Exit duration
  };

  const nextSlide = () => {
    handleSlideChange((currentSlide + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    handleSlideChange((currentSlide - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    if (index !== currentSlide) {
      handleSlideChange(index);
      setIsAutoPlaying(false);
    }
  };

  // Animation classes for text (slides from right, bounces left then settles)
  const getTextAnimationClasses = () => {
    switch (animationState) {
      case 'exiting':
        return 'translate-x-full opacity-0 transition-all duration-600 ease-in-out';
      case 'entering':
        return 'translate-x-full opacity-0';
      case 'bouncing':
        return '-translate-x-16 opacity-100 transition-all duration-500 ease-out';
      case 'bouncing2':
        return 'translate-x-4 opacity-100 transition-all duration-600 ease-in-out';
      case 'idle':
        return 'translate-x-0 opacity-100 transition-all duration-400 ease-out';
      default:
        return 'translate-x-0 opacity-100';
    }
  };

  // Animation classes for image (slides from left, bounces right then settles)
  const getImageAnimationClasses = () => {
    switch (animationState) {
      case 'exiting':
        return '-translate-x-full opacity-0 transition-all duration-600 ease-in-out';
      case 'entering':
        return '-translate-x-full opacity-0';
      case 'bouncing':
        return 'translate-x-16 opacity-100 transition-all duration-500 ease-out';
      case 'bouncing2':
        return '-translate-x-4 opacity-100 transition-all duration-600 ease-in-out';
      case 'idle':
        return 'translate-x-0 opacity-100 transition-all duration-400 ease-out';
      default:
        return 'translate-x-0 opacity-100';
    }
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative w-full h-220 md:h-screen py-34 md:py-0 overflow-hidden">
      {/* <img src={taddy} alt="" className='w-25 md:w-36 absolute bottom-0 -left-5 opacity-50 z-30' /> */}
      {/* Static Background Image */}
      <div className="absolute inset-0">
        <img
          src={fixedBgImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/80 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto  h-full px-4 sm:px-6 lg:px-30">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 h-full items-center">
            
            {/* Left Content - Slides from right with bounce */}
            <div className={`text-white space-y-6 lg:space-y-8 ${getTextAnimationClasses()}`}>
              
              {/* Title */}
              <div className="space-y-4">
                <h2 className="text-sm sm:text-base font-medium tracking-wider uppercase">
                  {currentSlideData.subtitle}
                </h2>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                    {currentSlideData.title}
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-xl">
                {currentSlideData.description}
              </p>

              {/* Rating & Reviews */}
            
              {/* Price & CTA */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
                            
                <div className="flex items-center space-x-4">
                  <button className="group flex items-center space-x-3 bg-gradient-to-r from-[#ED3237] to-[#133FAD] text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-[#ED3237]/25 transform hover:scale-105 transition-all duration-300">
                    <ShoppingBag className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Shop Now</span>
                  </button>
                  
                  <button className="p-4 border-2 border-white/30 rounded-full backdrop-blur-md hover:border-white/60 hover:bg-white/10 transition-all duration-300 group">
                    <Heart className="w-5 h-5 group-hover:fill-current group-hover:text-red-400 transition-colors duration-300" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Product Image - Slides from left with bounce */}
            <div className={`relative top-15.5 flex justify-center lg:justify-end  items-end ${getImageAnimationClasses()}`}>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-[#ED3237]/20 to-[#133FAD]/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gradient-to-tr from-[#133FAD]/15 to-[#ED3237]/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
              
              {/* Image Container */}
              <div className="relative">
                {/* Border Frame */}
                {/* <div className="absolute -inset-4 bg-gradient-to-br border from-[#ED3237] via-purple-500 to-[#133FAD] rounded-t-full "></div> */}
                {/* <div className="absolute -inset-2 bg-gradient-to-br from-[#ED3237] to-[#133FAD] rounded-t-full"></div> */}
                
                {/* White Border Space */}
                <div className="absolute -inset-2 bg-white/5 rounded-t-full "></div>
                
                {/* Product Image */}
                <div className="relative w-80 h-96 sm:w-96 sm:h-[28rem] lg:w-80 lg:h-96 xl:w-130 xl:h-[38rem] rounded-t-full overflow-hidden shadow-2xl">
                  <img
                    src={currentSlideData.productImage}
                    alt={currentSlideData.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Floating Sparkles */}
                  <Sparkles className="absolute top-4 right-4 w-6 h-6 text-yellow-400 animate-bounce" />
                  <Sparkles className="absolute bottom-6 left-4 w-4 h-4 text-white animate-bounce" style={{animationDelay: '0.5s'}} />
                  
                  {/* Price Tag */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg">
                    <span className="text-sm font-bold bg-gradient-to-r from-[#ED3237] to-[#133FAD] bg-clip-text text-transparent">
                      {currentSlideData.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full hover:bg-white/30 transition-all duration-300 group disabled:opacity-50"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
      </button>
      
      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full hover:bg-white/30 transition-all duration-300 group disabled:opacity-50"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`w-3 h-3 rounded-full transition-all duration-300 disabled:opacity-50 ${
              index === currentSlide
                ? 'bg-gradient-to-r from-[#ED3237] to-[#133FAD] scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Auto-play Indicator */}
      <div className="absolute top-8 right-8 z-20">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className={`p-2 rounded-full backdrop-blur-md border transition-all duration-300 ${
            isAutoPlaying
              ? 'bg-[#ED3237]/20 border-[#ED3237]/30 text-[#ED3237]'
              : 'bg-white/20 border-white/30 text-white'
          }`}
        >
          <Play className={`w-4 h-4 ${isAutoPlaying ? 'animate-pulse' : ''}`} />
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;