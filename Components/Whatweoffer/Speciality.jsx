import React from 'react';
import Image from 'next/image';
import { MdLocalPhone } from 'react-icons/md';
// import { BiMessageDetail } from 'react-icons/bi';
import blacktire from '../../Assets/Images/Whatweoffer/speciality/blacktire.png';
import blacktiremobile from '../../Assets/Images/Whatweoffer/speciality/blacktire - Copy.png';
import useMediaQuery from '../../Hooks/CustomMediaQuery';

export const Speciality = () => {
  const isDesktop = useMediaQuery('(min-width:1148px)');
  return (
    <div id="specialmain">
      <div
        id="specialmaininner"
        style={{
          backgroundImage:
            // eslint-disable-next-line operator-linebreak

            isDesktop
              ? 'url(https://raw.githubusercontent.com/shantanusoam/kal_tires/kaltireBranch/Assets/Images/Whatweoffer/speciality/cooperbackg.png)'
              : 'url(https://raw.githubusercontent.com/Kalfreight-In/KalTires_new/main/Assets/Images/Whatweoffer/speciality/cooperbackgmobile.png)',

          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="bg-speciality-background ">
          <div className="lg:grid lg:grid-cols-3 items-center lg:pl-12 lg:pr-8">
            <div className="lg:hidden block pt-6">
              {!isDesktop ? (
                <h2 className="text-3xl tracking-tight pb-4 text-black font-Helvetica font-semibold lg:block text-center">
                  <span className="block">
                    <span className=" px-4 font-poppins ">
                      {' '}
                      <span className="border-b-2 border-orange-600 py-2">
                        Specialty Tires
                      </span>{' '}
                    </span>
                  </span>
                </h2>
              ) : null}
            </div>
            <div className="lg:hidden block">
              <div className="lg:relative lg:mt-4 flex justify-center md:pr-0">
                <Image
                  className="lg:absolute lg:inset-0 h-60 w-full lg:h-full object-cover object-center lg:rounded-tl-md  "
                  src={blacktiremobile}
                  alt="Speciality Tires for Heavy Duty"
                />
              </div>
            </div>
            <div className=" px-0 lg:px-0 max-w-5xl  mx-auto col-span-2  text-center lg:text-left lg:ml-8">
              {isDesktop ? (
                <h2 className="text-3xl tracking-tight   text-black font-Helvetica pt-6 font-semibold lg:block ">
                  <span className="block">
                    <span className="border-kaltire-red border-b-2 font-poppins py-2">
                      Specialty Tires
                    </span>
                  </span>
                </h2>
              ) : null}

              <p className="2xl:text-lg lg:text-base text-sm text-neutral-500  mt-5     whitespace-normal text-justify font-Helvetica lg:px-0 px-6 md:px-24">
                We strive to provide the best quality tire for the application
                suitable to your operation. The industrial sector performs
                loading, excavating, and lifting material, increasing the need
                for high-performance industrial tires. Earthmover tires are
                ideal for rougher terrains and rugged landscapes such as mining
                and construction sites. Advanced farming equipment requires
                reliable agricultural tires to plow, dig & explore the farmlands
                efficiently. The light-truck tires are suitable for vehicles
                driving off-road to haul heavier loads. Passenger tires run
                smoothly on paved roadways and carry standard load sizes. Check
                out our broad spectrum of specialty tires.
                {isDesktop ? (
                  <>
                    <br />
                    <br />
                  </>
                ) : null}
                {/* cum animi, totam assumenda. Commodi quaerat consequuntur maxime,
                rem quis, enim, velit provident asperiores voluptatem voluptate
                esse reiciendis vitae ipsa hic. Dolor excepturi et veniam!
                Quaerat omnis optio reiciendis asperiores soluta dolorem? */}
              </p>

              <div className="block pt-4" id="PhoneEmailRoad" />
              <div className="md:flex hidden 2xl:mt-8  pb-6  justify-center lg:justify-start ">
                <div className="flex lg:justify-center lg:pb-0 pb-4 ">
                  <a href="tel:8008080025" className="cursor-pointer">
                    <div
                      id="Hotline"
                      className="flex items-center lg:pr-0 md:pr-4 pr-0"
                    >
                      <div id="Hotline-first" className="md:mr-4 mr-2 ">
                        <MdLocalPhone className="h-6 w-6 text-kaltire-red" />
                      </div>
                      <div id="ScrollIndust">
                        <span
                          id="InnerphoneEmailRoad"
                          className="font-bold font-Helvetica "
                        >
                          Toll Free
                        </span>
                        <p className="font-Helvetica">+1-800-808-0025</p>
                      </div>
                    </div>
                  </a>
                  {/* <div
                    id="LiveChat"
                    className="md:ml-6 ml-10 flex items-center lg:pr-0 pr-4 "
                  >
                    <div id="LivechatFirst" className="md:mx-4 mx-2">
                      <BiMessageDetail className="h-6 w-6 text-kaltire-red" />
                    </div>
                    <div id="LivechatSecond">
                      <h1 className="font-bold">Live Chat </h1>
                      <p>Chat with experts</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="lg:block hidden">
              <div className="lg:relative lg:mt-4 self-start">
                <Image
                  className="lg:absolute lg:inset-0 h-60 w-full lg:h-full object-cover object-center lg:rounded-tl-md"
                  src={blacktire}
                  alt="Speciality Tires for Heavy Duty"
                />
              </div>
            </div>
            <div className="md:hidden flex mt-8 justify-center lg:justify-start">
              <div className="flex lg:justify-center lg:pb-0 pb-4 ">
                <a href="tel:8008080025">
                  <div
                    id="Hotline"
                    className="flex items-center lg:pr-0 md:pr-4 pr-0"
                  >
                    <div id="Hotline-first" className="md:mx-4 mx-2 ">
                      <MdLocalPhone className="h-6 w-6 text-kaltire-red" />
                    </div>
                    <div>
                      <span id="InnerphoneEmailRoad" className="font-bold">
                        Toll Free
                      </span>
                      <p>+1-800-808-0025</p>
                    </div>
                  </div>
                </a>
                {/* <div
                  id="LiveChat"
                  className="md:ml-6 ml-10 flex items-center lg:pr-0 pr-4 "
                >
                  <div id="LivechatFirst" className="md:mx-4 mx-2">
                    <BiMessageDetail className="h-6 w-6 text-kaltire-red" />
                  </div>
                  <div id="LivechatSecond">
                    <h1 className="font-bold">Live Chat </h1>
                    <p>Chat with experts</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
