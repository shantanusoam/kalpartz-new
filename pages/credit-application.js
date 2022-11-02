import React, { useEffect } from 'react';
import Head from 'next/head';
import HeroSection from '../Components/Home/HeroSection';

const data = [
  {
    id: 1,
    img: 'https://raw.githubusercontent.com/Kalfreight-In/KalTires_new/main/Assets/Images/Credit/headercreditbanner.png',
    Heading: 'WE HELP YOU ACHIEVE YOUR DREAMS',
    imgMobile:
      'https://raw.githubusercontent.com/Kalfreight-In/KalTires_new/main/Assets/Images/Credit/headercreditbanner.png',
    // desc: 'WE HELP YOU ACHIEVE YOUR DREAMS',

    // CTA1: { heading: 'Apply Now', link: 'contactus' },
    // CTA12: { heading: 'Inventory', link: 'contactus' },
  },
];

const Credit = () => {
  useEffect(() => {
    let r;
    const d = document;
    const gt = d.getElementById;
    const cr = d.createElement;
    const tg = d.getElementsByTagName;
    const id = 'aidaform-embed';
    if (!gt.call(d, id)) {
      r = cr.call(d, 'script');
      r.id = id;
      r.src = 'https://embed.aidaform.com/embed.js';
      (d.head || tg.call(d, 'head')[0]).appendChild(r);
    }
  }, []);
  return (
    <>
      <Head>
        <title>Credit Application - Buy a New & Used Tires | KVL Tires</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="We are here to help you to achieve your dreams - Credit Application | KVL Tires & Services"
        />
      </Head>
      <HeroSection data={data[0]} />
      <div className="text-center 2xl:text-5xl text-black md:py-0 ">
        {/* Credit Application */}
      </div>
      <div
        data-aidaform-widget="form-2019-12"
        data-url="https://shantanu.aidaform.com/credit-aplication"
        data-width="100%"
        data-height="500px"
        data-do-resize
      />
    </>
  );
};

export default Credit;
