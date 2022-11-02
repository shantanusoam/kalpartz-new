import React, { useEffect } from 'react';
import Image from 'next/image';
import { FaBars, FaSearch } from 'react-icons/fa';
import Link from 'next/link';
import Navlogo from '../../Assets/Images/KvlTiresLogo.png';
import call from '../../Assets/Icons/call.png';
import useMediaQuery from '../../Hooks/CustomMediaQuery';
import { MobileIcon } from './Navbar';
import { findMyLocation } from '../../HelpFunctions/findMyLocation';
import { useStateContext } from '../../context/StateContext';

const Topbar = ({ toggle, postion }) => {
  const { setUserLocation, setCurrentlatlong } = useStateContext();

  const isDesktop = useMediaQuery('(min-width:1148px)');
  return (
    <div
      className={` bg-tire-gray-3 sticky top-0 z-10  ${
        isDesktop ? 'pb-6' : 'fixed z-30 w-full'
      }`}
    >
      <div className="transition-all ease-in-out  mx-1  flexBetween z-10   p-1 flex-row ">
        <div className=" ml-0 flex-1 flex flex-row justify-start items-center lg:pl-16 pl-4 ">
          <Link href="/">
            <div
              className={`${
                postion.y === 0 && isDesktop ? '-mt-12' : '-mt-0'
              } transition-all duration-300 ease-in    ${
                postion.y === 0 ? 'h-20 w-56' : 'h-20 w-44'
              } `}
            >
              <Image
                src={Navlogo}
                alt="place"
                className="cursor-pointer"
                // height={postion.y === 0 ? 85 : 65}
                // width={postion.y === 0 ? 240 : 195}
              />
            </div>
          </Link>

          {/* <div className="pt-2 relative ml-8 mx-auto text-gray-600 hidden lg:block">
            <input
              className="border-2 border-gray-300 bg-white h-10 px-5 pr-36 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
              <FaSearch color="red" />
            </button>
          </div> */}
          <div
            className="text-white flex-1 justify-end hidden lg:flex items-end -mb-4 pb-6  "
            href="tel:+1-800-808-0025"
          >
            <span className="align-bottom pr-8 pb-1 text-xl">
              Call for Emergency Road Service
            </span>
            {/* <a
              href="tel:+1-800-808-0025"
              className="pr-2 flex flexCenter cursor-pointer"
            >
              <Image src={call} alt="call" objectFit="contain" height={30} />

            </a> */}
            <a href="tel:+1-800-808-0025" className="cursor-pointer pr-16 ">
              <div>
                {/* <div className="font-bold">Toll Free</div> */}
                <div className="text-3xl font-bold align-bottom">
                  +1-<span className="text-orange-600">800</span>-808-0025
                </div>
              </div>
            </a>
          </div>
          {/* <div className="text-white">Search</div> */}
        </div>
      </div>
      <MobileIcon onClick={toggle} className="absolute z-30">
        <FaBars color="#fff" />
        {/* <SidebarFr /> */}
      </MobileIcon>
    </div>
  );
};

export default Topbar;
