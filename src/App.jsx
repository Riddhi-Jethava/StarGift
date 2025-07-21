import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import Header from './StaticComponents/Header';
import LuxuryFooter from './StaticComponents/LuxuryFooter';
import LeafFall from './StaticComponents/LeafFall';
import WhatsApp3DButton from './StaticComponents/WhatsApp3DButton';
import AboutPage from './Pages/AboutPage';
import GalleryPage from './Pages/GalleryPage';
import EBrochurePage from './Pages/EBrochurePage';
import ContactPage from './Pages/ContactPage';
import ProductsPage from './Pages/ProductsPage';

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false,     // whether animation should happen only once
    });
  }, []);

  return (
    <div>
      <Header />
      <WhatsApp3DButton />
      {/* <LeafFall /> */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/brochure' element={<EBrochurePage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
      <LuxuryFooter />
    </div>
  )
}

export default App
