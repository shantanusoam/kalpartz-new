/* eslint-disable import/no-unresolved */
import React from 'react';
import Image from 'next/dist/client/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Departmentsdata } from '../../data/data';

export const Departments = () => (
  <div id="maindepartment">
    <div id="innermaindepartment">
      <div id="departmentgrid">
        <div className="hidden md:block">
          <div id="departmentmain">
            <div className="bg-white lg:px-20 md:px-8  lg:py-12 2xl:py-16">
              <h2 className="text-departmentheading text-4xl font-bold font-poppins pb-8 mt-12">
                Our Departments
              </h2>

              <div
                id="departmentmaingrid"
                // className="flex gap-6 xl:flex-nowrap flex-wrap xl:justify-center justify-evenly  flex-row"
                className="grid xl:gap-10 2xl:gap-4 gap-8 grid-flow-col 2xl:grid-cols-DepartmentsTemplate 2xl:grid-rows-1 grid-rows-2 lg:px-24 2xl:px-0"
              >
                {Departmentsdata.map((index) => (
                  <div id="departmentmaingrid" key={index.id}>
                    <div>
                      <div className=" text-center ">
                        <div className="flex">
                          <div>
                            <Image
                              src={index.img}
                              alt={index.Alttag}
                              className="relative bg-cover"
                            />
                            <div
                              id="headingdepartment"
                              className="flex justify-center"
                            >
                              <h3 className="text-red font-poppins font-bold absolute -mt-16  text-white lg:text-xl md:text-base">
                                <span>{index.Heading}</span> <br />
                                <span>{index.Headingtwo}</span>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <div>
            <div>
              <div className="bg-white">
                <h2 className="text-departmentheading text-3xl text-center pt-6 font-semibold font-Helvetica pb-8">
                  Our Departments
                </h2>
                <div>
                  <Swiper
                    spaceBetween={0}
                    slidesPerGroup={1}
                    // preventInteractionOnTransition
                    preloadImages
                    // touchMoveStopPropagation
                    speed={1200}
                    autoplay={{
                      delay: 1300,
                      disableOnInteraction: false,
                    }}
                    // navigation
                    modules={[Pagination, Navigation, Autoplay]}
                  >
                    {Departmentsdata.map((data) => (
                      <SwiperSlide key={data.id}>
                        <div id="grid">
                          <div className=" text-center ">
                            <div className="flex justify-center">
                              <div>
                                <Image
                                  src={data.img}
                                  alt={data.Alttag}
                                  className="relative"
                                />
                                <div
                                  id="headingdepartment"
                                  className="flex justify-center"
                                >
                                  <h2 className="text-red font-poppins font-bold absolute -mt-16  text-white 2xl:text-xl lg:text-xs md:text-base ">
                                    {/* {data.Heading} */}
                                    <span>{data.Heading}</span> <br />
                                    <span>{data.Headingtwo}</span>
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
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
