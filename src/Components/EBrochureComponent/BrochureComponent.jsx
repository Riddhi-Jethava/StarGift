// import React, { useState, useEffect } from 'react';
// import { Sparkles, Download, X, Send } from 'lucide-react';

// const BrochureComponent = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showToast, setShowToast] = useState(false);
//   const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     setIsVisible(true);
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.name && formData.phone && formData.email) {
//       setIsSubmitting(true);
//       setTimeout(() => {
//         setIsSubmitting(false);
//         setIsFormOpen(false);
//         setShowToast(true);
//         setFormData({ name: '', phone: '', email: '' });
//         setTimeout(() => setShowToast(false), 3000); // Hide toast after 3s
//       }, 2000); // Simulate sending process
//     }
//   };

//   const brochurePoints = [
//     "Showcases our premium metal awards and gifts",
//     "Highlights bespoke designs for every occasion",
//     "Features advanced craftsmanship techniques",
//     "Celebrates achievements with elegance",
//     "Includes exclusive client testimonials",
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
//       {/* Background Decorative Elements */}
//       <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-[#ED3237]/20 via-[#133FAD]/15 to-transparent rounded-full blur-3xl animate-pulse opacity-30"></div>
//       <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-[#133FAD]/20 via-[#ED3237]/15 to-transparent rounded-full blur-3xl animate-pulse delay-1000 opacity-30"></div>
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-[#ED3237]/15 via-[#133FAD]/10 to-transparent rounded-full blur-3xl animate-pulse delay-2000 opacity-25"></div>

//       {/* Interactive Light Trail */}
//       <div
//         className="absolute w-96 h-96 bg-gradient-radial from-[#133FAD]/15 via-[#ED3237]/10 to-transparent rounded-full blur-2xl transition-all duration-300 opacity-60"
//         style={{
//           left: mousePosition.x - 192,
//           top: mousePosition.y - 192,
//         }}
//       ></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header Section */}
//         <div className={`text-center mb-16 transform transition-all duration-1000 ${
//           isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
//         }`}>
//           <div data-aos="zoom-in-up" className="relative inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#133FAD]/10 to-[#ED3237]/10 rounded-full border border-[#133FAD]/20 mb-6">
//             <Sparkles className="w-5 h-5 text-[#6787d7]" />
//             <span className="text-sm font-semibold text-[#6787d7] tracking-wider uppercase">7 Star Gifts</span>
//           </div>
//           <h2 data-aos="zoom-in-up" className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
//             <span className="bg-gradient-to-r from-black/90 via-[#133FAD] to-[#ED3237] bg-clip-text text-transparent">
//               Honor for the Best
//             </span>
//           </h2>
//           <p data-aos="zoom-in-up" className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Discover the artistry of 7 Star Gifts through our exclusive brochure, designed to celebrate excellence with premium metal creations.
//           </p>
//         </div>

//         {/* Brochure Section */}
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
//           {/* Left Side - Description and Bullet Points */}
//           <div className={`transform transition-all duration-1000 delay-300 ${
//             isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
//           }`} data-aos="fade-up">
//             <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8">
//               <h3 className="text-3xl font-bold mb-4 text-transparent bg-gradient-to-r from-[#ED3237] to-[#133FAD] bg-clip-text">
//                 7 Star Gifts Brochure
//               </h3>
//               <p className="text-gray-600 text-md leading-relaxed mb-6">
//                 Explore our world of exquisite metal craftsmanship with our brochure, showcasing creations that honor the best.
//               </p>
//               <ul className="space-y-3 mb-6">
//                 {brochurePoints.map((point, index) => (
//                   <li key={index} className="flex items-start space-x-3">
//                     <Sparkles className="w-5 h-5 text-[#6787d7] mt-1" />
//                     <span className="text-gray-600 text-sm">{point}</span>
//                   </li>
//                 ))}
//               </ul>
//               <button
//                 className="px-8 py-4 bg-gradient-to-r from-[#ED3237] to-[#133FAD] text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-[#ED3237]/30 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 group"
//                 onClick={() => setIsFormOpen(true)}
//               >
//                 <span>Download Brochure</span>
//                 <Download className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
//               </button>
//               <div className="absolute top-2 right-2 w-6 h-6">
//                 <Sparkles className="w-6 h-6 text-[#6787d7] group-hover/sparkles:rotate-360 transition-all duration-500" />
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Unique Image Div */}
//           <div className={`relative transform transition-all duration-1000 delay-500 ${
//             isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
//           }`} data-aos="fade-up">
//             <div className="relative">
//               {/* Backdrop Layer */}
//               <div className="absolute -inset-4 bg-gradient-to-br from-[#ED3237]/20 to-[#133FAD]/20 rounded-3xl transform rotate-6 scale-95 blur-sm group-hover:scale-100 group-hover:blur-none transition-all duration-500"></div>
//               {/* Secondary Layer */}
//               <div className="absolute -inset-2 bg-white rounded-2xl shadow-lg transform -rotate-3 scale-98 group-hover:scale-100 group-hover:rotate-0 transition-all duration-500 border border-gray-200/50"></div>
//               {/* Main Image */}
//               <div className="relative rounded-2xl overflow-hidden border border-gray-200/50 shadow-xl group">
//                 <img
//                   src="https://via.placeholder.com/600x800.png?text=7+Star+Gifts+Brochure"
//                   alt="7 Star Gifts Brochure Cover"
//                   className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 {/* Shimmer Effect */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer"></div>
//                 {/* Glassmorphism Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-[#ED3237]/10 to-[#133FAD]/10 opacity-0 group-hover:opacity-80 transition-opacity duration-500 backdrop-blur-sm"></div>
//                 {/* Glowing Border */}
//                 <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#ED3237]/50 group-hover:shadow-[0_0_20px_rgba(237,50,55,0.4)] transition-all duration-500 rounded-2xl"></div>
//                 {/* Floating Sparkles */}
//                 <div className="absolute top-4 left-4 w-6 h-6 animate-float">
//                   <Sparkles className="w-6 h-6 text-[#6787d7] group-hover:text-[#ED3237] group-hover/sparkles:rotate-360 transition-all duration-500" />
//                 </div>
//                 <div className="absolute bottom-4 right-4 w-6 h-6 animate-float-delayed">
//                   <Sparkles className="w-6 h-6 text-[#6787d7] group-hover:text-[#ED3237] group-hover/sparkles:rotate-360 transition-all duration-500" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Form Modal */}
//         {isFormOpen && (
//           <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50">
//             <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4">
//               <button
//                 className="absolute top-4 right-4 p-2 bg-gradient-to-br from-[#ED3237] to-[#133FAD] rounded-full text-white hover:scale-110 transition-all duration-300"
//                 onClick={() => setIsFormOpen(false)}
//               >
//                 <X className="w-5 h-5" />
//               </button>
//               <h3 className="text-2xl font-bold mb-6 text-transparent bg-gradient-to-r from-[#ED3237] to-[#133FAD] bg-clip-text">
//                 Download 7 Star Gifts Brochure
//               </h3>
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ED3237] transition-all duration-300"
//                     placeholder="Enter your name"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ED3237] transition-all duration-300"
//                     placeholder="Enter your phone number"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ED3237] transition-all duration-300"
//                     placeholder="Enter your email"
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className={`w-full px-6 py-3 bg-gradient-to-r from-[#ED3237] to-[#133FAD] text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-[#ED3237]/30 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 ${
//                     isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
//                   }`}
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <span>Sending...</span>
//                       <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                     </>
//                   ) : (
//                     <>
//                       <span>Submit</span>
//                       <Send className="w-5 h-5" />
//                     </>
//                   )}
//                 </button>
//               </form>
//             </div>
//           </div>
//         )}

//         {/* Success Toast */}
//         {showToast && (
//           <div className="fixed top-4 right-4 bg-gradient-to-r from-[#ED3237] to-[#133FAD] text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-toast-in">
//             <p className="text-sm font-medium">Brochure download link sent successfully!</p>
//           </div>
//         )}

//         {/* Pulsing Dots */}
//         <div className="flex justify-center mt-20 space-x-3">
//           <div className="w-4 h-4 bg-[#ED3237] rounded-full animate-pulse shadow-lg"></div>
//           <div className="w-4 h-4 bg-[#133FAD] rounded-full animate-pulse shadow-lg" style={{ animationDelay: '0.3s' }}></div>
//           <div className="w-4 h-4 bg-[#ED3237] rounded-full animate-pulse shadow-lg" style={{ animationDelay: '0.6s' }}></div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes shimmer {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(100%); }
//         }
//         .shimmer {
//           animation: shimmer 2s infinite;
//         }
//         @keyframes rotate-360 {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         .group-hover\\/sparkles\\:rotate-360:hover .sparkles {
//           animation: rotate-360 0.7s ease-in-out;
//         }
//         @keyframes float {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-8px); }
//         }
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//         .animate-float-delayed {
//           animation: float 3s ease-in-out infinite 1s;
//         }
//         @keyframes toast-in {
//           0% { transform: translateY(-20px); opacity: 0; }
//           100% { transform: translateY(0); opacity: 1; }
//         }
//         .animate-toast-in {
//           animation: toast-in 0.5s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default BrochureComponent;

import React, { useState, useEffect } from 'react';
import { Sparkles, Download, X, Send, Award, Star, Trophy, Crown } from 'lucide-react';

const BrochureComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredPoint, setHoveredPoint] = useState(null);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.email) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsFormOpen(false);
        setShowToast(true);
        setFormData({ name: '', phone: '', email: '' });
        setTimeout(() => setShowToast(false), 3000);
      }, 2000);
    }
  };

  const brochurePoints = [
    {
      icon: Trophy,
      title: "Premium Metal Awards",
      description: "Showcases our premium metal awards and gifts",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: Crown,
      title: "Bespoke Designs",
      description: "Highlights bespoke designs for every occasion",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: Award,
      title: "Advanced Craftsmanship",
      description: "Features advanced craftsmanship techniques",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      icon: Star,
      title: "Elegant Achievements",
      description: "Celebrates achievements with elegance",
      gradient: "from-green-400 to-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-[#ED3237]/20 via-[#133FAD]/15 to-transparent rounded-full blur-3xl animate-pulse opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-[#133FAD]/20 via-[#ED3237]/15 to-transparent rounded-full blur-3xl animate-pulse delay-1000 opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-[#ED3237]/15 via-[#133FAD]/10 to-transparent rounded-full blur-3xl animate-pulse delay-2000 opacity-25"></div>

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
          <div className="relative inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#133FAD]/10 to-[#ED3237]/10 rounded-full border border-[#133FAD]/20 mb-6">
            <Sparkles className="w-5 h-5 text-[#6787d7] animate-spin-slow" />
            <span className="text-sm font-semibold text-[#6787d7] tracking-wider uppercase">7 Star Gifts</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-black/90 via-[#133FAD] to-[#ED3237] bg-clip-text text-transparent">
              Honor for the Best
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the artistry of 7 Star Gifts through our exclusive brochure, designed to celebrate excellence with premium metal creations.
          </p>
        </div>

        {/* Brochure Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Side - Enhanced Unique Design */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            <div className="relative">
              {/* Floating Elements Background */}
              <div className="absolute -top-8 -left-8 w-20 h-20 bg-gradient-to-br from-[#ED3237]/20 to-[#133FAD]/20 rounded-2xl rotate-45 animate-float"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-br from-[#133FAD]/20 to-[#ED3237]/20 rounded-full animate-float-delayed"></div>
              <div className="absolute top-1/2 -left-4 w-12 h-12 bg-gradient-to-br from-yellow-400/30 to-orange-500/30 rounded-xl rotate-12 animate-bounce-slow"></div>

              {/* Main Content Card */}
              <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-200/50 p-8 backdrop-blur-sm bg-white/90 overflow-hidden">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#ED3237] to-[#133FAD] animate-pulse"></div>
                  <div className="absolute top-4 left-4 w-8 h-8 border-2 border-[#ED3237] rounded-full animate-spin-slow"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-2 border-[#133FAD] rounded-full animate-spin-slow delay-1000"></div>
                </div>

                {/* Header with Floating Badge */}
                <div className="relative mb-8">
                  {/* <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#ED3237] to-[#133FAD] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce-slow">
                    PREMIUM
                  </div> */}
                  <h3 className="text-4xl font-bold mb-4 text-transparent bg-gradient-to-r from-[#ED3237] via-[#133FAD] to-[#ED3237] bg-clip-text animate-gradient-x">
                    7 Star Gifts Brochure
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#ED3237] to-[#133FAD] rounded-full mb-6 animate-pulse"></div>
                </div>

                {/* Description with Glass Effect */}
                <div className="relative mb-8 p-6 rounded-2xl bg-gradient-to-br from-white/50 to-gray-50/50 border border-white/20 backdrop-blur-sm shadow-inner">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Explore our world of <span className="font-bold text-transparent bg-gradient-to-r from-[#ED3237] to-[#133FAD] bg-clip-text">exquisite metal craftsmanship</span> with our brochure, showcasing creations that honor the best.
                  </p>
                  {/* Floating Sparkles */}
                  <Sparkles className="absolute top-2 right-2 w-5 h-5 text-[#6787d7] animate-pulse" />
                  <Sparkles className="absolute bottom-2 left-2 w-4 h-4 text-[#ED3237] animate-pulse delay-500" />
                </div>

                {/* Interactive Feature Points */}
                <div className="space-y-4 mb-8">
                  {brochurePoints.map((point, index) => {
                    const IconComponent = point.icon;
                    return (
                      <div
                        key={index}
                        className={`relative group cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                          hoveredPoint === index ? 'scale-105' : ''
                        }`}
                        onMouseEnter={() => setHoveredPoint(index)}
                        onMouseLeave={() => setHoveredPoint(null)}
                      >
                        <div className="flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r from-white to-gray-50/50 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-transparent">
                          {/* Animated Icon Container */}
                          <div className={`relative flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${point.gradient} shadow-lg transform group-hover:rotate-12 transition-all duration-300`}>
                            <IconComponent className="w-7 h-7 text-white drop-shadow-lg" />
                            {/* Icon Glow Effect */}
                            <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${point.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300`}></div>
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-800 mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#ED3237] group-hover:to-[#133FAD] group-hover:bg-clip-text transition-all duration-300">
                              {point.title}
                            </h4>
                            <p className="text-gray-600 text-sm">{point.description}</p>
                          </div>

                          {/* Hover Indicator */}
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#ED3237] to-[#133FAD] opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300"></div>
                        </div>

                        {/* Animated Border Effect */}
                        <div className={`absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-500 ${
                          hoveredPoint === index ? `border-gradient-to-r from-[#ED3237] to-[#133FAD] shadow-lg` : ''
                        }`}></div>
                      </div>
                    );
                  })}
                </div>

                {/* Enhanced Download Button */}
                <div className="relative">
                  <button
                    className="w-full px-8 py-6 bg-gradient-to-r from-[#ED3237] via-[#133FAD] to-[#ED3237] bg-size-200 bg-pos-0 hover:bg-pos-100 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-[#ED3237]/50 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 flex items-center justify-center space-x-3 group relative overflow-hidden"
                    onClick={() => setIsFormOpen(true)}
                  >
                    {/* Button Background Animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    
                    <Download className="w-6 h-6 transform group-hover:translate-y-[-4px] group-hover:rotate-12 transition-all duration-300" />
                    <span className="relative z-10">Download Exclusive Brochure</span>
                    <Sparkles className="w-5 h-5 transform group-hover:rotate-180 transition-all duration-500" />
                    
                    {/* Floating Particles */}
                    <div className="absolute top-2 left-8 w-1 h-1 bg-white rounded-full animate-ping delay-100"></div>
                    <div className="absolute bottom-2 right-8 w-1 h-1 bg-white rounded-full animate-ping delay-300"></div>
                  </button>
                  
                  {/* Button Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#ED3237] to-[#133FAD] opacity-0 hover:opacity-30 blur-2xl transition-opacity duration-300 -z-10"></div>
                </div>

                {/* Decorative Corner Elements */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-[#ED3237]/30 rounded-tl-xl"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-[#133FAD]/30 rounded-tr-xl"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-[#133FAD]/30 rounded-bl-xl"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-[#ED3237]/30 rounded-br-xl"></div>
              </div>

              {/* Additional Floating Elements */}
              <div className="absolute top-8 right-4 w-3 h-3 bg-gradient-to-br from-[#ED3237] to-[#133FAD] rounded-full animate-pulse"></div>
              <div className="absolute bottom-12 left-2 w-2 h-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-bounce"></div>
            </div>
          </div>

          {/* Right Side - Image (keeping your original design) */}
          <div className={`relative transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#ED3237]/20 to-[#133FAD]/20 rounded-3xl transform rotate-6 scale-95 blur-sm group-hover:scale-100 group-hover:blur-none transition-all duration-500"></div>
              <div className="absolute -inset-2 bg-white rounded-2xl shadow-lg transform -rotate-3 scale-98 group-hover:scale-100 group-hover:rotate-0 transition-all duration-500 border border-gray-200/50"></div>
              <div className="relative rounded-2xl overflow-hidden border border-gray-200/50 shadow-xl group">
                <img
                  src="https://via.placeholder.com/600x800.png?text=7+Star+Gifts+Brochure"
                  alt="7 Star Gifts Brochure Cover"
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#ED3237]/10 to-[#133FAD]/10 opacity-0 group-hover:opacity-80 transition-opacity duration-500 backdrop-blur-sm"></div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#ED3237]/50 group-hover:shadow-[0_0_20px_rgba(237,50,55,0.4)] transition-all duration-500 rounded-2xl"></div>
                <div className="absolute top-4 left-4 w-6 h-6 animate-float">
                  <Sparkles className="w-6 h-6 text-[#6787d7] group-hover:text-[#ED3237] transition-all duration-500" />
                </div>
                <div className="absolute bottom-4 right-4 w-6 h-6 animate-float-delayed">
                  <Sparkles className="w-6 h-6 text-[#6787d7] group-hover:text-[#ED3237] transition-all duration-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Modal (keeping your original) */}
        {isFormOpen && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4">
              <button
                className="absolute top-4 right-4 p-2 bg-gradient-to-br from-[#ED3237] to-[#133FAD] rounded-full text-white hover:scale-110 transition-all duration-300"
                onClick={() => setIsFormOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-gradient-to-r from-[#ED3237] to-[#133FAD] bg-clip-text">
                Download 7 Star Gifts Brochure
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ED3237] transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ED3237] transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ED3237] transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 bg-gradient-to-r from-[#ED3237] to-[#133FAD] text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-[#ED3237]/30 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <span>Sending...</span>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    </>
                  ) : (
                    <>
                      <span>Submit</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Success Toast */}
        {showToast && (
          <div className="fixed top-4 right-4 bg-gradient-to-r from-[#ED3237] to-[#133FAD] text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-toast-in">
            <p className="text-sm font-medium">Brochure download link sent successfully!</p>
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
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 3s ease-in-out infinite 1s;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-10px) rotate(12deg); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        @keyframes gradient-x {
          0%, 100% { background-size: 200% 200%; background-position: left center; }
          50% { background-size: 200% 200%; background-position: right center; }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        @keyframes toast-in {
          0% { transform: translateY(-20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-toast-in {
          animation: toast-in 0.5s ease-out;
        }
        .bg-size-200 { background-size: 200% 100%; }
        .bg-pos-0 { background-position: 0% 50%; }
        .bg-pos-100 { background-position: 100% 50%; }
      `}</style>
    </div>
  );
};

export default BrochureComponent;