import React from 'react';
import useMediaQuery from '../../Hooks/CustomMediaQuery';
import { careerKvl } from '../../data/data';

const ydata = careerKvl;

export const Ykvl = () => {
  const isMobile = useMediaQuery('(max-width:768px)');
  return (
    <div id="mainykvl">
      {ydata.map((thisdata) => (
        <div id="maininnerykvl" className="pt-8" key={thisdata}>
          <div
            id="mainboxykvl"
            className="grid lg:px-20 lg:grid-flow-col grid-flow-row"
          >
            <div
              id="firstboxykvl"
              className="flex items-center lg:justify-start justify-center "
            >
              <h2 className="lg:text-4xl text-3xl text-departmentheading font-poppins font-bold mr-8 ">
                {thisdata.Headingm}
              </h2>
            </div>
            <div
              className={
                isMobile
                  ? 'lg:pl-24 pl-0 lg:pt-0 pt-8'
                  : 'lg:pl-0 pl-0 lg:pt-0 pt-8 md:mx-8 lg:mx-0'
              }
            >
              <div
                id="secondboxykvl"
                className={
                  isMobile
                    ? 'text-neutral-500 text-base border-l-2 ml-12 pl-8  border-kaltire-red pr-12  lg:pl-4   whitespace-normal text-justify font-Helvetica'
                    : 'text-neutral-500 lg:text-base 2xl:text-lg  border-l-2 border-kaltire-red pr-0 pl-8 font-Helvetica   whitespace-normal text-justify tracking-wide'
                }
              >
                {thisdata.desc}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
