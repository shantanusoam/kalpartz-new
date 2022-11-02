import React from 'react';
import Head from 'next/head';
import { Speciality } from '../Components/Whatweoffer/Speciality';
import { Services } from '../Components/Whatweoffer/Services';
import { IndustTires } from '../Components/Whatweoffer/IndustTires';
import CommercialTire from '../Components/Whatweoffer/CommercialTire';
import Contactform from '../Components/Whatweoffer/ContactForm';
import HeroSection from '../Components/Home/HeroSection';
// import Onsiteservice from '../Components/Roadside_Assitance/Onsiteservice';

const data = [
  {
    id: 1,
    img: 'https://raw.githubusercontent.com/Kalfreight-In/KalTires_new/main/Assets/Images/Whatweoffer/WhatWeOfferBg.png',
    imgMobile:
      'https://raw.githubusercontent.com/Kalfreight-In/KalTires_new/main/Assets/Images/Whatweoffer/WhatWeOfferBg.png',
    Heading: 'Get back on the road safely with KVL Tires  ',
    desc: 'Offering Major Tire Brands, Quality Tire Repair Services across 18+ Locations & Growing ',
    CTA1: {
      heading: 'Contact Us',
      Slink: '/#maincontactform',
      link: '/#ContactUsMain',
    },
    CTA12: { heading: 'Inventory', link: 'contactus' },
    page: 'tire',
  },
];

const tiresandservices = () => (
  <div>
    <Head>
      <title>
        Buy New Tires | Tires Services for Industrial, Earthmover, Commercial
        Tires
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="KVL Tires offers Heavy Duty, Commercial, Retread, Tires, and solutions adapted for the challenges of your daily uses and Heavy Activities."
      />
    </Head>
    <HeroSection data={data[0]} />
    <CommercialTire />
    <Speciality />
    <IndustTires />
    <Services />
    <Contactform />
  </div>
);

export default tiresandservices;
