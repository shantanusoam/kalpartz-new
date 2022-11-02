// import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import { Servicesdata } from '../../data/data';

// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/pagination';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/navigation';
import useMediaQuery from '../../Hooks/CustomMediaQuery';

export const Services = () => {
  const isMobile = useMediaQuery('(max-width:768px)');
  // const outClick = useRef(null);
  // const [lightboxData, setlightboxData] = useState(null);
  // const [light, setlightbox] = useState(false);
  // const [lol, setlol] = useState(false);

  // const handleClick = (e) => {
  //   if (outClick.current.contains(e.target)) {
  //     setlol(true);
  //     // inside click
  //   }
  //   // outside click
  //   setlightbox(false);
  // };
  // hello world soidfhsdofhi
  // useEffect(() => {
  //   // add when mounted
  //   document.addEventListener('mousedown', handleClick);
  //   // return function to be called when unmounted
  //   return () => {
  //     document.removeEventListener('mousedown', handleClick);
  //   };
  // }, []);

  // function UpdateLightbox(data) {
  //   setlightbox(true);
  //   setlightboxData(data);
  // }
  return (
    <div id="ServicesMain">
      <div className="hidden lg:block">
        <div>
          <div
            id="onsitemaininner"
            className="bg-black lg:px-20 lg:py-12 2xl:py-16 "
            style={{
              backgroundImage:
                // eslint-disable-next-line operator-linebreak
                'url(https://raw.githubusercontent.com/shantanusoam/kal_tires/kaltireBranch/Assets/Images/Whatweoffer/services/services%20background.png)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <h2 className="text-white  text-5xl font-bold font-poppins pb-8">
              Services
            </h2>
            <div
              id="maingrid "
              className="flex flex-col justify-center items-center"
            >
              {/* {light ? ( */}
              {/* // <div className="relative bg-Lightbox pb-96  w-1/2 flex justify-center  z-20 top-96 left-0  border-4 rounded-xl overflow-y-auto">
                //   <div className=" absolute ">
                //     <div id="lighboxmaincontainer">
                //       <div id="crossimage" className="text-right">
                //         {/* <Image src="" alt="" /> cross image */}
              {/* //       </div>
                //       <div id="mainlightimage" className="text-center">
                //         <Image src={lightboxData.img} />
                //       </div>
                //       <div id="lightheading" className="text-center">
                        // <h1 */}{' '}
              {/* className={`font-bold text-white ${ */}
              {/* //             lol ? 'text-2xl' : 'text-lg'
                //           } font-Helvetica`}
                //         >
                //           {lightboxData.heading}
                //         </h1>
                //       </div>
                //       <div id="lightdesc" className="pt-2">
                //         <p className="text-left px-6 text-white font-Helvetica">
                //           {lightboxData.desc}
                //         </p>
                //       </div>
                //     </div>
                //   </div>
                // </div> */}
              {/* // ) : null} */}
              <div
                id="grid"
                className=" static grid gap-4 grid-cols-servicesTemplate "
              >
                {Servicesdata.map((data) => (
                  <a
                    className="bg-kaltire-red   text-center text-white  border-white hover:border hover:-m-0.5  cursor-pointer pt-4 "
                    key={data.id}
                    href="tel:800-808-0025"
                  >
                    <div className="flex justify-center">
                      <div className="w-onsiteimage h-onsiteimage pt-4 ">
                        <Image
                          src={data.img}
                          alt={data.AltTag}
                          title="click to call"
                        />
                      </div>
                    </div>
                    <h3
                      className={`lg:text-xl text-lg font-bold font-poppins lg:px-${data.paddingX} px-0  whitespace-${data.linebrk} h-16`}
                    >
                      {data.heading}
                    </h3>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        {' '}
        <div>
          <div id="mainservices">
            <div
              id="maininnerservices"
              className="bg-black 2xl:px-56 lg:px-16 px-4 lg:py-12 2xl:py-16 z-0 "
              style={{
                backgroundImage:
                  // eslint-disable-next-line operator-linebreak
                  'url(https://raw.githubusercontent.com/shantanusoam/kal_tires/kaltireBranch/Assets/Images/Whatweoffer/services/services%20background.png)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            >
              <h2 className="text-white text-5xl font-bold font-Helvetica py-12 lg:pl-28 lg:text-left text-center flex justify-center">
                Services
              </h2>
              <div
                id="maingrid"
                className={isMobile ? 'px-10 pb-10' : 'px-20 pb-20'}
              >
                <div className={isMobile ? 'pt-0' : 'pt-2'}>
                  {/* {light ? (
                    <div
                      className={
                        isMobile
                          ? 'relative bg-Lightbox pb-lightboxmobilepadding overflow-y-auto  w-full flex justify-center  z-20 top-14 left-0  border-4 rounded-xl'
                          : 'relative bg-Lightbox pb-lightboxtabpadding   w-full flex justify-center  z-20 top-14 left-0  border-4 rounded-xl'
                      }
                    >
                      <div className=" absolute ">
                        <div id="lighboxmaincontainer">
                          <div id="crossimage" className="text-right">
                            {/* <Image src="" alt="" /> cross image */}
                  {/* </div>
                          <div id="mainlightimage" className="text-center">
                            <Image src={lightboxData.img} />
                          </div>
                          <div id="lightheading" className="text-center">
                            <h1
                              className={`font-bold text-white ${
                                lol ? 'text-2xl' : 'text-lg'
                              } font-Helvetica`}
                            >
                              {lightboxData.heading}
                            </h1>
                          </div>
                          <div id="lightdesc" className="pt-2">
                            <p className="text-left px-6 text-white font-Helvetica">
                              {lightboxData.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  {/* ) : null} */}
                </div>
                <Swiper
                  modules={[Pagination, Autoplay]}
                  loop
                  slidesPerView={isMobile ? 1 : 2}
                  spaceBetween={30}
                  // pagination={{ clickable: true }}
                  // className="mySwiper"
                  speed={1400}
                  autoplay={{
                    delay: 1300,
                    disableOnInteraction: false,
                  }}
                >
                  <div className="flex">
                    <div
                      id="grid"
                      className="grid gap-4 grid-cols-servicesTabTemplate justify-center items-center py-16 px-4 "
                    >
                      {Servicesdata.map((mydata) => (
                        <SwiperSlide key={mydata.id}>
                          <a href="tel:800-808-0025">
                            <div className="bg-kaltire-red  text-center text-white border-white hover:border-2 py-4">
                              <div className="flex justify-center">
                                <div className="w-onsiteimage h-onsiteimage pt-6">
                                  <Image src={mydata.img} alt={mydata.AltTag} />
                                </div>
                              </div>
                              <h3 className="lg:text-xl text-lg font-bold font-poppins pb-16 pt-4 h-12">
                                {mydata.heading}
                              </h3>
                            </div>
                          </a>
                        </SwiperSlide>
                      ))}
                    </div>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
