import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { motion } from 'framer-motion';
import ReCAPTCHA from 'react-google-recaptcha';
import mainimage from '../../Assets/Images/Whatweoffer/Contactform/mainimage.png';
import useMediaQuery from '../../Hooks/CustomMediaQuery';
import Sparkles from '../../Animation/Sparkel';
import kvlTirelogo from '../../Assets/Images/KvlTiresLogo.png';

const Contactform = () => {
  const isDesktop = useMediaQuery('(min-width:1148px)');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phoneno, setphoneno] = useState('');
  const [service, setservice] = useState('');
  const [ROC, setROC] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [buttonText, setButtonText] = useState('Submit');
  const [select, setSelect] = useState(false);
  const resetForm = (e) => {
    setName('');
    setEmail('');
    setMessage('');
    setphoneno('');
    setError(false);
    setservice('');
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
      .post('https://nodeserver-contactus.herokuapp.com/api/v2', data)
      .then((res) => [setSuccess(true), resetForm()])
      .catch(() => {
        [setSuccess(true), resetForm()];
        console.log('Message not sent');
      });
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
    <div id="maincontactformnew" className="justify-between lg:flex">
      <div
        id="shadowtwo"
        // className="md:p-0 p-4 bg-red-600 flex justify-center items-center"
        className="md:p-0 p-4 bg-red-600 2xl:w-1/2 xl:w-9/12 flex justify-center items-center"
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
                      We will contact you soon!
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
            <div id="thisform">
              <div className="lg:ml-20 ml-4">
                <div className="xl:text-left text-center">
                  <div
                    id="contactnew"
                    className="flex justify-start items-center xl:justify-start xl:items-start pb-8 md:pb-0 pt-12"
                  >
                    {/* <img
                src="https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/navemaillogo.png"
                alt=""
                className="max-w-emailcontacticon max-h-8 pt-2 hidden md:block"
              /> */}
                    <div>
                      <h4
                        //  className="text-white md:text-4xl 2xl:text-5xl lg:text-contactheading  text-2xl font-bold lg:text-left md:text-justify text-left font-poppins"
                        className="text-white md:text-3xl 2xl:text-5xl lg:text-contactheading  text-2xl font-bold lg:text-left md:text-justify text-left font-poppins"
                      >
                        Book An Appointment Now
                      </h4>
                      <p className="text-white pt-4  lg:text-left text-justify lg:pr-0 md:mr-16 mr-4 font-Helvetica ">
                        Let’s grow your business together. Please provide your
                        details, and a KVL Tires expert will get in touch with
                        you shortly.{' '}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap mb-6 md:mt-8 lg:mr-12 md:mr-8 mr-4">
                  <div
                    className="w-full flex justify-center    mb-6 md:mb-0 lg:pt-4 pt-0"
                    id="input_placeholder"
                  >
                    <input
                      onChange={(e) => setName(e.target.value)}
                      className="appearance-none  font-medium block w-full h-full placeholder-white bg-opacity-30 bg-red-600  text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                      id="grid-first-name"
                      type="text"
                      value={name}
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div
                    className="w-full flex justify-center    mb-6 md:mb-0 md:pt-4"
                    id="input_placeholder"
                  >
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      className="appearance-none font-medium block  w-full h-full bg-opacity-30  bg-red-600 placeholder-white text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
                      id="emailValidate"
                      type="email"
                      value={email}
                      placeholder="Email Id"
                      required
                      pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
                    />
                  </div>
                  <div
                    className="w-full flex justify-center    mb-6 md:mb-0 md:pt-4 "
                    id="input_placeholder"
                  >
                    <div
                      style={{ zIndex: 3 }}
                      className="w-full relative    appearance-none block h-full  bg-red-600 bg-opacity-30  rounded  leading-tight focus:outline-none text-white text-base"
                    >
                      <select
                        name="servicetype"
                        // className="block font-Helvetica w-10/12  h-full bg-opacity-30 focus:bg-red-600   bg-red-600  text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                        className="w-full inherit block h-full appearance-none  bg-red-600 bg-opacity-20 focus:bg-red-600 focus:opacity-60 rounded  border py-3 px-4 mb-3 leading-tight focus:outline-none text-white text-base font-medium  p-2.5 "
                        onChange={(e) => setservice(e.target.value)}
                        type="select"
                        value={service}
                        required
                        onClick={() => {
                          setSelect(!select);
                        }}
                      >
                        <option value="service" hidden>
                          Inquiry Type
                        </option>

                        <option value="newtires">New Tires</option>
                        <option value="retreadtires">Retread Tires</option>
                        <option value="heavyduty">
                          Heavy Duty Front-End Work
                        </option>
                        <option value="wheel">Wheel Alignment</option>
                        <option value="otr">OTR Tires</option>
                        {/* <option value="speciality">Specialty</option>
                      <option value="enquiry">Enquiry</option> */}
                        <option value="others">Others</option>
                      </select>
                      <div
                        className="absolute  text-white font-xl right-5 bottom-5"
                        style={{ zIndex: -1 }}
                      >
                        {select ? <IoIosArrowUp /> : <IoIosArrowDown />}
                      </div>
                    </div>
                  </div>
                  <div
                    className="w-full flex justify-center   mb-6 md:mb-0 md:pt-4"
                    id="input_placeholder"
                  >
                    <input
                      onChange={(e) => setMessage(e.target.value)}
                      className="appearance-none outline-none font-medium block w-full h-full bg-opacity-30 bg-red-600 placeholder-white text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-non"
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
                <div className="flex justify-center md:justify-start">
                  <div
                    id="submitallbutton"
                    // className="lg:pl-16 md:pl-16 pl-6 md:pt-8 flex font-Helvetica md:pb-8 lg:pb-4  md:flex-row flex-col"
                    className=" md:pt-0 2xl:pt-8 flex  font-Helvetica md:pb-8 lg:pb-4  md:flex-row flex-col"
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
                      <p className="text-white md:ml-16  bg-red-600 text-opacity-80 border-opacity-80 bg-opacity-20 rounded h-12 font-Helvetica  mt-2 flex justify-start items-center">
                        Or call us now at &nbsp;
                        <a
                          href="tel:8008080025"
                          className="cursor-pointer font-bold font-Helvetica"
                        >
                          +1-800-8080-0025
                        </a>
                      </p>
                    </div>
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
          alt="contactus"
          objectFit="cover"
          className="grayscale"
        />
      ) : null}
    </div>
  );
};

export default Contactform;
