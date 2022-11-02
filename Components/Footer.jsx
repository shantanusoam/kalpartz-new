import React, { useContext, useEffect, useState } from 'react';
// import { Link as Slink } from 'react-scroll';
import { RiInstagramFill } from 'react-icons/ri';
// import {SiInstagram} from 'react-icons/si';
import { IoLogoFacebook, IoLogoLinkedin, IoMdMail } from 'react-icons/io';
import { AiOutlineClose } from 'react-icons/ai';
import { MdPhone, MdEmail, MdLocationPin } from 'react-icons/md';
// import { HashScroll } from 'react-hash-scroll';
import Link from 'next/link';
import axios from 'axios';
import Image from 'next/image';
import { useStateContext } from '../context/StateContext';
import useMediaQuery from '../Hooks/CustomMediaQuery';
import kvlTirelogo from '../Assets/Images/KvlTiresLogo.png';

const Footer = () => {
  const isDesktop = useMediaQuery('(min-width:1148px)');
  const [Hinventery, setHinventery] = useState(false);
  const [H_WA, setHWA] = useState(false);
  const [email, setEmail] = useState('');
  const [popup, setPopup] = useState(false);
  const [Hquicklinks, setHquicklinks] = useState(false);
  const [Hcontactus, setHcontactus] = useState(false);
  const [changeState, setchangeState] = useState(true);
  const { setWWOtires } = useStateContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      Email: email,

      //   location,
    };
    axios
      .post('https://nodeserver-contactus.herokuapp.com/api/subscribe', data)
      .then(() => setPopup(true))
      .catch(() => {
        console.log('Message not sent');
      });

    setEmail('');
  };
  useEffect(() => {
    setTimeout(() => {
      setPopup(false);
      console.log('setting pop up as false');
    }, 2500);
  }, [popup]);
  useEffect(() => {
    const query = window.location.hash;
    const target = query.split('#')[1];

    if (window.location.hash) {
      console.log(
        `set hash ................... ${window.location.hash} ${changeState}`
      );
      if (target === 'maincontactform' || target === 'onsiteid') {
        setTimeout(() => {
          const element = document.getElementById(target);
          const headerOffset = 117;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }, 1300);
      }
    }
  }, [changeState]);
  return (
    <div
      className="bg-footerbackground md:bg-cover bg-contain bg-black block"
      style={{
        backgroundImage:
          'url(https://raw.githubusercontent.com/Kalfreight-In/BigRigGroups/main/src/assets/Map/map-bg.png)',
        backgroundBlendMode: 'difference',
        backgroundPosition: 'center',
        // backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: 'full',
      }}
    >
      <div className="pt-8    justify-center xl:hidden flex ">
        <Link href="/" passHref>
          <Image
            src={kvlTirelogo}
            height={75}
            width={200}
            alt="logo"
            className="2xl:h-18 xl:h-20  h-16  md:ml-0 xl:ml-36 mt-4 cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex md:flex-row flex-col-reverse md:pt-4 md:flex md:justify-between md:bg-cover bg-contain">
        <div className=" ">
          <div className="xl:flex xl:flex-wrap xl:-mx-4 pt-2 xl:pb-2 w-screen">
            <div className="footer-info xl:w-3/12 xl:px-4 xl:block hidden items-start justify-start">
              <div className="xl:ml-20 w-max justify-start ml-4 xl:mt-0  ">
                <Link href="/" passHref>
                  <div className="2xl:h-20 xl:h-16 h-20 md:block hidden cursor-pointer">
                    <Image
                      layout="intrinsic"
                      // width={700}
                      height={65}
                      width={208}
                      src={kvlTirelogo}
                      alt="logo"
                      // className="2xl:h-20 xl:h-16 h-20 md:block hidden cursor-pointer"
                      // className=" md:block hidden cursor-pointer"
                      to="mailto:info@kvltires.com"
                    />
                  </div>
                </Link>

                <div className="text-white flex justify-start  xl:mt-5  ml-0 ">
                  <div className="mt-11">
                    <a href="mailto:info@kvltires.com" rel="noreferrer">
                      <IoMdMail className="h-6 w-5  " />
                    </a>
                  </div>
                  <div className="block xl:ml-0 ">
                    <div className="flex justify-start text-lg mb-4 items-start  text-left -ml-5  font-medium">
                      Reach out to us
                    </div>
                    <a href="mailto:info@kvltires.com">
                      <div className=" text-sm ml-2 xl:ml-2   cursor-pointer">
                        info@kvltires.com
                      </div>
                    </a>
                  </div>
                </div>

                <div className="text-white flex xl:justify-start justify-start mt-1 md:ml-0 ml-0 ">
                  <div className="">
                    <a
                      href="tel:+1-800-808-0025"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MdPhone className="h-6 w-5" />
                    </a>
                  </div>
                  <div className="ml-2 flex flexcenter">
                    <a
                      href="tel:+1-800-808-0025"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {' '}
                      <div className=" text-sm   ">+1-800-808-0025</div>{' '}
                    </a>
                  </div>
                </div>
                <div className="text-white flex xl:justify-start justify-start mt-1 md:ml-0 ml-0 ">
                  <div className="">
                    <a
                      href="tel:+1-800-808-0025"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MdLocationPin className=" h-6 w-5 " />
                    </a>
                  </div>
                  <div className="ml-2">
                    <a
                      href="https://www.google.co.in/maps/place/10156+Live+Oak+Ave,+Fontana,+CA+92335,+USA/@34.0687994,-117.4834404,17z/data=!3m1!4b1!4m5!3m4!1s0x80c34b3fc6e50489:0xde8aefe027f7319!8m2!3d34.068795!4d-117.4812517"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {' '}
                      <div className="text-sm   ">
                        10156 Live Oak Ave, Fontana, CA 92335
                      </div>{' '}
                    </a>
                  </div>
                </div>

                <div className="text-white flex mb-8 xl:mb-2 mt-2">
                  <div className=" ml-0">
                    <div className="w-full  md:ml-0  ml:-0 text-sm">
                      English, ਪੰਜਾਬੀ, Español, हिन्दी, Français
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="  xl:w-3/6 md:px-4 ">
              <div className="sm:flex">
                <div className="sm:flex-1 mt-4 sm:mt-0 ">
                  <div
                    className="text-white cursor-pointer"
                    onClick={() => {
                      setHinventery(!Hinventery);
                      setHWA(false);
                      setHquicklinks(false);
                      setHcontactus(false);
                    }}
                  >
                    <div className="text-lg font-bold xl:text-left text-center ">
                      Inventory
                    </div>
                  </div>

                  <div
                    className={`text-white  2xl:leading-8 leading-6 xl:block   ${
                      Hinventery ? '' : 'hidden'
                    }`}
                  >
                    <Link href="/tires-services#tire">
                      <span
                        onClick={() => {
                          setWWOtires('commerce');
                        }}
                        className="block md:text-sm text-navsmall hover:text-yellow-shadowhover   mt-1  xl:text-left text-center cursor-pointer "
                      >
                        Commercial Tires
                      </span>
                    </Link>
                    <a href="/tires-services#InnerphoneEmailRoad ">
                      <span className="block md:text-sm text-navsmall hover:text-yellow-shadowhover   mt-1  xl:text-left text-center cursor-pointer">
                        {' '}
                        OTR Tires
                      </span>
                    </a>
                    <a
                      href="/tires-services#InnerphoneEmailRoad "
                      rel="noreferrer"
                    >
                      <span className="block md:text-sm text-navsmall hover:text-yellow-shadowhover   mt-1  xl:text-left text-center cursor-pointer">
                        Industrial Tires
                      </span>
                    </a>
                    <a
                      href="/tires-services#InnerphoneEmailRoad "
                      rel="noreferrer"
                    >
                      <span className="block md:text-sm text-navsmall hover:text-yellow-shadowhover   mt-1  xl:text-left text-center cursor-pointer">
                        Agricultural Tires
                      </span>
                    </a>
                    <Link
                      href="/tires-services#tire"
                      // target="_blank"
                      rel="noreferrer"
                    >
                      <span
                        onClick={() => {
                          setWWOtires('retread');
                        }}
                        className="block md:text-sm text-navsmall hover:text-yellow-shadowhover   mt-1  xl:text-left text-center cursor-pointer"
                      >
                        Retread Tires
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="sm:flex-1 mt-4 sm:mt-0 ">
                  <div
                    className="text-white cursor-pointer"
                    onClick={() => {
                      setHWA(!H_WA);
                      setHinventery(false);
                      setHquicklinks(false);
                      setHcontactus(false);
                    }}
                  >
                    <div className="text-lg font-bold xl:text-left text-center   ">
                      Who We Are
                    </div>
                  </div>

                  <div
                    className={`text-white 2xl:leading-8 leading-6 xl:block   ${
                      H_WA ? '' : 'hidden'
                    }`}
                  >
                    <Link href="/#AboutUs_Section" rel="noreferrer">
                      <span className="block md:text-sm text-navsmall hover:text-yellow-shadowhover   mt-1  xl:text-left text-center  cursor-pointer">
                        About Us
                      </span>
                    </Link>
                    <a
                      href="http://kalgroup.com/"
                      target="_blank"
                      className="block md:text-sm text-navsmall hover:text-yellow-shadowhover   mt-1  xl:text-left text-center"
                      rel="noreferrer"
                    >
                      Group of Companies
                    </a>
                    <a
                      href="https://kalfreight.com/who-we-are/csr"
                      className="block md:text-sm text-navsmall hover:text-yellow-shadowhover   mt-1  xl:text-left text-center "
                      target="_blank"
                      rel="noreferrer"
                    >
                      CSR
                    </a>

                    <div
                      className="block md:text-sm text-navsmall hover:text-yellow-shadowhover mt-1 xl:text-left text-center cursor-pointer"
                      onClick={() => {
                        setchangeState(!changeState);
                      }}
                    >
                      <Link href="/#maincontactform">Contact Us</Link>
                    </div>
                  </div>
                </div>

                <div className="sm:flex-1 mt-4 sm:mt-0 ">
                  <div
                    className="text-white cursor-pointer"
                    onClick={() => {
                      setHinventery(false);
                      setHquicklinks(!Hquicklinks);
                      setHWA(false);
                      setHcontactus(false);
                    }}
                  >
                    <div className="text-lg font-bold xl:text-left  text-center ">
                      Quick Links
                    </div>
                  </div>

                  <div
                    className={`text-white  2xl:leading-8 leading-6 xl:block  ${
                      Hquicklinks ? '' : 'hidden'
                    }`}
                  >
                    <div />
                    <div>
                      <Link href="/tires-services" rel="noreferrer">
                        <span className="block md:text-sm text-navsmall hover:text-yellow-shadowhover   mt-1   xl:text-left text-center cursor-pointer">
                          {' '}
                          Tires & Services
                        </span>
                      </Link>
                    </div>
                    <div>
                      <Link href="/24X7-roadside-assistance" rel="noreferrer">
                        <span className="block md:text-sm text-navsmall hover:text-yellow-shadowhover   mt-1   xl:text-left text-center cursor-pointer ">
                          {' '}
                          Roadside Assistance
                        </span>
                      </Link>
                    </div>
                    <div>
                      <Link href="/locations" rel="noreferrer">
                        <span className="block md:text-sm text-navsmall hover:text-yellow-shadowhover   mt-1   xl:text-left text-center cursor-pointer ">
                          Locations
                        </span>
                      </Link>
                    </div>

                    <div>
                      <a href="/credit-application" rel="noreferrer">
                        <span className="block md:text-sm text-navsmall hover:text-yellow-shadowhover   mt-1   xl:text-left text-center cursor-pointer">
                          Credit Application
                        </span>
                      </a>
                    </div>
                    <div>
                      <Link href="/careers" rel="noreferrer">
                        <span className="block md:text-sm text-navsmall hover:text-yellow-shadowhover   mt-1   xl:text-left text-center cursor-pointer">
                          Careers
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="2xl:flex-1 flex-1 block xl:block mt-4 sm:mt-0 ">
                  <div
                    className="text-white cursor-pointer"
                    onClick={() => {
                      setHinventery(false);
                      setHquicklinks(false);
                      setHWA(false);
                      setHcontactus(!Hcontactus);
                    }}
                  >
                    <div className=" font-bold xl:text-left text-center   text-lg md:ml-0 pl-0 ">
                      Services
                    </div>
                  </div>

                  <div
                    className={`text-white 2xl:leading-10 leading-6 xl:block    ${
                      Hcontactus ? '' : 'hidden'
                    }`}
                  >
                    <div className="flex flex-row space-x-2  align-center justify-center xl:justify-start  mt-1">
                      <div className="block md:text-sm text-navsmall hover:text-yellow-shadowhover     xl:text-left text-center md:ml-0   ">
                        <span className="flex cursor-pointer overflow-visible">
                          <span className="mt-5px  xl:w-44 overflow-visible">
                            <Link
                              href={
                                isDesktop
                                  ? '/tires-services#IndustrialTires'
                                  : '/tires-services#IndustrialTiresTwo'
                              }
                              // duration={1000}
                              // offset={-80}
                              // ServiceScrlTwo
                            >
                              Pick up & Delivery Services
                            </Link>
                          </span>
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-row space-x-2 align-center justify-center xl:justify-start  mt-1">
                      <div className="block md:text-sm text-navsmall hover:text-yellow-shadowhover     xl:text-left text-center md:ml-0  ">
                        <span className="flex cursor-pointer overflow-visible">
                          <a
                            href="/24X7-roadside-assistance#onsiteid"

                            // onClick={() => {
                            //   setchangeState(!changeState);
                            // }}
                          >
                            On-Site Services
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row space-x-2 align-center justify-center xl:justify-start   mt-1">
                      <div className="block md:text-sm text-navsmall hover:text-yellow-shadowhover    xl:text-left text-center md:ml-0  ">
                        <span className="flex cursor-pointer overflow-visible">
                          <Link
                            href={
                              isDesktop
                                ? '/tires-services#IndustrialTires'
                                : '/tires-services#IndustrialTiresTwo'
                            }
                            rel="noreferrer"
                          >
                            Mounted Wheel Programs
                          </Link>
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-row space-x-2 align-center justify-center xl:justify-start   mt-1">
                      <div className="block md:text-sm text-navsmall hover:text-yellow-shadowhover    xl:text-left text-center md:ml-0   ">
                        <span className="flex cursor-pointer overflow-visible">
                          <Link
                            href={
                              isDesktop
                                ? '/tires-services#IndustrialTires'
                                : '/tires-services#IndustrialTiresTwo'
                            }
                            rel="noreferrer"
                          >
                            Truck & Trailer Alignment
                          </Link>
                        </span>
                      </div>
                    </div>
                    {/* <div className="flex flex-row space-x-2 align-center justify-center xl:justify-start   mt-1">
                      <div className=" antialiased w-max block md:text-sm text-navsmall hover:text-yellow-shadowhover    xl:text-left text-center md:ml-0  ">
                        <span className="flex cursor-pointer">
                          <Link
                            href="/24X7-roadside-assistance#roadside"
                            target="_blank"
                            rel="noreferrer"

                          >
                            <span className="mt-5px ">Flat Tire Repairs</span>
                          </Link>
                        </span>
                      </div>
                    </div> */}
                    <div className="flex flex-row space-x-2 align-center justify-center xl:justify-start   mt-1">
                      <div className="block md:text-sm text-navsmall hover:text-yellow-shadowhover    xl:text-left text-center md:ml-0">
                        <span className="flex cursor-pointer">
                          <Link
                            href={
                              isDesktop
                                ? '/tires-services#IndustrialTires'
                                : '/tires-services#IndustrialTiresTwo'
                            }
                            rel="noreferrer"
                          >
                            <span
                              onClick={() => {
                                setWWOtires('retread');
                              }}
                              className="mt-5px"
                            >
                              Retread Services
                            </span>
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="  xl:flex-auto flex-0 xl:w-1/12 hidden xl:flex md:justify-end justify-center mr-20  ">
              <div>
                <div
                  className="text-white cursor-pointer"
                  onClick={() => {
                    setHinventery(false);
                    setHquicklinks(false);
                    setHWA(false);
                    setHcontactus(!Hcontactus);
                  }}
                >
                  <p className=" md:font-bold font-normal  xl:text-left text-center   2xl:text-footerheading text-lg md:ml-0 pl-0  ">
                    Subscribe for latest updates
                  </p>
                </div>

                <div
                  className={`text-white 2xl:leading-8 leading-6 xl:block ${
                    Hcontactus ? '' : 'hidden'
                  }`}
                >
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="  mt-8">
                      <div className="w-full ">
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="email"
                          placeholder="Email Address"
                          type="email"
                          pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
                          required
                        />
                      </div>
                      {popup ? (
                        <div className=" text-base text-white pb-2">
                          Thank you For Subscribing
                        </div>
                      ) : null}
                    </div>

                    <div className="flex flex-row ml-28 space-x-2  item-center justify-end  bg-kaltire-red  rounded">
                      <button
                        type="submit"
                        className=" block text-lg pr-8 2xl:pr-8 pb-1  hover:text-yellow-shadowhover items-center cursor-pointer text-white   mt-1  font-semibold text-center"
                      >
                        Submit
                      </button>
                    </div>
                  </form>

                  <div id="mainiconcontainer" className=" justify-end  mt-12 ">
                    <div id="allicons" className="flex justify-end">
                      <IoLogoFacebook
                        onClick={() =>
                          window.open(
                            'https://www.facebook.com/kvltires',
                            '_blank'
                          )
                        }
                        className="text-white hover:text-footersocialnew  h-8 w-8 mx-4 cursor-pointer hover:drop-shadow-socialicons hover:text-facebook ease-in duration-300"
                      />
                      <RiInstagramFill
                        onClick={() =>
                          window.open(
                            'https://www.instagram.com/kvltires/',
                            '_blank'
                          )
                        }
                        className="text-white hover:text-instafooterhover  h-8 w-8 mx-4 cursor-pointer hover:drop-shadow-socialicons hover:text-instagram ease-in duration-300"
                      />
                      <IoLogoLinkedin
                        onClick={() =>
                          window.open(
                            'https://www.linkedin.com/company/kvltires/',
                            '_blank'
                          )
                        }
                        className="text-white hover:text-linkdenfooterhover   h-8 w-8 ml-4  cursor-pointer hover:drop-shadow-socialicons hover:text-linkden ease-in duration-300 "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-info xl:w-1/3 md:px-4 xl:hidden flex items-center justify-center mt-4">
              <div className="xl:ml-16 w-max justify-center items-center  flex flex-col ml-4 xl:mt-0">
                {/* <div>
                  <img
                    src="https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/kalGfooterlogo.png"
                    alt="logo"
                    className="2xl:h-28 xl:h-24  h-20 xl:block hidden"
                    to="mailto:info@kvltires.com"
                  />
                </div> */}
                <div className="md:flex block md:flex-row gap-x-8">
                  <div className="text-white flex justify-center  xl:mt-12 mt-4 ml-0 ">
                    <div className="mt-0">
                      <a href="mailto:info@kvltires.com">
                        <MdEmail className="md:h-8 h-6 md:w-8 w-6  " />
                      </a>
                    </div>
                    <div className="block xl:ml-3 ml-2 text-center">
                      {/* <div className="block">Working hours</div> */}
                      <div className="md:text-xl text-lg font-bold xl:font-semibold text-center">
                        <a href="mailto:info@kvltires.com">info@kvltires.com</a>
                      </div>
                    </div>
                  </div>

                  <div className="text-white flex justify-center  xl:mt-12 mt-4 ml-0">
                    <div className="mt-1">
                      <a
                        href="tel:+1-800-808-0025"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {/* <img
                          src="https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/newvectorphonefooter.png"
                          alt=""
                          className="text-white h-4 w-4"
                          width={50}
                        /> */}
                        <MdPhone className="h-6 w-5" />
                      </a>
                    </div>
                    <div className="block xl:ml-3 ml-2 text-center">
                      <a
                        href="tel:+1-800-808-0025"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {' '}
                        <div className="md:text-xl text-lg font-bold xl:font-semibold  ">
                          +1-800-808-0025
                        </div>{' '}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="text-white flex justify-center  xl:mt-12 mt-4 ml-0 ">
                  <div className="mt-1">
                    <a
                      href="tel:+1-800-808-0025"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {/* <img
                          src="https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/newvectorphonefooter.png"
                          alt=""
                          className="text-white h-4 w-4"
                          width={50}
                        /> */}
                      <MdLocationPin className=" h-6 w-5 " />
                    </a>
                  </div>
                  <div className="block  text-center">
                    <a
                      href="https://www.google.co.in/maps/place/10156+Live+Oak+Ave,+Fontana,+CA+92335,+USA/@34.0687994,-117.4834404,17z/data=!3m1!4b1!4m5!3m4!1s0x80c34b3fc6e50489:0xde8aefe027f7319!8m2!3d34.068795!4d-117.4812517"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {' '}
                      <div className="md:text-xl text-lg font-semibold ">
                        10156 Live Oak Ave, Fontana, CA 92335
                      </div>{' '}
                    </a>
                  </div>
                </div>
                <div className="text-white flex  xl:mb-2  mb-8 pt-5">
                  <div className="xl:ml-4 ml-0">
                    <div className="w-full  md:ml-0 xl:ml-12 ml:-0 ">
                      English, ਪੰਜਾਬੀ, Español, हिन्दी, Français
                    </div>
                  </div>
                </div>

                <div>
                  <div
                    className="text-white cursor-pointer"
                    onClick={() => {
                      setHinventery(false);
                      setHquicklinks(false);
                      setHWA(false);
                      setHcontactus(!Hcontactus);
                    }}
                  >
                    <p className=" md:font-semibold   xl:text-left text-center text-Description   text-lg md:ml-0 pl-0  ">
                      Subscribe for latest updates
                    </p>
                  </div>

                  <div className="text-white 2xl:leading-8 leading-6 xl:block ">
                    <form onSubmit={(e) => handleSubmit(e)}>
                      <div className="  mt-1">
                        <div className="w-full ">
                          <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="email"
                            placeholder="Email Address"
                            type="email"
                            pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
                            required
                          />
                        </div>
                      </div>
                      {popup ? (
                        <div className="text-xl text-white">
                          Thank you For Subscribing
                        </div>
                      ) : null}
                      <div className="flex flex-row align-center justify-center xl:justify-end ">
                        <button
                          type="submit"
                          className="block md:text-xl text-navsmall font-normal hover:text-yellow-shadowhover cursor-pointer text-kaltire-red  text-Description   text-center"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  id="mainiconcontainer"
                  className=" justify-end pb-4 mt-4  "
                >
                  <div id="allicons" className="flex justify-between   ">
                    <IoLogoFacebook
                      onClick={() =>
                        window.open(
                          'https://www.facebook.com/kvltires',
                          '_blank'
                        )
                      }
                      className="text-white  hover:text-footersocialnew  h-8 w-8 mx-4 cursor-pointer hover:drop-shadow-socialicons hover:text-facebook ease-in duration-300"
                    />
                    <RiInstagramFill
                      onClick={() =>
                        window.open(
                          'https://www.instagram.com/kvltires/',
                          '_blank'
                        )
                      }
                      className="text-white hover:text-instafooterhover  h-8 w-8 mx-4 cursor-pointer hover:drop-shadow-socialicons hover:text-instagram ease-in duration-300"
                    />
                    <IoLogoLinkedin
                      onClick={() =>
                        window.open(
                          'https://www.linkedin.com/company/kvltires',
                          '_blank'
                        )
                      }
                      className="text-white hover:text-linkdenfooterhover   h-8 w-8 mx-4  cursor-pointer hover:drop-shadow-socialicons hover:text-linkden ease-in duration-300 "
                    />
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

export default Footer;
