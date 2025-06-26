import React from 'react'
import banner from '../../assets/HomeImg/banner.jpg'


const Banner2 = () => {
  return (
    <div className='h-120 bg-gradient-to-br from-gray-50 via-white to-gray-100 w-full overflow-hidden py-12 px-10'>
      <img src={banner} alt="" className='h-full w-[98%] object-center rounded-3xl mx-auto'/>
    </div>
  )
}

export default Banner2
