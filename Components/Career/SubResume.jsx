import React, { useState } from 'react';
import Router from 'next/router';
import { AiOutlineClose } from 'react-icons/ai';
import DropBox from '../DropBox_FileUpload/DropBox';
import useMediaQuery from '../../Hooks/CustomMediaQuery';
import Portal from '../../HOC/Portal';
import Resume from '../../pages/resume';
import { useEffect } from 'react';

export const SubResume = () => {
  const [Popup, setPopup] = useState(false);
  const isMobile = useMediaQuery('(max-width:648px)');
  useEffect(() => {}, []);
  return (
    <div id="Mainresumecontainer">
      <div id="innermainresumecontainer" className="2xl:py-16 py-12">
        <div id="resumeallcontent">
          <div id="maincontentresume">
            <div id="innermaincontentresume" className="text-center">
              <h4 className="text-2xl font-bold text-resumeheading font-poppins">
                Join our team and make a difference!
              </h4>
            </div>
          </div>

          <div id="mainuploadbutton" className="flex justify-center pt-4">
            <div className="overflow-hidden relative w-64 mt-2 mb-4">
              <div
                className="bg-kaltire-red hover:bg-blue-light text-white font-bold py-2 w-full inline-flex justify-center items-center rounded-md"
                type="button"
                onClick={() => {
                  setPopup(!Popup);
                }}
              >
                <span className=" text-xl text-center font-poppins">
                  Apply Now
                </span>
                <input className="cursor-pointer absolute block py-2 px-4 w-full opacity-0 pin-r pin-t text-black" />
              </div>
            </div>
          </div>
          {/* {Popup ? (
            <div className="fixed  bottom-20 left-1/3 z-30 overflow-hidden  mx-auto p-3 border w-96 shadow-lg rounded-md bg-white">
              <div className="sticky top-0 left-0 right-0">
                <AiOutlineClose
                  className="cursor-pointer text-right right-0 absolute"
                  onClick={() => {
                    setPopup(!Popup);
                  }}
                />
                <DropBox className=" absolute" />
              </div>
            </div>
          ) : null} */}

          <div
            id="lastresumecontent"
            className="text-center text-black font-poppins"
          >
            <p className="text-careeremail font-poppins">
              Or mail your resume directly at {isMobile ? <br /> : null}
              <a
                href="mailto:info@kvltires.com"
                className="text-kaltire-red font-poppins font-semibold"
              >
                info@kvltires.com
              </a>
            </p>
          </div>
          {Popup ? (
            <div className="fixed 2xl:top-20  top-10 h-4/6 xl:h-full bottom-20 xl:left-1/4 z-30  xl:w-1/2 w-full drop-shadow-xl overflow-y-auto scrollbar">
              <AiOutlineClose
                className="cursor-pointer text-right right-0 absolute text-3xl text-orange-600 font-bold animate-pulse"
                width={40}
                onClick={() => {
                  setPopup(!Popup);
                  Router.reload(window.location.pathname);
                }}
              />
              <div id="myportal" />
              <Portal>
                <Resume />
              </Portal>
            </div>
          ) : null}

          {/* <iframe title="My Daily Marathon Tracker" src="/resume" /> */}
        </div>
      </div>
    </div>
  );
};
