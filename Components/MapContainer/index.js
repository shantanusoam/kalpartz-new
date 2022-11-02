import React, { useEffect, useReducer, useState } from 'react';
import styled from 'styled-components';
import { BsPlus, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';

// import { Link } from 'react-scroll';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useRouter } from 'next/router';
import { MapData1, MapData2 } from '../../data/data';

import { useHover } from '../../Hooks/Hover';
import useMediaQuery from '../../Hooks/CustomMediaQuery';
import { toTitleCase } from '../../HelpFunctions/toTitlecase';

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
  padding-left: 0rem;
  padding-right: 1rem;
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
  align-items: left;
  justify-content: space-between;
  width: 100%;
  margin: 0rem;
  font-size: 1rem;
  padding: 0.5rem 0rem;
  font-weight: 700;
  text-decoration: none;
  // padding-right: 3rem;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  border-bottom: 1px solid black;
  color: #000;
  cursor: pointer;
  &:hover {
    // color: #000000;
    transition: 0.2s ease-in-out;
  }
`;
// use hover reducer to change the visibility on hover of the sidebar when dynimically created links
const useHoverReducer = (initialState, reducer) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [ref, isHovered] = useHover();
  useEffect(() => {
    if (isHovered) {
      dispatch({ type: 'HOVER' });
    } else {
      dispatch({ type: 'UNHOVER' });
    }
  }, [isHovered]);
  return [state, ref];
};
const LeafMap = dynamic(
  () => import('./LeafMap'), // replace '@components/map' with your component's location
  {
    loading: () => <p>A map is loading now</p>,
    ssr: false, // This line is important. It's what prevents server-side render
  }
);

const MapCaller = ({ Data, Data2, SData, location }) => (
  <LeafMap Data={Data} Data2={Data2} SData={SData} location={location} />
);
export const MapConatiner = () => {
  const isDesktop = useMediaQuery('(min-width:768px)');
  const [Maplocation, setMapocation] = useState();

  const [FeaatureCat, setFeaatureCat] = useState('United States');

  const [CaFeaatureCat, setCaFeaatureCat] = useState('Canada');
  const [ShowDropdown, setShowDropdown] = useState(false);
  const [ShowDropdownCa, setShowDropdownCa] = useState(false);
  // const [isBrowser, setIsBrowser] = useState(false);
  // useEffect(() => {
  //   setIsBrowser(true);
  // }, []);

  // if (!isBrowser) {
  //   return null;
  // }
  const router = useRouter();
  function scrollToTargetAdjusted(target) {
    if (window.location.pathname === '/') {
      router.push({ pathname: '/locations', query: { scroll: target } });
      return;
    }
    console.log(`lool${target}`);
    const element = document.getElementById(target);
    const headerOffset = 117;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
  Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
  };
  const [visibilities, setVisibilities] = useState(() =>
    MapData1.map((x) => false)
  );

  const [Cvisibilities, setCVisibilities] = useState(() =>
    MapData2.map((x) => false)
  );
  // Similar to componentDidMount and componentDidUpdate:
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   MapData1.map((x) => false);
  // }, [visibilities]);

  const handleClick = (event, coordinates, city, country) => {
    if (country === 'CA') {
      const index = parseInt(event.currentTarget.dataset.index, 10);
      const newCVisibilities = Array(Cvisibilities.length);
      newCVisibilities.forEach((index) => {
        newCVisibilities[index] = false;
      });
      newCVisibilities.insert(index, !Cvisibilities[index]);
      // newCVisibilities[index] = !newCVisibilities[index];
      setCVisibilities(newCVisibilities);
      console.log(`inside CA ${city}`);
      setCaFeaatureCat(city);
      setShowDropdownCa(!ShowDropdownCa);
    } else if (country === 'US') {
      const index = parseInt(event.currentTarget.dataset.index, 10);

      const newVisibilities = Array(visibilities.length);
      newVisibilities.forEach((index) => {
        newVisibilities[index] = false;
      });
      // newVisibilities[index] = !newVisibilities[index];
      // console.log(`${visibilities}changes in that`);
      newVisibilities.insert(index, !visibilities[index]);
      console.log(`${newVisibilities}changes in that`);

      setVisibilities(newVisibilities);
      console.log(`outside CA ${city}`);

      setFeaatureCat(city);
      setShowDropdown(!ShowDropdown);
    }
    setMapocation(coordinates);

    // setVisibilities(() => MapData1.map(() => false));
  };
  // const [selectedPosition, setSelectedPosition] = React.useState(null);
  // const [Services, setServices] = useState(false);
  // const [NewsRoom, setNewsRoom] = useState(false);
  // const [AboutUs, setAboutUs] = useState(false);
  // const [BusinessVerticles, setBusinessVerticles] = useState(false);

  // const [Fontana, isFontana] = useHover();
  // const [Bakersfield, isBakersfield] = useHover();
  // const [SanMarcos, isSanMarcos] = useHover();
  // const [Calgary, isCalgary] = useHover();
  // const [Arlington, isArlington] = useHover();
  // const [Hampton, isHampton] = useHover();
  // // const [Stockton, isStockton] = useHover();
  // const [Atlanta, isAtlanta] = useHover();
  // const [Lathrop, isLathrop] = useHover();
  // const [Calexico, isCalexico] = useHover();
  // const [Almondfontana,isAlmondfontana] = useHover();
  // const [ValleyFontana,isValleyFontana] = useHover();
  // const [Indianapolis, isIndianapolis] = useHover();
  // const [Springdale, isSpringdale] = useHover();
  // const [abbotsford, isabbotsford] = useHover();
  return (
    <div
      id="mainmapcontainer"
      className="bg-black flex flex-col  md:flex-row bg-cover "
      style={{
        backgroundImage: `${
          isDesktop
            ? ''
            : 'url(https://raw.githubusercontent.com/Kalfreight-In/KalTires_new/main/Assets/Images/Map/MapBg.png)'
        }`,
      }}
    >
      <div
        className=" svg-container md:pt-12 md:pb-0 py-4"
        id="Map_SvgContainer"
      >
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
      </div>
      <div className="w-full flex-1 ">
        <div
          className=" flex-col flex content-center justify-center w-full flex-1  self-start items-start bg-cover bg-no-repeat bg-center    lg:mb-0 mb-2  h-full  md:pt-12 md:pb-0 pt-12"
          style={{
            backgroundImage: `${
              isDesktop
                ? 'url(https://raw.githubusercontent.com/Kalfreight-In/KalTires_new/main/Assets/Images/Map/MapBg.png)'
                : 'url(https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/MapBackgroundImage.png)'
            }`,
            display: 'flex',
          }}
        >
          <div className="  w-full md:mb-0 pr-0 lg:pl-16 pl-8 mb-2 lg:mb-12">
            <div className="w-full ">
              <div className="flex flex-row">
                {/* <svg
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
                </svg> */}

                <h3 className="xl:text-4xl self-center text-white font-bold text-3xl md:pb-0 pb-8">
                  Our Locations
                </h3>
              </div>

              <h4 className="lg:mt-8 mt-2 text-white font-poppins font-desc text-descnew pb-4 text-2xl font-bold md:block hidden">
                UNITED STATES
              </h4>
            </div>
            <div className="md:bg-white  bg-none pb-2 2xl:mr-20 xl:mr-20 lg:mr-20  md:pl-6 pl-0 md:pr-4 pr-0 mr-8">
              <div>
                {/* <div
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
                </div> */}
                {isDesktop ? (
                  <div className="overflow-auto h-mapScrollheightFull scrollbar">
                    {MapData1.map((value, index, MapData1) =>
                      value.properties.City ==
                        MapData1[index + 1]?.properties.City &&
                      value.multi === true ? (
                        <div>
                          <div key={value.id}>
                            <Divlink
                              data-index={index}
                              onClick={(e) =>
                                handleClick(
                                  e,
                                  value.geometry.coordinates,
                                  value.properties.City,
                                  'US'
                                )
                              }
                            >
                              <Link
                                href="/#Map_SvgContainer"
                                className={
                                  visibilities[index]
                                    ? 'text-black font-bold'
                                    : 'text-black font-bold'
                                }
                              >
                                <div>
                                  {value.properties.City},{' '}
                                  {value.properties.State}
                                </div>
                              </Link>

                              <span>
                                {visibilities[index] ? <BiMinus /> : <BsPlus />}

                                {/* <BsPlus onClick={()=>setPlus(<BiMinus/>)}/> */}
                              </span>
                            </Divlink>
                            <div
                              className={`Transition-Height-${
                                visibilities[index] ? 'in' : 'out'
                              }`}
                            >
                              <ul>
                                {visibilities[index] ? (
                                  value.properties.Address ? (
                                    <div
                                      className={`text-neutral-500  ${
                                        MapData1[index + 2].properties.City ===
                                        MapData1[index + 1]?.properties.City
                                          ? 'h-38'
                                          : 'h-26'
                                      }   ml-4 lg:text-md block   `}
                                    >
                                      <div key={value.id}>
                                        <div
                                          className={`Transition-Height-${
                                            visibilities[index] ? 'in' : 'out'
                                          }   border-b-2 border-slate-300`}
                                        >
                                          <ul>
                                            {visibilities[index] ? (
                                              value.properties.Address ? (
                                                <div
                                                  className="flex flex-row hover:bg-slate-200 items-center justify-between text-neutral-500 h-16 cursor-pointer  lg:text-md    my-1 "
                                                  onClick={(e) =>
                                                    handleClick(
                                                      e,
                                                      value.geometry
                                                        .coordinates,
                                                      value.properties.City,
                                                      'lol'
                                                    )
                                                  }
                                                >
                                                  {' '}
                                                  {
                                                    value.properties.Address
                                                  }, {value.properties.City},{' '}
                                                  {value.properties.State}{' '}
                                                  {value.properties.ZipCode}
                                                  <span className="text-center pr-2 ">
                                                    {visibilities[index] ? (
                                                      <div className="text-blue-500">
                                                        <BsFillArrowRightCircleFill />
                                                      </div>
                                                    ) : (
                                                      <div className="text-blue-500">
                                                        <BsFillArrowRightCircleFill />
                                                      </div>
                                                    )}

                                                    {/* <BsPlus onClick={()=>setPlus(<BiMinus/>)}/> */}
                                                  </span>
                                                </div>
                                              ) : (
                                                <div>coming soon</div>
                                              )
                                            ) : null}
                                          </ul>
                                        </div>

                                        <div
                                          className={`Transition-Height-${
                                            visibilities[index] ? 'in' : 'out'
                                          } border-b-2 border-slate-300`}
                                        >
                                          <ul>
                                            {visibilities[index] ? (
                                              value.properties.Address ? (
                                                <div
                                                  className="flex flex-row hover:bg-slate-200 items-center justify-between text-neutral-500 h-10 cursor-pointer  lg:text-md    my-1 "
                                                  onClick={(e) =>
                                                    handleClick(
                                                      e,
                                                      MapData1[index + 1]
                                                        .geometry.coordinates,
                                                      MapData1[index + 1]
                                                        .properties.City,
                                                      'lol'
                                                    )
                                                  }
                                                >
                                                  {' '}
                                                  {
                                                    MapData1[index + 1]
                                                      ?.properties.Address
                                                  }
                                                  ,{' '}
                                                  {
                                                    MapData1[index + 1]
                                                      ?.properties.City
                                                  }
                                                  ,{' '}
                                                  {
                                                    MapData1[index + 1]
                                                      ?.properties.State
                                                  }{' '}
                                                  {
                                                    MapData1[index + 1]
                                                      ?.properties.ZipCode
                                                  }
                                                  {/* {
                                                    MapData1[index + 2]
                                                      .properties.Address
                                                  } */}
                                                  <span className="text-center pr-2">
                                                    {visibilities[index] ? (
                                                      <div className="text-blue-500">
                                                        <BsFillArrowRightCircleFill />
                                                      </div>
                                                    ) : (
                                                      <div className="text-blue-500">
                                                        <BsFillArrowRightCircleFill />
                                                      </div>
                                                    )}

                                                    {/* <BsPlus onClick={()=>setPlus(<BiMinus/>)}/> */}
                                                  </span>
                                                </div>
                                              ) : (
                                                <div>coming soon</div>
                                              )
                                            ) : null}
                                          </ul>
                                        </div>
                                        {MapData1[index + 2].properties.City ===
                                        MapData1[index + 1]?.properties.City ? (
                                          <div
                                            className={`Transition-Height-${
                                              visibilities[index] ? 'in' : 'out'
                                            } `}
                                          >
                                            <ul>
                                              {visibilities[index] ? (
                                                value.properties.Address ? (
                                                  <div
                                                    className="flex flex-row hover:bg-slate-200 items-center justify-between text-neutral-500 h-10 cursor-pointer  lg:text-md    my-1 "
                                                    onClick={(e) =>
                                                      handleClick(
                                                        e,
                                                        MapData1[index + 2]
                                                          .geometry.coordinates,
                                                        MapData1[index + 2]
                                                          .properties.City,
                                                        'lol'
                                                      )
                                                    }
                                                  >
                                                    {' '}
                                                    {
                                                      MapData1[index + 2]
                                                        ?.properties.Address
                                                    }
                                                    ,{' '}
                                                    {
                                                      MapData1[index + 2]
                                                        ?.properties.City
                                                    }
                                                    ,{' '}
                                                    {
                                                      MapData1[index + 2]
                                                        ?.properties.State
                                                    }{' '}
                                                    {
                                                      MapData1[index + 2]
                                                        ?.properties.ZipCode
                                                    }
                                                    <span className="text-center pr-2">
                                                      {visibilities[index] ? (
                                                        <div className="text-blue-500">
                                                          <BsFillArrowRightCircleFill />
                                                        </div>
                                                      ) : (
                                                        <div className="text-blue-500">
                                                          <BsFillArrowRightCircleFill />
                                                        </div>
                                                      )}

                                                      {/* <BsPlus onClick={()=>setPlus(<BiMinus/>)}/> */}
                                                    </span>
                                                  </div>
                                                ) : (
                                                  <div>coming soon</div>
                                                )
                                              ) : null}
                                            </ul>
                                          </div>
                                        ) : null}
                                      </div>
                                    </div>
                                  ) : (
                                    <div>coming soon</div>
                                  )
                                ) : null}
                              </ul>
                            </div>
                          </div>
                          <div />
                        </div>
                      ) : value.properties.City ===
                          MapData1[index + 1]?.properties.City ||
                        value.properties.City ===
                          MapData1[index - 1]?.properties.City ? null : (
                        <div key={value.id}>
                          <Divlink
                            data-index={index}
                            onClick={(e) =>
                              handleClick(
                                e,
                                value.geometry.coordinates,
                                value.properties.City,
                                'US'
                              )
                            }
                          >
                            <Link
                              href="/#Map_SvgContainer"
                              className={
                                visibilities[index]
                                  ? 'text-black font-bold'
                                  : 'text-black font-bold'
                              }
                            >
                              <div>
                                {value.properties.City},{' '}
                                {value.properties.State}
                              </div>
                            </Link>

                            <span>
                              {visibilities[index] ? <BiMinus /> : <BsPlus />}

                              {/* <BsPlus onClick={()=>setPlus(<BiMinus/>)}/> */}
                            </span>
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
                                value.properties.Address ? (
                                  <div className=" flex flex-row hover:bg-slate-200 items-center justify-between text-neutral-500 h-10 cursor-pointer  lg:text-md    my-1 ">
                                    {' '}
                                    {value.properties.Address},{' '}
                                    {value.properties.City},{' '}
                                    {value.properties.State}{' '}
                                    {value.properties.ZipCode}
                                    <span className="text-center pr-2">
                                      {visibilities[index] ? (
                                        <div className="text-blue-500">
                                          <BsFillArrowRightCircleFill />
                                        </div>
                                      ) : (
                                        <div className="text-blue-500">
                                          <BsFillArrowRightCircleFill />
                                        </div>
                                      )}

                                      {/* <BsPlus onClick={()=>setPlus(<BiMinus/>)}/> */}
                                    </span>
                                  </div>
                                ) : (
                                  <div>Coming soon</div>
                                )
                              ) : null}
                            </ul>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                ) : (
                  <>
                    <div
                      onClick={() => {
                        setShowDropdown(!ShowDropdown);
                      }}
                      className="group  rounded-md  mb-4 flex flex-row justify-between px-6 py-4  text-center border-2 bg-white text-black    transition-all duration-100 delay-75 cursor-pointer "
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
                      className={`Transition-Height-${
                        ShowDropdown ? 'in' : 'out'
                      } `}
                    >
                      {ShowDropdown ? (
                        <div className="flex flex-col scrollbar overflow-auto h-96  ">
                          {MapData1.map((value, index) => (
                            <Link href="/#Map_SvgContainer">
                              <button
                                data-index={index}
                                onClick={(e) =>
                                  handleClick(
                                    e,
                                    value.geometry.coordinates,
                                    value.properties.City,
                                    'US'
                                  )
                                }
                                type="button"
                                className="group  relative   bg-white   text-center border-2   transition-all duration-100 delay-75 cursor-pointer active:bg-orange-600 focus:outline-none focus:ring focus:bg-orange-600 focus:text-white"
                              >
                                <h4 className="px-4 py-2  text-black group-hover:text-white z-10 relative pointer ease-in-out transition-colors">
                                  {value.properties.City},{' '}
                                  {value.properties.State}
                                  {value.properties.Address ? (
                                    <div>
                                      {value.properties.Address},{' '}
                                      {value.properties.ZipCode}
                                      {/* {value.properties.State} */}
                                    </div>
                                  ) : (
                                    <div>coming Soon</div>
                                  )}
                                </h4>

                                <span className="bg-black group-hover:w-full w-0 h-full absolute bottom-0 left-0 duration-500 delay-75 transition-all -z-0" />
                              </button>
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </>
                )}
              </div>

              {/* <SidebarLinkR to="/Ecommerce">Ecommerce</SidebarLinkR>
          <SidebarLinkR to="/career">career</SidebarLinkR>
          <SidebarLinkR to="/Shipfreight">Shipfreight</SidebarLinkR>
          <SidebarLinkR to="/Industries">Industries</SidebarLinkR>
          <SidebarLinkR to="/KalPower">KalPower</SidebarLinkR> */}
            </div>
            <div className="my-4">
              <h4 className="lg:mt-8 mt-2 text-white font-desc text-descnew pb-1  text-2xl font-bold  md:block hidden">
                CANADA
              </h4>
            </div>
            <div className="md:bg-white bg-none pb-2 2xl:mr-20 xl:mr-20 lg:mr-20 md:pl-6 pl-0 md:pr-4 pr-0  mr-8">
              <div id="ContactUsMain">
                {isDesktop ? (
                  MapData2.map((value, index) => (
                    <a href="/#Map_SvgContainer" key={value.id}>
                      <Divlink
                        data-index={index}
                        onClick={(e) =>
                          handleClick(
                            e,
                            value.geometry.coordinates,
                            value.properties.City,
                            'CA'
                          )
                        }
                      >
                        <h2
                          className={
                            Cvisibilities[index]
                              ? 'text-black font-bold'
                              : 'text-black font-bold'
                          }
                        >
                          <div>
                            {value.properties.City}, {value.properties.State}
                          </div>
                        </h2>

                        <span>
                          {Cvisibilities[index] ? <BiMinus /> : <BsPlus />}

                          {/* <BsPlus onClick={()=>setPlus(<BiMinus/>)}/> */}
                        </span>
                      </Divlink>
                      <div
                        className={`Transition-Height-${
                          Cvisibilities[index] ? 'in' : 'out'
                        }`}
                        onClick={() =>
                          setMapocation(value.geometry.coordinates)
                        }
                      >
                        <ul>
                          {Cvisibilities[index] ? (
                            <div className="text-neutral-500 h-4   block  lg:text-md mb-2 ">
                              {' '}
                              {value.properties.Address},{' '}
                              {value.properties.City}, {value.properties.State}{' '}
                              {value.properties.ZipCode}
                            </div>
                          ) : null}
                        </ul>
                      </div>
                    </a>
                  ))
                ) : (
                  <>
                    <div
                      onClick={() => {
                        setShowDropdownCa(!ShowDropdownCa);
                      }}
                      className="group rounded-md mb-4 flex flex-row justify-between px-6 py-4  text-center border-2 bg-white text-black   transition-all duration-100 delay-75 cursor-pointer "
                    >
                      {CaFeaatureCat}
                      <span>
                        {' '}
                        <MdKeyboardArrowDown
                          className={`transition-all duration-100${
                            ShowDropdownCa ? '-rotate-180' : 'rotate-180'
                          }`}
                        />{' '}
                      </span>
                    </div>
                    <div
                      className={`Transition-Height-${
                        ShowDropdownCa ? 'in' : 'out'
                      }`}
                    >
                      {ShowDropdownCa ? (
                        <div className="flex flex-col">
                          {MapData2.map((value, index) => (
                            <Link href="/#Map_SvgContainer">
                              <button
                                data-index={index}
                                onClick={(e) =>
                                  handleClick(
                                    e,
                                    value.geometry.coordinates,
                                    value.properties.City,
                                    'CA'
                                  )
                                }
                                type="button"
                                className="group  relative  bg-white    text-center border-2  transition-all duration-100 delay-75 cursor-pointer focus:outline-none focus:ring focus:bg-orange-600 focus:text-white"
                              >
                                <h4 className="px-4 py-2  text-black group-hover:text-white z-10 relative pointer ease-in-out transition-colors">
                                  {value.properties.City},{' '}
                                  {value.properties.State}
                                  {value.properties.Address ? (
                                    <div>
                                      {value.properties.Address},{' '}
                                      {value.properties.ZipCode}
                                      {/* {value.properties.State} */}
                                    </div>
                                  ) : (
                                    <div>coming Soon</div>
                                  )}
                                </h4>
                                <span className="bg-black group-hover:w-full w-0 h-full absolute bottom-0 left-0 duration-500 delay-75 transition-all -z-0" />
                              </button>
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </>
                )}
              </div>

              {/* <SidebarLinkR to="/Ecommerce">Ecommerce</SidebarLinkR>
          <SidebarLinkR to="/career">career</SidebarLinkR>
          <SidebarLinkR to="/Shipfreight">Shipfreight</SidebarLinkR>
          <SidebarLinkR to="/Industries">Industries</SidebarLinkR>
          <SidebarLinkR to="/KalPower">KalPower</SidebarLinkR> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
