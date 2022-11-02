import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { BsPlus, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';
import Link from 'next/link';
import { Divlink } from '../../pages/locations';
import { MapData1 } from '../../data/data';
import useMediaQuery from '../../Hooks/CustomMediaQuery';

const CategoryComponent = () => {
  const isDesktop = useMediaQuery('(min-width:768px)');
  const [FeaatureCat, setFeaatureCat] = useState('United States');
  const [ShowDropdown, setShowDropdown] = useState(false);
  Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
  };
  const [visibilities, setVisibilities] = useState(() =>
    MapData1.map((x) => false)
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

    // setVisibilities(() => MapData1.map(() => false));
  };
  return (
    <div className="lg:grid lg:grid-cols-12 py-20">
      {/* CAtegory Dropdown Start */}
      <div className='className="lg:flex  col-span-4       items-center '>
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
                            href="/Categories/tires"
                            className={
                              visibilities[index]
                                ? 'text-black font-bold'
                                : 'text-black font-bold'
                            }
                          >
                            <div>
                              {value.properties.City}, {value.properties.State}
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
                                                  value.geometry.coordinates,
                                                  value.properties.City,
                                                  'lol'
                                                )
                                              }
                                            >
                                              {' '}
                                              {value.properties.Address},{' '}
                                              {value.properties.City},{' '}
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
                                                  MapData1[index + 1].geometry
                                                    .coordinates,
                                                  MapData1[index + 1].properties
                                                    .City,
                                                  'lol'
                                                )
                                              }
                                            >
                                              {' '}
                                              {
                                                MapData1[index + 1]?.properties
                                                  .Address
                                              }
                                              ,{' '}
                                              {
                                                MapData1[index + 1]?.properties
                                                  .City
                                              }
                                              ,{' '}
                                              {
                                                MapData1[index + 1]?.properties
                                                  .State
                                              }{' '}
                                              {
                                                MapData1[index + 1]?.properties
                                                  .ZipCode
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
                                                    MapData1[index + 2].geometry
                                                      .coordinates,
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
                          href="/Categories/tires"
                          className={
                            visibilities[index]
                              ? 'text-black font-bold'
                              : 'text-black font-bold'
                          }
                        >
                          <div>
                            {value.properties.City}, {value.properties.State}
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
                        <Link href="/Categories/tires">
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
                              {value.properties.City}, {value.properties.State}
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
      {/* CAtegory Dropdown end */}
      {/* CAtegory  Start */}
      <div className='className="lg:flex  col-span-6   items-center ' />
      {/* CAtegory  end */}
    </div>
  );
};

export default CategoryComponent;
