import { useEffect, useState, useRef } from "react";
import { BiChevronDown, BiSearch } from "react-icons/bi";
import { LuLanguages } from "react-icons/lu";

const LanguageSelector = () => {
  const defaultLanguage = "English";
  const defaultLanguageCode = "en";
  
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef(null);
  const translateInitialized = useRef(false);

  // Expanded language list with common languages
  const languages = [
    { code: "en", name: "English" },
    { code: "hi", name: "Hindi" },
    { code: "mr", name: "Marathi" },
    { code: "gu", name: "Gujarati" },
    // { code: "fr", name: "French" },
    // { code: "de", name: "German" },
    // { code: "es", name: "Spanish" },
    // { code: "zh-CN", name: "Chinese (Simplified)" },
    // { code: "zh-TW", name: "Chinese (Traditional)" },
    // { code: "ja", name: "Japanese" },
    // { code: "ko", name: "Korean" },
    { code: "ar", name: "Arabic" },
    // { code: "ru", name: "Russian" },
    // { code: "pt", name: "Portuguese" },
    // { code: "it", name: "Italian" },
    // { code: "nl", name: "Dutch" },
    // { code: "pl", name: "Polish" },
    // { code: "tr", name: "Turkish" },
    // { code: "sv", name: "Swedish" },
    // { code: "th", name: "Thai" },
    // { code: "uk", name: "Ukrainian" },
    // { code: "vi", name: "Vietnamese" },
    // { code: "bn", name: "Bengali" },
    // { code: "ta", name: "Tamil" },
    // { code: "te", name: "Telugu" },
    // { code: "ml", name: "Malayalam" },
    // { code: "kn", name: "Kannada" },
    // { code: "pa", name: "Punjabi" },
    // { code: "ur", name: "Urdu" },
    // { code: "fa", name: "Persian" },
    // { code: "he", name: "Hebrew" },
    // { code: "id", name: "Indonesian" },
    // { code: "ms", name: "Malay" },
    // { code: "fil", name: "Filipino" },
    // { code: "el", name: "Greek" },
    // { code: "hu", name: "Hungarian" },
    // { code: "cs", name: "Czech" },
    // { code: "ro", name: "Romanian" },
    // { code: "da", name: "Danish" },
    // { code: "fi", name: "Finnish" },
    // { code: "no", name: "Norwegian" },
  ];

  // Filtered languages based on search query
  const filteredLanguages = languages.filter(lang => 
    lang.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    // Focus search input when dropdown opens
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    // Clear Google Translate cookies on page load
    const clearTranslateCookies = () => {
      const cookieNames = ['googtrans', '_ga', '_gid', 'googtrans'];
      cookieNames.forEach(name => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname};`;
      });
      
      // Clear localStorage items that might store Google Translate preferences
      localStorage.removeItem('googtrans');
      sessionStorage.removeItem('googtrans');
    };

    // Clear translate cookies on initial page load
    clearTranslateCookies();

    // Function to reset any existing translations
    const resetPageTranslation = () => {
      // Try to find and remove translation elements
      const elements = document.querySelectorAll('[lang]');
      elements.forEach(el => {
        if (el.getAttribute('lang') !== 'en') {
          el.removeAttribute('lang');
        }
      });
      
      // Reset any translate attributes
      document.querySelectorAll('[translate]').forEach(el => {
        el.removeAttribute('translate');
      });

      // Force whole document to English
      document.documentElement.lang = 'en';
    };

    // Reset page translation before initializing Google Translate
    resetPageTranslation();

    const addGoogleTranslateScript = () => {
      if (!document.querySelector("#google-translate-script")) {
        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.src =
          "https://translate.google.com/translate_a/element.js?cb=googleTranslateInit";
        script.async = true;
        document.body.appendChild(script);
      }
    };

    window.googleTranslateInit = () => {
      // Only initialize once to prevent duplicate instances
      if (translateInitialized.current) return;
      
      new window.google.translate.TranslateElement(
        { 
          pageLanguage: "en", 
          autoDisplay: false,
          includedLanguages: languages.map(l => l.code).join(',')
        },
        "google_translate_element"
      );
      
      translateInitialized.current = true;
      
      // Apply fixes after Google Translate initializes
      setTimeout(() => {
        removeGoogleTranslatePopups();
        forceDefaultLanguage();
      }, 1000);
    };

    const forceDefaultLanguage = () => {
      // Find the Google Translate dropdown
      const selectEl = document.querySelector(".goog-te-combo");
      if (selectEl) {
        // First, check if we're already in default language
        if (selectEl.value !== defaultLanguageCode) {
          // Set to default language code and dispatch change event
          selectEl.value = defaultLanguageCode;
          selectEl.dispatchEvent(new Event("change"));
          setSelectedLanguage(defaultLanguage);
          
          // Additional forceful reset
          setTimeout(() => {
            // Try more direct DOM manipulation if needed
            document.querySelectorAll("[lang]").forEach(el => {
              el.removeAttribute("lang");
            });
            
            // Reset any translation attributes
            document.body.classList.remove("translated-ltr", "translated-rtl");
            document.body.style.top = "0px";
          }, 500);
        } else {
          // Already default, ensure UI is consistent
          setSelectedLanguage(defaultLanguage);
          document.body.style.top = "0px";
        }
      }
    };

    const removeGoogleTranslatePopups = () => {
      // CSS to hide Google Translate elements but keep functionality
      const css = `
        /* Hide the top banner completely */
        .goog-te-banner-frame,
        .skiptranslate {
          display: none !important;
          visibility: hidden !important;
        }
        
        /* Fix body position that Google Translate shifts */
        body {
          top: 0 !important;
          position: static !important;
        }
        
        /* Hide tooltips and popups */
        .goog-tooltip, 
        .goog-tooltip:hover,
        #goog-gt-tt,
        .goog-te-balloon-frame {
          display: none !important;
          visibility: hidden !important;
        }
        
        /* Remove highlight effect on translated text */
        .goog-text-highlight {
          background: none !important;
          border: none !important;
          box-shadow: none !important;
        }
        
        /* Hide Google branding but keep translation working */
        .goog-logo-link, 
        .goog-logo-link:link, 
        .goog-logo-link:visited, 
        .goog-logo-link:hover, 
        .goog-logo-link:active {
          display: none !important;
        }
        
        /* Hide extra elements but keep translation functionality */
        .goog-te-gadget {
          height: 0px !important;
          overflow: hidden !important;
        }
        
        /* Keep essential elements for translation to work */
        .goog-te-menu-frame {
          box-shadow: none !important;
        }
      `;

      // Create or update style element
      let style = document.getElementById("google-translate-style-fixes");
      if (!style) {
        style = document.createElement("style");
        style.id = "google-translate-style-fixes";
        document.head.appendChild(style);
      }
      style.innerHTML = css;

      // Remove the banner frame
      const removeTopBanner = () => {
        const bannerFrame = document.querySelector(".goog-te-banner-frame");
        if (bannerFrame) {
          bannerFrame.remove();
        }
        
        // Force body position to stay at top
        if (document.body.style.top && document.body.style.top !== "0px") {
          document.body.style.top = "0px";
        }
        
        // Remove tooltips
        document.querySelectorAll(".goog-tooltip").forEach(el => el.remove());
      };

      // Run repeatedly to ensure elements stay removed
      const intervalId = setInterval(removeTopBanner, 300);

      // Use MutationObserver to watch for tooltips and banners
      const observer = new MutationObserver(() => {
        removeTopBanner();
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class']
      });

      return () => {
        clearInterval(intervalId);
        observer.disconnect();
      };
    };

    // Add script with slight delay after cookie clearing
    setTimeout(addGoogleTranslateScript, 1000);
    
    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (!event.target.closest('.language-selector-container')) {
        setIsOpen(false);
        setSearchQuery("");
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const changeLanguage = (langCode, langName) => {
    setSelectedLanguage(langName);
    setIsOpen(false);
    setSearchQuery("");

    // Find and trigger the Google Translate dropdown
    const selectEl = document.querySelector(".goog-te-combo");
    if (selectEl) {
      selectEl.value = langCode;
      selectEl.dispatchEvent(new Event("change"));
      
      // Extra cleanup after language change
      setTimeout(() => {
        // Remove top banner and force body position
        const bannerFrame = document.querySelector(".goog-te-banner-frame");
        if (bannerFrame) bannerFrame.remove();
        document.body.style.top = "0px";
        
        // Remove tooltips
        document.querySelectorAll(".goog-tooltip").forEach(el => el.remove());
      }, 1000);
    }
  };


  return (
    <div className="relative language-selector-container">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-[#001941] to-slate-400 px-6 py-2 rounded-full text-white cursor-pointer transition flex justify-between items-center hover:from-[#ED3237]/60 hover:to-[#133FAD]/60 hover:border-[#ED3237]/20"
      >
       <span className="hidden md:flex items-center gap-3" > Select </span> <LuLanguages/> <BiChevronDown size={22} />
      </button>
  
      {/* Dropdown List */}
      {isOpen && (
        <div className=" absolute z-100 mt-2 w-[250px] bg-white/50 rounded-xl animate-in slide-in-from-top-2 duration-200 shadow-2xl border border-gray-800 backdrop-blur-xl  overflow-hidden  max-h-[320px] flex flex-col right-0 ">
          {/* Search Bar */}
          <div className="p-2  sticky top-0 bg-white/0 backdrop-blur-2xl">
            <div className="relative">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search language..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-2 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-[#ED3237] text-gray-600"
              />
              <BiSearch className="absolute left-2 top-3 text-gray-600" size={18} />
            </div>
          </div>
          
          {/* Language List */}
          <div className="overflow-y-auto flex-grow ">
            {filteredLanguages.length > 0 ? (
              filteredLanguages.map((lang) => (
                <div
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code, lang.name)}
                  className="px-4 py-2 hover:text-white hover:bg-gradient-to-r hover:from-[#ED3237] hover:to-[#133FAD]  backdrop-blur-3xl text-gray-700 cursor-pointer transition"
                >
                  {lang.name}
                </div>
              ))
            ) : (
              <div className="px-4 py-2 text-gray-500 italic">No languages found</div>
            )}
          </div>
        </div>
      )}
  
      {/* Hidden Google Translate Widget */}
      <div id="google_translate_element" className="hidden"></div>
    </div>
  );
};

export default LanguageSelector;

//  <div className="relative">
//           <button
//             onClick={() => setIsLangOpen(!isLangOpen)}
//             className="flex items-center space-x-2 bg-gradient-to-r from-gray-50 to-white border border-gray-200 px-2 sm:px-4 py-2 sm:py-2.5 rounded-full hover:from-[#ED3237]/10 hover:to-[#133FAD]/10 hover:border-[#ED3237]/20 transition-all duration-300 shadow-sm hover:shadow-md group"
//           >
//             <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 group-hover:text-[#ED3237] transition-colors duration-300" />
//             <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-[#ED3237] transition-colors duration-300">EN</span>
//             <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 text-gray-500 group-hover:text-[#133FAD] transition-all duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
//           </button>

//           {/* Language Dropdown */}
//           {isLangOpen && (
//             <div className="absolute top-full right-0 mt-2 w-40 sm:w-48 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-in slide-in-from-top-2 duration-200 z-50">
//               <div className="p-1">
//                 {languages.map((lang, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => setIsLangOpen(false)}
//                     className="w-full flex items-center space-x-2 sm:space-x-3 px-2 sm:px-3 py-2 sm:py-2.5 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-[#ED3237] hover:to-[#133FAD] rounded-lg transition-all duration-300 group/lang"
//                   >
//                     <span className="text-sm sm:text-lg">{lang.flag}</span>
//                     <div className="flex flex-col items-start">
//                       <span className="font-medium text-xs sm:text-sm">{lang.code}</span>
//                       <span className="text-xs opacity-60 group-hover/lang:opacity-80 hidden sm:block">{lang.name}</span>
//                     </div>
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>