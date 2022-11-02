/* eslint-disable import/no-unresolved */
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import { PerkBenifitsdata } from '../../data/data';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import useMediaQuery from '../../Hooks/CustomMediaQuery';

export const PerkBenifits = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <div id="Perkmain">
      <div id="Perkmaininner">
        <div id="Perkmaingrid" className="pb-8 ">
          <div className="lg:block hidden">
            <h3 className="text-departmentheading font-bold text-4xl px-20 pt-8 font-poppins">
              Career Opportunities
            </h3>
            <div
              id="Perkgrid"
              className="grid gap-4    bg-bg-white-1   grid-cols-PerkTemplate  pt-12 xl:pl-20 lg:pl-16 pl-20 pr-20  "
            >
              {PerkBenifitsdata.map((data) => (
                <div
                  className="bg-bg-white-1 text-center border border-perkbenefitsborder "
                  key={data.id}
                >
                  <div className="flex justify-start  pt-12 h-perkimageheight w-perkimagewidth px-4">
                    <div className="flex ">
                      <Image src={data.img} alt={data.Heading} />
                    </div>
                  </div>

                  <h3 className="lg:text-xl text-lg font-bold font-poppins text-left px-4   pt-8 h-8 text-black">
                    {data.Heading}
                  </h3>
                  <p className="pt-16 pb-8 lg:text-sm font-normal  text-left whitespace-normal px-4 font-Helvetica text-neutral-500 ">
                    {data.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div id="perkslidermaintab" className="lg:hidden">
            <div
              id="perksliderinnermain"
              className={isMobile ? 'px-6' : 'px-12'}
            >
              <h2 className="text-departmentheading font-bold text-3xl  pt-8 pb-4  md:text-left text-center font-poppins">
                Career Opportunities
              </h2>
              <Swiper
                slidesPerView={isMobile ? 1 : 2}
                spaceBetween={30}
                slidesPerGroup={1}
                // preventInteractionOnTransition
                preloadImages
                // touchMoveStopPropagation
                speed={1400}
                autoplay={{
                  delay: 1300,
                  disableOnInteraction: false,
                }}
                // navigation
                modules={[Pagination, Navigation, Autoplay]}
              >
                <div
                  id="Perkgrid"
                  className="grid gap-4  grid-cols-PerkTemplate pt-20 bg-bg-white-1  px-4"
                >
                  {PerkBenifitsdata.map((data) => (
                    <SwiperSlide key={data.id}>
                      <div className="bg-bg-white-1 text-center border border-perkbenefitsborder ">
                        <div className="flex justify-start pl-8 pt-12 h-perkimageheight w-perkimagewidth">
                          <div className="flex ">
                            <Image src={data.img} alt={data.Heading} />
                          </div>
                        </div>
                        <h4 className="lg:text-xl text-lg font-bold font-poppins text-left pl-8 pt-8 text-black">
                          {data.Heading}
                        </h4>
                        <p
                          //  className="pt-12 pt pb-8 lg:text-sm font-normal pl-8 text-left h-36 font-Helvetica text-neutral-500"
                          className="pt-6 pt pb-2 lg:text-sm font-normal  text-left  whitespace-normal px-8 h-36 font-Helvetica text-neutral-500"
                        >
                          {data.desc}
                        </p>
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
  );
};
