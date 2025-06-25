
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Gift, Heart, Sparkles } from 'lucide-react';

const TestimonialComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Williams",
      location: "New York, NY",
      rating: 5,
      text: "The most beautiful jewelry box I've ever purchased! The craftsmanship is exquisite and my daughter absolutely loves it. Worth every penny for such a premium gift.",
      avatar: "SW",
      gift: "Luxury Jewelry Box",
      occasion: "Birthday Gift"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Los Angeles, CA",
      rating: 5,
      text: "Outstanding service and quality! The personalized watch arrived beautifully packaged. My wife was in tears of joy. This store truly understands luxury gifting.",
      avatar: "MC",
      gift: "Custom Engraved Watch",
      occasion: "Anniversary"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      location: "Miami, FL",
      rating: 5,
      text: "Absolutely stunning crystal vase! The attention to detail is remarkable. Fast shipping and elegant packaging made this purchase perfect for our housewarming gift.",
      avatar: "ER",
      gift: "Crystal Vase Set",
      occasion: "Housewarming"
    },
    {
      id: 4,
      name: "David Thompson",
      location: "Chicago, IL",
      rating: 5,
      text: "The luxury pen set exceeded all expectations. Beautiful presentation and exceptional quality. My business partner was thoroughly impressed with this executive gift.",
      avatar: "DT",
      gift: "Executive Pen Set",
      occasion: "Business Gift"
    },
    {
      id: "Isabella Martinez",
      location: "Houston, TX",
      rating: 5,
      text: "Gorgeous silk scarf collection! The colors are vibrant and the fabric feels incredibly luxurious. Perfect for my mother's special day. Highly recommend!",
      avatar: "IM",
      gift: "Silk Scarf Collection",
      occasion: "Mother's Day"
    },
    {
      id: 6,
      name: "James Wilson",
      location: "Seattle, WA",
      rating: 5,
      text: "The artisan chocolate gift box was a hit at our dinner party. Premium quality and beautiful presentation. This store knows how to create memorable gifting experiences.",
      avatar: "JW",
      gift: "Artisan Chocolate Box",
      occasion: "Dinner Party"
    }
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    const count = window.innerWidth < 768 ? 1 : 3; // Show 1 on small screens, 3 on larger
    for (let i = 0; i < count; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push({
        ...testimonials[index],
        position: i
      });
    }
    return visible;
  };

  // Floating animation for background elements
  useEffect(() => {
    const interval = setInterval(() => {
      const gifts = document.querySelectorAll('.floating-gift');
      gifts.forEach((gift, index) => {
        const delay = index * 0.5;
        gift.style.animationDelay = `${delay}s`;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Gift Icons */}
        <div className="floating-gift absolute top-20 left-10 text-gray-300/20 animate-bounce">
          <Gift size={40} />
        </div>
        <div className="floating-gift absolute top-32 right-20 text-gray-400/20 animate-pulse">
          <Heart size={35} />
        </div>
        <div className="floating-gift absolute bottom-32 left-20 text-gray-300/20 animate-bounce">
          <Sparkles size={45} />
        </div>
        <div className="floating-gift absolute top-1/2 right-10 text-gray-400/20 animate-pulse">
          <Gift size={30} />
        </div>
        <div className="floating-gift absolute bottom-20 right-32 text-gray-300/20 animate-bounce">
          <Heart size={38} />
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-300/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-200/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-200/50 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Sparkles className="text-yellow-600" size={20} />
            <span className="text-gray-800 font-medium">Customer Stories</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">
            Luxury Experiences
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Discover why thousands of customers trust us for their most precious gifting moments
          </p>
        </div>

        {/* Testimonials Container */}
        <div className="relative w-full max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-gray-200/50 backdrop-blur-sm hover:bg-gray-300/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 rounded-full p-3 group"
          >
            <ChevronLeft className="text-gray-800 group-hover:scale-110 transition-transform" size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-gray-200/50 backdrop-blur-sm hover:bg-gray-300/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 rounded-full p-3 group"
          >
            <ChevronRight className="text-gray-800 group-hover:scale-110 transition-transform" size={24} />
          </button>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-16">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${currentIndex}`}
                className={`transform transition-all duration-500 ease-in-out ${
                  isAnimating ? 'scale-95 opacity-70' : 'scale-100 opacity-100'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 h-full border border-gray-200 hover:bg-white/90 hover:border-gray-300 transition-all duration-300 group hover:scale-105 hover:shadow-2xl">
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-600 fill-current" size={20} />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-800 text-lg leading-relaxed mb-8 font-light">
                    "{testimonial.text}"
                  </p>

                  {/* Gift Info */}
                  <div className="bg-gray-100/50 rounded-2xl p-4 mb-6 border border-gray-200">
                    <div className="flex items-center gap-3 mb-2">
                      <Gift className="text-gray-600" size={18} />
                      <span className="text-gray-800 font-medium">{testimonial.gift}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Heart className="text-gray-500" size={16} />
                      <span className="text-gray-700 text-sm">{testimonial.occasion}</span>
                    </div>
                  </div>

                  {/* Customer Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-semibold text-lg">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-12 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => !isAnimating && setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gray-800 scale-125'
                    : 'bg-gray-400 hover:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            Start Your Gifting Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialComponent;