import React, { useState, useEffect, useRef } from 'react';
import {
    Crown,
    HeartHandshake,
    Star,
    Clock,
    Sparkles,
    Gem,
    Gift,
    Trophy,
    Users,
    ThumbsUp,
    CheckCircle,
} from 'lucide-react';
import textImg from '../../assets/HomeImg/gift (1).jpg'
// import ribbon from '../../assets/HomeImg/ribbon.png'
// import taddy from '../../assets/StaticImg/taddy.png'

const WhyChooseUs = () => {
    const [visibleItems, setVisibleItems] = useState([]);
    const [statCounts, setStatCounts] = useState([0, 0, 0, 0]);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // Stats data with your color theme
    const stats = [
        {
            number: 50000,
            label: 'Happy Customers',
            icon: HeartHandshake,
            suffix: '+',
            color: 'from-[#133FAD] to-[#ED3237]',
        },
        {
            number: 7,
            label: 'Years Excellence',
            icon: Crown,
            suffix: ' Years',
            color: 'from-[#ED3237] to-[#133FAD]',
        },
        {
            number: 99.8,
            label: 'Satisfaction Rate',
            icon: Star,
            suffix: '%',
            color: 'from-[#133FAD] to-[#ED3237]',
        },
        {
            number: 24,
            label: 'Premium Support',
            icon: Clock,
            suffix: '/7',
            color: 'from-[#ED3237] to-[#133FAD]',
        },
    ];

    // Mouse move handler for interactive light trail
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Intersection Observer for visibility
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

    // Enhanced counter animation
    useEffect(() => {
        if (isVisible) {
            stats.forEach((stat, index) => {
                const target = stat.number;
                const duration = 2500;
                const steps = 80;
                const increment = target / steps;
                let current = 0;

                const interval = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(interval);
                    }
                    setStatCounts((prev) => {
                        const newCounts = [...prev];
                        newCounts[index] = stat.number % 1 === 0 ? Math.floor(current) : current.toFixed(1);
                        return newCounts;
                    });
                }, duration / steps);
            });
        }
    }, [isVisible]);

    return (
        <div
            className="relative py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden"
            ref={sectionRef}
        >
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

            <div className="container mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center">
                    {/* Premium Badge */}
                    <div  data-aos="zoom-in-up"
                        className={`inline-flex items-center space-x-4 px-6 py-3 bg-gradient-to-r from-[#133FAD]/10 via-[#ED3237]/10 to-[#133FAD]/10 backdrop-blur-xl rounded-full border border-[#221F20]/10 shadow-2xl mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                            }`}
                    >
                        <div className="relative">
                            <Trophy className="w-5 h-5 text-[#ED3237]" />
                            <div className="absolute -inset-2 bg-gradient-to-r from-[#ED3237]/20 to-[#133FAD]/20 rounded-full blur animate-pulse"></div>
                        </div>
                        <span className="text-md font-bold bg-gradient-to-r from-[#221F20] via-[#133FAD] to-[#ED3237] bg-clip-text text-transparent tracking-wider">
                            Why Choose Us
                        </span>
                        <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className="w-4 h-4 text-[#ED3237] fill-current animate-pulse"
                                    style={{ animationDelay: `${i * 0.15}s` }}
                                />
                            ))}
                        </div>
                         {/* <img src={taddy} alt="" className='w-30 absolute -top-20 left-25' /> */}
                    </div>

                    {/* Main Title with Image Clipped to Text */}
                    <h2  data-aos="zoom-in-up"
                        className={`text-5xl sm:text-6xl lg:text-8xl font-extrabold leading-tight mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                    >
                        <span className="block uppercase relative">
                            <svg
                                className="absolute inset-0 w-full h-full"
                                viewBox="0 0 600 100"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <defs>
                                    <clipPath id="textClip">
                                        <text
                                            x="50%"
                                            y="50%"
                                            dominantBaseline="middle"
                                            textAnchor="middle"
                                            fontSize="90"
                                            fontWeight="800"
                                            fontFamily="inherit"
                                            className="uppercase"
                                        >
                                            7 Star Gifts
                                        </text>
                                    </clipPath>
                                </defs>
                                <image
                                    href={textImg} // Replace with your image, e.g., '../../assets/HomeImg/background.jpg'
                                    x="0"
                                    y="0"
                                    width="100%"
                                    height="100%"
                                    preserveAspectRatio="xMidYMid slice"
                                    clipPath="url(#textClip)"
                                />
                            </svg>
                            <span
                                className="text-transparent"
                            // style={{ color: '#133FAD' }} // Fallback color
                            >
                                7 Star Gifts
                            </span>
                            <div className="absolute -inset-4 bg-gradient-to-br from-[#133FAD]/5 to-[#ED3237]/5 blur-xl rounded-lg animate-pulse"></div>
                        </span>
                    </h2>

                    {/* Subtitle */}
                    <p  data-aos="zoom-in-up"
                        className={`text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                    >
                        Discover the art of gifting with our curated collection of premium, timeless pieces designed to elevate every occasion with sophistication and elegance.
                    </p>

                    {/* Stats Row with Enhanced Design */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9 max-w-7xl mx-auto relative">
                        {stats.map((stat, index) => {
                            const IconComponent = stat.icon;
                            return (
                                <div  data-aos="zoom-in-up"
                                    key={index}
                                    className={`group relative p-8 bg-white/80 backdrop-blur-lg rounded-2xl border border-[#221F20]/10 hover:border-[#133FAD]/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                        }`}
                                    style={{ animationDelay: `${index * 0.2}s` }}
                                >
                                    {/* <div>
                                        <img src={ribbon} alt="" className='w-25 absolute -top-[13.5%] -right-[8%] rotate-22 z-50' />
                                    </div> */}
                                    {/* Card Background Effects */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-all duration-500 blur-lg`}
                                    ></div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>

                                    {/* Card Content */}
                                    <div className="relative z-10 text-center space-y-4">
                                        <div className="mx-auto w-14 h-14 bg-gradient-to-br from-[#133FAD]/10 to-[#ED3237]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                                            <IconComponent className="w-7 h-7 text-[#221F20] group-hover:text-[#133FAD]" />
                                        </div>
                                        <div
                                            className={`text-3xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                                        >
                                            {statCounts[index]}
                                            {stat.suffix}
                                        </div>
                                        <div className="text-sm text-gray-500 font-medium tracking-wide uppercase">
                                            {stat.label}
                                        </div>
                                    </div>

                                    {/* Sparkle Effect on Hover */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                        <div
                                            className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping"
                                            style={{ animationDelay: '0.1s' }}
                                        ></div>
                                        <div
                                            className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-white rounded-full animate-ping"
                                            style={{ animationDelay: '0.3s' }}
                                        ></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
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
    );
};

export default WhyChooseUs;