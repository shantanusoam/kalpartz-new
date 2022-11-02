import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { GoLocation } from 'react-icons/go';
import axios from 'axios';
import styled from 'styled-components';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { findMyLocation } from '../../HelpFunctions/findMyLocation';
import { useStateContext } from '../../context/StateContext';
import { useHover } from '../../Hooks/Hover';
import whiteTruck from '../../Assets/whitetruck.png';
// import SilberTire from '../../Assets/silvertire.gif';

export const CreditAppContainer = styled.div`
  display: flex;
  width: 350px;
  padding: 10px 0px;
  justify-content: flex-end;
  align-items: center;
  // margin-bottom: -0.8rem;
  z-index: 20;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 7% 100%);
  background-color: #f15a22;
  cursor: pointer;
`;
export const MondayToFridayContainer = styled.div`
  display: flex;
  justify-content: start;
  width: 60vw;
  margin-right: -15rem;
  // padding: 8px 0px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 3% 100%);
  background-color: #000000;
`;

const GOOGLE_MAP_API_URL = 'https://maps.googleapis.com/maps/api/geocode/json';
// import Image from 'next/image';
const extractAddress = (place) => {
  const address = {
    city: '',
    state: '',
    zip: '',
    country: '',
    plain() {
      const city = this.city ? `${this.city}, ` : '';
      const zip = this.zip ? `${this.zip}, ` : '';
      const state = this.state ? `${this.state}, ` : '';
      return city + zip + state + this.country;
    },
  };

  if (!Array.isArray(place?.address_components)) {
    return address;
  }

  place.address_components.forEach((component) => {
    const { types } = component;
    const value = component.long_name;

    if (types.includes('locality')) {
      address.city = value;
    }

    if (types.includes('administrative_area_level_1')) {
      address.state = value;
    }

    if (types.includes('postal_code')) {
      address.zip = value;
    }

    if (types.includes('country')) {
      address.country = value;
    }
  });

  return address;
};

const TopUpbar = () => {
  const { userLocation, setUserLocation, setCurrentlatlong } =
    useStateContext();
  const [Hover, isHover] = useHover();
  // const { data } = getLocationByLatLng(
  //   location.coordinates.lat,
  //   location.coordinates.lng
  // );

  return (
    <div className="bg-tire-gray-3">
      <div className="flexBetween z-10  p-0 flex-row">
        <Link href="/" passHref>
          <div className="flex flex-row flexCenter" ref={Hover}>
            {/* <div className="text-white font-bold ml-8">
              {' '}
              {userLocation ? (
                <div className="flex flex-row gap-5">
                  {userLocation.city} , {userLocation.state}

                </div>
              ) : (
                <div className="flex flex-row">
                  Location data not available yet.{' '}
                  <div
                    className="cursor-pointer"
                    onClick={findMyLocation(setUserLocation, setCurrentlatlong)}
                  >
                    Shoow Your Location
                  </div>
                </div>
              )}
            </div> */}
          </div>
        </Link>

        <div className="ml-2 font-bold">
          {/* <GoLocation color="white  comment " /> */}
          <div className="relative z-20">
            {isHover ? (
              <div className="absolute flex flex-col bg-white rounded-md p-6 w-48 pb-4">
                if the location is not Preciouse
                <button
                  type="button"
                  className="rounded-md p-2 bg-orange-600 font-semibold text-white"
                >
                  click here
                </button>
              </div>
            ) : null}
          </div>
        </div>

        <div>
          <MondayToFridayContainer className="text-black font-bold">
            {/* <motion.div
              animate={{ x: 1050 }}
              transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
            >
              <Image src={whiteTruck} width={120} height={40} />
            </motion.div> */}
            <motion.div
              animate={{ x: 1050 }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              whileHover={{
                scale: 2,
                transition: { duration: 2 },
              }}
            >
              <Image
                src="https://raw.githubusercontent.com/Kalfreight-In/KalTires_new/main/Assets/silvertire%20.gif"
                width={40}
                height={40}
              />
            </motion.div>
          </MondayToFridayContainer>
        </div>

        <a href="/credit-application">
          <CreditAppContainer>
            <span className="h-5 w-5 animate-bounce bg-black rounded-full text-white flex flexCenter">
              <MdOutlineKeyboardArrowRight />
            </span>
            <span className="pr-20 pl-4 text-lg font-Helvetica text-white font-semibold text-center">
              Credit Applications
            </span>
          </CreditAppContainer>
        </a>
      </div>
    </div>
  );
};

export default TopUpbar;
