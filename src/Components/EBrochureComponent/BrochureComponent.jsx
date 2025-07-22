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
//               <p className="text-gray-600 text-lg leading-relaxed mb-6">
//                 Explore our world of exquisite metal craftsmanship with our brochure, showcasing creations that honor the best.
//               </p>
//               <ul className="space-y-3 mb-6">
//                 {brochurePoints.map((point, index) => (
//                   <li key={index} className="flex items-start space-x-3">
//                     <Sparkles className="w-5 h-5 text-[#6787d7] mt-1" />
//                     <span className="text-gray-600 text-md">{point}</span>
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
import { Download, X, Send } from 'lucide-react';
import cover from '../../assets/BrochureImg/cover.jpg'

const BrochureComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
    "Premium metal awards and custom gifts",
    "Bespoke designs tailored for your needs",
    "Advanced craftsmanship and quality assurance",
    "Recognition solutions for every occasion",
    "Trusted by leading organizations worldwide",
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
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}>
          <div className="relative inline-flex items-center space-x-2 px-4 py-2 bg-white/60 rounded-full border border-gray-200 mb-6">
            <span className="text-sm font-medium text-[#133FAD] tracking-wide">E-Brochure</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-[#133FAD] to-[#ED3237] bg-clip-text text-transparent">
              Our Product Catalog
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the artistry of 7 Star Gifts through our exclusive brochure, designed to celebrate excellence with premium metal creations.
          </p>
        </div>

        {/* Brochure Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Side - Professional Content */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}>
            <div className="space-y-8">
              {/* Title Section */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                 Download Brochure To Know More
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Explore our comprehensive collection of premium metal awards, custom gifts, and recognition solutions crafted with exceptional attention to detail.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                {brochurePoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-[#ED3237] rounded-full mt-2"></div>
                    <span className="text-gray-700 text-base leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              {/* <div className="pt-4">
                <button
                  className="inline-flex items-center px-8 py-4 bg-[#133FAD] text-white font-semibold rounded-lg hover:bg-[#0f2d85] transition-all duration-300 shadow-lg hover:shadow-xl group"
                  onClick={() => setIsFormOpen(true)}
                >
                  <span>Download Brochure</span>
                  <Download className="w-5 h-5 ml-3 transform group-hover:translate-y-0.5 transition-transform duration-200" />
                </button>
              </div> */}
              <div className="">
                <button onClick={() => setIsFormOpen(true)} className="group/main relative overflow-hidden inset-0 bg-gradient-to-r from-[#221F20]/80 to-slate-400 border-[#969394]/40 rounded-full px-8 py-4 transition-all duration-700 hover:border-transparent hover:shadow-2xl hover:shadow-[#133FAD]/20 transform hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#133FAD]/20 via-[#ED3237]/20 to-[#221F20]/20 rounded-full transform scale-0 group-hover/main:scale-100 transition-transform duration-700 ease-out"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ED3237]/30 to-[#133FAD]/30 rounded-full transform rotate-0 group-hover/main:rotate-180 transition-transform duration-1000 ease-in-out opacity-0 group-hover/main:opacity-100"></div>
                  <div className="absolute inset-0 opacity-0 group-hover/main:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#133FAD] to-[#ED3237] rounded-full transform scale-x-0 group-hover/main:scale-x-100 transition-transform duration-800 ease-out origin-center opacity-80"></div>
                  </div>
                  <div className="relative z-10 flex items-center space-x-4">
                    <span className="text-md font-bold text-[#d0cbcd] transition-all duration-500 inset-0 group-hover/main:text-white group-hover/main:tracking-wider group-hover/main:drop-shadow-lg">
                      Download Brochure
                    </span>
                    <div className="relative">
                      <Download className="w-6 h-6 text-[#d0cbcd] transition-all duration-700 group-hover/main:text-white group-hover/main:rotate-360 group-hover/main:scale-125" />
                      <div className="absolute -inset-4 opacity-0 group-hover/main:opacity-100 transition-opacity duration-500">
                        <div className="absolute top-0 left-1/2 w-1 h-1 bg-white rounded-full animate-ping transform -translate-x-1/2" style={{ animationDelay: '0.2s' }}></div>
                        <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-white rounded-full animate-ping transform -translate-x-1/2" style={{ animationDelay: '0.6s' }}></div>
                        <div className="absolute top-1/2 left-0 w-1 h-1 bg-white rounded-full animate-ping transform -translate-y-1/2" style={{ animationDelay: '0.4s' }}></div>
                        <div className="absolute top-1/2 right-0 w-1 h-1 bg-white rounded-full animate-ping transform -translate-y-1/2" style={{ animationDelay: '0.8s' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover/main:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute top-1/4 left-1/6 w-0.5 h-0.5 bg-white rounded-full animate-ping" style={{ animationDelay: '0.1s' }}></div>
                    <div className="absolute top-3/4 right-1/6 w-0.5 h-0.5 bg-white rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
                    <div className="absolute bottom-1/3 left-1/3 w-0.5 h-0.5 bg-white rounded-full animate-ping" style={{ animationDelay: '0.7s' }}></div>
                    <div className="absolute top-1/6 right-1/3 w-0.5 h-0.5 bg-white rounded-full animate-ping" style={{ animationDelay: '0.9s' }}></div>
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#133FAD]/0 via-[#ED3237]/0 to-[#133FAD]/0 group-hover/main:from-[#133FAD]/20 group-hover/main:via-[#ED3237]/20 group-hover/main:to-[#133FAD]/20 rounded-full blur-lg transition-all duration-700"></div>
                </button>
              </div>

              {/* Additional Info */}
              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  Get instant access to our complete product catalog featuring detailed specifications, pricing, and customization options.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className={`relative transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#ED3237]/20 to-[#133FAD]/20 rounded-3xl transform rotate-6 scale-95 blur-sm group-hover:scale-100 group-hover:blur-none transition-all duration-500"></div>
              <div className="absolute -inset-2 bg-white rounded-2xl shadow-lg transform -rotate-3 scale-98 group-hover:scale-100 group-hover:rotate-0 transition-all duration-500 border border-gray-200/50"></div>
              <div className="relative rounded-2xl overflow-hidden border border-gray-200/50 shadow-xl group">
                <img
                  src={cover}
                  alt="7 Star Gifts Brochure Cover"
                  className="w-full h-[560px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer"></div>
                {/* <div className="absolute inset-0 bg-gradient-to-br from-[#ED3237]/10 to-[#133FAD]/10 opacity-0 group-hover:opacity-80 transition-opacity duration-500 backdrop-blur-sm"></div> */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#ED3237]/50 group-hover:shadow-[0_0_20px_rgba(237,50,55,0.4)] transition-all duration-500 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Modal */}
        {isFormOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="relative bg-white rounded-xl shadow-2xl p-8 max-w-md w-full mx-4">
              <button
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200"
                onClick={() => setIsFormOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">
                Download Brochure
              </h3>
              <p className="text-gray-600 mb-6">Please provide your details to receive the brochure.</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#133FAD] focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#133FAD] focus:border-transparent transition-all duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#133FAD] focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email address"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-500 transition-all duration-200 flex items-center justify-center space-x-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'shadow-lg hover:shadow-xl'
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <span>Sending...</span>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    </>
                  ) : (
                    <>
                      <span>Get Brochure</span>
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
          <div className="fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-toast-in">
            <p className="text-sm font-medium">Brochure download link sent successfully!</p>
          </div>
        )}

        {/* Simple Footer Dots */}
        <div className="flex justify-center mt-20 space-x-2">
          <div className="w-2 h-2 bg-[#133FAD] rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-[#ED3237] rounded-full"></div>
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
        @keyframes toast-in {
          0% { transform: translateY(-20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-toast-in {
          animation: toast-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default BrochureComponent;