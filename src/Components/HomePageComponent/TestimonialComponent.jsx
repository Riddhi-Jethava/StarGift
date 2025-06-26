
// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, Star, Gift, Heart, Sparkles } from 'lucide-react';

// const TestimonialComponent = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const testimonials = [
//     {
//       id: 1,
//       name: "Sarah Williams",
//       location: "New York, NY",
//       rating: 5,
//       text: "The most beautiful jewelry box I've ever purchased! The craftsmanship is exquisite and my daughter absolutely loves it. Worth every penny for such a premium gift.",
//       avatar: "SW",
//       gift: "Luxury Jewelry Box",
//       occasion: "Birthday Gift"
//     },
//     {
//       id: 2,
//       name: "Michael Chen",
//       location: "Los Angeles, CA",
//       rating: 5,
//       text: "Outstanding service and quality! The personalized watch arrived beautifully packaged. My wife was in tears of joy. This store truly understands luxury gifting.",
//       avatar: "MC",
//       gift: "Custom Engraved Watch",
//       occasion: "Anniversary"
//     },
//     {
//       id: 3,
//       name: "Emma Rodriguez",
//       location: "Miami, FL",
//       rating: 5,
//       text: "Absolutely stunning crystal vase! The attention to detail is remarkable. Fast shipping and elegant packaging made this purchase perfect for our housewarming gift.",
//       avatar: "ER",
//       gift: "Crystal Vase Set",
//       occasion: "Housewarming"
//     },
//     {
//       id: 4,
//       name: "David Thompson",
//       location: "Chicago, IL",
//       rating: 5,
//       text: "The luxury pen set exceeded all expectations. Beautiful presentation and exceptional quality. My business partner was thoroughly impressed with this executive gift.",
//       avatar: "DT",
//       gift: "Executive Pen Set",
//       occasion: "Business Gift"
//     },
//     {
//       id: "Isabella Martinez",
//       location: "Houston, TX",
//       rating: 5,
//       text: "Gorgeous silk scarf collection! The colors are vibrant and the fabric feels incredibly luxurious. Perfect for my mother's special day. Highly recommend!",
//       avatar: "IM",
//       gift: "Silk Scarf Collection",
//       occasion: "Mother's Day"
//     },
//     {
//       id: 6,
//       name: "James Wilson",
//       location: "Seattle, WA",
//       rating: 5,
//       text: "The artisan chocolate gift box was a hit at our dinner party. Premium quality and beautiful presentation. This store knows how to create memorable gifting experiences.",
//       avatar: "JW",
//       gift: "Artisan Chocolate Box",
//       occasion: "Dinner Party"
//     }
//   ];

//   const nextSlide = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   const prevSlide = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   const getVisibleTestimonials = () => {
//     const visible = [];
//     const count = window.innerWidth < 768 ? 1 : 3; // Show 1 on small screens, 3 on larger
//     for (let i = 0; i < count; i++) {
//       const index = (currentIndex + i) % testimonials.length;
//       visible.push({
//         ...testimonials[index],
//         position: i
//       });
//     }
//     return visible;
//   };

//   // Floating animation for background elements
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const gifts = document.querySelectorAll('.floating-gift');
//       gifts.forEach((gift, index) => {
//         const delay = index * 0.5;
//         gift.style.animationDelay = `${delay}s`;
//       });
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         {/* Floating Gift Icons */}
//         <div className="floating-gift absolute top-20 left-10 text-gray-300/20 animate-bounce">
//           <Gift size={40} />
//         </div>
//         <div className="floating-gift absolute top-32 right-20 text-gray-400/20 animate-pulse">
//           <Heart size={35} />
//         </div>
//         <div className="floating-gift absolute bottom-32 left-20 text-gray-300/20 animate-bounce">
//           <Sparkles size={45} />
//         </div>
//         <div className="floating-gift absolute top-1/2 right-10 text-gray-400/20 animate-pulse">
//           <Gift size={30} />
//         </div>
//         <div className="floating-gift absolute bottom-20 right-32 text-gray-300/20 animate-bounce">
//           <Heart size={38} />
//         </div>

//         {/* Gradient Orbs */}
//         <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-300/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-200/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 bg-gray-200/50 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
//             <Sparkles className="text-yellow-600" size={20} />
//             <span className="text-gray-800 font-medium">Customer Stories</span>
//           </div>
//           <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">
//             Luxury Experiences
//           </h2>
//           <p className="text-xl text-gray-700 max-w-2xl mx-auto">
//             Discover why thousands of customers trust us for their most precious gifting moments
//           </p>
//         </div>

//         {/* Testimonials Container */}
//         <div className="relative w-full max-w-7xl mx-auto">
//           {/* Navigation Buttons */}
//           <button
//             onClick={prevSlide}
//             disabled={isAnimating}
//             className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-gray-200/50 backdrop-blur-sm hover:bg-gray-300/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 rounded-full p-3 group"
//           >
//             <ChevronLeft className="text-gray-800 group-hover:scale-110 transition-transform" size={24} />
//           </button>

//           <button
//             onClick={nextSlide}
//             disabled={isAnimating}
//             className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-gray-200/50 backdrop-blur-sm hover:bg-gray-300/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 rounded-full p-3 group"
//           >
//             <ChevronRight className="text-gray-800 group-hover:scale-110 transition-transform" size={24} />
//           </button>

//           {/* Testimonials Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-16">
//             {getVisibleTestimonials().map((testimonial, index) => (
//               <div
//                 key={`${testimonial.id}-${currentIndex}`}
//                 className={`transform transition-all duration-500 ease-in-out ${
//                   isAnimating ? 'scale-95 opacity-70' : 'scale-100 opacity-100'
//                 }`}
//                 style={{
//                   transitionDelay: `${index * 100}ms`
//                 }}
//               >
//                 <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 h-full border border-gray-200 hover:bg-white/90 hover:border-gray-300 transition-all duration-300 group hover:scale-105 hover:shadow-2xl">
//                   {/* Rating Stars */}
//                   <div className="flex gap-1 mb-6">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <Star key={i} className="text-yellow-600 fill-current" size={20} />
//                     ))}
//                   </div>

//                   {/* Review Text */}
//                   <p className="text-gray-800 text-lg leading-relaxed mb-8 font-light">
//                     "{testimonial.text}"
//                   </p>

//                   {/* Gift Info */}
//                   <div className="bg-gray-100/50 rounded-2xl p-4 mb-6 border border-gray-200">
//                     <div className="flex items-center gap-3 mb-2">
//                       <Gift className="text-gray-600" size={18} />
//                       <span className="text-gray-800 font-medium">{testimonial.gift}</span>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <Heart className="text-gray-500" size={16} />
//                       <span className="text-gray-700 text-sm">{testimonial.occasion}</span>
//                     </div>
//                   </div>

//                   {/* Customer Info */}
//                   <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
//                       {testimonial.avatar}
//                     </div>
//                     <div>
//                       <h4 className="text-gray-900 font-semibold text-lg">{testimonial.name}</h4>
//                       <p className="text-gray-600 text-sm">{testimonial.location}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Dots Indicator */}
//           <div className="flex justify-center mt-12 gap-2">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => !isAnimating && setCurrentIndex(index)}
//                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                   index === currentIndex
//                     ? 'bg-gray-800 scale-125'
//                     : 'bg-gray-400 hover:bg-gray-600'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Bottom CTA */}
//         <div className="mt-16 text-center">
//           <button className="bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
//             Start Your Gifting Journey
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialComponent;

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Gift, Heart, Sparkles } from 'lucide-react';
import { User } from 'lucide-react';
import taddy from '../../assets/StaticImg/taddy.png'
import box from '../../assets/StaticImg/taddybox.png'

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
      id: 5,
      name: "Isabella Martinez",
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
      rating: "5",
      text: "The artisan chocolate gift box was a hit at our dinner party. Premium quality and beautiful presentation.",
      avatar: "JW",
      gift: "Artisan Chocolate Box",
      occasion: "Dinner Party",
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
    const count = window.innerWidth < 768 ? 1 : 3;
    for (let i = 0; i < count; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push({
        ...testimonials[index],
        position: i
      });
    }
    return visible;
  };

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
      <img src={box} alt="" className='w-50 absolute -bottom-17 -left-3 z-20'/>
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

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div data-aos="zoom-in-up" className="relative inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#133FAD]/10 to-[#ED3237]/10 rounded-full border border-[#133FAD]/20 mb-6">
            <Sparkles className="w-5 h-5 text-[#6787d7]" />
            <span className="text-sm font-semibold text-[#6787d7] tracking-wider uppercase">Customer Stories</span>
             <img src={taddy} alt="" className='w-30 absolute -top-20 left-12' />
          </div>

          <h2 data-aos="zoom-in-up" className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-black/90 via-[#133FAD] to-[#ED3237] bg-clip-text text-transparent">
              Luxury Experiences
            </span>
          </h2>

          <p data-aos="zoom-in-up" className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover why thousands of customers trust us for their most precious gifting moments
          </p>
        </div>

        <div className="relative w-full max-w-7xl mx-auto">
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-gradient-to-r from-[#133FAD]/10 to-[#ED3237]/10 backdrop-blur-sm hover:bg-gradient-to-r hover:from-[#133FAD]/20 hover:to-[#ED3237]/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 rounded-full p-3 group"
          >
            <ChevronLeft className="text-[#133FAD] group-hover:scale-110 transition-transform" size={24} />
          </button>

          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-gradient-to-r from-[#133FAD]/10 to-[#ED3237]/10 backdrop-blur-sm hover:bg-gradient-to-r hover:from-[#133FAD]/20 hover:to-[#ED3237]/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 rounded-full p-3 group"
          >
            <ChevronRight className="text-[#133FAD] group-hover:scale-110 transition-transform" size={24} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-16">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div  data-aos="zoom-in-up"
                key={`${testimonial.id}-${currentIndex}`}
                className={`transform transition-all duration-500 ease-in-out ${isAnimating ? 'scale-95 opacity-70' : 'scale-100 opacity-100'
                  }`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 h-full border border-[#969394]/20 hover:bg-white/90 hover:border-[#133FAD]/30 transition-all duration-300 group hover:scale-105 hover:shadow-2xl">
                  {/* <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-[#ED3237] fill-current" size={20} />
                    ))}
                  </div> */}
                   <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#133FAD] to-[#ED3237] rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-[#133FAD] font-semibold text-lg">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.location}</p>
                    </div>
                  </div>

                  <p className="text-gray-800 text-lg leading-relaxed mb-8 font-light pt-6">
                    "{testimonial.text}"
                  </p>

                  <div className="bg-gradient-to-r from-[#133FAD]/5 to-[#ED3237]/5 rounded-2xl p-4 border border-[#969394]/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Gift className="text-[#133FAD]" size={18} />
                      <span className="text-[#133FAD] font-medium">{testimonial.gift}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Heart className="text-[#ED3237]" size={16} />
                      <span className="text-[#ED3237] text-sm">{testimonial.occasion}</span>
                    </div>
                  </div>

                 
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => !isAnimating && setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'bg-[#133FAD] scale-125'
                  : 'bg-[#969394] hover:bg-[#ED3237]'
                  }`}
              />
            ))}
          </div>
        </div>

       
        <div data-aos="zoom-in-up" className="mt-10">
          <button className="group/main relative overflow-hidden inset-0 bg-gradient-to-r from-[#221F20]/80 to-slate-400  border-[#969394]/40 rounded-full px-8 py-4 transition-all duration-700 hover:border-transparent hover:shadow-2xl hover:shadow-[#133FAD]/20 transform hover:scale-105">
            {/* Morphing Background Layers */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#133FAD]/20 via-[#ED3237]/20 to-[#221F20]/20 rounded-full transform scale-0 group-hover/main:scale-100 transition-transform duration-700 ease-out"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#ED3237]/30 to-[#133FAD]/30 rounded-full transform rotate-0 group-hover/main:rotate-180 transition-transform duration-1000 ease-in-out opacity-0 group-hover/main:opacity-100"></div>

            {/* Wave Effect */}
            <div className="absolute inset-0 opacity-0 group-hover/main:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-[#133FAD] to-[#ED3237] rounded-full transform scale-x-0 group-hover/main:scale-x-100 transition-transform duration-800 ease-out origin-center opacity-80"></div>
            </div>

            {/* Button Content */}
            <div className="relative z-10 flex items-center space-x-4">
              <span className="text-lg font-bold text-[#d0cbcd] transition-all duration-500 inset-0 group-hover/main:text-white group-hover/main:tracking-wider group-hover/main:drop-shadow-lg">
                Start Your Gifting Journey
              </span>
              <div className="relative">
                <User className="w-6 h-6 text-[#d0cbcd] transition-all duration-700 group-hover/main:text-white group-hover/main:rotate-360 group-hover/main:scale-125" />
                {/* Orbital Elements */}
                <div className="absolute -inset-4 opacity-0 group-hover/main:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-1/2 w-1 h-1 bg-white rounded-full animate-ping transform -translate-x-1/2" style={{ animationDelay: '0.2s' }}></div>
                  <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-white rounded-full animate-ping transform -translate-x-1/2" style={{ animationDelay: '0.6s' }}></div>
                  <div className="absolute top-1/2 left-0 w-1 h-1 bg-white rounded-full animate-ping transform -translate-y-1/2" style={{ animationDelay: '0.4s' }}></div>
                  <div className="absolute top-1/2 right-0 w-1 h-1 bg-white rounded-full animate-ping transform -translate-y-1/2" style={{ animationDelay: '0.8s' }}></div>
                </div>
              </div>
            </div>

            {/* Electric Particles */}
            <div className="absolute inset-0 opacity-0 group-hover/main:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="absolute top-1/4 left-1/6 w-0.5 h-0.5 bg-white rounded-full animate-ping" style={{ animationDelay: '0.1s' }}></div>
              <div className="absolute top-3/4 right-1/6 w-0.5 h-0.5 bg-white rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
              <div className="absolute bottom-1/3 left-1/3 w-0.5 h-0.5 bg-white rounded-full animate-ping" style={{ animationDelay: '0.7s' }}></div>
              <div className="absolute top-1/6 right-1/3 w-0.5 h-0.5 bg-white rounded-full animate-ping" style={{ animationDelay: '0.9s' }}></div>
            </div>

            {/* Glow Ring */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#133FAD]/0 via-[#ED3237]/0 to-[#133FAD]/0 group-hover/main:from-[#133FAD]/20 group-hover/main:via-[#ED3237]/20 group-hover/main:to-[#133FAD]/20 rounded-full blur-lg transition-all duration-700"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialComponent;