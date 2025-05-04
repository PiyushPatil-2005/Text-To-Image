import React from 'react';
import { testimonialsData } from '../assets/assets';
import { assets } from '../assets/assets';

const Testimonials = () => {
  return (
    <div className='flex flex-col items-center 
    justify-center my-20 py-8 '>
        <h1 className='text-3xl smLtext-4xl font-semibold mb-2'>Customer Testimonials</h1>
        <p className='text-xl text-gray-500 mb-12'>Our User Experience</p>
        
        <div className='flex flex-wrap gap-6'>
            {testimonialsData.map((testimonial, index) => (
                <div key={index} className='bg-white/40 p-8 rounded-lg shadow-md w-90 m-auto cursor-pointer hover:scale-[1.02] transition-all'>
                    <div className='flex flex-col items-center'>
                        <img src={testimonial.image} alt="" className='rounded-full w-30 h-30'/>
                        <h2 className='text-xl font-semibold mt-3'>{testimonial.name}</h2>
                        <p className='text-gray-500 mb-3'>{testimonial.role}</p>
                        <div className='flex mb-4'>
                            {Array(testimonial.stars).fill().map((item, index) => (
                                <img key={index} src={assets.rating_star} alt=""/>
                            ))}
                        </div>
                        <p className='text-center text-lg text-gray-600'>{testimonial.text}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Testimonials;