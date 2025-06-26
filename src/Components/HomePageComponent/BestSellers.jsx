// import React, { useState, useEffect, useRef } from 'react';
// import { Star, Sparkles, Heart, ShoppingBag, Crown } from 'lucide-react';

// const BestSellers = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);
//   const scrollContainerRef = useRef(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeft, setScrollLeft] = useState(0);

//   // Sample product data (replace images with your assets)
//   const products = [
//     {
//       id: 1,
//       name: 'Luxury Gift Box',
//       price: 149.99,
//       rating: 4.8,
//       image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
//     },
//     {
//       id: 2,
//       name: 'Elegant Necklace',
//       price: 89.99,
//       rating: 4.9,
//       image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
//     },
//     {
//       id: 3,
//       name: 'Premium Watch',
//       price: 299.99,
//       rating: 4.7,
//       image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
//     },
//     {
//       id: 4,
//       name: 'Scented Candle Set',
//       price: 49.99,
//       rating: 4.6,
//       image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
//     },
//     {
//       id: 5,
//       name: 'Personalized Journal',
//       price: 34.99,
//       rating: 4.8,
//       image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
//     },
//   ];

//   // Intersection Observer for visibility
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   // Drag-to-scroll functionality
//   const handleMouseDown = (e) => {
//     setIsDragging(true);
//     setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
//     setScrollLeft(scrollContainerRef.current.scrollLeft);
//     scrollContainerRef.current.style.cursor = 'grabbing';
//   };

//   const handleMouseLeave = () => {
//     setIsDragging(false);
//     scrollContainerRef.current.style.cursor = 'grab';
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//     scrollContainerRef.current.style.cursor = 'grab';
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging) return;
//     e.preventDefault();
//     const x = e.pageX - scrollContainerRef.current.offsetLeft;
//     const walk = (x - startX) * 2; // Scroll speed
//     scrollContainerRef.current.scrollLeft = scrollLeft - walk;
//   };

//   return (
//     <div
//       className="relative py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden"
//       ref={sectionRef}
//     >
//       {/* Background Decorative Elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div
//           className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-[#133FAD]/10 to-[#ED3237]/10 rounded-full blur-3xl animate-pulse opacity-30"
//           style={{ animationDuration: '6s' }}
//         ></div>
//         <div
//           className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-[#ED3237]/10 to-[#133FAD]/10 rounded-full blur-3xl animate-pulse opacity-30"
//           style={{ animationDelay: '2s', animationDuration: '8s' }}
//         ></div>
//         <div
//           className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-br from-[#221F20]/5 to-[#ED3237]/5 rounded-full blur-2xl animate-pulse opacity-20"
//           style={{ animationDelay: '4s', animationDuration: '10s' }}
//         ></div>
//       </div>

//       <div className="container mx-auto relative z-10">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <div
//             className={`inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-[#133FAD]/10 via-[#ED3237]/10 to-[#133FAD]/10 backdrop-blur-xl rounded-full border border-[#221F20]/10 shadow-lg mb-6 transition-all duration-1000 ${
//               isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
//             }`}
//           >
//             <Crown className="w-5 h-5 text-[#ED3237]" />
//             <span className="text-sm font-semibold text-[#133FAD] tracking-wider uppercase">
//               Best Sellers
//             </span>
//             <Sparkles className="w-4 h-4 text-[#ED3237] animate-pulse" />
//           </div>

//           <h2
//             className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 transition-all duration-1000 delay-200 ${
//               isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//             }`}
//           >
//             <span className="bg-gradient-to-r from-[#221F20] via-[#133FAD] to-[#ED3237] bg-clip-text text-transparent">
//               People Loved These
//             </span>
//           </h2>

//           <p
//             className={`text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
//               isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//             }`}
//           >
//             Explore our most cherished gifts, handpicked by our community for their elegance and charm.
//           </p>
//         </div>

//         {/* Horizontal Scrollable Product Cards */}
//         <div
//           className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide gap-6 pb-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-hidden"
//           ref={scrollContainerRef}
//           onMouseDown={handleMouseDown}
//           onMouseLeave={handleMouseLeave}
//           onMouseUp={handleMouseUp}
//           onMouseMove={handleMouseMove}
//           style={{ cursor: 'grab' }}
//         >
//           {products.map((product, index) => (
//             <div
//               key={product.id}
//               className={`group relative flex-shrink-0 w-80 md:w-full snap-start transition-all duration-500 ${
//                 isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//               }`}
//               style={{ animationDelay: `${index * 0.2}s` }}
//             >
//               {/* Card Container */}
//               <div className="relative h-[450px] bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden">
//                 {/* Animated Border */}
//                 <div
//                   className="absolute -inset-1 bg-gradient-to-br from-[#133FAD] via-[#ED3237] to-[#221F20] rounded-2xl blur-sm opacity-0 group-hover:opacity-75 transition-opacity duration-500"
//                 ></div>
//                 <div
//                   className="absolute -inset-0.5 bg-gradient-to-br from-[#133FAD] via-[#ED3237] to-[#221F20] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                 ></div>

//                 {/* Card Content */}
//                 <div className="relative h-full flex flex-col">
//                   {/* Product Image */}
//                   <div className="relative h-2/3 overflow-hidden">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
//                     {/* Heart Icon */}
//                     <div className="absolute top-4 right-4 p-2 bg-[#133FAD]/20 rounded-full border border-white/20 group-hover:scale-110 transition-transform duration-300">
//                       <Heart className="w-5 h-5 text-[#ED3237] group-hover:fill-[#ED3237] transition-all duration-300" />
//                     </div>
//                   </div>

//                   {/* Product Details */}
//                   <div className="p-6 flex-1 flex flex-col justify-between">
//                     <div>
//                       <h3 className="text-xl font-bold text-[#221F20] group-hover:text-[#133FAD] transition-colors duration-300">
//                         {product.name}
//                       </h3>
//                       <div className="flex items-center mt-2">
//                         {[...Array(5)].map((_, i) => (
//                           <Star
//                             key={i}
//                             className={`w-4 h-4 ${
//                               i < Math.floor(product.rating) ? 'text-[#ED3237] fill-current' : 'text-gray-300'
//                             }`}
//                           />
//                         ))}
//                         <span className="ml-2 text-sm text-gray-500">({product.rating})</span>
//                       </div>
//                     </div>
//                     <div className="flex items-center justify-between mt-4">
//                       <span className="text-lg font-semibold text-[#ED3237]">${product.price.toFixed(2)}</span>
//                       <button className="relative px-4 py-2 bg-gradient-to-r from-[#133FAD] to-[#ED3237] text-white rounded-full text-sm font-semibold overflow-hidden group/btn">
//                         <div className="absolute inset-0 bg-gradient-to-r from-[#ED3237] to-[#133FAD] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
//                         <div className="relative flex items-center space-x-2 z-10">
//                           <ShoppingBag className="w-4 h-4" />
//                           <span>Add to Cart</span>
//                         </div>
//                       </button>
//                     </div>
//                   </div>

//                   {/* Sparkle Effects */}
//                   <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
//                     <div
//                       className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping"
//                       style={{ animationDelay: '0.1s' }}
//                     ></div>
//                     <div
//                       className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-white rounded-full animate-ping"
//                       style={{ animationDelay: '0.3s' }}
//                     ></div>
//                   </div>
//                 </div>
//               </div>

//               {/* Floating Shadow */}
//               <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-3/4 h-6 bg-gradient-to-r from-transparent via-black/10 to-transparent rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//             </div>
//           ))}
//         </div>

//         {/* Floating Decorative Elements */}
//         <div
//           className="absolute top-1/5 right-1/5 animate-bounce"
//           style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}
//         >
//           <Sparkles className="w-6 h-6 text-[#ED3237] opacity-70" />
//         </div>
//         <div
//           className="absolute bottom-1/5 left-1/5 animate-bounce"
//           style={{ animationDuration: '4s', animationDelay: '1s' }}
//         >
//           <Star className="w-5 h-5 text-[#133FAD] opacity-70" />
//         </div>
//       </div>

//       <style jsx>{`
//         /* Hide scrollbar for horizontal scroll */
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default BestSellers;

import React, { useState, useEffect, useRef } from 'react';
import {
    Heart,
    Star,
    ShoppingBag,
    Eye,
    Sparkles,
    Crown,
    TrendingUp,
    Users,
    ArrowLeft,
    ArrowRight,
    Zap,
    Award,
    ThumbsUp
} from 'lucide-react';
import s1 from '../../assets/HomeImage/keychain.jpg'
import s2 from '../../assets/HomeImage/giftset.jpg'
import s3 from '../../assets/HomeImage/teacoaster.jpg'
import cat1 from '../../assets/HomeImage/paper.jpg'
import cat2 from '../../assets/HomeImage/pen.jpg'
import cat3 from '../../assets/HomeImage/cardholder.jpg'
import taddy from '../../assets/StaticImg/taddy.png'
import box from '../../assets/StaticImg/pinkBox.png'


const BestSellers = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [hoveredCard, setHoveredCard] = useState(null);
    const sectionRef = useRef(null);
    const scrollRef = useRef(null);

    // Sample best seller products - replace with your actual data
    const bestSellers = [
        {
            id: 1,
            name: "Premium Key Chain",
            price: 2499,
            originalPrice: 3199,
            image: s1,
            rating: 4.9,
            reviews: 234,
            sales: "2.1k+ sold",
            badge: "Best Seller",
            discount: 22
        },
        {
            id: 2,
            name: "Gift Set Collection",
            price: 1899,
            originalPrice: 2299,
            image: s2,
            rating: 4.8,
            reviews: 189,
            sales: "1.8k+ sold",
            badge: "Top Rated",
            discount: 17
        },
        {
            id: 3,
            name: "Tea Coaster",
            price: 899,
            originalPrice: 1199,
            image: s3,
            rating: 4.9,
            reviews: 156,
            sales: "3.2k+ sold",
            badge: "Most Loved",
            discount: 25
        },
        {
            id: 4,
            name: "Paper Weight",
            price: 3299,
            originalPrice: 3999,
            image: cat1,
            rating: 5.0,
            reviews: 89,
            sales: "892+ sold",
            badge: "Premium",
            discount: 18
        },
        {
            id: 5,
            name: "Pen Stand",
            price: 1299,
            originalPrice: 1699,
            image: cat2,
            rating: 4.7,
            reviews: 203,
            sales: "1.5k+ sold",
            badge: "Trending",
            discount: 24
        },
        {
            id: 6,
            name: "Card Holder",
            price: 1799,
            originalPrice: 2199,
            image: cat3,
            rating: 4.8,
            reviews: 167,
            sales: "967+ sold",
            badge: "Classic",
            discount: 18
        }
    ];

    // Mouse move handler
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Intersection Observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Auto scroll functionality
    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current && !hoveredCard) {
                const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
                const currentScroll = scrollRef.current.scrollLeft;

                if (currentScroll >= maxScroll - 10) {
                    scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
                }
            }
        }, 4000);

        return () => clearInterval(interval);
    }, [hoveredCard]);

    const scrollLeft = () => {
        scrollRef.current?.scrollBy({ left: -320, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollRef.current?.scrollBy({ left: 320, behavior: 'smooth' });
    };

    const getBadgeColor = (badge) => {
        switch (badge) {
            case 'Best Seller': return 'from-[#ED3237] to-[#FF6B6B]';
            case 'Top Rated': return 'from-[#133FAD] to-[#4F8EF7]';
            case 'Most Loved': return 'from-[#ED3237] to-[#133FAD]';
            case 'Premium': return 'from-[#221F20] to-[#4A4A4A]';
            case 'Trending': return 'from-[#133FAD] to-[#ED3237]';
            default: return 'from-[#221F20] to-[#133FAD]';
        }
    };

    return (
        <div
            className="relative py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden"
            ref={sectionRef}
        >
            <img src={box} alt="" className='absolute w-40 md:w-65 -bottom-5 right-0 opacity-80 z-20'/>
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Animated Gradient Orbs */}
                <div
                    className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-gradient-to-br from-[#133FAD]/10 via-[#ED3237]/5 to-transparent rounded-full blur-3xl animate-pulse opacity-30"
                    style={{ animationDuration: '8s' }}
                ></div>
                <div
                    className="absolute -bottom-40 -right-40 w-[700px] h-[700px] bg-gradient-to-br from-[#ED3237]/10 via-[#133FAD]/5 to-transparent rounded-full blur-3xl animate-pulse opacity-30"
                    style={{ animationDelay: '3s', animationDuration: '10s' }}
                ></div>

                {/* Interactive Light Trail */}
                <div
                    className="absolute w-96 h-96 bg-gradient-radial from-[#133FAD]/8 via-[#ED3237]/4 to-transparent rounded-full blur-2xl transition-all duration-300"
                    style={{
                        left: mousePosition.x - 192,
                        top: mousePosition.y - 192,
                        opacity: 0.4,
                    }}
                ></div>

                {/* Floating Elements */}
                <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-gradient-to-br from-[#ED3237] to-[#133FAD] rounded-full animate-ping opacity-60"></div>
                <div
                    className="absolute bottom-1/3 right-1/5 w-1.5 h-1.5 bg-gradient-to-br from-[#133FAD] to-[#ED3237] rounded-full animate-ping opacity-60"
                    style={{ animationDelay: '1.5s' }}
                ></div>
            </div>

            <div className="container mx-auto relative z-10">


                {/* Section Header */}
                <div className="text-center mb-16">
                    <div data-aos="zoom-in-up" className="relative inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#133FAD]/10 to-[#ED3237]/10 rounded-full border border-[#133FAD]/20 mb-6">
                        <TrendingUp className="w-5 h-5 text-[#6787d7]" />
                        <span className="text-sm font-semibold text-[#6787d7] tracking-wider uppercase">People Loved These</span>
                        <Users className="w-5 h-5 text-[#133FAD]" />
                        <ThumbsUp className="w-4 h-4 text-[#ED3237]" />
                         <img src={taddy} alt="" className='w-30 absolute -top-20 left-19' />
                    </div>

                    <h2 data-aos="zoom-in-up" className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-black/90 via-[#133FAD] to-[#ED3237] bg-clip-text text-transparent">
                            Best Sellers
                        </span>
                    </h2>

                    <p data-aos="zoom-in-up" className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Discover our most coveted pieces, handpicked by thousands of satisfied customers who've made these treasures their favorites.
                    </p>
                </div>

                {/* Products Section */}
                <div className="relative">
                    {/* Navigation Buttons */}
                    <button
                        onClick={scrollLeft}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-lg rounded-full shadow-2xl border border-[#221F20]/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#133FAD]/10 hover:to-[#ED3237]/10 transition-all duration-300 hover:scale-110 group"
                    >
                        <ArrowLeft className="w-5 h-5 text-[#221F20] group-hover:text-[#133FAD]" />
                    </button>
                    <button
                        onClick={scrollRight}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-lg rounded-full shadow-2xl border border-[#221F20]/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#133FAD]/10 hover:to-[#ED3237]/10 transition-all duration-300 hover:scale-110 group"
                    >
                        <ArrowRight className="w-5 h-5 text-[#221F20] group-hover:text-[#ED3237]" />
                    </button>

                    {/* Products Scroll Container */}
                    <div
                        ref={scrollRef}
                        className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4 py-8"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {bestSellers.map((product, index) => (
                            <div data-aos="zoom-in-up"
                                key={product.id}
                                className={`group relative flex-shrink-0 w-80 bg-white/20 backdrop-blur-3xl rounded-3xl border border-[#221F20]/10 hover:border-[#133FAD]/30 shadow-md hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                    }`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                                onMouseEnter={() => setHoveredCard(product.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                {/* Card Background Effects */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#133FAD]/5 via-transparent to-[#ED3237]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Discount Badge */}
                                {/* <div className={`absolute top-4 left-4 z-10 px-3 py-1 bg-gradient-to-r ${getBadgeColor(product.badge)} text-white text-xs font-bold rounded-full shadow-lg`}>
                                    -{product.discount}%
                                </div> */}

                                {/* Product Badge */}
                                {/* <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-white/90 backdrop-blur-lg text-[#221F20] text-xs font-bold rounded-full shadow-lg border border-[#221F20]/10">
                                    {product.badge}
                                </div> */}

                                {/* Heart Icon */}
                                {/* <button className="absolute top-4 right-16 z-10 w-8 h-8 bg-white/90 backdrop-blur-lg rounded-full shadow-lg border border-[#221F20]/10 flex items-center justify-center hover:bg-[#ED3237] hover:text-white transition-all duration-300 group">
                                    <Heart className="w-4 h-4" />
                                </button> */}

                                {/* Product Image */}
                                <div className="relative h-90 overflow-hidden rounded-t-3xl">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    {/* Quick View Button */}
                                    <button className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/90 backdrop-blur-lg text-[#221F20] text-sm font-semibold rounded-full shadow-lg border border-[#221F20]/10 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#133FAD] hover:text-white">
                                        <Eye className="w-4 h-4 inline mr-2" />
                                        Quick View
                                    </button>
                                </div>

                                {/* Product Info */}
                                <div className="p-6 space-y-4 text-center">
                                    <div>
                                        <h3 className="text-xl pb-5 font-bold text-[#221F20] mb-2 group-hover:text-[#133FAD] transition-colors duration-300">
                                            {product.name}
                                        </h3>

                                        {/* Rating and Reviews */}
                                        {/* <div className="flex items-center space-x-2 mb-3">
                                            <div className="flex items-center">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-[#ED3237] fill-current' : 'text-gray-300'}`}
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-sm text-gray-600">
                                                {product.rating} ({product.reviews})
                                            </span>
                                        </div> */}

                                        {/* Sales Info */}
                                        {/* <div className="flex items-center space-x-2 text-sm text-[#133FAD] font-semibold mb-4">
                                            <Zap className="w-4 h-4" />
                                            <span>{product.sales}</span>
                                        </div> */}

                                        {/* Price */}
                                        {/* <div className="flex items-center space-x-3 mb-4">
                                            <span className="text-2xl font-bold bg-gradient-to-r from-[#133FAD] to-[#ED3237] bg-clip-text text-transparent">
                                                ${product.price}
                                            </span>
                                            <span className="text-gray-500 line-through text-lg">
                                                ${product.originalPrice}
                                            </span>
                                        </div> */}

                                        {/* Add to Cart Button */}
                                        <button className="w-full py-3 bg-gradient-to-r from-[#133FAD] to-[#ED3237] text-white font-semibold rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 group">
                                            <ShoppingBag className="w-5 h-5 group-hover:animate-bounce" />
                                            <span>Explore More</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Sparkle Effects */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                    <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0.1s' }}></div>
                                    <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
                                    <div className="absolute top-2/3 left-2/3 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* View All Button */}

                <div  data-aos="zoom-in-up" className="text-center mt-12">
                    <button className="group/main relative overflow-hidden inset-0 bg-gradient-to-r from-[#221F20]/80 to-slate-400  b rounded-full px-8 py-4 transition-all duration-700 hover:border-transparent hover:shadow-2xl hover:shadow-[#133FAD]/20 transform hover:scale-105">
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
                                View All Best Sellers
                            </span>
                            <div className="relative">
                                <Sparkles className="w-6 h-6 text-[#d0cbcd] transition-all duration-700 group-hover/main:text-white group-hover/main:rotate-360 group-hover/main:scale-125" />
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

            {/* Floating Decorative Elements */}
            <div className="absolute top-1/6 right-1/6 animate-bounce" style={{ animationDuration: '3s', animationDelay: '0.5s' }}>
                <Crown className="w-6 h-6 text-[#ED3237] opacity-60" />
            </div>
            <div className="absolute bottom-1/6 left-1/6 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <Sparkles className="w-5 h-5 text-[#133FAD] opacity-60" />
            </div>
        </div>
    );
};

export default BestSellers;