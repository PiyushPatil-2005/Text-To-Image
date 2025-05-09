import React from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { useNavigate} from 'react-router-dom';
import { useContext } from 'react';

const GenerateBegin = () => {

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
    <div className='pb-16 text-center'>
      <h1 className='text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold py-6 md:py-16'>See the magic. Try Now</h1>
      
      <button onClick={onClickHandler} className='inline-flex items-center gap-2 px-12 py-3 rounded-full bg-black text-white m-auto hover:scale-110 transition-all duration-500 cursor-pointer'>Generate Images
        <img src={assets.star_group} alt="" className='h-6'/>
      </button>
    </div>
  );
};

export default GenerateBegin;