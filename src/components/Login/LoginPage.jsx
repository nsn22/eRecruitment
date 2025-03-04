import React, { useState, useEffect } from 'react';
import { assets } from '../../assets/assets';
import { motion } from 'framer-motion'; // Pastikan Anda mengimpor `motion` dari `framer-motion`

const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [slideAmount, setSlideAmount] = useState('0'); // Nilai geser default

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  // Fungsi untuk mengupdate nilai geser berdasarkan lebar layar
  useEffect(() => {
    const formSlideAmount = () => {
      if (window.innerWidth < 1000) { // Layar kecil (sm)
        setSlideAmount(isSignUp ? '0' : '0');
      } else if (window.innerWidth < 1280) { // Layar medium (md)
        setSlideAmount(isSignUp ? '113%' : '0');
      } else if (window.innerWidth < 1300) { // Layar besar (lg)
        setSlideAmount(isSignUp ? '138%' : '0');
      } else { // Layar besar (lg dan lebih besar)
        setSlideAmount(isSignUp ? '138%' : '0');
      }
    };

    // Panggil fungsi saat komponen dimount dan saat ukuran layar berubah
    formSlideAmount();
    window.addEventListener('resize', formSlideAmount);

    // Bersihkan event listener saat komponen di-unmount
    return () => window.removeEventListener('resize', formSlideAmount);
    
  }, [isSignUp]);

  return (
    <div className="flex justify-center min-h-screen text-gray-900 bg-gray-100">
      {/* Container utama dengan flex dan min-h-screen */}
      <div className="flex justify-center flex-1 max-w-screen-xl m-0 overflow-hidden bg-white shadow-xl sm:m-10 sm:rounded-lg">
        {/* Form Section */}
        <motion.div
          initial={false}
          animate={{ x: slideAmount }} // Gunakan nilai geser yang responsif
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="my-auto fp-6 lg:w-1/2 xl:w-5/12 sm:p-12"
        >
          <div>
            <img src={assets.logo} className="w-20 mx-auto" alt="Logo" />
          </div>
          <div className="flex flex-col items-center mt-12">
            <h1 className="text-2xl font-extrabold xl:text-3xl">
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </h1>
            <div className="flex-1 w-full mt-8">
              <motion.div               
              className="max-w-xs mx-auto">
                {isSignUp && (
                  <input
                    className="w-full px-8 py-4 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    placeholder="Name"
                  />
                )}
                <input
                  className="w-full px-8 py-4 mt-5 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Email"
                />
                <input
                  className="w-full px-8 py-4 mt-5 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="password"
                  placeholder="Password"
                />
                {isSignUp && (
                  <input
                    className="w-full px-8 py-4 mt-5 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="password"
                    placeholder="Confirm Password"
                  />
                )}
                <button
                  className="flex items-center justify-center w-full py-4 mt-5 font-semibold tracking-wide text-gray-100 transition-all duration-300 ease-in-out bg-green-500 rounded-lg hover:bg-green-700 focus:shadow-outline focus:outline-none"
                >
                  <span className="">
                    {isSignUp ? 'Sign Up' : 'Sign In'}
                  </span>
                </button>
                <p className="mt-6 text-xs text-center text-gray-600">
                  {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
                  <button
                    onClick={toggleSignUp}
                    className="font-semibold text-green-600 hover:text-green-700"
                  >
                    {isSignUp ? 'Sign In' : 'Sign Up'}
                  </button>
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={false}
          animate={{ x: isSignUp ? '-73%' : '0' }} // Geser ke kiri jika sign  
          transition={{ duration: 0.5 }}
          className="flex-1 hidden lg:flex"
        >
          <div
            className="hidden w-full h-full bg-center bg-cover md:block"
            style={{ backgroundImage: `url(${assets.coal_mine_img})` }}
          >
            {/* Anda bisa menambahkan konten lain di sini jika diperlukan */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;