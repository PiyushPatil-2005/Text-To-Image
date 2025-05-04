import React from 'react';
import { assets } from '../assets/assets';
import { useState } from 'react';
import { useContext } from'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';  // Add this import
import { toast } from 'react-toastify';

const App = () => {
  const navigate = useNavigate();  // Add this
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');

  const {generateImage} = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    if(!input) {
      toast.error('Please enter a description');
      setLoading(false);
      return;
    }
    
    if(input) {
      const image = await generateImage(input);
      if(image) {
        setImage(image);
        setIsImageLoaded(true);
        setLoading(false); 
      }
    }
    setLoading(false);
  }
  return (
    <form onSubmit={onSubmitHandler} action="" className='flex flex-col min-h-[90vh] justify-center items-center'>
      <div>
        <div className='relative'>
          <img src={image} alt="" className='max-w-sm' rounded/>
          <span className={`absolute bottom-0 left-0 h-1 bg-blue-500
            ${loading ? 'w-full transition-all duration-[10s]' : 'w-0'} `}/>
        </div>
        <p className={!loading? 'hidden' : ''}>Loading....</p>
      </div>

      {!isImageLoaded &&
      <div className='flex w-full max-w-xl bg-neutral-400 text-white text-sm p-0.5 mt-10 rounded-full'>
        <input onChange={ (e) => setInput(e.target.value)} value={input} type="text" placeholder='Describe what you want to generate' 
        className='flex-1 text-[18px] bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color'/>
        <button type='submit' className='bg-zinc-900 px-7 sm:px-16 py-3 rounded-full text-[18px]'>Generate</button>
      </div>
      }
      {isImageLoaded && 
      <div className='flex flex-wrap justify-center items-center gap-4 mt-6 text-[22px]'>
        <p onClick={() => setIsImageLoaded(false)} className='border-1 rounded-full py-1.5 px-3 cursor-pointer'>Generate Another</p>
        <a href={image} download className='border rounded-full py-1.5 px-3 bg-black text-white'>Download</a>
      </div>
      }
    </form>

  );
}

export default App;