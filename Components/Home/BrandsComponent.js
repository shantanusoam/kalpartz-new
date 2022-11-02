import React from 'react';
// import { motion } from 'framer-motion';
// import styled from 'styled-components';
// import businesstrailernew from "../../assets/Images/businesstrailernew.png";
// import businesstruck from "../../assets/Images/businesstruck.png";
// import businesstrailernew from "../../assets/Images/businesstrailernew";
// import Accordion from '../Accordion';
// import { useSpring } from 'react-spring';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

// import { useHover } from '../../Hooks/Hover';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

import { BrandCompnentHeader } from '../../data/data';

import useMediaQuery from '../../Hooks/CustomMediaQuery';

const mydata = BrandCompnentHeader;

const BrandsComponent = () => {
  //   const [hoverRef, isHovered] = useHover();
  const isMobile = useMediaQuery('(min-width: 768px)');
  const isDesktop = useMediaQuery('(min-width:1148px)');
  const isLaptop = useMediaQuery('(min-width:1407px)');

  //   const Quality = styled.div`
  //     background: ${(props) => `url(${props.background}) no-repeat top center`};
  //     flex: 1;
  //     margin: 0.3rem;
  //     height: 100%;
  //     background-position: left;
  //     background-size: cover;
  //     background-repeat: none;
  //     transition: flex 0.8s ease;

  //     &:hover {
  //       background: ${(props) => `url(${props.hoverBackground}) `};
  //     }
  //   `;

  //   const titleAnimation = useSpring({
  //     from: {
  //       transform: 'translateY(-30px)',
  //     },
  //     to: [{ transform: 'translateY(15px)' }],
  //     config: { mass: 3, tension: 500, friction: 25 },
  //   });
  function SliderComp() {
    if (isLaptop) {
      return 5;
    }
    if (isDesktop) {
      return 4;
    }

    if (isMobile) {
      return 3;
    }

    return 1;
  }

  return (
    <>
      {/* <div class="social"></div> */}
      <div className="bg-businessbackground" id="AboutUs_Section">
        <div className=" px-20 ">
          <div className="flex text-black text-5xl font-bold py-12 justify-center items-center">
            KAL Partz Preferred Vendors
          </div>
          <div className="">
            {/* {isDesktop ? (
              <div className="flex flex-row">
                {mydata.map((data) => (
                  <div
                    key={data.id}
                    className="flex-1 flex  flex-col justify-center hover:scale-105 hover:z-10 drop-shadow-md hover:drop-shadow-2xl transition-all delay-100 ease-in duration-300 bg-whitenew m-1"
                  >
                    <div className="flex justify-center">
                      <div className="flex justify-center">
                        <img src={data.imageurl} alt="service" />
                      </div>
                    </div>
                    {/* <div
                      className="flex-1 h-80  transition-all delay-75 bg-cover bg-no-repeat bg-center "
                      style={{
                        backgroundImage: `url(${data.imageurl})`,
                        flex: '0  3  40%',
                      }}
                    /> */}
            {/* </div> */}
            {/* sdfsdfsdf */}
            {/* </div> */}
            {/* ) : ( */}
            <Swiper
              centeredSlides
              slidesPerView={SliderComp()}
              spaceBetween={50}
              loop
              speed={900}
              autoplay={{
                delay: 500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {mydata.map((data) => (
                <SwiperSlide key={data.id}>
                  <div className="flex-1 flex  flex-col justify-center  hover:scale-105 hover:z-10  hover:drop-shadow-2xl transition-all delay-100 ease-in duration-300 bg-whitenew m-1">
                    <div className="flex justify-center items-center h-36">
                      <div className="item-center  ">
                        <Image
                          src={data.imageurl}
                          alt={data.heading}
                          // layout="fill"
                          // height={100}
                          // width={200}
                        />
                      </div>
                    </div>
                    {/* <div
                      className="flex-1 h-80  transition-all delay-75 bg-cover bg-no-repeat bg-center "
                      style={{
                        backgroundImage: `url(${data.imageurl})`,
                        flex: '0  3  40%',
                      }}
                    /> */}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandsComponent;
