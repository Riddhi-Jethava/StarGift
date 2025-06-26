import React, { useState } from 'react';
import { 
  TrendingUp, 
  Package, 
  Truck, 
  Tag, 
  Home, 
  Crown, 
  Coffee,
  FolderOpen
} from 'lucide-react';

const CategoryShowcase = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    {
      id: 1,
      name: 'Best Sellers',
      icon: <TrendingUp className="w-6 h-6" />,
      href: '#bestsellers'
    },
    {
      id: 2,
      name: 'New Arrivals',
      icon: <Package className="w-6 h-6" />,
      href: '#newarrivals'
    },
    {
      id: 3,
      name: 'Express Shipping',
      icon: <Truck className="w-6 h-6" />,
      href: '#express'
    },
    {
      id: 4,
      name: 'Sale',
      icon: <Tag className="w-6 h-6" />,
      href: '#sale'
    },
    {
      id: 5,
      name: 'Home Hacks',
      icon: <Home className="w-6 h-6" />,
      href: '#homehacks'
    },
    {
      id: 6,
      name: 'June Top',
      icon: <Crown className="w-6 h-6" />,
      href: '#junetop'
    },
    {
      id: 7,
      name: 'Bottles & Sippers',
      icon: <Coffee className="w-6 h-6" />,
      href: '#bottles'
    },
    {
      id: 8,
      name: 'Storage & Organizers',
      icon: <FolderOpen className="w-6 h-6" />,
      href: '#storage'
    }
  ];

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Categories Grid */}
        <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8">
            {categories.map((category, index) => (
              <div key={category.id} className="relative group">
                {/* Category Link */}
                <a
                  href={category.href}
                  className="flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 text-center transition-all duration-300 hover:bg-gradient-to-br hover:from-[#ED3237]/5 hover:to-[#133FAD]/5 min-h-[120px] sm:min-h-[140px] lg:min-h-[160px]"
                  onMouseEnter={() => setHoveredCategory(category.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  {/* Icon Container */}
                  <div className="relative mb-3 sm:mb-4">
                    <div className={`absolute inset-0 bg-gradient-to-br from-[#ED3237] to-[#133FAD] rounded-full blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300 transform scale-110`}></div>
                    <div className={`relative p-3 sm:p-4 rounded-full transition-all duration-300 transform group-hover:scale-110 ${
                      hoveredCategory === category.id 
                        ? 'bg-gradient-to-br from-[#ED3237] to-[#133FAD] text-white shadow-lg' 
                        : 'bg-gradient-to-br from-[#ED3237] to-[#133FAD] text-white group-hover:bg-gradient-to-br group-hover:from-[#ED3237]/10 group-hover:to-[#133FAD]/10'
                    }`}>
                      {category.icon}
                    </div>
                  </div>

                  {/* Category Name */}
                  <h3 className={`text-xs sm:text-sm lg:text-base font-semibold transition-all duration-300 leading-tight ${
                    hoveredCategory === category.id 
                      ? 'text-transparent bg-gradient-to-r from-[#ED3237] to-[#133FAD] bg-clip-text' 
                      : 'text-gray-700 group-hover:text-gray-900'
                  }`}>
                    {category.name}
                  </h3>

                  {/* Hover Effect Indicator */}
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#ED3237] to-[#133FAD] rounded-full transition-all duration-300 ${
                    hoveredCategory === category.id ? 'w-12 sm:w-16' : 'w-0'
                  }`}></div>
                </a>

                {/* Right Border - Hidden on last items per row */}
                <div className={`absolute top-2 right-0 bottom-2 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent ${
                  // Hide border on last item of each row
                  (index + 1) % 2 === 0 && index < 2 ? 'sm:block hidden' : // Mobile: hide on 2nd item in first row
                  (index + 1) % 4 === 0 && index < 4 ? 'lg:block sm:hidden' : // Tablet: hide on 4th item in first row  
                  (index + 1) % 8 === 0 ? 'hidden' : // Desktop: hide on 8th item
                  index === categories.length - 1 ? 'hidden' : // Always hide on last item
                  index === 1 ? 'sm:hidden' : // Hide after 2nd item on mobile
                  index === 3 ? 'lg:hidden sm:block' : // Hide after 4th item on tablet
                  'block'
                }`}></div>

                {/* Bottom Border for Mobile Rows */}
                <div className={`absolute bottom-0 left-2 right-2 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent sm:hidden ${
                  index < categories.length - 2 ? 'block' : 'hidden'
                }`}></div>

                {/* Bottom Border for Tablet Rows */}
                <div className={`absolute bottom-0 left-2 right-2 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent lg:hidden sm:block hidden ${
                  index < categories.length - 4 ? 'block' : 'hidden'
                }`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center mt-8 space-x-2">
          <div className="w-2 h-2 bg-[#ED3237] rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-[#133FAD] rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
          <div className="w-2 h-2 bg-[#ED3237] rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
        </div>
      </div>
    </div>
  );
};

export default CategoryShowcase;