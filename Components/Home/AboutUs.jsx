import React, { useState } from 'react';
import Image from 'next/image';
import { MdLocalPhone } from 'react-icons/md';
import { BiMessageDetail } from 'react-icons/bi';
import { motion } from 'framer-motion';
import AboutUsTire from '../../Assets/Images/Home/AboutUsTire.png';
import AgriculturalTires from '../../Assets/Images/Home/AgriculturalTires.png';
import CommercialTire from '../../Assets/Images/Home/CommercialTires.png';
import OTRTires from '../../Assets/Images/Home/OTRTires.png';
import industrialtire from '../../Assets/Images/Home/industrialtire_logo.png';

import useMediaQuery from '../../Hooks/CustomMediaQuery';

export const AboutUs = () => {
  const [ShowMoreAboutUS, setShowMoreAboutUS] = useState(false);
  const isDesktop = useMediaQuery('(min-width:1148px)');

  return (
    <div id="AboutUs_Section">
      <div
        id="specialmaininner"
        style={{
          backgroundImage:
            // eslint-disable-next-line operator-linebreak
            'url(https://raw.githubusercontent.com/shantanusoam/kal_tires/kaltireBranch/Assets/Images/Home/AboutUs_background.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="">
          <div className="lg:grid lg:grid-cols-10 items-center py-12">
            <div className="lg:hidden block">
              <div className="text-3xl tracking-tight pb-4 text-black font-poppins font-semibold lg:block text-center">
                ABOUT US
              </div>
            </div>
            <div className="lg:hidden block">
              <div className="lg:relative lg:mt-4 self-start ">
                <Image
                  className="lg:absolute lg:inset-0 h-60 w-full lg:h-full object-cover object-center lg:rounded-tl-md  "
                  src={AboutUsTire}
                  alt="tires"
                />
              </div>
            </div>
            <div className=" md:px-10 px-6 lg:px-0 inline-block  lg:ml-20  col-span-4 max-w-5xl  mx-auto  text-center lg:text-left ">
              <div
                //   className="py-12 md:px-10 px-6 lg:px-0 max-w-3xl lg:max-w-md mx-auto col-span-2 "
                className="  inline-block     mx-auto   "
              >
                <motion.div
                  initial={{ y: +50, opacity: 0.5 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-3xl tracking-tight   font-poppins font-semibold lg:inline-block hidden">
                    <span className=" text-neutral-800  border-b-2 hover:border-b-4 hover:pb-0 transition-all ease-in-out -pb-2 duration-100  border-y-PrimaryTwo   2xl:w-1/2 xl:w-3/5 w-4/5">
                      ABOUT US
                    </span>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ y: +50, opacity: 0.5 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-neutral-500 mt-5 2xl:text-lg lg:h-96  pr-4  overflow-y-scroll  lg:text-base text-sm  font-normal  font-Helvetica scrollbar   whitespace-normal text-justify">
                    Are you looking for quality tires for your fleet? Does a
                    blowout leave you stranded on your way? Are you looking for
                    24/7 roadside assistance? Are you short of time and unable
                    to find pick-up & delivery services nearby? Don’t worry; we
                    have it all covered! KAL Group Inc. has launched a
                    full-service commercial tire business vertical, KVL Tires.{' '}
                    {isDesktop ? (
                      <>
                        <br />
                        <br />
                      </>
                    ) : null}
                    KVL Tires is a full-service commercial tire dealer based in
                    the United States. We offer high-quality products and
                    services to a diverse clientele at affordable prices. With
                    our headquarters in Fontana, California, we are currently
                    operating in 18+ locations across the US and growing.
                    <br />
                    <br />
                    <p>
                      At KVL Tires, we welcome everybody, whether you are an
                      owner-operator, repair shop, or fleet owner. Our trained
                      specialists strive to deliver quality, safety, and value
                      for a smooth tire buying & service experience. We put the
                      time into understanding our customer’s needs and providing
                      them with satisfactory solutions.
                      {/* Our unparalleled range of new, used & retread tires caters
                      to the needs of all commercial vehicles. The extensive
                      tire product lines include commercial, agricultural,
                      off-the-road (OTR), industrial, and earthmover tires. We
                      have partnered with trusted tire manufacturers such as
                      Continental, Goodyear, BKT, General, Ameristeel, Tornado,
                      Cooper, and many more.
                      <br />
                      <br />
                      Besides selling new tires, KVL Tires also offers 24/7
                      Roadside Assistance Service. You can quickly find skilled
                      technicians nearby, even in remote areas. Our services
                      include pick-up & delivery, on-site services, flat
                      repairs, mounted wheel programs, wheel alignment services,
                      light mechanical services, and more.
                      <br />
                      <br />
                      At KVL Tires, everybody is welcome, whether an owner
                      operator, repair shop or fleet owner. Our trained
                      specialists strive to deliver quality, safety, and value
                      for a smooth tire buying & service experience. We put the
                      time into understanding our customer’s needs and providing
                      them with satisfactory solutions. We continue to invest in
                      our service facilities, employees, equipment, vehicles,
                      and technology systems to provide you with top-notch tires
                      & services. So, if you need ‘passenger car tires’ or ‘tire
                      alignment near me’, reach out to us without a second
                      thought. */}
                    </p>
                    <br />
                    {/* <p
                      className={`text-left mt-4 block font-Helvetica Transition-Height-${
                        ShowMoreAboutUS ? 'in' : 'out'
                      }`}
                    >
                      {ShowMoreAboutUS ? (
                        <p>
                          Our unparalleled range of new, used & retread tires
                          caters to the needs of all commercial vehicles. The
                          extensive tire product lines include commercial,
                          agricultural, off-the-road (OTR), industrial, and
                          earthmover tires. We have partnered with trusted tire
                          manufacturers such as Continental, Goodyear, BKT,
                          General, Ameristeel, Tornado, Cooper, and many more.
                          <br />
                          <br />
                          Besides selling new tires, KVL Tires also offers 24/7
                          Roadside Assistance Service. You can quickly find
                          skilled technicians nearby, even in remote areas. Our
                          services include pick-up & delivery, on-site services,
                          flat repairs, mounted wheel programs, wheel alignment
                          services, light mechanical services, and more.
                          <br />
                          <br />
                          At KVL Tires, everybody is welcome, whether an owner
                          operator, repair shop or fleet owner. Our trained
                          specialists strive to deliver quality, safety, and
                          value for a smooth tire buying & service experience.
                          We put the time into understanding our customer’s
                          needs and providing them with satisfactory solutions.
                          We continue to invest in our service facilities,
                          employees, equipment, vehicles, and technology systems
                          to provide you with top-notch tires & services. So, if
                          you need ‘passenger car tires’ or ‘tire alignment near
                          me’, reach out to us without a second thought.
                        </p>
                      ) : null}
                    </p>
                    <div
                      onClick={() => setShowMoreAboutUS(!ShowMoreAboutUS)}
                      className="underline decoration-2 decoration-sky-500 text-PrimaryTwo font-medium cursor-pointer "
                    >
                      {!ShowMoreAboutUS ? 'Show More' : 'Show less'}
                    </div> */}
                  </div>
                </motion.div>
              </div>
              <div className="block h-auto">
                {/* <div>
                  <div className="flex flex-row justify-center md:justify-start pt-4 sm:flex-nowrap flex-wrap">
                   
                    <div className="flex flex-col bg-zinc-50  py-4  ">
                      <div className="px-6">
                        <Image
                          src={CommercialTire}
                          alt="Commercial
                          Tires"
                        />
                      </div>

                      <h1 className="text-center font-poppins text-sm">
                        Commercial <br />
                        Tires
                      </h1>
                    </div>
                    <div className="flex flex-col bg-zinc-50  py-4 ml-4 ">
                      <div className="px-6">
                        <Image src={industrialtire} alt="OTR Tires" />
                      </div>

                      <h2 className="text-center font-poppins text-sm">
                        Industrial Tires <br />
                      </h2>
                  
                    </div>
              
                    <div className="flex flex-col bg-zinc-50  pt-4  sm:mt-0 mt-4 sm:ml-4 ">
                      <div className="px-6">
                        <Image src={OTRTires} alt="OTR Tires" />
                      </div>

                      <h2 className="text-center font-poppins text-sm ">
                        OTR Tires <br />
                      </h2>
                    </div>
                    <div className="flex flex-col bg-zinc-50 py-4 ml-4  sm:mt-0 mt-4">
                      <div className="px-6">
                        <Image
                          src={AgriculturalTires}
                          alt="Agricultural
                          Tires"
                        />
                      </div>

                      <h2 className="text-center font-poppins text-sm">
                        Agricultural <br />
                        Tires
                      </h2>
                    </div>
                   
                  </div>
                </div> */}

                <div className="flex  mt-8 justify-center md:justify-start">
                  <a href="tel:8008080025">
                    <div className="flex lg:justify-start justify-center lg:pb-4 pb-4  ">
                      <div
                        id="Hotline"
                        className="flex items-center lg:pr-0 md:pr-4 pr-0"
                      >
                        <div id="Hotline-first" className="md:mr-4 mr-2 ">
                          <BiMessageDetail className="h-6 w-6 text-kaltire-red" />
                        </div>
                        <div id="Hotline-second">
                          <p className="font-bold text-left font-poppins">
                            Live Chat
                          </p>
                          <p>Chat With Expert</p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="tel:8008080025">
                    <div className="flex lg:justify-start justify-center lg:pb-4 pb-4  ">
                      <div
                        id="Hotline"
                        className="flex items-center lg:pr-0 md:pr-4 pr-0"
                      >
                        <div id="Hotline-first" className="md:mr-4 mr-2 ">
                          <MdLocalPhone className="h-6 w-6 text-kaltire-red" />
                        </div>
                        <div id="Hotline-second">
                          <p className="font-bold text-left font-poppins">
                            Toll Free
                          </p>
                          <p>+1-800-808-0025</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div />
            <motion.div
              whileInView={{ x: [+100, 0], opacity: [0.5, 1] }}
              transition={{ duration: 0.4 }}
              className="lg:block hidden col-span-5  xl:mr-20 "
            >
              <div className="  ">
                <Image className=" " src={AboutUsTire} alt="tires" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
