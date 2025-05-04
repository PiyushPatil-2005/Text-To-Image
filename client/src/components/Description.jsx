import React from 'react';
import { assets } from '../assets/assets';
const Description = () => {
  return (
    <div className='flex flex-col items-center justify-center my-26 p-6 md:px-28'>
        <h1 className='text-3xl smLtext-4xl font-semibold mb-2'>Create AI Images</h1>
        <p className='text-gray-500 mb-8'>Turn you imagination into visuals</p>

        <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
            <img src={assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-lg' />
            <div>
                <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the AI-Powered text to Image Generator</h2>
                <p className='text-gray-600 mb-4'>
                    Easily Bring your ideas to life with our free AI image generator. 
                    wheter you need stunning visuals or unique imagery, our tool transforms 
                    your text into eye-catching images with just a few clicks. Imagine 
                    it describe it, and watch it come to life instantly
                </p>
                <p className='text-gray-600 mb-4'>
                    Explore endless possibilities and unlock your creativity with our powerful AI technology. 
                    From concept to creation, our image generator makes the design process simple and fun. 
                    No design skills needed — just type what you imagine and let the magic unfold before your eyes.
                </p>
            </div>
        </div>
    
    </div>
  );
}

export default Description;