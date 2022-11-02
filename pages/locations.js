/* eslint-disable comma-dangle */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
// import { Link } from 'react-scroll';
import { LocalBusinessJsonLd } from 'next-seo';
import dynamic from 'next/dynamic';
import { RiPhoneFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';
import { scroller, Element } from 'react-scroll';
import Head from 'next/head';
import Image from 'next/image';
import { AniArrow } from '../Assets/Icons/Arrow.gif';
import { MapData1, MapData2 } from '../data/data';
import useMediaQuery from '../Hooks/CustomMediaQuery';
// import { useHover } from '../Hooks/Hover';
import Search from '../Components/location/Search';
import { toTitleCase } from '../HelpFunctions/toTitlecase';

// eslint-disable-next-line no-unused-vars
const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;
export const SidebarMenu = styled.ul`
  display: flex;

  flex-direction: column;
  items-align: center;
  justify-content: center;
`;
export const SidebarLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.5rem;
  text-decoration: none;
  padding-right: 3rem;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  &:hover {
    color: #ffffff;
    transition: 0.2s ease-in-out;
  }
`;
export const SidebarLinkR = styled.a`
  display: flex;
  align-items: left;
  justify-content: left;
  text-align: left;
  border-bottom: 1px solid #fff;
  font-size: 1rem;
  font-weight: 600;
  width: 85%;
  padding: 1rem 1rem 1rem 0rem;
  text-decoration: none;
  // padding-right: 3rem;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  &:hover {
    // color: #000000;
    transition: 0.2s ease-in-out;
  }
`;
export const Divlink = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 0rem;
  font-size: 1rem;

  font-weight: 600;
  text-decoration: none;
  // padding-right: 3rem;
  transition: 0.2s ease-in-out;
  text-decoration: none;

  color: #000;
  cursor: pointer;
  &:hover {
    // color: #000000;
    transition: 0.2s ease-in-out;
  }
`;
// use hover reducer to change the visibility on hover of the sidebar when dynimically created links

// const useHoverReducer = (initialState, reducer) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const [ref, isHovered] = useHover();
//   useEffect(() => {
//     if (isHovered) {
//       dispatch({ type: 'HOVER' });
//     } else {
//       dispatch({ type: 'UNHOVER' });
//     }
//   }, [isHovered]);
//   return [state, ref];
// };
const LeafMap = dynamic(
  () => import('../Components/MapContainer/LeafMap'), // replace '@components/map' with your component's location
  {
    loading: () => <p>A map is loading now</p>,
    ssr: false, // This line is important. It's what prevents server-side render
  }
);

const MapCaller = ({ Data, SData, location }) => (
  <LeafMap Data2={MapData2} Data={Data} SData={SData} location={location} />
);

const location = () => {
  const [Maplocation, setMapocation] = useState();
  const [TypedLocation, setTypedLocation] = useState();
  const isDesktop = useMediaQuery('(min-width:1120px)');
  // const [isBrowser, setIsBrowser] = useState(false);
  // useEffect(() => {
  //   setIsBrowser(true);
  // }, []);

  // if (!isBrowser) {
  //   return null;
  // }

  const [visibilities, setVisibilities] = useState(() =>
    MapData1.map((x) => true)
  );

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API

    MapData1.map((x) => true);
  }, [visibilities, TypedLocation]);

  const handleClick = (event, coordinates) => {
    scroller.scrollTo('MapContanierElement', {
      duration: 1500,
      delay: 30,

      offset: isDesktop ? 0 : 100, // Scrolls to element + 50 pixels down the page
    });
    setMapocation(coordinates);
    const index = parseInt(event.currentTarget.dataset.index, 10);

    const newVisibilities = [...visibilities];

    newVisibilities[index] = !newVisibilities[index];
    setVisibilities(newVisibilities);
  };

  return (
    <>
      <Head>
        <title>
          Tire Service Center Locations in the United State | Find Tires Service
          Centers Near Me
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Whether you need a new set of tires or services, KVL Tire is here to help you 27X7. Visit our nearest locations today."
        />
      </Head>
      {MapData1.map((data) => (
        <LocalBusinessJsonLd
          key={data.id}
          keyOverride={data.id}
          type="Store"
          id="https://kvltires.com/locations"
          name="KVLTires"
          description="Whether you need a new set of tires or services, KVL Tire is here to help you 27X7. Visit our nearest locations today."
          url="https://kvltires.com"
          telephone="+1-800-808-0025"
          address={{
            streetAddress: data.properties.address,
            addressLocality: data.properties.city,
            addressRegion: data.properties.Phone,
            postalCode: data.properties.Email,
            addressCountry: 'US',
          }}
          geo={{
            latitude: data.geometry.coordinates[0],
            longitude: data.geometry.coordinates[1],
          }}
          images={[data.properties.bgimage]}
          openingHours={[
            {
              opens: '07:00 Am',
              closes: '5:00 PM',
              dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
              ],
              validFrom: '2019-12-23',
              validThrough: '2020-04-02',
            },
          ]}
        />
      ))}
      {/* {MapData2.map((data) => (
        <LocalBusinessJsonLd
          key={data.id}
          keyOverride={data.properties.city}
          type="Store"
          id="http://davesdeptstore.example.com"
          name="KVLTires"
          description="Whether you need a new set of tires or services, KVL Tire is here to help you 27X7. Visit our nearest locations today."
          url="https://kvltires.com/locations"
          telephone="+1-800-808-0025"
          address={{
            streetAddress: data.properties.address,
            addressLocality: data.properties.city,
            addressRegion: data.properties.Phone,
            postalCode: data.properties.Email,
            addressCountry: 'CANADA',
          }}
          geo={{
            latitude: data.geometry.coordinates[0],
            longitude: data.geometry.coordinates[1],
          }}
          images={[data.properties.bgimage]}
          openingHours={[
            {
              opens: '07:00 Am',
              closes: '5:00 PM',
              dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
              ],
              validFrom: '2019-12-23',
              validThrough: '2020-04-02',
            },
          ]}
        />
      ))} */}

      <div
        id="mainmapcontainer"
        className="bg-black flex flex-col  md:flex-col  bg-cover"
      >
        <div className="flex flex-row items-center justify-center md:justify-end ">
          <div className="md:flex hidden  items-center ">
            <h1 className="text-white mr-2 font-semibold text-2xl ">
              Search Your Nearest Location
            </h1>
            <div className="h-12 w-12  rotate-90">
              <Image src={require('../Assets/Icons/Arrow.gif')} />
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-end">
            <Search setTypedLocation />
          </div>
        </div>

        <Element id="MapContanier" name="MapContanierElement" className="z-0">
          {/* <Map
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
          Calexico={isCalexico}
        /> */}
          <MapCaller
            Data={MapData1}
            Data2={MapData2}
            SData={visibilities}
            location={Maplocation}
          />
        </Element>
        <div className="w-full flex-1 ">
          <div
            className=" flex-col flex content-center justify-center w-full flex-1  self-start items-start bg-cover bg-no-repeat bg-center    lg:mb-0 mb-2  h-full"
            style={{
              backgroundImage: `${
                isDesktop
                  ? 'url(https://raw.githubusercontent.com/Kalfreight-In/KalTires_new/main/Assets/Images/Map/MapBg.png)'
                  : 'url(https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/MapBackgroundImage.png)'
              }`,
              display: 'flex',
            }}
          >
            <div className="  w-full  md:mb-0 bg-white ">
              <SidebarMenu className=" ">
                <div className="">
                  {MapData1.map((value, index) => (
                    <div
                      id={`${value.properties.ZipCode}`}
                      key={value.id}
                      className="bg-locationGrey mb-2"
                    >
                      <Divlink
                        duration={500}
                        delay={1000}
                        data-index={index}
                        onClick={(e) =>
                          handleClick(e, value.geometry.coordinates)
                        }
                      >
                        <div className="bg-red-600 p-2 lg:ml-20 ml-4 xl:w-1/6 lg:w-1/4 md:w-1/3 m-0 flex md:items-center md:justify-center">
                          <div className="flex flex-row ">
                            <svg
                              width="21"
                              height="29"
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

                            {/* <h3 className="xl:text-lg self-start text-white font-bold md:text-xl pl-4">
                            Our Locations
                          </h3> */}
                          </div>
                          <h2
                            className={
                              visibilities[index]
                                ? 'text-white text-center font-bold text-lg ml-3'
                                : 'text-white text-center font-bold text-lg ml-3'
                            }
                          >
                            {`${value.properties.City}, ${value.properties.State}`}
                          </h2>
                        </div>

                        {/* <span>
                        {visibilities[index] ? (
                          <BiMinus color="bg-white" />
                        ) : (
                          <BsPlus color="bg-white" />
                        )}

                        <BsPlus onClick={()=>setPlus(<BiMinus/>)}/>
                      </span> */}
                      </Divlink>
                      <div
                        className={`Transition-Height-${
                          visibilities[index] ? 'in' : 'out'
                        }`}
                        onClick={() =>
                          setMapocation(value.geometry.coordinates)
                        }
                      >
                        <ul>
                          {visibilities[index] ? (
                            <div className="text-black bg-white flex flex-center lg:flex-row flex-col  py-2  lg:px-20 px-8  justify-between ">
                              <div className="flex flex-center flex-col ">
                                {value.properties.Address ? (
                                  <div className="mb-2 w-locationsection">
                                    <span className="font-semibold text-md">
                                      KVL Tires{' '}
                                      {value.properties.TOW
                                        ? `- ${value.properties.TOW}`
                                        : null}
                                    </span>
                                    <p className=" font-normal text-md">
                                      {`${value.properties.Address}${', '}  ${
                                        value.properties.City
                                      }, ${value.properties.State}
                                    ${value.properties.ZipCode}`}
                                    </p>
                                    {value.properties.Manager ? (
                                      <p className=" font-normal text-md">
                                        Manager:{' '}
                                        {toTitleCase(value.properties.Manager)}
                                      </p>
                                    ) : (
                                      <div className="font-normal text-md">
                                        {/* Coming Soon */}
                                      </div>
                                    )}
                                  </div>
                                ) : null}

                                {value.properties.Address ? (
                                  <div className="pb-2">
                                    <p className=" font-normal text-md flex flex-row items-center ">
                                      <RiPhoneFill className="mr-4" />
                                      {value.properties.Phone}
                                    </p>
                                    <p className=" font-normal text-md flex flex-row items-center ">
                                      <MdEmail className="mr-4" />
                                      {value.properties.Email}
                                    </p>
                                  </div>
                                ) : (
                                  <div className="text-xl font-bold">
                                    Coming Soon
                                  </div>
                                )}
                              </div>
                              {value.properties.Address ? (
                                <div className="lg:flex flex-center flex-col lg:w-1/4 hidden">
                                  <span className="text-black font-semibold text-lg">
                                    Hours
                                  </span>
                                  <div>
                                    {value.timing.map((time, index) => (
                                      <p className="text-md" key={index}>
                                        {time}
                                      </p>
                                    ))}
                                  </div>
                                </div>
                              ) : (
                                <div className=" text-xl font-bold">
                                  {/* Coming Soon */}
                                </div>
                              )}

                              <div className="hidden flex-center flex-col lg:w-1/4 pb-2">
                                <span className="text-black font-semibold text-lg">
                                  Hours
                                </span>
                                <div>Monday to Friday: 7:30AM - 5:00PM</div>
                                <div>Saturday & Sunday: Closed</div>
                              </div>
                              {value.properties.Address ? (
                                <div className="flex flex-center flex-col lg:w-2/12 ">
                                  <Image
                                    src={value.properties.bgimage}
                                    alt={value.properties.City}
                                  />
                                  <div className="text-right text-sm pt-2">
                                    <a
                                      className="text-blue-500"
                                      href={value.properties.url}
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      See on map
                                    </a>
                                  </div>
                                </div>
                              ) : (
                                <div className="font-normal text-md">
                                  {/* Coming Soon */}
                                </div>
                              )}
                            </div>
                          ) : null}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  {MapData2.map((value, index) => (
                    <div
                      id={`${value.properties.ZipCode}`}
                      key={value.id}
                      className="bg-locationGrey mb-2"
                    >
                      <Divlink
                        duration={500}
                        delay={1000}
                        data-index={index}
                        onClick={(e) =>
                          handleClick(e, value.geometry.coordinates)
                        }
                      >
                        <div className="bg-red-600 p-2 lg:ml-20 ml-4 xl:w-1/6 lg:w-1/4 md:w-1/3 m-0 flex md:items-center justify-center">
                          <div className="flex flex-row ">
                            <svg
                              width="27"
                              height="25"
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

                            {/* <h3 className="xl:text-lg self-start text-white font-bold md:text-xl pl-4">
                            Our Locations
                          </h3> */}
                          </div>
                          <h2
                            className={
                              visibilities[index]
                                ? 'text-white text-center font-bold text-lg ml-3'
                                : 'text-white text-center font-bold text-lg ml-3'
                            }
                          >
                            {`${value.properties.City}, ${value.properties.State}`}
                          </h2>
                        </div>

                        {/* <span>
                        {visibilities[index] ? (
                          <BiMinus color="bg-white" />
                        ) : (
                          <BsPlus color="bg-white" />
                        )}

                        <BsPlus onClick={()=>setPlus(<BiMinus/>)}/>
                      </span> */}
                      </Divlink>
                      <div
                        className={`Transition-Height-${
                          visibilities[index] ? 'in' : 'out'
                        }`}
                        onClick={() =>
                          setMapocation(value.geometry.coordinates)
                        }
                      >
                        <ul>
                          {visibilities[index] ? (
                            <div className="text-black bg-white window.location.pathname flex flex-center lg:flex-row flex-col  py-2  lg:px-20 px-8  justify-between ">
                              <div className="flex flex-center flex-col ">
                                <div className="mb-2 w-locationsection">
                                  <div className="font-semibold text-md">
                                    KVL Tires
                                  </div>
                                  <div className=" font-normal text-md">
                                    {`${value.properties.Address}${', '}  ${
                                      value.properties.City
                                    }, ${value.properties.State} ${
                                      value.properties.ZipCode
                                    }`}
                                  </div>
                                  {value.properties.Manager ? (
                                    <div className=" font-normal text-md">
                                      Manager:{' '}
                                      {toTitleCase(value.properties.Manager)}
                                    </div>
                                  ) : null}
                                </div>
                                {value.properties.Phone ? (
                                  <div className="pb-2">
                                    <div className=" font-normal text-md flex flex-row items-center ">
                                      <RiPhoneFill className="mr-4" />
                                      {value.properties.Phone}
                                    </div>
                                    <div className=" font-normal text-md flex flex-row items-center ">
                                      <MdEmail className="mr-4" />
                                      {value.properties.Email}
                                    </div>
                                  </div>
                                ) : null}
                              </div>
                              <div className="lg:flex flex-center flex-col lg:w-1/4 hidden">
                                <span className="text-black font-semibold text-lg">
                                  Hours
                                </span>
                                <div>
                                  {value.timing.map((time, index) => (
                                    <p className="text-md" key={index}>
                                      {time}
                                    </p>
                                  ))}
                                </div>
                              </div>
                              <div className="hidden  flex-center flex-col lg:w-1/4 pb-2">
                                <span className="text-black font-semibold text-lg">
                                  Hours
                                </span>
                                <div>Monday to Friday: 7:30 AM - 5:00PM</div>
                                <div>Saturday & Sunday: Closed</div>
                              </div>
                              <div className="flex flex-center flex-col lg:w-2/12 ">
                                <Image
                                  src={value.properties.bgimage}
                                  alt={value.properties.City}
                                />
                                <div className="text-right text-sm pt-2">
                                  <a
                                    className="text-blue-500"
                                    href={value.properties.url}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    See on map
                                  </a>
                                </div>
                              </div>
                            </div>
                          ) : null}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                {/* <SidebarLinkR to="/Ecommerce">Ecommerce</SidebarLinkR>
            <SidebarLinkR to="/career">career</SidebarLinkR>
             <SidebarLinkR to="/Shipfreight">Shipfreight</SidebarLinkR>
             <SidebarLinkR to="/Industries">Industries</SidebarLinkR>
             <SidebarLinkR to="/KalPower">KalPower</SidebarLinkR> */}
              </SidebarMenu>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default location;
