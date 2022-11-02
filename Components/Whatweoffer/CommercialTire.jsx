import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import { motion } from 'framer-motion';
import { CommercialTireone, CommercialTiretwo } from '../../data/data';
import useMediaQuery from '../../Hooks/CustomMediaQuery';
import { useStateContext } from '../../context/StateContext';

const CommercialTire = () => {
  const [alldata, setalldata] = useState(CommercialTireone[0]);
  const isMobile = useMediaQuery('(max-width:600px)');
  const { WWOtires } = useStateContext();
  useEffect(() => {
    // console.log(`change inside the useeffect${WWOtires}`);
    if (WWOtires === 'retread') {
      setalldata(CommercialTireone[0]);
    } else {
      setalldata(CommercialTiretwo[0]);
    }
  }, [WWOtires]);
  const containerVariants = {
    open: {
      width: '240px',
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      width: '60px',
      transition: {
        staggerChildren: 0.1,
        when: 'afterChildren',
        staggerDirection: -1,
      },
    },
  };
  const childVariants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  return (
    <div id="commercialtiremain">
      <div>
        <div>
          <div>
            <div className="bg-black">
              <div className="lg:grid lg:grid-cols-2 2xl:pr-16 xl:pr-12 lg:pr-8">
                <div className="lg:block hidden ">
                  <motion.div
                    whileInView={{ x: [-200, 0], opacity: [0.5, 1] }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="lg:relative self-start">
                      {alldata ? (
                        <Image
                          className="lg:absolute lg:inset-0 h-60 w-full lg:h-full object-cover object-center lg:rounded-tl-md "
                          src={alldata.mainimage}
                          alt={
                            alldata.Heading === 'Retread Tires'
                              ? 'Affordable Retread Tires'
                              : 'Tires For Truck & Trailers'
                          }
                        />
                      ) : null}
                    </div>
                  </motion.div>
                </div>
                <div className="flex flex-col-reverse lg:block lg:pl-8">
                  <div className="lg:hidden block  ">
                    <motion.div
                      whileInView={{ x: [-100, 0], opacity: [0.5, 1] }}
                      transition={{ duration: 2 }}
                    >
                      <div className="lg:relative lg:mt-4 self-start">
                        <Image
                          className="lg:absolute lg:inset-0  lg:h-full object-cover object-center lg:rounded-tl-md "
                          src={alldata.mainimagetab}
                          alt={
                            alldata.Heading === 'Retread Tires'
                              ? 'Affordable Retread Tires'
                              : 'Tires For Truck & Trailers'
                          }
                        />
                      </div>
                    </motion.div>
                  </div>
                  <div className="lg:py-2 md:px-10 px-6 lg:px-0 md:max-w-3xl lg:max-w-5xl max-w-sm  mx-auto col-span-2  text-center lg:text-left mt-16  ">
                    <h1 className="text-white font-poppins text-4xl font-bold">
                      {alldata.Heading}
                    </h1>
                    <div id="combuttons" className="mt-12">
                      <motion.div
                        whileInView={{ y: [100, 0], opacity: [0.4, 1] }}
                        transition={{ duration: 0.4 }}
                      >
                        <span className="">
                          <button
                            type="button"
                            className={` mr-2 text-center focus:border-b-2 font-bold font-Helvetica  border-white  ${
                              alldata.Heading === 'Retread Tires'
                                ? 'text-kaltire-red border-white border-b-2 font-Helvetica'
                                : 'text-white font-Helvetica'
                            }  transition-all duration-100 delay-75 cursor-pointer  font-poppins focus:text-kaltire-red`}
                            onClick={() => setalldata(CommercialTireone[0])}
                          >
                            <div>{alldata.titleone}</div>
                          </button>
                        </span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="">
                          <button
                            type="button"
                            className={`mr-2 font-bold ${
                              alldata.Heading === 'Commercial Tires'
                                ? 'text-kaltire-red border-white border-b-2 font-Helvetica '
                                : 'text-white font-Helvetica'
                            }font-bold text-center focus:border-b-2 font-poppins  border-white text-white  transition-all duration-100 delay-75 cursor-pointer    focus:text-kaltire-red `}
                            onClick={() => setalldata(CommercialTiretwo[0])}
                          >
                            {alldata.titletwo}
                          </button>
                        </span>
                      </motion.div>
                    </div>
                    <motion.div
                      whileInView={{ y: [100, 0], opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                    >
                      <p className="text-white mt-5   whitespace-pre-line text-justify font-Helvetica">
                        {alldata.desc}
                      </p>
                    </motion.div>
                    <Swiper
                      modules={[Pagination, Autoplay]}
                      loop
                      slidesPerView={
                        alldata.Heading === 'Retread Tires'
                          ? 2
                          : isMobile
                          ? 2
                          : 3
                      }
                      spaceBetween={30}
                      // pagination={{ clickable: true }}
                      // className="mySwiper"

                      speed={700}
                      autoplay={{
                        delay: 700,
                        disableOnInteraction: false,
                      }}
                    >
                      <div className="flex items-center h-24 pr-12">
                        {alldata.logos.map((indexnew) => (
                          <SwiperSlide key={indexnew.id}>
                            <div id="commlogos" className="mt-8 ml-4 ">
                              <Image
                                src={indexnew.img}
                                className="flex"
                                alt={indexnew.Alt}
                              />
                            </div>
                          </SwiperSlide>
                        ))}
                      </div>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CommercialTire;
