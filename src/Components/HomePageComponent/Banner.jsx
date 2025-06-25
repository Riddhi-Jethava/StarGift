import React from 'react'
import banner from '../../assets/HomeImg/banner2.jpg'

const Banner = () => {
  return (
    <div className='h-90 w-full overflow-hidden p-5'>
      <img src={banner} alt="" className='h-full w-[98%] object-center rounded-3xl mx-auto'/>
    </div>
  )
}

export default Banner
