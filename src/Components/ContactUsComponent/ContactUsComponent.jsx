import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Award, Star, CheckCircle } from 'lucide-react';
import contact from '../../assets/ContactImg/contact.png'

const ContactUsComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setShowToast(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setShowToast(false), 3000);
      }, 2000);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      detail: "Rajkot-360022. Gujarat, India.",
      info: "Gondal Chowkdi",
      gradient: "from-[#ED3237] to-[#133FAD]"
    },
    {
      icon: Phone,
      title: "Hot Line",
      detail: "+91 96387 88466",
      info: "Call Us On",
      gradient: "from-[#133FAD] to-[#ED3237]"
    },
    {
      icon: Mail,
      title: "Email",
      detail: "7stargifts@gmail.com",
      info: "Drop a line",
      gradient: "from-[#ED3237] to-[#133FAD]"
    },
    {
      icon: Clock,
      title: "Office Hours",
      detail: "Mon - Sat: 9AM - 6PM",
      info: "Sunday: Closed",
      gradient: "from-[#133FAD] to-[#ED3237]"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-[#ED3237]/20 via-[#133FAD]/15 to-transparent rounded-full blur-3xl animate-pulse opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-[#133FAD]/20 via-[#ED3237]/15 to-transparent rounded-full blur-3xl animate-pulse delay-1000 opacity-30"></div>
      
      {/* Interactive Light Trail */}
      <div
        className="absolute w-96 h-96 bg-gradient-radial from-[#133FAD]/15 via-[#ED3237]/10 to-transparent rounded-full blur-2xl transition-all duration-300 opacity-40"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      ></div>

      {/* Header Section */}
      <div className={`text-center py-16 px-4 sm:px-6 lg:px-8 transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="relative inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#133FAD]/10 to-[#ED3237]/10 rounded-full border border-[#133FAD]/20 mb-6">
            <MessageCircle className="w-5 h-5 text-[#6787d7] animate-pulse" />
            <span className="text-sm font-semibold text-[#6787d7] tracking-wider uppercase">Contact Us</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-black/90 via-[#133FAD] to-[#ED3237] bg-clip-text text-transparent">
              Contact & Join Together
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Are you ready to grow faster business, have Any question about our offers or want your premium quality gifts.
          </p>
        </div>
      </div>

      {/* Contact Info Row - Horizontal Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 relative z-10">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          {contactInfo.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="group relative">
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200/50 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} shadow-lg group-hover:rotate-12 transition-all duration-300 mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#ED3237] group-hover:to-[#133FAD] group-hover:bg-clip-text transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="font-semibold text-gray-700 mb-1">{item.detail}</p>
                  <p className="text-gray-500 text-sm">{item.info}</p>
                </div>
                {/* Hover glow effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`}></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Contact Section - Left Chat Card, Center Image, Right Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 relative z-10">
        <div className={`flex justify-between gap-8 items-center transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          
          {/* Left Side - Chat Card */}
          <div className="w-80">
            <div className="relative">
              {/* Floating decoration */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-bounce opacity-70"></div>
              
              {/* Chat Card */}
              <div className="bg-gradient-to-br from-[#ED3237] to-[#133FAD] rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-white rounded-full"></div>
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">Chat With Us!</h3>
                  <p className="text-white/90 mb-2 font-medium">Speak to our friendly team.</p>
                  <p className="text-white/80 text-sm mb-6">
                    We are here to help. Feel free to get in touch via live online chat.
                  </p>
                  
                  <button className="bg-white text-[#ED3237] px-6 py-3 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2 group">
                    <span>LET'S CHAT</span>
                    <Send className="w-5 h-5 transform group-hover:translate-x-1 transition-all duration-300" />
                  </button>
                </div>

                {/* Floating elements */}
                <div className="absolute top-6 right-6 animate-float">
                  <Star className="w-6 h-6 text-yellow-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Center - Professional Image */}
          <div className="absolute left-1/4 flex justify-center">
            <div className="relative group">
              {/* Background decorative elements */}
              <div className="absolute -inset-8 bg-gradient-to-br from-[#ED3237]/10 to-[#133FAD]/10 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
              
              {/* Image container with professional styling */}
              <div className="relative">
                <img
                  src={contact}
                  alt="Contact Representative"
                  className="w-full max-w-md h-[600px] object-cover transform group-hover:scale-105 transition-all duration-500"
                />
            

                {/* Floating decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-[#ED3237] to-[#133FAD] rounded-full animate-bounce opacity-80"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse opacity-80"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-120">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200/50 p-8 relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#ED3237] to-[#133FAD]"></div>
              </div>

              {/* Form Header */}
              <div className="relative mb-6">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-2 h-2 bg-[#ED3237] rounded-full animate-pulse"></div>
                  <span className="text-xs font-semibold text-[#6787d7] tracking-wider uppercase">Send Message</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Get In Touch</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-[#ED3237] to-[#133FAD] rounded-full"></div>
              </div>

              {/* Form Fields */}
              <div className="space-y-4 relative">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ED3237] focus:border-transparent transition-all duration-300 bg-gray-50/50 text-sm"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ED3237] focus:border-transparent transition-all duration-300 bg-gray-50/50 text-sm"
                    placeholder="Your Email"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ED3237] focus:border-transparent transition-all duration-300 bg-gray-50/50 text-sm"
                    placeholder="Phone Number"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ED3237] focus:border-transparent transition-all duration-300 bg-gray-50/50 text-sm"
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ED3237] focus:border-transparent transition-all duration-300 bg-gray-50/50 resize-none text-sm"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 bg-gradient-to-r from-[#ED3237] to-[#133FAD] text-white font-bold text-sm rounded-xl shadow-xl hover:shadow-[#ED3237]/50 transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 flex items-center justify-center space-x-2 group relative overflow-hidden ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {/* Button shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  
                  {isSubmitting ? (
                    <>
                      <span>Sending...</span>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    </>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <Send className="w-4 h-4 transform group-hover:translate-x-1 transition-all duration-300" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Map Section */}
      <div className={`w-[80%] mx-auto rounded-3xl overflow-hidden mb-12 bg-white border-t border-gray-200/50 transform transition-all duration-1000 delay-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}>
        <div className="relative">
          {/* Map Header */}
          <div className="absolute top-8 left-8 z-20 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50 max-w-sm">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#ED3237] to-[#133FAD] rounded-xl flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Visit Our Office</h3>
                <p className="text-sm text-gray-600">7 Star Gifts</p>
              </div>
            </div>
            <p className="text-sm text-gray-700">Somnath Ind., area-5, Shiv Chowk Street, Nr. Sarvoday Fastner, opp. Krishna Park Hotel, Gondal Road, Rajkot-360022. Gujarat, India.</p>
            <div className="mt-4 flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>+91 96387 88466</span>
              </div>
            </div>
          </div>

          {/* Map Container */}
          <div className="h-96 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
            {/* Placeholder for actual map */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4 animate-bounce" />
                {/* <h3 className="text-xl font-semibold text-gray-600 mb-2">Interactive Map</h3>
                <p className="text-gray-500">Integrate with Google Maps API</p> */}
              </div>
            </div>
            
            {/* Map overlay effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#ED3237]/5 via-transparent to-[#133FAD]/5"></div>
            
            {/* Animated location markers */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="w-4 h-4 bg-[#ED3237] rounded-full animate-ping"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#133FAD] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Toast */}
      {showToast && (
        <div className="fixed top-4 right-4 bg-gradient-to-r from-[#ED3237] to-[#133FAD] text-white px-6 py-4 rounded-xl shadow-2xl z-50 animate-toast-in flex items-center space-x-3">
          <CheckCircle className="w-6 h-6" />
          <div>
            <p className="font-semibold">Message Sent Successfully!</p>
            <p className="text-sm opacity-90">We'll get back to you soon.</p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes toast-in {
          0% { transform: translateX(100%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        .animate-toast-in {
          animation: toast-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ContactUsComponent;