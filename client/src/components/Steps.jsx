import React from 'react';
import { stepsData } from '../assets/assets';

const Steps = () => {
  return (
    <div className='flex flex-col items-center justify-center my-13'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>How it works</h1>
        <p className='text-lg text-gray-600 mb-8'>Transforms Words Into Stunning Images</p>
        <div className='space-y-4 w-full max-w-3xl text-sm'>
            { stepsData.map((item, index) => (
                <div key={index} className='flex items-center gap-4 p-6 px-8 bg-white/50 shadow-md cursor-pointer hover:scale-103 transition-all duration-400 rounded-lg'>
                    <img src={item.icon} alt="" width={40}/>
                    <div>
                        <h2 className='text-xl font-medium'>{item.title}</h2>
                        <p className='text-[16px] text-gray-700'>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Steps;