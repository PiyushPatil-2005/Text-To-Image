import React from 'react';
import { assets } from '../assets/assets';
import { motion } from "motion/react"
import { useContext } from'react';
import { AppContext } from '../context/AppContext';
import { useNavigate} from 'react-router-dom';
 
const Header = () => {
    const {user, setShowLogin} = useContext(AppContext);
    const navigate = useNavigate();
    const onClickHandler = () => {
        if(user) {
            navigate('/result');
        } else {
            setShowLogin(true);
        }
    }

  return (
    <motion.div className='flex flex-col justify-center items-center text-center my-20' 
    initial={{opacity:0.2, y:100}} 
    transition={{duration:1}} 
    whileInView={{opacity: 1, y:0}}>
       <motion.div 
        initial={{opacity:0, y:-20}} 
        animate={{opacity: 1, y:0}}
        transition={{delay: 0.2, duration:1}} className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'>
            <p>Best text to image generator</p>
            <img src={assets.star_icon} alt="" />
        </motion.div>
        <h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'>
            Turn text to <span className='text-blue-600'>image,</span> in seconds.</h1>
        <p className='text-center max-w-xl mx-autoo mt-5'>Unleash your creativity with AI. Turn your imagination into visual art in seconds - just type, and watch the magic happen.</p>
        <motion.button onClick={onClickHandler}  className=' sm:text-lg text-white bg-black/75 w-auto mt-8 px-12 py-2.5 flex items-center gap-3 rounded-full cursor-pointer'
            whileHover={{scale: 1.05}}
            whileTap={{scale:0.95}} >
            Generate Images
            <img className='h-7' src={assets.star_group} alt="" />
        </motion.button>
        <div className='flex flex-wrap justify-center mt-16 gap-3'>
            {Array(5).fill('').map((item, index)=> (
                <img 
                    className='rounded hover:scale-110 transition-left duration-300 cursor-pointer max-sm:w-10'
                    src={
                        index === 1 ? assets.header_img_1
                        : index === 2 ? assets.sample_img_2
                        : index === 3 ? assets.header_img_2
                        : index === 4 ? assets.header_img_3
                        : assets.sample_img_1  // default case
                    }
                    alt="" 
                    key={index} 
                    width={70}
                />
            ))}
        </div>
        <p className='text-xl tet-neutral-600 mt-4 font'>Generated Images from imagify</p>
    </motion.div>
  );
};

export default Header