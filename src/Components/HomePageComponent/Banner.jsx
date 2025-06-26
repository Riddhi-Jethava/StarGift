import React from 'react'
import banner from '../../assets/HomeImg/banner2.jpg'

const Banner = () => {
  return (
    <div  data-aos="zoom-in-up" className='h-50 md:h-110 bg-gradient-to-br from-gray-50 via-white to-gray-100 w-full overflow-hidden py-8 md:py-12 px-10'>
      <img src={banner} alt="" className='h-full w-[98%] object-center rounded-3xl mx-auto'/>
    </div>
  )
}

export default Banner
