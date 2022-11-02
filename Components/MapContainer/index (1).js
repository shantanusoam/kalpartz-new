import React from 'react';

// eslint-disable-next-line import/no-unresolved
import Map from '../../assets/Map';

import { useHover } from '../../Hooks/Hover';

import useMediaQuery from '../../Hooks/CustomMediaQuery';

export const MapConatiner = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [Fontana, isFontana] = useHover();
  const [Bakersfield, isBakersfield] = useHover();
  const [SanMarcos, isSanMarcos] = useHover();
  const [Calgary, isCalgary] = useHover();
  const [Arlington, isArlington] = useHover();
  const [Hampton, isHampton] = useHover();
  // const [Stockton, isStockton] = useHover();
  const [Atlanta, isAtlanta] = useHover();
  const [Lathrop, isLathrop] = useHover();
  // const [Almondfontana,isAlmondfontana] = useHover();
  // const [ValleyFontana,isValleyFontana] = useHover();
  const [Indianapolis, isIndianapolis] = useHover();
  const [Springdale, isSpringdale] = useHover();
  const [abbotsford, isabbotsford] = useHover();
  return (
    <div
      id="mainmapcontainer"
      className="bg-Lightblue flex flex-col-reverse  md:flex-row p-8 bg-cover"
      style={{
        backgroundImage: `${
          isDesktop
            ? 'url(https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/MapBackgroundImage.png)'
            : 'url(https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/MapBackgroundImage.png)'
        }`,
      }}
    >
      <div className=" svg-container">
        <Map
          Fontana={isFontana}
          Bakersfield={isBakersfield}
          SanMarcos={isSanMarcos}
          Calgary={isCalgary}
          Arlington={isArlington}
          Hampton={isHampton}
          // Stockton={isStockton}
          Atlanta={isAtlanta}
          Indianapolis={isIndianapolis}
          Springdale={isSpringdale}
          abbotsford={isabbotsford}
          Lathrop={isLathrop}
        />
      </div>
      <div className="md:-m-8 -mx-8 w-full flex-1 ">
        <div
          className=" flex-col flex content-center justify-center w-full flex-1  self-start items-start bg-cover bg-no-repeat bg-center  lg:ml-12  lg:mb-0 mb-2  h-full"
          style={{
            backgroundImage: `${
              isDesktop
                ? 'url(https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/MapBackgroundImage.png)'
                : 'url(https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/MapBackgroundImage.png)'
            }`,
            display: 'flex',
          }}
        >
          <div className="lg:-mt-28 -mt-0 w-full pl-16 md:mb-0 mb-24">
            <div className="w-full ">
              <div className="flex flex-row">
                <svg
                  width="37"
                  height="35"
                  viewBox="0 0 37 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.1178 35C28.124 35 36.2357 27.165 36.2357 17.5C36.2357 7.83502 28.124 0 18.1178 0C8.11163 0 0 7.83502 0 17.5C0 27.165 8.11163 35 18.1178 35ZM18.0799 28.703C18.3894 27.2847 20.0584 23.5208 23.7808 19.4003C29.5466 13.0179 24.1047 6.07208 18.0799 6.21808C12.055 6.36409 5.83574 12.6839 13.0483 20.3597C15.1646 22.7376 16.7626 24.8234 18.0799 28.703Z"
                    fill="white"
                  />
                  <ellipse
                    cx="18.0963"
                    cy="13.7665"
                    rx="3.84383"
                    ry="3.71275"
                    fill="white"
                  />
                </svg>

                <h3 className="xl:text-4xl self-start text-white font-bold md:text-2xl pl-4">
                  Our Locations
                </h3>
              </div>

              <div className="lg:mt-8 mt-2 text-white font-desc text-descnew ">
                We serve you at multiple location
              </div>
            </div>
            <div className="w-full lg:mt-8 mt-2">
              <div className="m-2 lg:w-1/3 w-1/2">
                {' '}
                <div id="mainnewnavcontainer">
                  <div id="innermainnavcontainer">
                    <div className="group inline-block w-full">
                      <button
                        type="button"
                        className="outline-none focus:outline-none  px-3 py-1 bg-white   rounded-md flex items-center w-full h-12"
                      >
                        <span className="pr-1 font-semibold flex-1">
                          Canada
                        </span>
                        <span>
                          <svg
                            className="fill-current h-4 w-4 transform group-hover:-rotate-180
 transition duration-150 ease-in-out"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </span>
                      </button>
                      <ul
                        className="bg-white  rounded-sm transform scale-0 group-hover:scale-100 absolute
 transition duration-150 ease-in-out origin-top min-w- w-max z-10"
                      >
                        <span className="w-max mx-4 text-white">Canada</span>
                        <li className="rounded-sm px-6 py-1 hover:bg-yellow-shadowhover flex justify-center items-center">
                          <button
                            type="button"
                            className="outline-none focus:outline-none  px-3 py-1   rounded-sm flex items-center w-full h-12"
                          >
                            <span className="pr-1 font-semibold flex-1">
                              British Columbia
                            </span>
                            <span className="mr-auto">
                              <svg
                                className="fill-current h-4 w-4 transform hover:-rotate-180
 transition duration-150 ease-in-out"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                              </svg>
                            </span>
                          </button>
                          <ul
                            className=" bg-white border rounded-sm absolute  right-0
transition duration-150 ease-in-out origin-top-left
min-w-32
"
                          >
                            <li
                              className="px-3 py-1 hover:bg-yellow-shadowhover"
                              ref={abbotsford}
                            >
                              <li className="sc-bczRLJ gbaUcE">
                                <div className="sc-gsnTZi evWpLA">
                                  Abbotsford
                                </div>
                              </li>
                            </li>
                          </ul>
                        </li>
                        <li className="rounded-sm px-6 py-1 hover:bg-yellow-shadowhover flex justify-center items-center">
                          <button
                            type="button"
                            className="outline-none focus:outline-none  px-3 py-1   rounded-sm flex items-center w-full h-12"
                          >
                            <span className="pr-1 font-semibold flex-1">
                              Alberta
                            </span>
                            <span className="mr-auto">
                              <svg
                                className="fill-current h-4 w-4 transform hover:-rotate-180
 transition duration-150 ease-in-out"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                              </svg>
                            </span>
                          </button>
                          <ul
                            className=" bg-white border rounded-sm absolute  right-0
transition duration-150 ease-in-out origin-top-left
min-w-32
"
                          >
                            <li
                              className="px-3 py-1 hover:bg-yellow-shadowhover"
                              ref={Calgary}
                            >
                              <li className="sc-bczRLJ gbaUcE">
                                <div className="sc-gsnTZi evWpLA">Calgary</div>
                              </li>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="m-2 lg:w-1/3 w-1/2">
                {' '}
                <div id="mainnewnavcontainer">
                  <div id="innermainnavcontainer">
                    <div className="group inline-block w-full">
                      <button
                        type="button"
                        className="outline-none focus:outline-none z-0  px-3 py-1 hover:bg-yellow-shadowhover bg-white  rounded-md flex items-center w-full h-12"
                      >
                        <span className="pr-1 font-semibold flex-1">USA</span>
                        <span>
                          <svg
                            className="fill-current h-4 w-4 transform group-hover:-rotate-180
 transition duration-150 ease-in-out"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </span>
                      </button>
                      <ul
                        className="bg-white  rounded-sm transform scale-0 group-hover:scale-100 absolute
 transition duration-150 ease-in-out origin-top min-w- w-max"
                      >
                        <span className="w-max mx-4 text-white">USA</span>
                        <li className="rounded-sm px-6 py-1 hover:bg-yellow-shadowhover flex justify-center items-center">
                          <button
                            type="button"
                            className="outline-none focus:outline-none  px-3 py-1   rounded-sm flex items-center w-full h-12"
                          >
                            <span className="pr-1 font-semibold flex-1">
                              California
                            </span>
                            <span className="mr-auto">
                              <svg
                                className="fill-current h-4 w-4 transform hover:-rotate-180
 transition duration-150 ease-in-out"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                              </svg>
                            </span>
                          </button>
                          <ul
                            className=" bg-white border rounded-sm absolute  right-0 top-16
transition duration-150 ease-in-out origin-top-left
min-w-32
"
                          >
                            <li
                              className="px-3 py-1 hover:bg-yellow-shadowhover"
                              ref={Fontana}
                            >
                              <li className="sc-bczRLJ gbaUcE">
                                <div className="sc-gsnTZi evWpLA">Fontana</div>
                              </li>
                            </li>
                            <li
                              className="px-3 py-1 hover:bg-yellow-shadowhover"
                              ref={Bakersfield}
                            >
                              <li className="sc-bczRLJ gbaUcE">
                                <div className="sc-gsnTZi evWpLA">
                                  Bakersfield
                                </div>
                              </li>
                            </li>
                            <li className="px-3 py-1 hover:bg-yellow-shadowhover">
                              <li className="sc-bczRLJ gbaUcE" ref={SanMarcos}>
                                <div className="sc-gsnTZi evWpLA">
                                  San Marcos
                                </div>
                              </li>
                            </li>
                            {/* <li class="px-3 py-1 hover:bg-yellow-shadowhover">
                              <li class="sc-bczRLJ gbaUcE" ref={Stockton}>
                                <div class="sc-gsnTZi evWpLA">Stockton</div>
                              </li>
                            </li> */}
                            <li className="px-3 py-1 hover:bg-yellow-shadowhover">
                              <li className="sc-bczRLJ gbaUcE" ref={Lathrop}>
                                <div className="sc-gsnTZi evWpLA"> Lathrop</div>
                              </li>
                            </li>
                            {/* <li class="px-3 py-1 hover:bg-yellow-shadowhover">
                              <li class="sc-bczRLJ gbaUcE" ref={Almondfontana}>
                                <div class="sc-gsnTZi evWpLA">AlmondAve</div>
                              </li>
                            </li> */}
                            {/* <li class="px-3 py-1 hover:bg-yellow-shadowhover">
                              <li class="sc-bczRLJ gbaUcE" ref={ValleyFontana}>
                                <div class="sc-gsnTZi evWpLA">ValleyBlvd</div>
                              </li>
                            </li> */}
                          </ul>
                        </li>
                        <li className="rounded-sm px-6 py-1 hover:bg-yellow-shadowhover flex justify-center items-center">
                          <button
                            type="button"
                            className="outline-none focus:outline-none  px-3 py-1   rounded-sm flex items-center w-full h-12"
                          >
                            <span className="pr-1 font-semibold flex-1">
                              Georgia
                            </span>
                            <span className="mr-auto">
                              <svg
                                className="fill-current h-4 w-4 transform hover:-rotate-180
 transition duration-150 ease-in-out"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                              </svg>
                            </span>
                          </button>
                          <ul
                            className=" bg-white border rounded-sm absolute  right-0
transition duration-150 ease-in-out origin-top-left
min-w-32
"
                          >
                            <li
                              className="px-3 py-1 hover:bg-yellow-shadowhover"
                              ref={Atlanta}
                            >
                              <li className="sc-bczRLJ gbaUcE">
                                <div className="sc-gsnTZi evWpLA">Atlanta</div>
                              </li>
                            </li>
                          </ul>
                        </li>
                        <li className="rounded-sm px-6 py-1 hover:bg-yellow-shadowhover flex justify-center items-center">
                          <button
                            type="button"
                            className="outline-none focus:outline-none  px-3 py-1   rounded-sm flex items-center w-full h-12"
                          >
                            <span className="pr-1 font-semibold flex-1">
                              Indiana
                            </span>
                            <span className="mr-auto">
                              <svg
                                className="fill-current h-4 w-4 transform hover:-rotate-180
 transition duration-150 ease-in-out"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                              </svg>
                            </span>
                          </button>
                          <ul
                            className=" bg-white border rounded-sm absolute  right-0
transition duration-150 ease-in-out origin-top-left
min-w-32
"
                          >
                            <li
                              className="px-3 py-1 hover:bg-yellow-shadowhover"
                              ref={Indianapolis}
                            >
                              <li className="sc-bczRLJ gbaUcE">
                                <div className="sc-gsnTZi evWpLA">
                                  Indianapolis
                                </div>
                              </li>
                            </li>
                          </ul>
                        </li>
                        <li className="rounded-sm px-6 py-1 hover:bg-yellow-shadowhover flex justify-center items-center">
                          <button
                            type="button"
                            className="outline-none focus:outline-none  px-3 py-1   rounded-sm flex items-center w-full h-12"
                          >
                            <span className="pr-1 font-semibold flex-1">
                              New Jersey
                            </span>
                            <span className="mr-auto">
                              <svg
                                className="fill-current h-4 w-4 transform hover:-rotate-180
 transition duration-150 ease-in-out"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                              </svg>
                            </span>
                          </button>
                          <ul
                            className=" bg-white border rounded-sm absolute  right-0
transition duration-150 ease-in-out origin-top-left
min-w-32
"
                          >
                            <li
                              className="px-3 py-1 hover:bg-yellow-shadowhover"
                              ref={Hampton}
                            >
                              <li className="sc-bczRLJ gbaUcE">
                                <div className="sc-gsnTZi evWpLA">Hampton</div>
                              </li>
                            </li>
                          </ul>
                        </li>
                        <li className="rounded-sm px-6 py-1 hover:bg-yellow-shadowhover flex justify-center items-center">
                          <button
                            type="button"
                            className="outline-none focus:outline-none  px-3 py-1   rounded-sm flex items-center w-full h-12"
                          >
                            <span className="pr-1 font-semibold flex-1">
                              Arkansas
                            </span>
                            <span className="mr-auto">
                              <svg
                                className="fill-current h-4 w-4 transform hover:-rotate-180
 transition duration-150 ease-in-out"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                              </svg>
                            </span>
                          </button>
                          <ul
                            className=" bg-white border rounded-sm absolute  right-0
transition duration-150 ease-in-out origin-top-left
min-w-32
"
                          >
                            <li
                              className="px-3 py-1 hover:bg-yellow-shadowhover"
                              ref={Springdale}
                            >
                              <li className="sc-bczRLJ gbaUcE">
                                <div className="sc-gsnTZi evWpLA">
                                  Springdale
                                </div>
                              </li>
                            </li>
                          </ul>
                        </li>
                        <li className="rounded-sm px-6 py-1 hover:bg-yellow-shadowhover flex justify-center items-center">
                          <button
                            type="button"
                            className="outline-none focus:outline-none  px-3 py-1   rounded-sm flex items-center w-full h-12"
                          >
                            <span className="pr-1 font-semibold flex-1">
                              Texas
                            </span>
                            <span className="mr-auto">
                              <svg
                                className="fill-current h-4 w-4 transform hover:-rotate-180
 transition duration-150 ease-in-out"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                              </svg>
                            </span>
                          </button>
                          <ul
                            className=" bg-white border rounded-sm absolute  right-0
transition duration-150 ease-in-out origin-top-left
min-w-32
"
                          >
                            <li
                              className="px-3 py-1 hover:bg-yellow-shadowhover"
                              ref={Arlington}
                            >
                              <li className="sc-bczRLJ gbaUcE">
                                <div className="sc-gsnTZi evWpLA">
                                  Arlington
                                </div>
                              </li>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
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
