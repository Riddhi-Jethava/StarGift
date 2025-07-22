// import React from 'react';
// import { ChevronRight, Home } from 'lucide-react';
// import { Link } from 'react-router-dom'
// import pageHeader from '../assets/StaticImg/pageHeader.jpg'

// const PageHeader = ({
//   title = "Modern Design",
//   subtitle = "for Every Home",
//   description = "Create your dream's place that can evoke the spirit of life.",
//   breadcrumbs = [
//     { label: "Home", href: "/", icon: Home },
//     // { label: "Pages", href: "/pages" },
//     { label: "About Us", href: "/about" }
//   ],
//   backgroundImage = pageHeader,
//   ctaPrimary = "Explore Now",
//   ctaSecondary = "View Portfolio"
// }) => {
//   return (
//     <div className="relative min-h-[600px] overflow-hidden bg-gradient-to-br from-[#00122f] to-[#00122f]">
//       {/* Animated Background Shapes */}
//       <div className="absolute inset-0">
//         <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-transparent via-blue-500/5 to-transparent rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
//       </div>

//       {/* Main Content Container */}
//       <div className="relative z-10 flex min-h-[600px]">
//         {/* Left Content Section */}
//         <div className="flex-1 flex flex-col justify-center items-center px-8 md:px-16 lg:px-20 py-16">
//           {/* Breadcrumbs */}
//           <div className="animate-slide-up-delayed bg-white/10 backdrop-blur-3xl w-60 p-3 rounded-2xl">
//             <nav className="flex items-center justify-center space-x-2">
//               <div className="flex items-center space-x-2 group">
//                 <div className="p-2 bg-gradient-to-r from-[#B72025] to-[#B72025]/70 rounded-full backdrop-blur-sm border border-white/10 transition-all duration-300">
//                   <Home className="w-4 h-4 text-white" />
//                 </div>
//                 <Link to="/">
//                   <span className="text-gray-300 text-md hover:text-[#B72025] transition-colors duration-300 cursor-pointer">
//                     Home
//                   </span>
//                 </Link>
//                 <ChevronRight className="w-5 h-5 text-[#B72025]" />
//                 <span className="text-white text-md transition-colors duration-300">
//                   {title}
//                 </span>
//               </div>
//             </nav>
//           </div>
//            {/* Main Heading */}
//           <div className="mt-8 mb-5">
//             <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 opacity-0 animate-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
//               <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
//                 {title}
//               </span>
//             </h1>
//             {/* <h2 className="text-4xl md:text-5xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent opacity-0 animate-slide-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
//               {subtitle}
//             </h2> */}
//           </div>

//           {/* Description */}
//           <p className="text-slate-300 text-lg md:text-xl max-w-lg mb-12 leading-relaxed opacity-0 animate-slide-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
//             {description}
//           </p>
          
//         </div>

//         {/* Right Image Section with Arrow Shape */}
//         <div className="flex-1 relative">
//           {/* Arrow Shape Overlay */}
//           <div
//             className="absolute inset-0 opacity-0 animate-slide-in-right"
//             style={{
//               animationDelay: '0.3s',
//               animationFillMode: 'forwards',
//               clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 20% 100%, 0% 50%)',
//               background: `linear-gradient(135deg, rgba(0,0,0,0 ) 0%, rgba(0,0,0,0) 100%), url(${backgroundImage})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               backgroundBlendMode: 'overlay'
//             }}
//           >
//             {/* Animated Overlay Effects */}
//             {/* <div className="absolute inset-0 bg-gradient-to-br from-b"></div> */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

//             {/* Floating Elements */}
//             <div className="absolute top-20 right-20 w-4 h-4 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
//             <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '2.5s' }}></div>
//             <div className="absolute bottom-40 right-16 w-5 h-5 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>

//             {/* Shine Effect */}
//             <div className="absolute inset-0 opacity-0 animate-shine bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12"></div>
//           </div>

//           {/* Decorative Border */}
//           <div
//             className="absolute inset-0 opacity-0 animate-slide-in-right"
//             style={{
//               animationDelay: '0.5s',
//               animationFillMode: 'forwards',
//               clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 20% 100%, 0% 50%)',
//               background: 'linear-gradient(45deg, rgba(0, 25, 65, 0.5) 0%, rgba(237, 31, 35, 0.3) 100%)',
//               filter: 'blur(1px)',
//               transform: 'scale(1.02)'
//             }}
//           ></div>
//         </div>
//       </div>

//       {/* Bottom Gradient */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>

//       {/* Custom Animations */}
//       <style jsx>{`
//         @keyframes fade-in {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
        
//         @keyframes slide-up {
//           from { 
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to { 
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes slide-in-right {
//           from { 
//             opacity: 0;
//             transform: translateX(100px);
//           }
//           to { 
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
        
//         @keyframes shine {
//           0% {
//             opacity: 0;
//             transform: translateX(-100%) skewX(-12deg);
//           }
//           50% {
//             opacity: 1;
//           }
//           100% {
//             opacity: 0;
//             transform: translateX(300%) skewX(-12deg);
//           }
//         }
        
//         .animate-fade-in {
//           animation: fade-in 0.8s ease-out;
//         }
        
//         .animate-slide-up {
//           animation: slide-up 0.8s ease-out;
//         }
        
//         .animate-slide-in-right {
//           animation: slide-in-right 1s ease-out;
//         }
        
//         .animate-shine {
//           animation: shine 3s ease-in-out infinite;
//           animation-delay: 1.5s;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default PageHeader

import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import pageHeader from '../assets/StaticImg/pageHeader.jpg';
import box from '../assets/StaticImg/footerbox.png';

const PageHeader = ({
  title = "Modern Design",
  subtitle = "for Every Home",
  description = "Create your dream's place that can evoke the spirit of life.",
  breadcrumbs = [
    { label: "Home", to: "/", icon: Home },
    { label: "About Us", to: "/about" }
  ],
  backgroundImage = pageHeader,
  ctaPrimary = "Explore Now",
  ctaSecondary = "View Portfolio"
}) => {
  return (
    <div className="relative min-h-[600px] overflow-hidden bg-gradient-to-br from-[#00122f] to-[#00122f]">
      <img src={box} alt="" className="absolute w-50 -bottom-3 -left-2 z-30 opacity-50" />
      {/* Animated Background Shapes with Glass Effect */}
      <div className="absolute inset-0">
        {/* Rotating Square Outline 1 */}
        <div
          className="absolute top-30 left-15 w-20 h-20 border-1 border-[rgba(255,255,255,0.2)] rounded-none transform rotate-45 animate-spin backdrop-filter backdrop-blur-sm bg-[rgba(255,255,255,0.05)] shadow-[0_0_10px_rgba(183,32,37,0.3)]"
          style={{ animationDuration: '12s', animationTimingFunction: 'linear', animationIterationCount: 'infinite' }}
        ></div>
        {/* Rotating Square Outline 2 */}
        <div
          className="absolute bottom-10 left-[50vw] w-30 h-30 border-1 border-[rgba(255,255,255,0.2)] rounded-none transform rotate-45 animate-spin backdrop-filter backdrop-blur-sm bg-[rgba(255,255,255,0.05)] shadow-[0_0_10px_rgba(183,32,37,0.3)]"
          style={{ animationDuration: '15s', animationTimingFunction: 'linear', animationIterationCount: 'infinite', animationDirection: 'reverse' }}
        ></div>
        {/* Circular Outline 1 */}
        {/* <div
          className="absolute bottom-20 left-20 w-36 h-36 border-1 border-[rgba(255,255,255,0.2)] rounded-full animate-pulse backdrop-filter backdrop-blur-sm bg-[rgba(255,255,255,0.05)] shadow-[0_0_10px_rgba(183,32,37,0.3)]"
          style={{ animationDelay: '1s' }}
        ></div> */}
        {/* Circular Outline 2 */}
        {/* <div
          className="absolute top-40 right-40 w-64 h-64 border-1 border-[rgba(255,255,255,0.2)] rounded-full animate-pulse backdrop-filter backdrop-blur-sm bg-[rgba(255,255,255,0.05)] shadow-[0_0_10px_rgba(183,32,37,0.3)]"
          style={{ animationDelay: '1.5s' }}
        ></div> */}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex min-h-[600px]">
        {/* Left Content Section */}
        <div className="flex-1 flex flex-col justify-center items-center px-8 md:px-16 lg:px-20 md:py-16">
          {/* Breadcrumbs */}
          <div className="animate-slide-up-delayed bg-white/10 backdrop-blur-3xl w-60 p-3 rounded-2xl">
            <nav className="flex items-center justify-center space-x-2">
              <div className="flex items-center space-x-2 group">
                <div className="p-2 bg-gradient-to-r from-[#B72025] to-[#B72025]/70 rounded-full backdrop-blur-sm border border-white/10 transition-all duration-300">
                  <Home className="w-4 h-4 text-white" />
                </div>
                <Link to="/">
                  <span className="text-gray-300 text-md hover:text-[#B72025] transition-colors duration-300 cursor-pointer">
                    Home
                  </span>
                </Link>
                <ChevronRight className="w-5 h-5 text-[#B72025]" />
                <span className="text-white text-md transition-colors duration-300">
                  {title}
                </span>
              </div>
            </nav>
          </div>
          {/* Main Heading */}
          <div className="mt-8 mb-5">
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 opacity-0 animate-slide-up"
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                {title}
              </span>
            </h1>
            {/* <h2
              className="text-4xl md:text-5xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent opacity-0 animate-slide-up"
              style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
            >
              {subtitle}
            </h2> */}
          </div>

          {/* Description */}
          <p
            className="text-slate-300 text-lg md:text-xl max-w-lg mb-12 leading-relaxed opacity-0 animate-slide-up"
            style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
          >
            {description}
          </p>
        </div>

        {/* Right Image Section with Arrow Shape */}
        <div className="md:flex-1 relative">
          {/* Arrow Shape Overlay */}
          <div
            className="absolute inset-0 opacity-0 animate-slide-in-right"
            style={{
              animationDelay: '0.3s',
              animationFillMode: 'forwards',
              clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 20% 100%, 0% 50%)',
              background: `linear-gradient(135deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%), url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay'
            }}
          >
            {/* Animated Overlay Effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

            {/* Floating Elements */}
            <div
              className="absolute top-20 right-20 w-4 h-4 bg-blue-400 rounded-full animate-bounce"
              style={{ animationDelay: '2s' }}
            ></div>
            <div
              className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full animate-bounce"
              style={{ animationDelay: '2.5s' }}
            ></div>
            <div
              className="absolute bottom-40 right-16 w-5 h-5 bg-pink-400 rounded-full animate-bounce"
              style={{ animationDelay: '3s' }}
            ></div>

            {/* Shine Effect */}
            <div className="absolute inset-0 opacity-0 animate-shine bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12"></div>
          </div>

          {/* Decorative Border */}
          <div
            className="absolute inset-0 opacity-0 animate-slide-in-right"
            style={{
              animationDelay: '0.5s',
              animationFillMode: 'forwards',
              clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 20% 100%, 0% 50%)',
              background: 'linear-gradient(45deg, rgba(0, 25, 65, 0.5) 0%, rgba(237, 31, 35, 0.3) 100%)',
              filter: 'blur(1px)',
              transform: 'scale(1.02)'
            }}
          ></div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-right {
          from { 
            opacity: 0;
            transform: translateX(100px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes shine {
          0% {
            opacity: 0;
            transform: translateX(-100%) skewX(-12deg);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateX(300%) skewX(-12deg);
          }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); opacity: 0.7; }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 1s ease-out;
        }
        
        .animate-shine {
          animation: shine 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }
        
        .animate-spin {
          animation: spin linear infinite;
        }
        
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default PageHeader;