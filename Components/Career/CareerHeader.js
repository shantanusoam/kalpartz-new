import React from 'react';
// import Image from 'next/image';
// import headerimagecareer from '../../Assets/Images/Career/headerbanner.png';
// import headerbannermobile from '../../Assets/Images/Career/headerbannermobile.png';
// import useMediaQuery from '../../Hooks/CustomMediaQuery';
import styled from 'styled-components';
import HeroSection from '../Home/HeroSection';
import useMediaQuery from '../../Hooks/CustomMediaQuery';

const data = [
  {
    id: 1,
    img: 'https://raw.githubusercontent.com/Kalfreight-In/KalTires_new/main/Assets/Images/Career/headerbanner.png',
    Heading: 'Join Our Team',
    // page: 'Careers'
    // desc: 'Join Our Team',

    // CTA1: { heading: 'Apply Now', link: 'contactus' },
    // CTA12: { heading: 'Inventory', link: 'contactus' },
  },
];
const Gradients = styled.div`
  background-image: linear-gradient(
    230.87deg,
    rgba(0, 0, 0, 0.7) 10.28%,
    rgba(0, 0, 0, 0) 91.36%
  );
  width: 100%;
  height: 100%;
  transform: rotate(-180deg);
  object-fit: cover;
  position: absolute;
  z-index: 2;
`;
export const CareerHeader = () => {
  const isMobile = useMediaQuery('(max-width:1024px)');
  return (
    <>
      {/* <Gradients /> */}
      <div id="careerHeadermain">
        <div
          id="careerHeadertwo"
          style={{
            backgroundImage:
              // eslint-disable-next-line operator-linebreak
              'url(' +
              'https://raw.githubusercontent.com/Kalfreight-In/KalTires_new/main/Assets/Images/Career/headerbanner.png' +
              ')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: isMobile ? '50vh' : '70vh',
            // display: 'flex',
            // flexDirection: 'row',
            // alignItems: 'end',
            // justifyContent: 'center',
            width: '100%',
            margin: '0',
            padding: '0',
            // position: 'relative',
          }}
        >
          <h1 className="text-center flex justify-center items-end lg:h-careerheaderHeight h-careerheaderMobileH md:text-5xl xl:text-6xl text-4xl  font-poppins  font-bold text-white font-xl  pb-0 lg:pb-4   lg:mx-0 block-inline">
            JOIN OUR <br></br>DIVERSIFIED TEAM!
          </h1>
        </div>
      </div>
    </>
    // const isMobile = useMediaQuery('(max-width:768px)');

    // <Image
    //   src={isMobile ? headerbannermobile : headerimagecareer}
    //   alt="headerImage"
    //   objectFit="contain"
    // />

    // <HeroSection />
  );
};
