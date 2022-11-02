import React, { useRef, useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import ProgressBarLine from '../ProgressBar/ProgressBarLine';
import Sparkles from '../../Animation/Sparkel';

const DropBox = () => {
  //   const [state, setState] = useState(true);
  //   const [loading, setloading] = useState(true);
  const [Error, setError] = useState(true);
  // const [Progress, setProgress] = useState(0);
  const [success, setSuccess] = useState(false);
  const [file, setFile] = useState();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [select, setSelect] = useState(false);
  const [service, setservice] = useState('');
  const [buttonText, setButtonText] = useState('Submit');
  //   const [uploadedFile, setuploadedFile] = useState(null);
  const inputRef = useRef(null);

  const clickInput = () => {
    inputRef.current.click();
  };
  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');

    setError(false);

    setButtonText('Submit');
  };

  function handleSubmit(event) {
    event.preventDefault();
    const url = 'http://localhost:5000/load';
    // const formData = new FormData();

    // formData.append('file', file);

    // formData.append('fileName', file.name);

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    const data = {
      site: 'ssoam@kalfreight.com',
      name,
      email,
      message,
      service,
      file,
      //   location,
    };

    axios
      .post(url, data, config)
      .then(() => [setSuccess(true), resetForm()])
      .then((uploadEvt) => {
        const percentCompleted = Math.round(
          (uploadEvt.loaded * 100) / uploadEvt.total
        );
        setProgress(percentCompleted);
      })
      .catch(() => {
        [setSuccess(true), resetForm()];
        console.log('Message not sent');
      });
  }

  function handleChange(event) {
    setFile(event.target.files[0]);
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    console.log('fileObj is', fileObj);

    // // 👇️ reset file input
    // event.target.value = null;

    // // 👇️ is now empty
    // console.log(event.target.files);

    // // 👇️ can still access file object here
    // console.log(fileObj);
    // console.log(fileObj.name);
  }

  return (
    <div>
      <header className="App-header">
        {file ? <img href={file} /> : null}
        {success ? (
          <div
            className="flex flex-center justify-center "
            animate={{ scale: [0.5, 1] }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="flex bg-white flex-col justify-center items-center">
              <div className="w-max">
                {/* <Sparkles>
                  <Image
                    src="https://raw.githubusercontent.com/Kalfreight-In/BigRigGroups/main/src/assets/animation/3dbuddy.png"
                    width={350}
                    height={350}
                    layout="fill"
                    />
                    </Sparkles> */}
              </div>
              <div className="text-2xl font-bold bg-white text-black w-2/4 mt-3 text-center mb-16 font-Helvetica ">
                <Sparkles>
                  <div className="text-black flex flex-col">
                    <div className="text-4xl">Thank you</div>
                    just a short while as we make sure the right person{' '}
                    <div className="text-orange-600">get back to You ASAP!</div>
                  </div>
                </Sparkles>
              </div>
              <div
                className="text-3xl font-bold text-black text-center  cursor-pointer mb-2"
                onClick={() => {
                  setSuccess(false);
                }}
              >
                {/* <div
                  animate={{ scale: [0.8, 1] }}
                  transition={{
                    ease: 'linear',
                    duration: 0.9,
                    repeat: Infinity,
                  }}
                >
                  Something else <strong className="text-5xl ">!</strong>
                </div> */}
              </div>
            </div>
          </div>
        ) : (
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex justify-center flex-col items-center
        "
          >
            <div
              className="w-full flex justify-center items-center   mt-1   md:mb-0 lg:pt-4 pt-0"
              id="input_placeholder"
            >
              <input
                onChange={(e) => setName(e.target.value)}
                className="appearance-none   font-medium block w-full h-full placeholder-white  bg-red-600  text-white border rounded py-3 px-4     leading-tight focus:outline-none"
                id="grid-first-name"
                type="text"
                value={name}
                placeholder="Name"
                required
              />
            </div>
            <div
              className="w-full flex justify-center items-center       md:mb-0 md:pt-4"
              id="input_placeholder"
            >
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none font-medium block  w-full h-full   bg-red-600 placeholder-white text-white border rounded py-3 px-4     leading-tight focus:outline-none "
                id="emailValidate"
                type="email"
                value={email}
                placeholder="Email Id"
                required
                pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
              />
            </div>
            <div
              className="w-full flex justify-center items-center       md:mb-0 md:pt-4 "
              id="input_placeholder"
            >
              <div className="w-full relative  appearance-none  block h-full  bg-red-600  focus:bg-red-600 rounded  leading-tight focus:outline-none text-white text-base">
                <select
                  name="Department"
                  // className="block font-Helvetica w-10/12  h-full bg-opacity-30 focus:bg-red-600   bg-red-600  text-white border rounded py-3 px-4     leading-tight focus:outline-none"
                  className="w-full z-10 relative appearance-none block h-full  bg-red-600  focus:bg-red-600 rounded  border py-3 px-4  leading-tight focus:outline-none text-white text-base font-medium  p-2.5 "
                  onChange={(e) => setservice(e.target.value)}
                  type="select"
                  value={service}
                  required
                  onClick={() => {
                    setSelect(!select);
                  }}
                >
                  <option value="Department" hidden>
                    Department
                  </option>

                  <option value="Administration">Administration</option>

                  <option value="WareHouse Manager">WareHouse Manager</option>
                  <option value="Service Technician">Service Technician</option>
                  <option value="Delivery Drivers">Delivery Drivers</option>

                  <option value="Inventory Control">Inventory Control</option>
                  <option value="Operations">Operations</option>
                  {/* <option value="speciality">Specialty</option>
          <option value="enquiry">Enquiry</option> */}
                  <option value="Sales">Sales</option>
                  <option value="others">Other</option>
                </select>
                <div className="absolute z-20 text-white font-xl right-5 bottom-5">
                  {select ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
              </div>
            </div>
            <div
              className="w-full flex justify-center items-center       md:mb-0 md:pt-4"
              id="input_placeholder"
            >
              <input
                onChange={(e) => setMessage(e.target.value)}
                className="appearance-none font-medium block w-full h-full  bg-red-600 placeholder-white text-white border rounded py-3 px-4 mb-1 leading-tight focus:outline-non"
                id="grid-first-name"
                type="number"
                min={0}
                value={message}
                min="0"
                placeholder="Year Of Experience"
                required
              />
            </div>
            <div className="drop-zone" onClick={clickInput}>
              <span className="drop-zone__prompt">
                Drop file here or click to upload
              </span>
              <input
                type="file"
                name="file"
                className="drop-zone__input"
                ref={inputRef}
                onChange={handleChange}
              />
            </div>
            <div className="text-black text-xl">{file}</div>
            <button
              className="text-white rounded font-bold text-xl  h-12 p-4 w-48 mt-2 flex justify-center items-center font-Helvetica bg-orange-600 "
              type="submit"
              id="submitmain"
            >
              {buttonText}
            </button>
          </form>
        )}
      </header>
      {/* <div className="progress">
        <ProgressBarLine
          value={Progress}
          min={0}
          max={100}
          strokeWidth={5}
          trailWidth={5}
          styles={{
            path: {
              stroke: '#17b978',
            },
            trail: {
              stroke: '#ffffff',
            },
            text: {
              fill: '#ffffff',
              textAlign: 'center',
              fontSize: '12px',
            },
          }}
        />
      </div> */}
    </div>
  );
};

export default DropBox;
