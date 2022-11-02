import Image from 'next/image';
import { ImPhone } from 'react-icons/im';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { Onsitecomponentdata, OnsiteGriddata } from '../../data/data';
import useMediaQuery from '../../Hooks/CustomMediaQuery';

// const aamdata = [OnsiteGriddata];
// console.log(aamdata);

const Onsiteservice = () => {
  const isDesktop = useMediaQuery('(min-width:1148px)');
  const isMobile = useMediaQuery('(min-width:768px)');
  return (
    <div className="mb-8">
      <div>
        {isDesktop ? (
          <div>
            <div
              id="grid"
              className="grid gap-x-4  bg-bg-white-1   grid-cols-onsiteTemplate  px-20"
            >
              {OnsiteGriddata.map((index) => (
                <div className="bg-bg-white-1 text-center py-8" key={index.id}>
                  <div className="flex justify-center">
                    <div className="w-onsiteimage h-onsiteimage flex">
                      <Image src={index.img} alt={index.heading} />
                    </div>
                  </div>

                  <h2 className="lg:text-xl text-lg font-bold font-poppins h-12">
                    {index.heading}
                  </h2>
                  <p className="pt-6 lg:text-sm font-normal px-2 text-center font-Helvetica">
                    {index.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <Swiper
            modules={[Autoplay]}
            loop
            slidesPerView={isMobile ? 2 : 1}
            spaceBetween={30}
            // pagination={{ clickable: true }}
            // className="mySwiper"
            speed={1400}
            autoplay={{
              delay: 1300,
              disableOnInteraction: false,
            }}
          >
            {OnsiteGriddata.map((newdata) => (
              <SwiperSlide key={newdata.id}>
                <div>
                  <div id="grid" className=" bg-bg-white-1   px-4">
                    <div className="bg-bg-white-1 text-center">
                      <div className="flex justify-center">
                        <div className="w-onsiteimage h-onsiteimage flex">
                          <Image src={newdata.img} alt={newdata.heading} />
                        </div>
                      </div>

                      <h2 className="lg:text-xl text-lg font-bold font-Helvetica ">
                        {newdata.heading}
                      </h2>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* {Onsitecomponentdata.map((onsitemain) => (
          <div id="secondonsite" className="mt-12 mb-4" key={onsitemain.id}>
            <div id="innersecondonsite" className="text-center">
              <h1 className="md:text-2xl font-bold font-poppins">
                {onsitemain.heading}
              </h1>
              <p className="pt-2 md:text-xl  text-onsite-text font-Helvetica lg:px-80 px-8">
                {onsitemain.desc}
              </p>
              <div className="flex justify-center mt-8">
                <a href="tel:+1-800-808-0025" target="_blank" rel="noreferrer">
                  <button
                    className="flex items-center bg-kaltire-red py-3 px-12 text-white lg:text-2xl lg:font-bold"
                    type="button"
                  >
                    <span className="pr-2 font-poppins">
                      <ImPhone className="text-2xl" />
                    </span>
                    {onsitemain.BTN}
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};
export default Onsiteservice;
