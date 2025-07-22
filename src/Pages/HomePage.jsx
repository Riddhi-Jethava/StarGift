import React from 'react'
import CategoryShowcase from './../Components/HomePageComponent/CategoryShowcase';
import HeroSlider from './../Components/HomePageComponent/HeroSlider';
import AboutUs from './../Components/HomePageComponent/AboutUs';
import PopularGiftCategories from './../Components/HomePageComponent/PopularGiftCategories';
import WhyChooseUs from './../Components/HomePageComponent/WhyChooseUs';
import Banner from './../Components/HomePageComponent/Banner';
import BestSellers from './../Components/HomePageComponent/BestSellers';
import Banner2 from './../Components/HomePageComponent/Banner2';
import TestimonialComponent from './../Components/HomePageComponent/TestimonialComponent';


const HomePage = () => {
  return (
    <div>
      <HeroSlider />
      <CategoryShowcase />
      <Banner />
      <AboutUs />
      <PopularGiftCategories />
      <WhyChooseUs />
      <BestSellers />
      <Banner2 />
      <TestimonialComponent />
    </div>
  )
}

export default HomePage
