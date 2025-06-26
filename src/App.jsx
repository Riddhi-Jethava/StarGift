import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import Header from './StaticComponents/Header';
import LuxuryFooter from './StaticComponents/LuxuryFooter';
import LeafFall from './StaticComponents/LeafFall';
import WhatsApp3DButton from './StaticComponents/WhatsApp3DButton';

const App = () => {
  return (
    <div>
      <Header />
      <WhatsApp3DButton />
      <LeafFall />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <LuxuryFooter />
    </div>
  )
}

export default App
