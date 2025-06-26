// import React, { useState } from 'react';
// import { Gift, Heart, Users, Briefcase, Star, Sparkles, ArrowRight, Crown } from 'lucide-react';
// import bgImg from '../../assets/HomeImg/bg1.jpg'
// import cat1 from '../../assets/HomeImg/cat (3).jpg'
// import cat2 from '../../assets/HomeImg/cat (2).jpg'
// import cat3 from '../../assets/HomeImg/cat (4).jpg'
// import cat4 from '../../assets/HomeImg/cat (1).jpg'

// const PopularGiftCategories = () => {
//   const [hoveredCard, setHoveredCard] = useState(null);

//   const categories = [
//     {
//       id: 1,
//       title: "Birthday Gifts",
//       subtitle: "Celebrate Life",
//       description: "Make every birthday unforgettable with our curated collection of premium gifts",
//       icon: Gift,
//       image: cat1,
//       gradient: "from-[#ED3237] to-pink-500",
//       borderGradient: "from-[#ED3237] via-pink-400 to-rose-400",
//       iconBg: "bg-[#ED3237]/20",
//       iconColor: "text-[#ED3237]",
//       count: "250+ Items"
//     },
//     {
//       id: 2,
//       title: "Anniversary",
//       subtitle: "Love Stories",
//       description: "Commemorate precious moments with elegant gifts that speak the language of love",
//       icon: Heart,
//       image: cat2,
//       gradient: "from-[#133FAD] to-purple-500",
//       borderGradient: "from-[#133FAD] via-blue-400 to-purple-400",
//       iconBg: "bg-[#133FAD]/20",
//       iconColor: "text-[#133FAD]",
//       count: "180+ Items"
//     },
//     {
//       id: 3,
//       title: "Personalized",
//       subtitle: "Uniquely Yours",
//       description: "Custom crafted gifts that tell your story with personal touches and memories",
//       icon: Star,
//       image: cat3,
//       gradient: "from-[#221F20] to-gray-600",
//       borderGradient: "from-[#221F20] via-gray-500 to-slate-500",
//       iconBg: "bg-[#221F20]/20",
//       iconColor: "text-[#221F20]",
//       count: "320+ Items"
//     },
//     {
//       id: 4,
//       title: "Corporate",
//       subtitle: "Professional Excellence",
//       description: "Sophisticated corporate gifts that leave lasting impressions and build relationships",
//       icon: Briefcase,
//       image: cat4,
//       gradient: "from-[#ED3237] to-[#133FAD]",
//       borderGradient: "from-[#ED3237] via-purple-500 to-[#133FAD]",
//       iconBg: "bg-gradient-to-r from-[#ED3237]/20 to-[#133FAD]/20",
//       iconColor: "text-transparent bg-gradient-to-r from-[#ED3237] to-[#133FAD] bg-clip-text",
//       count: "150+ Items"
//     }
//   ];

//   return (
//     <div className="relative py-20 px-10 bg-[#141213] overflow-hidden">
//       <div className="absolute inset-0 z-0">
//         {/* <img
//           src={bgImg} // Replace with your image, e.g., '../../assets/HomeImg/background.jpg'
//           alt="Luxury gifting background"
//           className="w-full h-full object-cover fixed top-0 left-0"
//           style={{ filter: 'brightness(0.3)' }} // Darken image for readability
//         /> */}
//         {/* Dark Overlay with Subtle Gradient */}
//         <div className="absolute inset-0 bg-gradient-to-b from-[#141213]/80 via-[#141213]/90 to-[#141213]/80"></div>
//       </div>
//       {/* Decorative Background Elements */}
//       <div className="absolute top-0 left-0 w-full h-full">
//         <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#133FAD]/10 to-[#ED3237]/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-[#ED3237]/10 to-[#133FAD]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
//         <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-[#221F20]/5 to-[#133FAD]/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#133FAD]/10 to-[#ED3237]/10 rounded-full border border-[#133FAD]/20 mb-6">
//             <Crown className="w-5 h-5 text-[#6787d7]" />
//             <span className="text-sm font-semibold text-[#6787d7] tracking-wider uppercase">Premium Collection</span>
//           </div>

//           <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
//             <span className="bg-gradient-to-r from-[#969394] via-[#133FAD] to-[#ED3237] bg-clip-text text-transparent">
//               Popular Gift Categories
//             </span>
//           </h2>

//           <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
//             Discover our exquisite collection of premium gifts, carefully curated to celebrate life's most precious moments with elegance and sophistication.
//           </p>
//         </div>

//         {/* Categories Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {categories.map((category, index) => {
//             const IconComponent = category.icon;
//             return (
//               <div
//                 key={category.id}
//                 className="group relative"
//                 onMouseEnter={() => setHoveredCard(category.id)}
//                 onMouseLeave={() => setHoveredCard(null)}
//                 style={{
//                   animationDelay: `${index * 0.2}s`
//                 }}
//               >
//                 {/* Card Container */}
//                 <div className="relative h-[400px] transform transition-all duration-500 hover:scale-105">
//                   {/* Animated Border */}
//                   <div className={`absolute -inset-1 bg-gradient-to-br ${category.borderGradient} rounded-3xl blur-sm opacity-0 group-hover:opacity-75 transition-opacity duration-500`}></div>
//                   <div className={`absolute -inset-0.5 bg-gradient-to-br ${category.borderGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

//                   {/* Main Card */}
//                   <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
//                     {/* Full Height Image */}
//                     <div className="relative h-full overflow-hidden">
//                       <img
//                         src={category.image}
//                         alt={category.title}
//                         className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
//                       />

//                       {/* Gradient Overlay (Always Visible) */}
//                       <div className={`absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 transition-opacity duration-500`}></div>

//                       {/* Hover Overlay */}
//                       <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
//                         {/* Content (Visible on Hover) */}
//                         <div className="space-y-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
//                           <div className="space-y-2">
//                             <p className={`text-sm font-medium tracking-wider uppercase ${category.iconColor}`}>
//                               {category.subtitle}
//                             </p>
//                           </div>

//                           <p className="text-gray-200 pt-10 leading-relaxed text-sm">
//                             {category.description}
//                           </p>

//                           {/* Unique CTA Button */}
//                           <div className="pt-2">
//                             <button className="group/btn relative overflow-hidden bg-[#141213]/80 backdrop-blur-sm border-2 border-[#969394]/30 rounded-full px-6 py-3 transition-all duration-500 hover:border-transparent">
//                               {/* Liquid Fill Effect */}
//                               <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-700 ease-out origin-left rounded-full`}></div>

//                               {/* Ripple Effect */}
//                               <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100">
//                                 <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-gradient-to-r ${category.gradient} rounded-full group-hover/btn:w-full group-hover/btn:h-full transition-all duration-500 opacity-20`}></div>
//                               </div>

//                               {/* Button Content */}
//                               <div className="relative z-10 flex items-center space-x-2">
//                                 <span className="text-sm font-semibold text-white transition-all duration-300 group-hover/btn:text-white group-hover/btn:drop-shadow-lg">
//                                   Explore Now
//                                 </span>
//                                 <ArrowRight className="w-4 h-4 text-white transition-all duration-500 group-hover/btn:translate-x-2 group-hover/btn:-rotate-20 group-hover/btn:scale-110" />
//                               </div>

//                               {/* Glitter Effect */}
//                               <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 pointer-events-none">
//                                 <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0.1s' }}></div>
//                                 <div className="absolute top-3/4 right-1/4 w-0.5 h-0.5 bg-white rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
//                                 <div className="absolute bottom-1/4 left-3/4 w-0.5 h-0.5 bg-white rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
//                               </div>
//                             </button>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Category Name (Moves Up on Hover) */}
//                       <div className="absolute bottom-4 left-6 right-4 transition-transform duration-500 transform group-hover:-translate-y-32">
//                         <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg">
//                           {category.title}
//                         </h3>
//                       </div>

//                       {/* Icon Container */}
//                       <div className="absolute top-4 right-4">
//                         <div className={`${category.iconBg} backdrop-blur-sm p-3 rounded-full border border-white/20`}>
//                           <IconComponent className={`w-6 h-6 ${category.iconColor}`} />
//                         </div>
//                       </div>
//                     </div>

//                     {/* Animated Sparkles */}
//                     <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
//                       <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
//                       <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
//                       <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Floating Shadow */}
//                 <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-3/4 h-6 bg-gradient-to-r from-transparent via-black/10 to-transparent rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Bottom CTA with Morphing Effect */}
//         <div className="text-center mt-16">
//           <button className="group/main relative overflow-hidden inset-0 bg-gradient-to-r from-[#221F20] to-gray-600  border-2 border-[#969394]/40 rounded-full px-8 py-4 transition-all duration-700 hover:border-transparent hover:shadow-2xl hover:shadow-[#133FAD]/20 transform hover:scale-105">
//             {/* Morphing Background Layers */}
//             <div className="absolute inset-0 bg-gradient-to-r from-[#133FAD]/20 via-[#ED3237]/20 to-[#221F20]/20 rounded-full transform scale-0 group-hover/main:scale-100 transition-transform duration-700 ease-out"></div>
//             <div className="absolute inset-0 bg-gradient-to-r from-[#ED3237]/30 to-[#133FAD]/30 rounded-full transform rotate-0 group-hover/main:rotate-180 transition-transform duration-1000 ease-in-out opacity-0 group-hover/main:opacity-100"></div>

//             {/* Wave Effect */}
//             <div className="absolute inset-0 opacity-0 group-hover/main:opacity-100 transition-opacity duration-500">
//               <div className="absolute inset-0 bg-gradient-to-r from-[#133FAD] to-[#ED3237] rounded-full transform scale-x-0 group-hover/main:scale-x-100 transition-transform duration-800 ease-out origin-center opacity-80"></div>
//             </div>

//             {/* Button Content */}
//             <div className="relative z-10 flex items-center space-x-4">
//               <span className="text-lg font-bold text-[#969394] transition-all duration-500 inset-0 group-hover/main:text-white group-hover/main:tracking-wider group-hover/main:drop-shadow-lg">
//                 View All Categories
//               </span>
//               <div className="relative">
//                 <Users className="w-6 h-6 text-[#969394] transition-all duration-700 group-hover/main:text-white group-hover/main:rotate-360 group-hover/main:scale-125" />
//                 {/* Orbital Elements */}
//                 <div className="absolute -inset-4 opacity-0 group-hover/main:opacity-100 transition-opacity duration-500">
//                   <div className="absolute top-0 left-1/2 w-1 h-1 bg-white rounded-full animate-ping transform -translate-x-1/2" style={{ animationDelay: '0.2s' }}></div>
//                   <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-white rounded-full animate-ping transform -translate-x-1/2" style={{ animationDelay: '0.6s' }}></div>
//                   <div className="absolute top-1/2 left-0 w-1 h-1 bg-white rounded-full animate-ping transform -translate-y-1/2" style={{ animationDelay: '0.4s' }}></div>
//                   <div className="absolute top-1/2 right-0 w-1 h-1 bg-white rounded-full animate-ping transform -translate-y-1/2" style={{ animationDelay: '0.8s' }}></div>
//                 </div>
//               </div>
//             </div>

//             {/* Electric Particles */}
//             <div className="absolute inset-0 opacity-0 group-hover/main:opacity-100 transition-opacity duration-300 pointer-events-none">
//               <div className="absolute top-1/4 left-1/6 w-0.5 h-0.5 bg-white rounded-full animate-ping" style={{ animationDelay: '0.1s' }}></div>
//               <div className="absolute top-3/4 right-1/6 w-0.5 h-0.5 bg-white rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
//               <div className="absolute bottom-1/3 left-1/3 w-0.5 h-0.5 bg-white rounded-full animate-ping" style={{ animationDelay: '0.7s' }}></div>
//               <div className="absolute top-1/6 right-1/3 w-0.5 h-0.5 bg-white rounded-full animate-ping" style={{ animationDelay: '0.9s' }}></div>
//             </div>

//             {/* Glow Ring */}
//             <div className="absolute -inset-2 bg-gradient-to-r from-[#133FAD]/0 via-[#ED3237]/0 to-[#133FAD]/0 group-hover/main:from-[#133FAD]/20 group-hover/main:via-[#ED3237]/20 group-hover/main:to-[#133FAD]/20 rounded-full blur-lg transition-all duration-700"></div>
//           </button>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes rotate-360 {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         .group-hover\\/main\\:rotate-360:hover {
//           animation: rotate-360 0.7s ease-in-out;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default PopularGiftCategories;

import React, { useState, useEffect } from 'react';
import { Gift, Heart, Users, Briefcase, Star, Sparkles, ArrowRight, Crown, Gem, Trophy } from 'lucide-react';
// import bgImg from '../../assets/HomeImg/bg1.jpg'
import cat1 from '../../assets/HomeImage/trophy.jpg'
import cat2 from '../../assets/HomeImage/TableClock.jpg'
import cat3 from '../../assets/HomeImage/tableTop.jpg'
import cat4 from '../../assets/HomeImage/calender.jpg'
import taddy from '../../assets/StaticImg/taddy.png'
import rabbit from '../../assets/StaticImg/rabit.png'

const PopularGiftCategories = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse move handler for interactive light trail
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  const categories = [
    {
      id: 1,
      title: "Trophy Collection",
      subtitle: "Celebrate Life",
      description: "Make every birthday unforgettable with our curated collection of premium gifts",
      icon: Gift,
      image: cat1,
      gradient: "from-[#ED3237] to-pink-500",
      borderGradient: "from-[#ED3237] via-pink-400 to-rose-400",
      iconBg: "bg-[#ED3237]/20",
      iconColor: "text-[#ED3237]",
      count: "250+ Items"
    },
    {
      id: 2,
      title: "Table Clock",
      subtitle: "Love Stories",
      description: "Commemorate precious moments with elegant gifts that speak the language of love",
      icon: Heart,
      image: cat2,
      gradient: "from-[#133FAD] to-purple-500",
      borderGradient: "from-[#133FAD] via-blue-400 to-purple-400",
      iconBg: "bg-[#133FAD]/20",
      iconColor: "text-[#133FAD]",
      count: "180+ Items"
    },
    {
      id: 3,
      title: "Table Top",
      subtitle: "Uniquely Yours",
      description: "Custom crafted gifts that tell your story with personal touches and memories",
      icon: Star,
      image: cat3,
      gradient: "from-[#221F20] to-gray-600",
      borderGradient: "from-[#221F20] via-gray-500 to-slate-500",
      iconBg: "bg-[#221F20]/20",
      iconColor: "text-[#221F20]",
      count: "320+ Items"
    },
    {
      id: 4,
      title: "Calender",
      subtitle: "Professional Excellence",
      description: "Sophisticated corporate gifts that leave lasting impressions and build relationships",
      icon: Briefcase,
      image: cat4,
      gradient: "from-[#ED3237] to-[#133FAD]",
      borderGradient: "from-[#ED3237] via-purple-500 to-[#133FAD]",
      iconBg: "bg-gradient-to-r from-[#ED3237]/20 to-[#133FAD]/20",
      iconColor: "text-transparent bg-gradient-to-r from-[#ED3237] to-[#133FAD] bg-clip-text",
      count: "150+ Items"
    }
  ];

  return (
    <div className="relative py-20 px-10 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      <img src={rabbit} className='w-60 absolute -bottom-18 -left-3 z-20'/>
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-gift absolute top-20 left-10 text-[#ED3237]/20 animate-bounce">
          <Gift size={40} />
        </div>
        <div className="floating-gift absolute top-32 right-20 text-[#133FAD]/20 animate-pulse">
          <Heart size={35} />
        </div>
        {/* <div className="floating-gift absolute bottom-32 left-20 text-[#221F20]/20 animate-bounce">
          <Sparkles size={45} />
        </div> */}
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
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Gradient Orbs */}
        <div
          className="absolute top-0 left-0 w-[700px] h-[700px] bg-gradient-to-br from-[#133FAD]/15 via-[#ED3237]/10 to-transparent rounded-full blur-3xl animate-pulse opacity-25"
          style={{ animationDuration: '7s' }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#ED3237]/15 via-[#133FAD]/10 to-transparent rounded-full blur-3xl animate-pulse opacity-25"
          style={{ animationDelay: '2s', animationDuration: '9s' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-[#221F20]/10 via-[#ED3237]/5 to-transparent rounded-full blur-3xl animate-pulse opacity-20"
          style={{ animationDelay: '4s', animationDuration: '11s' }}
        ></div>

        {/* Floating Particles */}
        <div className="absolute top-1/5 left-1/5 w-3 h-3 bg-gradient-to-br from-[#133FAD] to-[#ED3237] rounded-full animate-ping opacity-50"></div>
        <div
          className="absolute bottom-1/5 right-1/5 w-2 h-2 bg-gradient-to-br from-[#ED3237] to-[#133FAD] rounded-full animate-ping opacity-50"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-gradient-to-br from-[#221F20] to-[#ED3237] rounded-full animate-ping opacity-50"
          style={{ animationDelay: '2s' }}
        ></div>

        {/* Interactive Light Trail */}
        <div
          className="absolute w-80 h-80 bg-gradient-radial from-[#133FAD]/10 via-[#ED3237]/5 to-transparent rounded-full blur-2xl transition-all duration-300"
          style={{
            left: mousePosition.x - 160,
            top: mousePosition.y - 160,
            opacity: 0.5,
          }}
        ></div>
      </div>
      <div className="absolute inset-0 z-0">
        {/* <img
          src={bgImg} // Replace with your image, e.g., '../../assets/HomeImg/background.jpg'
          alt="Luxury gifting background"
          className="w-full h-full object-cover fixed top-0 left-0"
          style={{ filter: 'brightness(0.3)' }} // Darken image for readability
        /> */}
        {/* Light Overlay with Subtle Gradient */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/95 to-white/90"></div> */}
      </div>
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#133FAD]/10 to-[#ED3237]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-[#ED3237]/10 to-[#133FAD]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-[#221F20]/5 to-[#133FAD]/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="relative inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#133FAD]/10 to-[#ED3237]/10 rounded-full border border-[#133FAD]/20 mb-6">
            <Crown className="w-5 h-5 text-[#6787d7]" />
            <span className="text-sm font-semibold text-[#6787d7] tracking-wider uppercase">Premium Collection</span>
            <img src={taddy} alt="" className='w-30 absolute -top-20 left-15' />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-black/90 via-[#133FAD] to-[#ED3237] bg-clip-text text-transparent">
              Popular Gift Categories
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our exquisite collection of premium gifts, carefully curated to celebrate life's most precious moments with elegance and sophistication.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="group relative"
                onMouseEnter={() => setHoveredCard(category.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {/* Card Container */}
                <div className="relative h-[400px] transform transition-all duration-500 hover:scale-105">
                  {/* Animated Border */}
                  <div className={`absolute -inset-1 bg-gradient-to-br ${category.borderGradient} rounded-3xl blur-sm opacity-0 group-hover:opacity-75 transition-opacity duration-500`}></div>
                  <div className={`absolute -inset-0.5 bg-gradient-to-br ${category.borderGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  {/* Main Card */}
                  <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                    {/* Full Height Image */}
                    <div className="relative h-full overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />

                      {/* Gradient Overlay (Always Visible) */}
                      <div className={`absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 transition-opacity duration-500`}></div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                        {/* Content (Visible on Hover) */}
                        <div className="space-y-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <div className="space-y-2">
                            <p className={`text-sm font-medium tracking-wider uppercase ${category.iconColor}`}>
                              {category.subtitle}
                            </p>
                          </div>

                          <p className="text-gray-200 pt-10 leading-relaxed text-sm">
                            {category.description}
                          </p>

                          {/* Unique CTA Button */}
                          <div className="pt-2">
                            <button className="group/btn relative overflow-hidden bg-[#141213]/80 backdrop-blur-sm border-2 border-[#969394]/30 rounded-full px-6 py-3 transition-all duration-500 hover:border-transparent">
                              {/* Liquid Fill Effect */}
                              <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-700 ease-out origin-left rounded-full`}></div>

                              {/* Ripple Effect */}
                              <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100">
                                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-gradient-to-r ${category.gradient} rounded-full group-hover/btn:w-full group-hover/btn:h-full transition-all duration-500 opacity-20`}></div>
                              </div>

                              {/* Button Content */}
                              <div className="relative z-10 flex items-center space-x-2">
                                <span className="text-sm font-semibold text-white transition-all duration-300 group-hover/btn:text-white group-hover/btn:drop-shadow-lg">
                                  Explore Now
                                </span>
                                <ArrowRight className="w-4 h-4 text-white transition-all duration-500 group-hover/btn:translate-x-2 group-hover/btn:-rotate-20 group-hover/btn:scale-110" />
                              </div>

                              {/* Glitter Effect */}
                              <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0.1s' }}></div>
                                <div className="absolute top-3/4 right-1/4 w-0.5 h-0.5 bg-white rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
                                <div className="absolute bottom-1/4 left-3/4 w-0.5 h-0.5 bg-white rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Category Name (Moves Up on Hover) */}
                      <div className="absolute bottom-4 left-6 right-4 transition-transform duration-500 transform group-hover:-translate-y-32">
                        <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg">
                          {category.title}
                        </h3>
                      </div>

                      {/* Icon Container */}
                      <div className="absolute top-4 right-4">
                        <div className={`${category.iconBg} backdrop-blur-sm p-3 rounded-full border border-white/20`}>
                          <IconComponent className={`w-6 h-6 ${category.iconColor}`} />
                        </div>
                      </div>
                    </div>

                    {/* Animated Sparkles */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
                      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                      <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                    </div>
                  </div>
                </div>

                {/* Floating Shadow */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-3/4 h-6 bg-gradient-to-r from-transparent via-black/10 to-transparent rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA with Morphing Effect */}
        <div className="text-center mt-16">
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
                View All Categories
              </span>
              <div className="relative">
                <Users className="w-6 h-6 text-[#d0cbcd] transition-all duration-700 group-hover/main:text-white group-hover/main:rotate-360 group-hover/main:scale-125" />
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
          {/* Floating Decorative Elements */}
          <div
            className="absolute top-1/5 right-1/5 animate-bounce"
            style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}
          >
            <Sparkles className="w-6 h-6 text-[#ED3237] opacity-70" />
          </div>
          <div
            className="absolute bottom-1/5 left-1/5 animate-bounce"
            style={{ animationDuration: '4s', animationDelay: '1s' }}
          >
            <Gem className="w-5 h-5 text-[#133FAD] opacity-70" />
          </div>
          <div
            className="absolute top-1/2 right-1/6 animate-bounce"
            style={{ animationDuration: '4.5s', animationDelay: '1.5s' }}
          >
            <Gift className="w-4 h-4 text-[#221F20] opacity-70" />
          </div>
          <div
            className="absolute bottom-1/3 left-1/4 animate-bounce"
            style={{ animationDuration: '5s', animationDelay: '2s' }}
          >
            <Trophy className="w-5 h-5 text-[#ED3237] opacity-70" />
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
      `}</style>
    </div>
  );
};

export default PopularGiftCategories;