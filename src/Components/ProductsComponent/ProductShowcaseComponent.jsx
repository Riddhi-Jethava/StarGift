import React, { useState, useEffect } from 'react';
import { 
  Trophy, Award, Star, Crown, Medal, Shield, Gift, 
  ChevronRight, ArrowLeft, Eye, Package, Ruler, 
  Weight, Tag, Sparkles, Layers, Zap 
} from 'lucide-react';
import main1 from '../../assets/ProductImg/Trophy.png'
import sub1 from '../../assets/ProductImg/trophy.webp'
import sub2 from '../../assets/ProductImg/trophy2.webp'
import main2 from '../../assets/ProductImg/table1.webp'
import sub3 from '../../assets/ProductImg/table2.webp'
import main3 from '../../assets/ProductImg/giftset.webp'
import main4 from '../../assets/ProductImg/keychain.png'

const ProductShowcase = () => {
  const [currentView, setCurrentView] = useState('categories'); // 'categories', 'products', 'details'
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeTab, setActiveTab] = useState('specification');
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Demo categories data
  const categories = [
    {
      id: 1,
      name: "Premium Trophies",
      icon: Trophy,
      image: main1,
      gradient: "from-yellow-400 to-orange-500",
      products: [
        {
          id: 101,
          name: "Golden Excellence Trophy",
          image: sub1,
          description: "A magnificent golden trophy crafted with precision, representing the pinnacle of achievement. This stunning piece features intricate detailing and premium materials, making it the perfect recognition for outstanding performance.",
          specifications: {
            name: "Golden Excellence Trophy",
            categories: "Premium Trophy",
            weight: "1.2 KG",
            dimensions: "15 × 10 × 25 cm"
          },
          materials: "Premium brass with gold plating, marble base with velvet finish"
        },
        {
          id: 102,
          name: "Crystal Victory Cup",
          image: sub2,
          description: "An elegant crystal trophy that captures light beautifully, symbolizing clarity of purpose and achievement. Hand-crafted with attention to detail, this trophy represents excellence in its purest form.",
          specifications: {
            name: "Crystal Victory Cup",
            categories: "Crystal Trophy",
            weight: "800 GM",
            dimensions: "12 × 12 × 22 cm"
          },
          materials: "Premium crystal glass with precision cut design, silver-plated accents"
        }
      ]
    },
    {
      id: 2,
      name: "Table Top",
      icon: Award,
      image: main2,
      gradient: "from-blue-400 to-cyan-500",
      products: [
        {
          id: 201,
          name: "Executive Recognition Plaque",
          image: sub3,
          description: "A sophisticated recognition plaque designed for corporate excellence. Features premium materials and customizable engraving options for personalized recognition of outstanding achievements.",
          specifications: {
            name: "Executive Recognition Plaque",
            categories: "Corporate Award",
            weight: "600 GM",
            dimensions: "20 × 15 × 3 cm"
          },
          materials: "Premium wood with brass plate, velvet backing and protective coating"
        }
      ]
    },
    {
      id: 3,
      name: "Gift Set",
      icon: Medal,
      image: main3,
      gradient: "from-green-400 to-emerald-500",
      products: [
        {
          id: 301,
          name: "Champion Gold Medal",
          image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=600&fit=crop",
          description: "A prestigious gold medal designed for champions. Features intricate embossing and premium ribbon, perfect for sporting events and competitions of the highest caliber.",
          specifications: {
            name: "Champion Gold Medal",
            categories: "Sports Medal",
            weight: "150 GM",
            dimensions: "6 × 6 × 0.5 cm"
          },
          materials: "Gold-plated brass with silk ribbon and custom embossing"
        }
      ]
    },
    {
      id: 4,
      name: "Key Chians",
      icon: Crown,
      image: main4,
      gradient: "from-purple-400 to-pink-500",
      products: [
        {
          id: 401,
          name: "Royal Crown Replica",
          image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=600&fit=crop",
          description: "An exquisite replica of royal crown craftsmanship. This luxurious piece showcases intricate detailing and premium materials, perfect as a statement gift or display piece.",
          specifications: {
            name: "Royal Crown Replica",
            categories: "Luxury Gift",
            weight: "2.5 KG",
            dimensions: "18 × 18 × 20 cm"
          },
          materials: "Premium metal alloy with gold plating, synthetic gemstones, velvet display case"
        }
      ]
    }
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentView('products');
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setCurrentView('details');
  };

  const handleBack = () => {
    if (currentView === 'details') {
      setCurrentView('products');
    } else if (currentView === 'products') {
      setCurrentView('categories');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-[#ED3237]/20 via-[#133FAD]/15 to-transparent rounded-full blur-3xl animate-pulse opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-[#133FAD]/20 via-[#ED3237]/15 to-transparent rounded-full blur-3xl animate-pulse delay-1000 opacity-30"></div>
      
      {/* Interactive Light Trail */}
      <div
        className="absolute w-96 h-96 bg-gradient-radial from-[#133FAD]/15 via-[#ED3237]/10 to-transparent rounded-full blur-2xl transition-all duration-300 opacity-60"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
        }`}>
          <div className="relative inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#133FAD]/10 to-[#ED3237]/10 rounded-full border border-[#133FAD]/20 mb-6">
            <Sparkles className="w-5 h-5 text-[#6787d7] animate-spin-slow" />
            <span className="text-sm font-semibold text-[#6787d7] tracking-wider uppercase">Product Showcase</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-black/90 via-[#133FAD] to-[#ED3237] bg-clip-text text-transparent">
              Premium Collection
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our exquisite range of awards, trophies, and luxury gifts crafted with precision and elegance.
          </p>
        </div>

        {/* Navigation Breadcrumb */}
        {currentView !== 'categories' && (
          <div className="mb-8">
            <button
              onClick={handleBack}
              className="flex items-center space-x-2 cursor-pointer px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full hover:bg-gradient-to-r hover:from-gray-700 to-gray-500 hover:text-white transition-all duration-300 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:translate-x-[-4px] transition-transform duration-300" />
              <span>Back</span>
            </button>
          </div>
        )}

        {/* Categories View */}
        {currentView === 'categories' && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.id}
                  className={`group cursor-pointer transform transition-all duration-700 hover:scale-105 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  onClick={() => handleCategoryClick(category)}
                >
                  <div className="relative">
                    {/* Card Container */}
                    <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-md border border-gray-200/50 overflow-hidden group-hover:shadow-md group-hover:shadow-gray-500/20 transition-all duration-500">
                      {/* Image */}
                      <div className="relative h-80 overflow-hidden">
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-auto mx-auto h-full object-contain transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#ED3237]/20 via-transparent to-[#133FAD]/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                        
                        {/* Sparkle Effects */}
                        <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-4 left-4 w-1 h-1 bg-white rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl text-center font-bold text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#ED3237] group-hover:to-[#133FAD] group-hover:bg-clip-text transition-all duration-300">
                            {category.name}
                          </h3>
                          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#ED3237] transform group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                        {/* <p className="text-gray-600 text-sm mt-2 group-hover:text-gray-700 transition-colors duration-300">
                          {category.products.length} Product{category.products.length !== 1 ? 's' : ''} Available
                        </p> */}
                      </div>

                      {/* Hover Border Effect */}
                      <div className="absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-[#ED3237] group-hover:to-[#133FAD] rounded-3xl transition-all duration-500"></div>
                    </div>

                    {/* Floating Elements */}
                    {/* <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-br from-[#ED3237] to-[#133FAD] rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-300"></div>
                    <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-gradient-to-br from-[#133FAD] to-[#ED3237] rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div> */}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Products View */}
        {currentView === 'products' && selectedCategory && (
          <div>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#ED3237] to-[#133FAD] bg-clip-text text-transparent">
                  {selectedCategory.name}
                </span>
              </h2>
              <p className="text-gray-600">Choose from our premium collection</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
              {selectedCategory.products.map((product, index) => (
                <div
                  key={product.id}
                  className={`group cursor-pointer transform transition-all duration-700 hover:scale-105 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div onClick={() => handleProductClick(product)} className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200/50 overflow-hidden group-hover:shadow-2xl group-hover:shadow-[#ED3237]/20 transition-all duration-500">
                    {/* Image */}
                    <div className="relative h-66 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-auto mx-auto h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#ED3237]/10 via-transparent to-[#133FAD]/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-center text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#ED3237] group-hover:to-[#133FAD] group-hover:bg-clip-text transition-all duration-300">
                        {product.name}
                      </h3>
                      {/* <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                        {product.description}
                      </p> */}
                      
                      <button
                        // onClick={() => handleProductClick(product)}
                        className="w-full px-6 py-3 bg-gradient-to-r from-[#ED3237] via-[#133FAD] to-[#ED3237] bg-size-200 bg-pos-0 hover:bg-pos-100 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-[#ED3237]/30 transform hover:scale-105 transition-all duration-500 flex items-center justify-center space-x-2 group/btn"
                      >
                        <Eye className="w-5 h-5 transform group-hover/btn:rotate-12 transition-transform duration-300" />
                        <span>View Details</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Product Details View */}
        {currentView === 'details' && selectedProduct && (
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Product Image */}
            <div className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}>
              <div className="relative group">
                {/* <div className="absolute -inset-4 bg-gradient-to-br from-[#ED3237]/20 to-[#133FAD]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div> */}
                <div className="relative bg-white rounded-3xl shadow-lg border border-gray-200/50 overflow-hidden">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ED3237]/5 via-transparent to-[#133FAD]/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  {/* Floating Sparkles */}
                  <div className="absolute top-6 left-6 w-3 h-3 bg-gradient-to-br from-[#ED3237] to-[#133FAD] rounded-full animate-pulse"></div>
                  <div className="absolute bottom-6 right-6 w-2 h-2 bg-gradient-to-br from-[#133FAD] to-[#ED3237] rounded-full animate-bounce"></div>
                </div>
              </div>
            </div>

            {/* Right Side - Product Info */}
            <div className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}>
              <div className="relative">
                {/* Product Name */}
                <h1 className="text-4xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-gray-700 to-gray-500 bg-clip-text text-transparent">
                    {selectedProduct.name}
                  </span>
                </h1>

                {/* Description */}
                <div className="bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-6 mb-8 shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center space-x-2">
                    <Package className="w-5 h-5 text-[#6787d7]" />
                    <span>Product Description</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedProduct.description}
                  </p>
                </div>

                {/* Tabs */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
                  {/* Tab Headers */}
                  <div className="flex border-b border-gray-200/50">
                    <button
                      className={`flex-1 px-6 py-4 font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                        activeTab === 'specification'
                          ? ' bg-gray-500  text-white'
                          : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                      }`}
                      onClick={() => setActiveTab('specification')}
                    >
                      <Zap className="w-4 h-4" />
                      <span>Specifications</span>
                    </button>
                    <button
                      className={`flex-1 px-6 py-4 font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                        activeTab === 'materials'
                          ? 'bg-gray-500 text-white'
                          : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                      }`}
                      onClick={() => setActiveTab('materials')}
                    >
                      <Layers className="w-4 h-4" />
                      <span>Materials</span>
                    </button>
                  </div>

                  {/* Tab Content */}
                  <div className="p-6">
                    {activeTab === 'specification' && (
                      <div className="space-y-4 animate-fade-in">
                        {[
                          { label: 'Name', value: selectedProduct.specifications.name, icon: Tag },
                          { label: 'Categories', value: selectedProduct.specifications.categories, icon: Package },
                          { label: 'Weight', value: selectedProduct.specifications.weight, icon: Weight },
                          { label: 'Dimensions', value: selectedProduct.specifications.dimensions, icon: Ruler }
                        ].map((spec, index) => {
                          const IconComponent = spec.icon;
                          return (
                            <div
                              key={index}
                              className="flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200/50 hover:shadow-md transition-all duration-300 group"
                            >
                              <div className="w-10 h-10 bg-gradient-to-br from-[#ED3237]/20 to-[#133FAD]/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <IconComponent className="w-5 h-5 text-[#6787d7]" />
                              </div>
                              <div className="flex-1">
                                <span className="text-sm font-medium text-gray-500">{spec.label}</span>
                                <p className="text-gray-800 font-semibold">{spec.value}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {activeTab === 'materials' && (
                      <div className="animate-fade-in">
                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200/50 p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#ED3237]/20 to-[#133FAD]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                              <Layers className="w-6 h-6 text-[#6787d7]" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-3">Material Composition</h4>
                              <p className="text-gray-700 leading-relaxed">{selectedProduct.materials}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
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
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        .bg-size-200 { background-size: 200% 100%; }
        .bg-pos-0 { background-position: 0% 50%; }
        .bg-pos-100 { background-position: 100% 50%; }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default ProductShowcase;