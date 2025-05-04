import React from 'react';
import Header from '../components/Header';
import Steps from '../components/Steps';
import Description from '../components/Description';
import Testimonials from '../components/Testimonials';
import GenerateBegin from '../components/GenerateBegin';

const App = () => {
  return (
      <div className='relative w-full'>
        <div>
          <Header />
          <Steps />
          <Description />
          <Testimonials />
          <GenerateBegin />
        </div>
      </div>
  );
}

export default App;