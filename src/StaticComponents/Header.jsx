// import React, { useState, useEffect } from 'react';
// import { ChevronDown, Gift, Globe, Heart, Sparkles, Crown, Star, Menu, X, Home, User, Package, Image, Phone } from 'lucide-react';
// import logo from '../assets/StaticImg/BrandLogo.png'
// import LanguageSelector from './LanguageSelector';

// const Header = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isLangOpen, setIsLangOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Close mobile menu when screen size changes
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) {
//         setIsMobileMenuOpen(false);
//       }
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const navItems = [
//     { name: 'Home', href: '/', icon: <Home className="w-5 h-5" /> },
//     { name: 'About', href: '/about', icon: <User className="w-5 h-5" /> },
//     {
//       name: 'Product',
//       href: '/products',
//       icon: <Package className="w-5 h-5" />,
//       hasDropdown: true,
//       dropdownItems: [
//         { name: 'Metal Trophy', icon: <Gift className="w-4 h-4" />, href: '#' },
//         { name: 'Table Top', icon: <Heart className="w-4 h-4" />, href: '#' },
//         { name: 'memento', icon: <Crown className="w-4 h-4" />, href: '#' },
//         { name: 'Metal Key-Chain', icon: <Star className="w-4 h-4" />, href: '#' },
//         { name: 'Medals', icon: <Star className="w-4 h-4" />, href: '#' }
//       ]
//     },
//     { name: 'Gallery', href: '/gallery', icon: <Image className="w-5 h-5" /> },
//     { name: 'E-Brochure', href: '/brochure', icon: <Image className="w-5 h-5" /> },
//     { name: 'Contact', href: '/contact', icon: <Phone className="w-5 h-5" /> }
//   ];

//   return (
//     <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
//       ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/10'
//       : 'bg-white/50 backdrop-blur-3xl'
//       }`}>
//       {/* Decorative top border */}
//       <div className="h-1 bg-gradient-to-r from-[#ED3237] via-[#133FAD] to-[#ED3237] opacity-80"></div>

//       <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-3">
//         <div className="flex items-center justify-between">

//           {/* Logo Section */}
//           <div className="flex items-center space-x-2 sm:space-x-3 group cursor-pointer">
//             <div className="relative">
//               <img src={logo} alt="" className='w-40' />
//             </div>
//           </div>

//           {/* Desktop Navigation Links */}
//           <nav className="hidden lg:flex items-center space-x-6 xl:space-x-4">
//             {navItems.map((item, index) => (
//               <div key={index} className="relative group">
//                 <a
//                   href={item.href}
//                   className={`flex items-center space-x-1 font-medium text-lg tracking-wide  transition-all duration-300 py-2 px-3 xl:px-4 rounded-full hover:bg-gradient-to-r hover:from-[#ED3237]/10 hover:to-[#133FAD]/10 hover:shadow-md hover:scale-105 ${
//                   scrolled
//                     ? 'text-gray-800 hover:text-[#252323]'
//                     : 'text-gray-900'
//                 }`}
//                 onMouseEnter={() => item.hasDropdown && setIsDropdownOpen(true)}
//                 onMouseLeave={() => item.hasDropdown && setIsDropdownOpen(false)}
//                 >
//                 <span className="relative">
//                   {item.name}
//                   <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ED3237] to-[#133FAD] group-hover:w-full transition-all duration-300"></span>
//                 </span>
//                 {item.hasDropdown && (
//                   <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
//                 )}
//               </a>

//                 {/* Desktop Dropdown Menu */ }
//                 {
//                 item.hasDropdown && (
//                   <div
//                     className={`absolute top-8 left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 ${isDropdownOpen
//                       ? 'opacity-100 translate-y-0 pointer-events-auto'
//                       : 'opacity-0 -translate-y-4 pointer-events-none'
//                       }`}
//                     onMouseEnter={() => setIsDropdownOpen(true)}
//                     onMouseLeave={() => setIsDropdownOpen(false)}
//                   >
//                     <div className="p-2">
//                       {item.dropdownItems?.map((dropItem, idx) => (
//                         <a
//                           key={idx}
//                           href={dropItem.href}
//                           className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-[#ED3237] hover:to-[#133FAD] rounded-xl transition-all duration-300 group/item"
//                         >
//                           <span className="text-gray-500 group-hover/item:text-white/80 transition-colors duration-300">
//                             {dropItem.icon}
//                           </span>
//                           <span className="font-medium">{dropItem.name}</span>
//                           <div className="ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
//                             <div className="w-2 h-2 bg-white/50 rounded-full"></div>
//                           </div>
//                         </a>
//                       ))}
//                     </div>
//                     <div className="h-1 bg-gradient-to-r from-[#ED3237] to-[#133FAD] opacity-20"></div>
//                   </div>
//                 )
//               }
//               </div>
//             ))}
//       </nav>

//       {/* Right side - Language Selector & Mobile Menu Button */}
//       <div className="flex items-center space-x-3 sm:space-x-4">
//         {/* Language Selector */}
//        <LanguageSelector />

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           className="lg:hidden relative p-2 sm:p-2.5 bg-gradient-to-r from-[#ED3237] to-[#133FAD] rounded-full text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
//         >
//           {isMobileMenuOpen ? (
//             <X className="w-5 h-5 sm:w-6 sm:h-6 transform rotate-0 transition-transform duration-300" />
//           ) : (
//             <Menu className="w-5 h-5 sm:w-6 sm:h-6 transform rotate-0 transition-transform duration-300" />
//           )}
//         </button>
//       </div>
//     </div>
//       </div >

//   {/* Mobile Menu Sidebar */ }
//   < div className = {`fixed top-0 left-0 h-screen w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
//     }`}>
//       <div className="flex flex-col h-full">
//         {/* Mobile Menu Header */}
//         <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gradient-to-r from-[#ED3237]/5 to-[#133FAD]/5">
//           <div className="flex items-center space-x-3">
//             <img src={logo} alt="" className='w-36' />
//           </div>
//           <button
//             onClick={() => setIsMobileMenuOpen(false)}
//             className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
//           >
//             <X className="w-5 h-5 text-gray-600" />
//           </button>
//         </div>

//         {/* Mobile Navigation Links */}
//         <div className="flex-1 overflow-y-auto py-6">
//           <nav className="px-6 space-y-2">
//             {navItems.map((item, index) => (
//               <div key={index}>
//                 <a
//                   href={item.href}
//                   className="flex items-center space-x-4 px-4 py-4 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-[#ED3237] hover:to-[#133FAD] rounded-xl transition-all duration-300 group"
//                   onClick={() => !item.hasDropdown && setIsMobileMenuOpen(false)}
//                 >
//                   <span className="text-gray-500 group-hover:text-white/80 transition-colors duration-300">
//                     {item.icon}
//                   </span>
//                   <span className="font-medium text-base">{item.name}</span>
//                   {item.hasDropdown && (
//                     <ChevronDown className="w-4 h-4 ml-auto group-hover:text-white/80 transition-colors duration-300" />
//                   )}
//                 </a>

//                 {/* Mobile Dropdown Items */}
//                 {item.hasDropdown && (
//                   <div className="ml-6 mt-2 space-y-1">
//                     {item.dropdownItems?.map((dropItem, idx) => (
//                       <a
//                         key={idx}
//                         href={dropItem.href}
//                         className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-[#ED3237]/80 hover:to-[#133FAD]/80 rounded-lg transition-all duration-300 group/sub"
//                         onClick={() => setIsMobileMenuOpen(false)}
//                       >
//                         <span className="text-gray-400 group-hover/sub:text-white/70 transition-colors duration-300">
//                           {dropItem.icon}
//                         </span>
//                         <span className="font-medium text-sm">{dropItem.name}</span>
//                       </a>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </nav>
//         </div>

     
//       </div>
//       </div >

//   {/* Mobile Menu Overlay */ }
// {
//   isMobileMenuOpen && (
//     <div
//       className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
//       onClick={() => setIsMobileMenuOpen(false)}
//     ></div>
//   )
// }

// {/* Decorative bottom glow */ }
// <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#ED3237]/30 to-transparent"></div>
//     </header >
//   );
// };

// export default Header;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Gift, Globe, Heart, Sparkles, Crown, Star, Menu, X, Home, User, Package, Image, Phone } from 'lucide-react';
import logo from '../assets/StaticImg/BrandLogo.png';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { name: 'Home', to: '/', icon: <Home className="w-5 h-5" /> },
    { name: 'About', to: '/about', icon: <User className="w-5 h-5" /> },
    {
      name: 'Product',
      to: '/products',
      icon: <Package className="w-5 h-5" />,
      hasDropdown: true,
      dropdownItems: [
        { name: 'Metal Trophy', icon: <Gift className="w-4 h-4" />, to: '#' },
        { name: 'Table Top', icon: <Heart className="w-4 h-4" />, to: '#' },
        { name: 'memento', icon: <Crown className="w-4 h-4" />, to: '#' },
        { name: 'Metal Key-Chain', icon: <Star className="w-4 h-4" />, to: '#' },
        { name: 'Medals', icon: <Star className="w-4 h-4" />, to: '#' }
      ]
    },
    { name: 'Gallery', to: '/gallery', icon: <Image className="w-5 h-5" /> },
    { name: 'E-Brochure', to: '/brochure', icon: <Image className="w-5 h-5" /> },
    { name: 'Contact', to: '/contact', icon: <Phone className="w-5 h-5" /> }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
      ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/10'
      : 'bg-white/50 backdrop-blur-3xl'
      }`}>
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-[#ED3237] via-[#133FAD] to-[#ED3237] opacity-80"></div>

      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-3">
        <div className="flex items-center justify-between">

          {/* Logo Section */}
          <div className="flex items-center space-x-2 sm:space-x-3 group cursor-pointer">
            <div className="relative">
              <img src={logo} alt="" className='w-40' />
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-4">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  to={item.to}
                  className={`flex items-center space-x-1 font-medium text-lg tracking-wide transition-all duration-300 py-2 px-3 xl:px-4 rounded-full hover:bg-gradient-to-r hover:from-[#ED3237]/10 hover:to-[#133FAD]/10 hover:shadow-md hover:scale-105 ${
                    scrolled
                      ? 'text-gray-800 hover:text-[#252323]'
                      : 'text-gray-900'
                  }`}
                  onMouseEnter={() => item.hasDropdown && setIsDropdownOpen(true)}
                  onMouseLeave={() => item.hasDropdown && setIsDropdownOpen(false)}
                >
                  <span className="relative">
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ED3237] to-[#133FAD] group-hover:w-full transition-all duration-300"></span>
                  </span>
                  {item.hasDropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  )}
                </Link>

                {/* Desktop Dropdown Menu */}
                {item.hasDropdown && (
                  <div
                    className={`absolute top-8 left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 ${isDropdownOpen
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 -translate-y-4 pointer-events-none'
                      }`}
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <div className="p-2">
                      {item.dropdownItems?.map((dropItem, idx) => (
                        <Link
                          key={idx}
                          to={dropItem.to}
                          className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-[#ED3237] hover:to-[#133FAD] rounded-xl transition-all duration-300 group/item"
                        >
                          <span className="text-gray-500 group-hover/item:text-white/80 transition-colors duration-300">
                            {dropItem.icon}
                          </span>
                          <span className="font-medium">{dropItem.name}</span>
                          <div className="ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                            <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="h-1 bg-gradient-to-r from-[#ED3237] to-[#133FAD] opacity-20"></div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side - Language Selector & Mobile Menu Button */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Language Selector */}
            <LanguageSelector />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative p-2 sm:p-2.5 bg-gradient-to-r from-[#ED3237] to-[#133FAD] rounded-full text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6 transform rotate-0 transition-transform duration-300" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 transform rotate-0 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Sidebar */}
      <div className={`fixed top-0 left-0 h-screen w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gradient-to-r from-[#ED3237]/5 to-[#133FAD]/5">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="" className='w-36' />
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex-1 overflow-y-auto py-6">
            <nav className="px-6 space-y-2">
              {navItems.map((item, index) => (
                <div key={index}>
                  <Link
                    to={item.to}
                    className="flex items-center space-x-4 px-4 py-4 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-[#ED3237] hover:to-[#133FAD] rounded-xl transition-all duration-300 group"
                    onClick={() => !item.hasDropdown && setIsMobileMenuOpen(false)}
                  >
                    <span className="text-gray-500 group-hover:text-white/80 transition-colors duration-300">
                      {item.icon}
                    </span>
                    <span className="font-medium text-base">{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown className="w-4 h-4 ml-auto group-hover:text-white/80 transition-colors duration-300" />
                    )}
                  </Link>

                  {/* Mobile Dropdown Items */}
                  {item.hasDropdown && (
                    <div className="ml-6 mt-2 space-y-1">
                      {item.dropdownItems?.map((dropItem, idx) => (
                        <Link
                          key={idx}
                          to={dropItem.to}
                          className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-[#ED3237]/80 hover:to-[#133FAD]/80 rounded-lg transition-all duration-300 group/sub"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <span className="text-gray-400 group-hover/sub:text-white/70 transition-colors duration-300">
                            {dropItem.icon}
                          </span>
                          <span className="font-medium text-sm">{dropItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Decorative bottom glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#ED3237]/30 to-transparent"></div>
    </header>
  );
};

export default Header;