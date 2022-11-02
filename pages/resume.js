import React, { useEffect } from 'react';
import Head from 'next/head';
import HeroSection from '../Components/Home/HeroSection';

const data = [
  {
    id: 1,
    img: 'https://raw.githubusercontent.com/Kalfreight-In/KalTires_new/main/Assets/Images/Resume/headerResumebanner.png',
    Heading: 'WE HELP YOU ACHIEVE YOUR DREAMS',
    // desc: 'WE HELP YOU ACHIEVE YOUR DREAMS',

    // CTA1: { heading: 'Apply Now', link: 'contactus' },
    // CTA12: { heading: 'Inventory', link: 'contactus' },
  },
];

const Resume = () => {
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
    <div
      data-aidaform-widget="form-2019-12"
      data-url="https://shantanu.aidaform.com/career-kvltires"
      data-width="100%"
      data-height="500px"
      data-do-resize
    />
  );
};

export default Resume;
