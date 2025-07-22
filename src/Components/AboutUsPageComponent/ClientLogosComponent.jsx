import React, { useState, useEffect } from 'react';
import { 
  Users,
  Star,
  Crown,
  Zap,
  Award,
  Shield,
  Building2,
  Handshake,
  Sparkles
} from 'lucide-react';
import logo1 from '../../assets/AboutImg/logo (1).jpeg'
import logo2 from '../../assets/AboutImg/logo (1).jpg'
import logo3 from '../../assets/AboutImg/logo (1).png'
import logo4 from '../../assets/AboutImg/logo (2).jpg'
import logo5 from '../../assets/AboutImg/logo (2).png'
import logo6 from '../../assets/AboutImg/logo (3).jpg'
import logo7 from '../../assets/AboutImg/logo (3).png'
import logo8 from '../../assets/AboutImg/logo (4).png'

const ClientsLogoComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredLogo, setHoveredLogo] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Sample client logos with company details and image URLs
  const clientLogos = [
    {
      id: 1,
      name: "TechCorp Solutions",
      category: "Technology",
      logo: logo1,
      color: "from-blue-500 to-blue-700"
    },
    {
      id: 2,
      name: "Global Industries",
      category: "Manufacturing",
      logo: logo2,
      color: "from-green-500 to-green-700"
    },
    {
      id: 3,
      name: "Premier Bank",
      category: "Banking",
      logo: logo3,
      color: "from-purple-500 to-purple-700"
    },
    {
      id: 4,
      name: "Sports Academy",
      category: "Sports",
      logo: logo4,
      color: "from-orange-500 to-orange-700"
    },
    {
      id: 5,
      name: "Education Plus",
      category: "Education",
      logo: logo5,
      color: "from-teal-500 to-teal-700"
    },
    {
      id: 6,
      name: "Healthcare Group",
      category: "Healthcare",
      logo: logo6,
      color: "from-pink-500 to-pink-700"
    },
    {
      id: 7,
      name: "Auto Motors",
      category: "Automotive",
      logo: logo7,
      color: "from-indigo-500 to-indigo-700"
    },
    {
      id: 8,
      name: "Retail Chain",
      category: "Retail",
      logo: logo8,
      color: "from-yellow-500 to-yellow-700"
    }
  ];

  const testimonials = [
    {
      text: "Outstanding quality and craftsmanship",
      author: "TechCorp Solutions"
    },
    {
      text: "Exceeded our expectations completely",
      author: "Global Industries"
    },
    {
      text: "Premium service and timely delivery",
      author: "Premier Bank"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#ED3237]/5 to-[#133FAD]/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-[#133FAD]/5 to-[#ED3237]/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="max-w-7xl mx-auto relative">
        
        {/* Centered Header Section */}
        <div className={`text-center mb-10 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
        }`}>
          <div data-aos="zoom-in-up" className="relative inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#133FAD]/10 to-[#ED3237]/10 rounded-full border border-[#133FAD]/20 mb-6">
            <Sparkles className="w-5 h-5 text-[#6787d7]" />
            <span className="text-sm font-semibold text-[#6787d7] tracking-wider uppercase">Our Partners</span>
          </div>
          <h2 data-aos="zoom-in-up" className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-black/90 via-[#133FAD] to-[#ED3237] bg-clip-text text-transparent">
              Our Valued Clients
            </span>
          </h2>
          <p data-aos="zoom-in-up" className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by leading organizations worldwide, 7 Star Gifts has been crafting premium metal gifts and awards for distinguished clients across various industries.
          </p>
        </div>

        {/* Clients Logo Showcase */}
        <div className={`relative mb-8 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}>
          
          {/* Main Logo Container */}
          <div className="rounded-3xl p-8 relative overflow-hidden">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#ED3237]/10 to-[#133FAD]/10"></div>
              <div className="absolute top-10 right-10 w-40 h-40 border border-[#ED3237]/20 rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-32 h-32 border border-[#133FAD]/20 rounded-full"></div>
            </div>

            {/* Logo Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 relative">
              {clientLogos.map((client) => (
                <div
                  key={client.id}
                  className="relative group cursor-pointer transform transition-all duration-500 hover:scale-110"
                  onMouseEnter={() => setHoveredLogo(client.id)}
                  onMouseLeave={() => setHoveredLogo(null)}
                >
                  {/* Logo Container */}
                  <div className={`relative bg-white overflow-hidden rounded-md shadow-lg border border-gray-200 p-6 h-32 flex flex-col items-center justify-center transition-all duration-500 group-hover:shadow-md ${
                    hoveredLogo === client.id ? 'border-[#ED3237]/30' : ''
                  }`}>
                    
                    {/* Logo Image */}
                    <img
                      src={client.logo}
                      alt={client.name}
                      className={`w-40  object-cover rounded-lg mb-3 transition-all duration-500 transform group-hover:scale-110 ${
                        hoveredLogo === client.id ? 'shadow-lg' : ''
                      }`}
                    />
                    
                    {/* Company Name */}
                    {/* <div className="text-center">
                      <div className={`text-sm font-semibold transition-all duration-300 ${
                        hoveredLogo === client.id 
                          ? 'text-transparent bg-gradient-to-r from-[#ED3237] to-[#133FAD] bg-clip-text' 
                          : 'text-gray-800'
                      }`}>
                        {client.name}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{client.category}</div>
                    </div> */}

                    {/* Hover Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-[#ED3237]/5 to-[#133FAD]/5 rounded-2xl opacity-0 transition-opacity duration-300 ${
                      hoveredLogo === client.id ? 'opacity-100' : ''
                    }`}></div>

                    {/* Corner Sparkle */}
                    <div className={`absolute top-2 right-2 transition-all duration-300 ${
                      hoveredLogo === client.id ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                    }`}>
                      <Sparkles className="w-4 h-4 text-[#ED3237]" />
                    </div>
                  </div>

                  {/* Tooltip */}
                  <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-xs font-medium transition-all duration-300 whitespace-nowrap ${
                    hoveredLogo === client.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}>
                    {client.category} Partner
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Client Testimonials */}
        <div className={`transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-gradient-to-br from-[#ED3237] to-[#133FAD] rounded-full flex-shrink-0">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium mb-2">"{testimonial.text}"</p>
                    <p className="text-sm text-gray-500">- {testimonial.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsLogoComponent;