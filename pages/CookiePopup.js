import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
const CookiePopup = () => {
  const [Popup, setPopup] = useState(false);
  function SetCookies(pram) {
    localStorage.setItem('KvltireCokkies', pram);
    setPopup(false);
    console.log(`current local popup ${Popup}`);
  }
  useEffect(() => {
    var cookie = localStorage.getItem('KvltireCokkies');
    console.log(`current local storage ${cookie}`);
    if (cookie) {
      setPopup(false);
      console.log(`current local popup ${false}`);
    }
    // if (cookie == null) {
    //   setPopup(true);
    //   console.log(`current local popup ${true}`);
    // }
    else {
      setPopup(true);
      console.log(`current local popup ${true}`);
    }
  }, [Popup]);
  return (
    <div>
      {Popup ? (
        <div className="fixed bg-gray-100 px-12  flex flex-col lg:flex-row  h-48 lg:h-20  bottom-0  z-30   w-full drop-shadow-xl overflow-y-auto scrollbar justify-between  items-center">
          {/* <AiOutlineClose
          className="cursor-pointer text-right right-0 absolute text-3xl text-orange-600 font-bold animate-pulse"
          width={40}
          onClick={() => {
            setPopup(!Popup);
            Router.reload(window.location.pathname);
          }}
        /> */}

          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className=" text-sm">
              We use cookies on our website to give you the most relevant
              experience by remembering your preferences and repeat visits. By
              clicking Accept, you consent to the use of ALL the cookies.
            </div>
          </div>
          <div className="flex ">
            <div
              className="flex flex-row justify-center lg:justify-start px-6 cursor-pointer"
              onClick={() => {
                SetCookies(true);
              }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white font-poppins  hover:border-0   font-semibold   shadow-sm hover:shadow-md shadow-yellow-shadow  hover:drop-shadow-lg  flex items-center justify-center 2xl:w-52 lg:w-36 w-32 2xl:h-12 h-10 2xl:text-descnew lg:text-md lg:text-md   2xl:p-0 p-4 lg:text-left transition duration-300 ease-in-out lg:bg-none bg-gray-400 "
              >
                <p>Accept</p>
              </motion.div>
            </div>
            <div
              className="flex flex-row justify-center lg:justify-start px-6 cursor-pointer"
              onClick={() => {
                SetCookies(true);
              }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white font-poppins  hover:border-0   font-semibold   shadow-sm hover:shadow-md shadow-yellow-shadow  hover:drop-shadow-lg  flex items-center justify-center 2xl:w-52 lg:w-36 w-32 2xl:h-12 h-10 2xl:text-descnew lg:text-md lg:text-md   2xl:p-0 p-4 lg:text-left transition duration-300 ease-in-out lg:bg-none bg-gray-600"
              >
                <p>Denied</p>
              </motion.div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CookiePopup;
