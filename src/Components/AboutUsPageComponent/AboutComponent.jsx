// import React, { useState, useEffect } from 'react';
// import { 
//   Award,
//   Trophy,
//   Star,
//   Users,
//   Target,
//   ArrowRight,
//   Sparkles,
//   Medal,
//   Factory,
//   Wrench
// } from 'lucide-react';

// const AboutComponent = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeFeature, setActiveFeature] = useState(0);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const features = [
//     {
//       icon: <Award className="w-6 h-6" />,
//       title: "Premium Quality Materials",
//       description: "We use only the finest metals including brass, bronze, silver, and gold plating to ensure lasting beauty and durability."
//     },
//     {
//       icon: <Trophy className="w-6 h-6" />,
//       title: "Custom Design Excellence",
//       description: "From corporate awards to sports trophies, we create personalized designs that perfectly capture your vision and requirements."
//     },
//     {
//       icon: <Star className="w-6 h-6" />,
//       title: "Master Craftsmanship",
//       description: "Our skilled artisans combine traditional techniques with modern technology to deliver exceptional metal gifts and momentos."
//     },
//     // {
//     //   icon: <Factory className="w-6 h-6" />,
//     //   title: "State-of-Art Manufacturing",
//     //   description: "Advanced machinery and precision tools enable us to handle both small custom orders and large-scale production efficiently."
//     // }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Centered Header Section */}
//         <div className={`text-center mb-16 transform transition-all duration-1000 ${
//           isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
//         }`}>
//           <div className="flex items-center justify-center space-x-2 mb-6">
//             <div className="w-12 h-1 bg-gradient-to-r from-[#ED3237] to-[#133FAD] rounded-full"></div>
//             <span className="px-4 py-2 bg-gradient-to-r from-[#ED3237]/10 to-[#133FAD]/10 text-[#ED3237] font-semibold text-sm tracking-wider uppercase rounded-full border border-[#ED3237]/20">
//               About Us
//             </span>
//             <div className="w-12 h-1 bg-gradient-to-r from-[#133FAD] to-[#ED3237] rounded-full"></div>
//           </div>

//           <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
//             Crafting Excellence in 
//             <span className="text-transparent bg-gradient-to-r from-[#ED3237] to-[#133FAD] bg-clip-text block lg:inline"> Metal Artistry</span>
//           </h1>

//           <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
//             At Radhey Exim, we transform premium metals into prestigious awards, trophies, and memorable gifts that celebrate achievements and milestones.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
//           {/* Left Side - Image Section */}
//           <div className="relative">
//             <div className={`relative transform transition-all duration-1000 ${
//               isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
//             }`}>
//               <div className="absolute -top-6 -left-6 w-80 h-80 bg-gradient-to-br from-[#ED3237]/10 to-[#133FAD]/10 rounded-3xl blur-xl"></div>
//               <div className="absolute top-8 left-8 w-72 h-72 bg-gradient-to-br from-[#133FAD]/5 to-[#ED3237]/5 rounded-2xl"></div>

//               <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
//                 <div className="h-180 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-8">
//                   <div className="text-center space-y-6">
//                     {/* <div className="flex justify-center space-x-4 mb-6">
//                       <div className="p-4 bg-gradient-to-br from-[#ED3237] to-[#ED3237]/80 rounded-2xl shadow-lg">
//                         <Trophy className="w-10 h-10 text-white" />
//                       </div>
//                       <div className="p-4 bg-gradient-to-br from-[#133FAD] to-[#133FAD]/80 rounded-2xl shadow-lg">
//                         <Medal className="w-10 h-10 text-white" />
//                       </div>
//                       <div className="p-4 bg-gradient-to-br from-[#ED3237] to-[#133FAD] rounded-2xl shadow-lg">
//                         <Award className="w-10 h-10 text-white" />
//                       </div>
//                     </div> */}

//                   </div>
//                 </div>
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
//               </div>

//               <div className={`absolute -bottom-16 -right-16 w-40 h-40 bg-white rounded-2xl shadow-2xl border border-gray-200 transform transition-all duration-1000 delay-700 ${
//                 isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
//               }`}>
//                 <div className="w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl flex items-center justify-center border-4 border-white">
//                   <div className="text-center space-y-2">
//                     <div className="p-3 bg-gradient-to-br from-[#ED3237] to-[#133FAD] rounded-full mx-auto w-fit">
//                       <Wrench className="w-8 h-8 text-white" />
//                     </div>
//                     <div className="text-xs text-gray-600 font-medium">Precision<br/>Crafting</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Content Section with Vertical Line */}
//           <div className={`relative transform transition-all duration-1000 delay-300 ${
//             isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
//           }`}>
//             <div className="mb-8">
//               <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//                 <span className="text-transparent bg-gradient-to-r from-[#ED3237] to-[#133FAD] bg-clip-text">
//                   Radhey Exim
//                 </span>
//               </h2>
//               <p className="text-gray-600 text-md leading-relaxed">
//                 Your trusted partner in creating exceptional metal gifts, awards, and commemorative items. We specialize in medals, trophies, table tops, and personalized momentos that honor achievements and celebrate special occasions.
//               </p>
//             </div>

//             <div className="space-y-6 mb-8">
//               {features.map((feature, index) => (
//                 <div
//                   key={index}
//                   className={`relative p-6 rounded-xl bg-white hover:bg-gradient-to-r hover:from-[#ED3237]/5 hover:to-[#133FAD]/5 transition-all duration-500 cursor-pointer group transform hover:scale-105 hover:shadow-lg ${
//                     activeFeature === index ? 'shadow-xl border-[#ED3237]/30 bg-gradient-to-r from-[#ED3237]/5 to-[#133FAD]/5' : ''
//                   }`}
//                   onMouseEnter={() => setActiveFeature(index)}
//                 >
//                   {/* Outer Vertical Line */}
//                   <div className="absolute -left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#ED3237] via-[#133FAD] to-[#ED3237] rounded-full"></div>

//                   <div className="flex items-start space-x-4 pl-6">
//                     <div className={`p-3 rounded-lg transition-all duration-500 transform group-hover:scale-110 ${
//                       activeFeature === index 
//                         ? 'bg-gradient-to-br from-[#ED3237] to-[#133FAD] text-white shadow-lg' 
//                         : 'bg-gray-100 text-gray-600 group-hover:bg-gradient-to-br group-hover:from-[#ED3237]/20 group-hover:to-[#133FAD]/20'
//                     }`}>
//                       {feature.icon}
//                     </div>
//                     <div className="flex-1">
//                       <h3 className={`font-bold text-lg mb-2 transition-all duration-300 ${
//                         activeFeature === index ? 'text-transparent bg-gradient-to-r from-[#ED3237] to-[#133FAD] bg-clip-text' : 'text-gray-900'
//                       }`}>
//                         {feature.title}
//                       </h3>
//                       <div className="relative">
//                         {/* <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ED3237] via-[#133FAD] to-[#ED3237] rounded-full"></div> */}
//                         <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4 pt-6">
//               <button className="px-8 py-4 bg-gradient-to-r from-[#ED3237] to-[#133FAD] text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-[#ED3237]/30 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 group">
//                 <span>Get Custom Quote</span>
//                 <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
//               </button>

//               <button className="px-8 py-4 border-2 border-gray-300 bg-white text-gray-700 font-semibold rounded-xl hover:bg-gradient-to-r hover:from-[#ED3237]/10 hover:to-[#133FAD]/10 hover:border-[#ED3237]/30 transition-all duration-300 flex items-center justify-center space-x-2 group">
//                 <Target className="w-5 h-5 group-hover:text-[#ED3237] transition-colors duration-300" />
//                 <span>View Our Work</span>
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="flex justify-center mt-20 space-x-3">
//           <div className="w-4 h-4 bg-[#ED3237] rounded-full animate-pulse shadow-lg"></div>
//           <div className="w-4 h-4 bg-[#133FAD] rounded-full animate-pulse shadow-lg" style={{animationDelay: '0.3s'}}></div>
//           <div className="w-4 h-4 bg-[#ED3237] rounded-full animate-pulse shadow-lg" style={{animationDelay: '0.6s'}}></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutComponent;

import React, { useState, useEffect } from 'react';
import {
  Award,
  Trophy,
  Star,
  Users,
  Target,
  ArrowRight,
  Sparkles,
  Medal,
  Factory,
  Wrench
} from 'lucide-react';
import about from '../../assets/AboutImg/about.jpg'

const AboutComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Premium Quality Materials",
      description: "We use only the finest metals including brass, bronze, silver, and gold plating to ensure lasting beauty and durability."
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Custom Design Excellence",
      description: "From corporate awards to sports trophies, we create personalized designs that perfectly capture your vision and requirements."
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Master Craftsmanship",
      description: "Our skilled artisans combine traditional techniques with modern technology to deliver exceptional metal gifts and momentos."
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Updated Header Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}>
          <div data-aos="zoom-in-up" className="relative inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#133FAD]/10 to-[#ED3237]/10 rounded-full border border-[#133FAD]/20 mb-6">
            <Sparkles className="w-5 h-5 text-[#6787d7]" />
            <span className="text-sm font-semibold text-[#6787d7] tracking-wider uppercase">About Us</span>
          </div>
          <h2 data-aos="zoom-in-up" className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-black/90 via-[#133FAD] to-[#ED3237] bg-clip-text text-transparent">
              Crafting Excellence in Metal Artistry
            </span>
          </h2>
          <p data-aos="zoom-in-up" className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Radhey Exim, we transform premium metals into prestigious awards, trophies, and memorable gifts that celebrate achievements and milestones.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left Side - Image Section */}
          <div className="relative">
            <div className={`relative transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
              }`}>
              <div className="absolute -top-6 -left-6 w-80 h-80 bg-gradient-to-br from-[#ED3237]/10 to-[#133FAD]/10 rounded-3xl blur-xl"></div>
              <div className="absolute top-8 left-8 w-72 h-72 bg-gradient-to-br from-[#133FAD]/5 to-[#ED3237]/5 rounded-2xl"></div>

              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                <div className="h-180 flex items-center justify-center p-5">
                  <img src={about} alt="" className='h-full w-full rounded-2xl'/>
                </div>
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div> */}
              </div>

              <div className={`absolute -bottom-16 -right-16 w-40 h-40 bg-white rounded-2xl shadow-2xl border border-gray-200 transform transition-all duration-1000 delay-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`}>
                <div className="w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl flex items-center justify-center border-4 border-white">
                  <div className="text-center space-y-2">
                    <div className="p-3 bg-gradient-to-br from-[#ED3237] to-[#133FAD] rounded-full mx-auto w-fit">
                      <Wrench className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-xs text-gray-600 font-medium">Precision<br />Crafting</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content Section with Vertical Line */}
          <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}>
            <div className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                <span className="text-transparent bg-gradient-to-r from-[#ED3237] to-[#133FAD] bg-clip-text">
                  Radhey Exim
                </span>
              </h2>
              <p className="text-gray-600 text-md leading-relaxed">
                Your trusted partner in creating exceptional metal gifts, awards, and commemorative items. We specialize in medals, trophies, table tops, and personalized momentos that honor achievements and celebrate special occasions.
              </p>
            </div>

            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`relative p-6 rounded-xl bg-white hover:bg-gradient-to-r hover:from-[#ED3237]/5 hover:to-[#133FAD]/5 transition-all duration-500 cursor-pointer group transform hover:scale-105 hover:shadow-lg ${activeFeature === index ? 'shadow-xl border-[#ED3237]/30 bg-gradient-to-r from-[#ED3237]/5 to-[#133FAD]/5' : ''
                    }`}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  {/* Outer Vertical Line */}
                  <div className="absolute -left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#ED3237] via-[#133FAD] to-[#ED3237] rounded-full"></div>

                  <div className="flex items-start space-x-4 pl-6">
                    <div className={`p-3 rounded-lg transition-all duration-500 transform group-hover:scale-110 ${activeFeature === index
                        ? 'bg-gradient-to-br from-[#ED3237] to-[#133FAD] text-white shadow-lg'
                        : 'bg-gray-100 text-gray-600 group-hover:bg-gradient-to-br group-hover:from-[#ED3237]/20 group-hover:to-[#133FAD]/20'
                      }`}>
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-bold text-lg mb-2 transition-all duration-300 ${activeFeature === index ? 'text-transparent bg-gradient-to-r from-[#ED3237] to-[#133FAD] bg-clip-text' : 'text-gray-900'
                        }`}>
                        {feature.title}
                      </h3>
                      <div className="relative">
                        <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="px-8 py-4 bg-gradient-to-r from-[#ED3237] to-[#133FAD] text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-[#ED3237]/30 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 group">
                <span>Get Custom Quote</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
              </button>

              <button className="px-8 py-4 border-2 border-gray-300 bg-white text-gray-700 font-semibold rounded-xl hover:bg-gradient-to-r hover:from-[#ED3237]/10 hover:to-[#133FAD]/10 hover:border-[#ED3237]/30 transition-all duration-300 flex items-center justify-center space-x-2 group">
                <Target className="w-5 h-5 group-hover:text-[#ED3237] transition-colors duration-300" />
                <span>View Our Work</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-20 space-x-3">
          <div className="w-4 h-4 bg-[#ED3237] rounded-full animate-pulse shadow-lg"></div>
          <div className="w-4 h-4 bg-[#133FAD] rounded-full animate-pulse shadow-lg" style={{ animationDelay: '0.3s' }}></div>
          <div className="w-4 h-4 bg-[#ED3237] rounded-full animate-pulse shadow-lg" style={{ animationDelay: '0.6s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;