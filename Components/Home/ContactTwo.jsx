import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import ReCAPTCHA from 'react-google-recaptcha';
import mainimage from '../../Assets/Images/Whatweoffer/Contactform/mainimage.png';
import useMediaQuery from '../../Hooks/CustomMediaQuery';
import Sparkles from '../../Animation/Sparkel';
import kvlTirelogo from '../../Assets/Images/KvlTiresLogo.png';
import { useStateContext } from '../../context/StateContext';

const Contactform = () => {
  const isDesktop = useMediaQuery('(min-width:1148px)');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phoneno, setphoneno] = useState('');
  // const [service, setservice] = useState('');
  const [phone, setPhone] = useState('');
  const [zip, setZip] = useState('');
  const [ROC, setROC] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [buttonText, setButtonText] = useState('Submit');
  const router = useRouter();

  function formatPhoneNumber(phoneNumberString) {
    const cleaned = `${phoneNumberString}`.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return null;
  }
  // useEffect(() => {
  //   const query = window.location.hash;
  //   const target = query.split('#')[1];

  //   if (window.location.hash) {
  //     if (window.location.hash) {
  //       setTimeout(() => {
  //         const element = document.getElementById(target);
  //         const headerOffset = 117;
  //         const elementPosition = element.getBoundingClientRect().top;
  //         const offsetPosition = elementPosition + window.pageYOffset;

  //         window.scrollTo({
  //           top: offsetPosition,
  //           behavior: 'smooth',
  //         });
  //       }, 1000);
  //     }
  //   }
  // }, []);
  // useEffect(() => {
  //   loadReCaptcha();
  // }, []);
  const resetForm = (e) => {
    setName('');
    setEmail('');
    setMessage('');
    setPhone('');
    setZip('');
    setError(false);
    setErrorMessage('');
    setButtonText('Submit');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText('Sending...');

    const data = {
      site: 'abcd@soidfh.com',
      name,
      email,
      message,
      phoneno,
      //   location,
    };

    axios
      .post('https://nodeserver-contactus.herokuapp.com/api/v1', data)
      .then((res) => [setSuccess(true), resetForm()])
      .catch(() => {
        [setSuccess(true), resetForm()];
        console.log('Message not sent');
      });
    console.log(`sucesss ${success}`);
    setInterval(() => {
      setSuccess(false);
      console.log(`sucesss ${success}`);
    }, 8000);
  };

  // useEffect(() => {
  //   const emailval = document.querySelector('#emailValidate');
  //   const submit = document.querySelector('#submitmain');
  //   submit.addEventListener('click', () => {
  //     if (emailval.validity.typeMismatch) {
  //       emailval.setCustomValidity('Please enter correct email');
  //     } else {
  //       emailval.setCustomValidity('');
  //     }
  //   });
  // });

  return (
    <div id="maincontactform" className="justify-between lg:flex">
      <div
        id="shadow"
        className="md:p-0 p-4 bg-orange-600 2xl:w-1/2 xl:w-9/12 flex justify-center items-center"
        style={{
          backgroundImage:
            // eslint-disable-next-line operator-linebreak
            'url(' +
            'https://raw.githubusercontent.com/Kalfreight-In/KalTires_new/main/Assets/Images/Whatweoffer/Contactform/backgroundfirst.png' +
            ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        {success ? (
          <motion.div
            className="flex flex-center justify-center items-center "
            animate={{ scale: [0.5, 1] }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="flex bg-white flex-col justify-center items-center pt-2 pb-20">
              <div className="w-max">
                <Image
                  className="pb-8"
                  src={kvlTirelogo}
                  width={140}
                  height={50}
                />
              </div>
              <div className="text-2xl font-bold  bg-white text-black w-full m-20 mt-3 text-center mb-16 font-Helvetica ">
                <Sparkles>
                  <div className="text-black flex flex-col">
                    <div className="text-5xl  pb-4 text-orange-600">
                      Thank you
                    </div>
                    <div className="text-xl font-light text-gray-700">
                      Your submission has been received
                    </div>
                    <div className=" text-xl font-light text-gray-700">
                      We will contact You soon!
                    </div>
                  </div>
                </Sparkles>
              </div>
              <div
                className="text-xl font-normal text-white text-center  cursor-pointer mb-2"
                onClick={() => {
                  setSuccess(false);
                }}
              >
                <div
                  className="bg-blue-500 px-6 py-2"
                  animate={{ scale: [0.8, 1] }}
                  transition={{
                    ease: 'linear',
                    duration: 0.9,
                    repeat: Infinity,
                  }}
                >
                  Make a new request
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <form className="w-fit " onSubmit={(e) => handleSubmit(e)}>
            <div className="lg:ml-20 ml-4">
              <div className="lg:text-left text-center">
                <div
                  id="contactnew"
                  className="flex justify-start items-center xl:justify-start xl:items-start pb-8 pt-12   "
                >
                  {/* <img
                src="https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/navemaillogo.png"
                alt=""
                className="max-w-emailcontacticon max-h-8 pt-2 hidden md:block"
              /> */}
                  <div>
                    <h3 className="text-white md:text-5xl text-2xl font-bold text-left font-poppins">
                      Contact Us
                    </h3>
                    <p className="text-white pt-4  text-left lg:pr-0 md:mr-16 mr-4 font-Helvetica">
                      <span className="font-bold text-lg">
                        We are just one click away!
                        <span> </span>
                      </span>
                      Let’s grow your business together. Please provide your
                      details, and a KVL Tires expert will get in touch with you
                      shortly.{' '}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap  mb-6 md:mt-8 lg:mt-0 lg:mr-12 md:mr-8 mr-4">
                <div
                  className="w-full flex justify-center items-center   mb-6 md:mb-0 md:pt-4"
                  id="input_placeholder"
                >
                  <input
                    onChange={(e) => setName(e.target.value)}
                    className="appearance-none font-Helvetica block w-full h-full placeholder-white bg-opacity-30 bg-orange-600  text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                    id="grid-first-name"
                    type="text"
                    value={name}
                    placeholder="Name"
                    required
                  />
                </div>
                <div
                  className="w-full flex justify-center items-center   mb-6 md:mb-0 md:pt-4"
                  id="input_placeholder"
                >
                  <input
                    type="tel"
                    // pattern={formatPhoneNumber}
                    onClick={formatPhoneNumber}
                    maxLength="11"
                    minLength="10"
                    placeholder="Contact Number"
                    accept="number"
                    value={phone}
                    className="appearance-none block w-full h-full bg-opacity-30  bg-orange-600 placeholder-white text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                    onChange={(e) => setPhone(e.target.value)}
                    // defaultValue="+1"
                  />
                </div>
                <div
                  className="w-full flex justify-center items-center   mb-6 md:mb-0 md:pt-4"
                  id="input_placeholder"
                >
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none block font-Helvetica w-full h-full bg-opacity-30  bg-orange-600 placeholder-white text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
                    id="emailValidate"
                    type="email"
                    value={email}
                    placeholder="Email Id"
                    required
                    pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
                    // title="email is required like samosa"
                  />
                </div>
                {/* <div
                  className="w-full flex justify-center items-center   mb-6 md:mb-0 md:pt-4"
                  id="input_placeholder"
                >
                  <select
                    name="servicetype"
                    className=" block font-Helvetica w-10/12  h-full bg-opacity-30 focus:bg-orange-600  bg-orange-600 placeholder-white text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                    onChange={(e) => setservice(e.target.value)}
                    type="select"
                    value={service}
                    required
                  >
                    <option value="service" hidden>
                      Select Service Type
                    </option>
                    <option value="newtires">New Tires</option>
                    <option value="retreadtires">Retread Tires</option>
                    <option value="heavyduty">Heavy Duty Front End Work</option>
                    <option value="wheel">Wheel Alignment</option>
                    <option value="otr">OTR Tires</option>
                    <option value="speciality">Specialty</option>
                    <option value="enquiry">Enquiry</option>
                    <option value="others">Others</option>
                  </select>
                </div> */}

                <div
                  className="w-full flex justify-center items-center   mb-6 md:mb-0 md:pt-4"
                  id="input_placeholder"
                >
                  <input
                    onChange={(e) => setZip(e.target.value)}
                    // inputMode="numeric"
                    className="appearance-none block w-full h-full bg-opacity-30  bg-orange-600 placeholder-white text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
                    id="grid-first-name"
                    type="text"
                    value={zip}
                    placeholder="ZIP Code"
                    // pattern="^\d{5}(-\d{4})?$"
                    maxLength="6"
                    required
                  />
                </div>
                <div
                  className="w-full flex justify-center items-center   mb-0 md:mb-0 md:pt-4"
                  id="input_placeholder"
                >
                  <input
                    onChange={(e) => setMessage(e.target.value)}
                    className="appearance-none outline-none font-Helvetica block w-full h-full bg-opacity-30 bg-orange-600 placeholder-white text-white border rounded py-3 px-4 mb-0 leading-tight focus:outline-non"
                    id="grid-first-name"
                    type="text"
                    value={message}
                    placeholder="Message"
                    required
                  />
                </div>
              </div>
              <ReCAPTCHA
                sitekey="6LeCGLIiAAAAAKRyJeoCsg5gAaDf9CqCfzW75gHx"
                // onChange={onChange}
              />
              {/* 6LeCGLIiAAAAAHWZj9_696e_31bOGKU2lnUf-1q8 */}
              <div className="flex justify-center md:justify-start mt-2">
                <div
                  id="submitallbutton"
                  // className="lg:pl-16 md:pl-16 pl-6 md:pt-8 flex font-Helvetica md:pb-8 lg:pb-4  md:flex-row flex-col"
                  className="  md:pt-0 2xl:pt-8 flex  font-Helvetica md:pb-8 lg:pb-4  md:flex-row flex-col"
                >
                  <div className="flex justify-center items-center">
                    <button
                      className="text-black bg-white rounded h-12 p-4 w-48 mt-2 flex justify-center items-center font-Helvetica"
                      type="submit"
                      id="submitmain"
                    >
                      {buttonText}
                    </button>
                  </div>

                  <div>
                    <p className="text-white md:ml-16  bg-orange-600 text-opacity-80 border-opacity-80 bg-opacity-20 rounded h-12 font-Helvetica  mt-2 flex justify-start items-center">
                      Or call us now at &nbsp;
                      <a
                        href="tel:8008080025"
                        className="cursor-pointer font-bold font-Helvetica"
                      >
                        +1-800-808-0025
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>

      {isDesktop ? (
        <Image
          src={mainimage}
          alt="Book An Appointment"
          objectFit="cover"
          className="grayscale"
        />
      ) : null}
    </div>
  );
};

export default Contactform;
