import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Gift, Heart, Gem, Trophy } from 'lucide-react';

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
                    Elevate
                </h3>
                <h1 className="absolute top-[22%] left-[36%] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                    <span className="antic bg-gradient-to-r from-[#221F20] via-[#133FAD] to-[#ED3237] bg-clip-text text-transparent">
                        YOUR SPACE
                    </span>
                </h1>
            </div>

            <div className="container mx-auto px-4 py-16 lg:py-10 lg:px-26">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 h-126 items-center">
                    {/* Left Side - Images */}
                    <div className="relative">

                        {/* Decorative floating elements */}
                        {/* <div className="absolute -top-8 -left-8 w-20 h-20 bg-gradient-to-br from-[#133FAD]/20 to-[#ED3237]/20 rounded-t-full blur-sm animate-pulse"></div>
                        <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-[#ED3237]/20 to-[#133FAD]/20 rounded-t-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div> */}

                        {/* Top Rounded Image */}
                        <div className="relative flex justify-center lg:justify-start">
                            {/* Outer border with gradient */}
                            <div className="relative">
                                {/* <div className="absolute -inset-4 bg-gradient-to-br from-[#133FAD] via-purple-500 to-[#ED3237] rounded-t-full blur-sm opacity-10 animate-pulse" style={{ animationDelay: '0.5s' }}></div> */}
                                <div className="absolute -inset-2 bg-gradient-to-br from-[#133FAD] to-[#ED3237] rounded-t-full"></div>

                                {/* White padding space */}
                                <div className="absolute -inset-1 bg-white rounded-t-full shadow-2xl"></div>

                                {/* Image container */}
                                <div className="relative w-64 h-64 sm:w-90 sm:h-110 rounded-t-full overflow-hidden group">
                                    <img
                                        src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                        alt="Elegant living space"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />

                                    {/* Floating icons */}
                                    <Sparkles className="absolute top-4 right-4 w-6 h-6 text-white animate-bounce" />
                                    <Gift className="absolute bottom-4 left-4 w-5 h-5 text-white animate-bounce" style={{ animationDelay: '0.5s' }} />
                                </div>
                            </div>
                        </div>

                        {/* Bottom Square Image */}
                        <div className="relative  -top-45 -left-0 flex justify-center lg:justify-end">
                            {/* Outer border with gradient */}
                            <div className="relative">
                                <div className="absolute -inset-2 bg-gradient-to-br from-[#ED3237] via-pink-500 to-[#133FAD] blur-sm opacity-10" style={{ animationDelay: '1.5s' }}></div>
                                <div className="absolute -inset-2 bg-gradient-to-br from-[#ED3237] to-[#133FAD]"></div>

                                {/* White padding space */}
                                <div className="absolute -inset-1 bg-white  shadow-sm"></div>

                                {/* Image container */}
                                <div className="relative w-56 h-56 sm:w-88 sm:h-58 overflow-hidden group">
                                    <img
                                        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                        alt="Modern home decor"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />

                                    {/* Floating icons */}
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
                                    Embrace Timeless Sophistication, Elevate Every Corner of Your Home with Unmatched Comfort, Style, and Grace.
                                </span>
                            </p>

                            <div className="space-y-4 text-gray-600">
                                <p className="leading-relaxed">
                                    We believe that every space tells a story. Our carefully curated collection of premium gifts and home decor transforms ordinary moments into extraordinary memories.
                                </p>
                                {/* <p className="leading-relaxed">
                                    From elegant artisanal pieces to modern luxury essentials, we bring you the finest selection that reflects your unique taste and lifestyle.
                                </p> */}
                            </div>
                        </div>

                        {/* Features List */}
                        {/* <div className="grid sm:grid-cols-2 gap-4">
                            <div className="flex items-center space-x-3 text-[#221F20]">
                                <div className="w-2 h-2 bg-gradient-to-r from-[#133FAD] to-[#ED3237] rounded-full"></div>
                                <span className="font-medium">Handcrafted Excellence</span>
                            </div>
                            <div className="flex items-center space-x-3 text-[#221F20]">
                                <div className="w-2 h-2 bg-gradient-to-r from-[#ED3237] to-[#133FAD] rounded-full"></div>
                                <span className="font-medium">Premium Quality</span>
                            </div>
                            <div className="flex items-center space-x-3 text-[#221F20]">
                                <div className="w-2 h-2 bg-gradient-to-r from-[#133FAD] to-[#ED3237] rounded-full"></div>
                                <span className="font-medium">Timeless Design</span>
                            </div>
                            <div className="flex items-center space-x-3 text-[#221F20]">
                                <div className="w-2 h-2 bg-gradient-to-r from-[#ED3237] to-[#133FAD] rounded-full"></div>
                                <span className="font-medium">Personalized Service</span>
                            </div>
                        </div> */}

                        {/* CTA Button */}
                        <div className="">
                            <button className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-[#133FAD] to-[#ED3237] text-white px-8 py-4 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#133FAD]/25 transform hover:scale-105">
                                {/* Animated background */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#ED3237] to-[#133FAD] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                                {/* Button content */}
                                <span className="relative z-10 font-bold tracking-wide">SHOP NOW</span>
                                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />

                                {/* Sparkle effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white rounded-full animate-ping"></div>
                                    <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
                                    <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
                                </div>
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