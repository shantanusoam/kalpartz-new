import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Departmentsdata, IndustrialTiresdatan } from '../../data/data';
import useMediaQuery from '../../Hooks/CustomMediaQuery';
import { RiSearchEyeLine } from 'react-icons/ri';

const WhatMakeUsSpecial = () => {
  const isMobile = useMediaQuery('(max-width:768px)');
  return (
    <div>
      <div className="lg:hidden">
        <div>
          <div className="block">
            <div>
              <div>
                <div
                  className="py-24"
                  style={{
                    backgroundImage:
                      // eslint-disable-next-line operator-linebreak
                      'url(' +
                      'https://raw.githubusercontent.com/shantanusoam/kal_tires/kaltireBranch/Assets/Images/Whatweoffer/Industrialtires/industbackg.png' +
                      ')',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                  }}
                >
                  <div className="flex justify-center items-center">
                    <Swiper
                      slidesPerView={isMobile ? 1 : 2}
                      spaceBetween={0}
                      slidesPerGroup={1}
                      navigation
                      speed={1400}
                      autoplay={{
                        delay: 1300,
                        disableOnInteraction: false,
                      }}
                      modules={[Pagination, Navigation, Autoplay]}
                      className="mySwiper"
                    >
                      <div
                        id="mainmobile"
                        className="flex justify-center items-center"
                      >
                        {IndustrialTiresdatan.map((indust) => (
                          <SwiperSlide key={indust.id}>
                            <div className="flex justify-center items-center">
                              <div className="flex flex-col justify-center">
                                <div className="lg:relative  self-start">
                                  <Image
                                    className="lg:absolute lg:inset-0 h-60  lg:h-full object-cover object-center lg:rounded-tl-md "
                                    src={indust.img}
                                    alt={indust.Alttag}
                                  />
                                </div>

                                <div className="text-center 2xl:text-xl xl:text-lg lg:text-base font-poppins font-bold pt-12">
                                  <h3>
                                    <span
                                      className="border-red-600 border-b-2 pb-2 font-poppins"
                                      id={`${indust.idmainMtab}`}
                                    >
                                      {indust.heading}
                                    </span>
                                  </h3>
                                </div>
                              </div>
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

      <div className="lg:block hidden">
        <div
          style={{
            backgroundImage:
              // eslint-disable-next-line operator-linebreak
              'url(' +
              'https://i0.wp.com/kalpartz.com/wp-content/uploads/2022/08/special-bg.jpg?fit=1918%2C778&ssl=1' +
              ')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <div className="mx-12 py-24 flex flex-col justify-center ">
            <div className="flex-col flex justify-center text-5xl text-white font-bold items-center pb-12">
              What Makes Us Special
            </div>
            <div
              id="departmentmaingrid"
              // className="flex gap-6 xl:flex-nowrap flex-wrap xl:justify-center justify-evenly  flex-row"
              className="grid xl:gap-10 2xl:gap-4 gap-8 grid-flow-col 2xl:grid-cols-DepartmentsTemplate 2xl:grid-rows-1 grid-rows-2 lg:px-24 2xl:px-0 justify-items-center"
            >
              {Departmentsdata.map((index) => (
                <div id="departmentmaingrid" key={index.id}>
                  <div className="flex flex-col justify-center items-center">
                    <div className=" rounded-full bg-orange-600  text-center">
                      <div className="p-8 ">
                        <RiSearchEyeLine className="  text-white text-4xl"></RiSearchEyeLine>
                      </div>
                    </div>

                    <div id="headingdepartment" className="pt-4">
                      <h3 className="text-red font-poppins font-bold   text-white lg:text-xl md:text-base">
                        <span>{index.Heading}</span>
                      </h3>
                    </div>

                    {/* <div className="rounded-full bg-orange-600 ">
                          <Image
                            src={index.img}
                            alt={index.Alttag}
                            className="relative bg-cover"
                          />
                          
                        </div> */}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-col flex justify-center text-6xl text-white font-bold items-center py-8">
              50,000 +
            </div>
            <div className="flex-col flex justify-center text-4xl text-white font-bold items-center  h-auto">
              Custom parts and accessories with the BEST PRICE in the business
              WE GOT YOU COVERED
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatMakeUsSpecial;
