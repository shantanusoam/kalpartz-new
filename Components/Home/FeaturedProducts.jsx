import { React, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { MdKeyboardArrowDown } from 'react-icons/md';

// Import Swiper styles
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/pagination';
import { Autoplay } from 'swiper';
import { FeaturedProductsData } from '../../data/data';
import useMediaQuery from '../../Hooks/CustomMediaQuery';

const Fdata = FeaturedProductsData;

const FeaturedProducts = () => {
  const [Feaaturedata, setFeaaturedata] = useState(Fdata);
  const [FeaatureCat, setFeaatureCat] = useState('Commercial Tires');

  const [ShowDropdown, setShowDropdown] = useState(false);

  const isDesktop = useMediaQuery('(min-width:768px)');

  function SetDataFunction(params) {
    setFeaaturedata(Fdata.filter((item) => item.Category === params));
  }
  return (
    <div className="bg-neutral-200">
      <div className={`${isDesktop ? 'p-28' : 'p-10'} `}>
        <div
          className={`flex  justify-between pb-8 ${
            isDesktop ? 'flex-row' : 'flex-col'
          } `}
        >
          <h1
            className={` font-medium  ${
              isDesktop ? 'text-4xl' : 'text-2xl text-center'
            } `}
          >
            <span className="text-orange-600 ">FEATURED </span>PRODUCTS
          </h1>
          <div>
            {!isDesktop ? (
              <div className="mt-4 mx-8">
                <div
                  onClick={() => {
                    setFeaatureCat('Industrial Tires');
                    setShowDropdown(!ShowDropdown);
                  }}
                  className="group   flex flex-row justify-between px-6 py-4  text-center border-2 bg-black text-white   transition-all duration-100 delay-75 cursor-pointer "
                >
                  {FeaatureCat}
                  <span>
                    {' '}
                    <MdKeyboardArrowDown
                      className={`transition-all duration-100${
                        ShowDropdown ? '-rotate-180' : 'rotate-180'
                      }`}
                    />{' '}
                  </span>
                </div>
                <div
                  className={`Transition-Height-${ShowDropdown ? 'in' : 'out'}`}
                >
                  {ShowDropdown ? (
                    <div className="flex flex-col">
                      <button
                        onClick={() => {
                          SetDataFunction('Commercial Tires');
                          setFeaatureCat(' Commercial Tires');
                          setShowDropdown(!ShowDropdown);
                        }}
                        type="button"
                        className="group  relative     text-center border-2 border-black  transition-all duration-100 delay-75 cursor-pointer active:bg-violet-700 focus:outline-none focus:ring focus:bg-orange-600 focus:text-white"
                      >
                        <h4 className="px-4 py-2  text-black group-hover:text-white z-10 relative pointer ease-in-out transition-colors">
                          Commercial Tires
                        </h4>
                        <span className="bg-black group-hover:w-full w-0 h-full absolute bottom-0 left-0 duration-500 delay-75 transition-all -z-0" />
                      </button>
                      <button
                        onClick={() => {
                          SetDataFunction('Industrial Tires');
                          setFeaatureCat('Industrial Tires');
                          setShowDropdown(!ShowDropdown);
                        }}
                        type="button"
                        className="group  relative      text-center border-2 border-black  transition-all duration-100 delay-75 cursor-pointer active:bg-violet-700 focus:outline-none focus:ring focus:bg-orange-600 focus:text-white"
                      >
                        <h4 className="px-4 py-2 text-black group-hover:text-white z-10 relative pointer ease-in-out transition-colors">
                          Industrial Tires
                        </h4>
                        <span className="bg-black  group-hover:w-full w-0 h-full absolute bottom-0 left-0 duration-500 delay-75 transition-all -z-0" />
                      </button>
                      <button
                        onClick={() => {
                          SetDataFunction('Earthmover Tires');
                          setFeaatureCat('Earthmover Tires');
                          setShowDropdown(!ShowDropdown);
                        }}
                        type="button"
                        className="group  relative   text-center border-2 border-black  transition-all duration-100 delay-75 cursor-pointer active:bg-violet-700 focus:outline-none focus:ring focus:bg-orange-600 focus:text-white"
                      >
                        <h4 className="px-4 py-2 text-black group-hover:text-white z-10 relative pointer ease-in-out transition-colors">
                          Earthmover Tires
                        </h4>
                        <span className="bg-black group-hover:w-full w-0 h-full absolute bottom-0 left-0 duration-500 delay-75 transition-all -z-0" />
                      </button>
                    </div>
                  ) : null}
                </div>
              </div>
            ) : (
              <div
                className={`flex  pb-8${isDesktop ? 'flex-row' : 'flex-col'} `}
              >
                <button
                  onClick={() => {
                    SetDataFunction('Commercial Tires');
                  }}
                  type="button"
                  className="group  relative     mr-2 text-center border-2 border-black  transition-all duration-100 delay-75 cursor-pointer active:bg-violet-700 focus:outline-none focus:ring focus:bg-orange-600 focus:text-white"
                >
                  <h4 className="px-4 py-2  text-black group-hover:text-white z-10 relative pointer ease-in-out transition-colors">
                    Commercial Tires
                  </h4>
                  <span className="bg-black group-hover:w-full w-0 h-full absolute bottom-0 left-0 duration-500 delay-75 transition-all -z-0" />
                </button>
                <button
                  onClick={() => {
                    SetDataFunction('Industrial Tires');
                  }}
                  type="button"
                  className="group  relative     mr-2 text-center border-2 border-black  transition-all duration-100 delay-75 cursor-pointer active:bg-violet-700 focus:outline-none focus:ring focus:bg-orange-600 focus:text-white"
                >
                  <h4 className="px-4 py-2 text-black group-hover:text-white z-10 relative pointer ease-in-out transition-colors">
                    Industrial Tires
                  </h4>
                  <span className="bg-black  group-hover:w-full w-0 h-full absolute bottom-0 left-0 duration-500 delay-75 transition-all -z-0" />
                </button>
                <button
                  onClick={() => {
                    SetDataFunction('Earthmover Tires');
                  }}
                  type="button"
                  className="group  relative     mr-2 text-center border-2 border-black  transition-all duration-100 delay-75 cursor-pointer active:bg-violet-700 focus:outline-none focus:ring focus:bg-orange-600 focus:text-white"
                >
                  <h4 className="px-4 py-2 text-black group-hover:text-white z-10 relative pointer ease-in-out transition-colors">
                    Earthmover Tires
                  </h4>
                  <span className="bg-black group-hover:w-full w-0 h-full absolute bottom-0 left-0 duration-500 delay-75 transition-all -z-0" />
                </button>
              </div>
            )}
          </div>
        </div>

        <div>
          <div
            className={`${
              isDesktop ? 'grid  grid-cols-onsiteTemplate2 gap-4' : 'block'
            } `}
          >
            {isDesktop ? (
              Feaaturedata.map((data) => (
                <div
                  className=" bg-white px-6 py-8 flex flex-col justify-center items-center"
                  key={data.id}
                >
                  <img src={data.imageurl} alt="data" className="h-72" />
                  <div>
                    <h3 className="font-bold text-lg">{data.heading}</h3>
                    <p className=" text-zinc-500 mt-4 ">{data.desc}</p>
                    <button
                      type="button"
                      className="group  relative  mt-6  bg-orange-600  text-center transition-all duration-100 delay-75 cursor-pointer active:bg-red-300 focus:outline-none focus:ring focus:bg-red-900 focus:text-white"
                    >
                      <h4 className="px-6 py-2 text-white group-hover:text-white z-10 relative pointer ease-in-out transition-colors">
                        {data.CTA1.heading}
                      </h4>
                      <span className="bg-black group-hover:w-full w-0 h-full absolute bottom-0 left-0 duration-500 delay-75 transition-all -z-0" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <Swiper
                modules={[Autoplay]}
                loop
                className="mySwiper"
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
              >
                {Feaaturedata.map((data) => (
                  <SwiperSlide key={data.id}>
                    <div className=" bg-white px-6 py-8 flex flex-col justify-center items-center">
                      <img src={data.imageurl} alt="data" className="h-72" />
                      <div>
                        <h3 className="font-bold text-lg">{data.heading}</h3>
                        <p className=" text-zinc-500 mt-4 ">{data.desc}</p>
                        <button
                          type="button"
                          className="group  relative  mt-6  bg-orange-600  text-center transition-all duration-100 delay-75 cursor-pointer active:bg-red-300 focus:outline-none focus:ring focus:bg-red-900 focus:text-white"
                        >
                          <h4 className="px-6 py-2 text-white group-hover:text-white z-10 relative pointer ease-in-out transition-colors">
                            {data.CTA1.heading}
                          </h4>
                          <span className="bg-black group-hover:w-full w-0 h-full absolute bottom-0 left-0 duration-500 delay-75 transition-all -z-0" />
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
