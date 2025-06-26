import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Gift, Heart, Gem, Trophy } from 'lucide-react';
import box from '../../assets/HomeImg/box.png'
import img1 from '../../assets/HomeImage/trophy.jpg'
import img2 from '../../assets/HomeImage/mobileStand.jpg'

const AboutUs = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Mouse move handler for interactive light trail
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
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

            {/* Main Heading */}
            <div className="space-y-4 text-center">
                <h3 className="heading absolute top-[8%] left-[33%] text-lg sm:text-7xl text-[#221F20] tracking-wider">
                    Celebrate
                </h3>
                <h1 className="absolute top-[22%] left-[36%] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                    <span className="antic bg-gradient-to-r from-[#221F20] via-[#133FAD] to-[#ED3237] bg-clip-text text-transparent tracking-wide">
                        MOMENTS WITH US
                    </span>
                </h1>
            </div>
            <img src={box} alt="" className='absolute -bottom-10 right-0 w-50 opacity-50'/>

            <div className="container mx-auto px-4 py-16 lg:py-10 lg:px-26">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 h-126 items-center">
                    {/* Left Side - Images */}
                    <div className="relative">
                        {/* Top Rounded Image */}
                        <div className="relative flex justify-center lg:justify-start">
                            <div className="relative">
                                <div className="absolute -inset-2 bg-gradient-to-br from-[#133FAD] to-[#ED3237] rounded-t-full"></div>
                                <div className="absolute -inset-1 bg-white rounded-t-full shadow-2xl"></div>
                                <div className="relative w-64 h-64 sm:w-90 sm:h-110 rounded-t-full overflow-hidden group">
                                    <img
                                        src={img1}
                                        alt="Elegant gift item"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <Sparkles className="absolute top-4 right-4 w-6 h-6 text-white animate-bounce" />
                                    <Gift className="absolute bottom-4 left-4 w-5 h-5 text-white animate-bounce" style={{ animationDelay: '0.5s' }} />
                                </div>
                            </div>
                        </div>

                        {/* Bottom Square Image */}
                        <div className="relative -top-45 -left-0 flex justify-center lg:justify-end">
                            <div className="relative">
                                <div className="absolute rounded-2xl -inset-2 bg-gradient-to-br from-[#ED3237] via-pink-500 to-[#133FAD] blur-sm opacity-10" style={{ animationDelay: '1.5s' }}></div>
                                <div className="absolute -inset-2 bg-gradient-to-br from-[#ED3237] to-[#133FAD] rounded-2xl"></div>
                                <div className="absolute -inset-1 bg-white shadow-sm rounded-2xl"></div>
                                <div className="relative w-56 h-56 sm:w-88 sm:h-58 overflow-hidden group rounded-2xl">
                                    <img
                                        src={img2}
                                        alt="Luxury gift decor"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <Heart className="absolute top-4 right-4 w-5 h-5 text-white animate-bounce" style={{ animationDelay: '1s' }} />
                                    <Sparkles className="absolute bottom-4 left-4 w-4 h-4 text-white animate-bounce" style={{ animationDelay: '1.5s' }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="space-y-8 lg:px-8 text-center lg:text-left">
                        {/* Description */}
                        <div className="space-y-4">
                            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed pt-8">
                                <span className="font-semibold text-[#221F20] italic">
                                    Craft Memories with Elegance, Celebrate Every Occasion with Gifts that Inspire Joy and Sophistication.
                                </span>
                            </p>
                            <div className="space-y-4 text-gray-600">
                                <p className="leading-relaxed">
                                    We believe every gift tells a story. Our carefully curated collection of premium gifts transforms ordinary moments into extraordinary memories.
                                </p>
                            </div>
                        </div>

                        <div className="">
                            <button className="group/main relative overflow-hidden inset-0 bg-gradient-to-r from-[#221F20]/80 to-slate-400 border-[#969394]/40 rounded-full px-8 py-4 transition-all duration-700 hover:border-transparent hover:shadow-2xl hover:shadow-[#133FAD]/20 transform hover:scale-105">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#133FAD]/20 via-[#ED3237]/20 to-[#221F20]/20 rounded-full transform scale-0 group-hover/main:scale-100 transition-transform duration-700 ease-out"></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#ED3237]/30 to-[#133FAD]/30 rounded-full transform rotate-0 group-hover/main:rotate-180 transition-transform duration-1000 ease-in-out opacity-0 group-hover/main:opacity-100"></div>
                                <div className="absolute inset-0 opacity-0 group-hover/main:opacity-100 transition-opacity duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#133FAD] to-[#ED3237] rounded-full transform scale-x-0 group-hover/main:scale-x-100 transition-transform duration-800 ease-out origin-center opacity-80"></div>
                                </div>
                                <div className="relative z-10 flex items-center space-x-4">
                                    <span className="text-lg font-bold text-[#d0cbcd] transition-all duration-500 inset-0 group-hover/main:text-white group-hover/main:tracking-wider group-hover/main:drop-shadow-lg">
                                        SHOP NOW
                                    </span>
                                    <div className="relative">
                                        <ArrowRight className="w-6 h-6 text-[#d0cbcd] transition-all duration-700 group-hover/main:text-white group-hover/main:rotate-360 group-hover/main:scale-125" />
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
            </div>
        </div>
    );
};

export default AboutUs;