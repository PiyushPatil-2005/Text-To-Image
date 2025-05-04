import React from 'react';
import { Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home';
import Result from './pages/Result';
import BuyCredit from './pages/BuyCredit';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import { useContext } from 'react';
import { AppContext } from './context/AppContext';

const App = () => {
  const {showLogin} = useContext(AppContext);
  return (
      <div className='flex flex-col min-h-screen px-4 sm:px-10 mdLpx-14 lg:px-28 bg-gradient-to-b from-teal-50 to-orange-50'>
        <ToastContainer position='bottom-right'/>
        <Navbar />
        { showLogin && <Login /> }
        <main className='flex-grow'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/result' element={<Result/>} />
            <Route path='/buy' element={<BuyCredit/>} />
          </Routes>
        </main>
        <Footer />
      </div>
  );
}

export default App;