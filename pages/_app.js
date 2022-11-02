// import Script from 'next/script';
import React, { useRef, useState } from 'react';
import Head from 'next/head';

import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { Partytown } from '@builder.io/partytown/react';
import { BreadcrumbJsonLd, CorporateContactJsonLd } from 'next-seo';
import Script from 'next/script';
import { Navbar, Footer, TopUpbar, Topbar } from '../Components';

import '../styles/globals.css';
import '../styles/Home.scss';
import '../styles/Customswiper.css';
import { StateContext } from '../context/StateContext';

import Sidebar from '../Components/Sidebar';
import ErrorBoundary from '../Components/ErrorBoundary';
import useMediaQuery from '../Hooks/CustomMediaQuery';
import BottomBar from '../Components/Bottombar';
import CookiePopup from './CookiePopup';

const MyApp = ({ Component, pageProps }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [PcurrPos, setPcurrPos] = useState({ x: 0, y: 0 });
  const [hideOnScroll, setHideOnScroll] = useState(true);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;

      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
      setPcurrPos(currPos);
    },
    [hideOnScroll],
    false,
    false,
    200
  );

  const isDesktop = useMediaQuery('(min-width:1148px)');
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Head>
        <link rel="alternate" hrefLang="en" href="https://kvltires.com" />
        {/* <Partytown debug forward={['dataLayer.push']} /> */}
        {/* <Script
          strategy="worker"
          src="https://www.googletagmanager.com/gtag/js?id=GTM-PHKPDRM"
        /> */}
        {/* <!-- Google Tag Manager --> */}
        <Script
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            window.gtag = function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'GTM-PHKPDRM', { 
                page_path: window.location.pathname,
            });
        `,
          }}
        />

        {/* <script
dangerouslySetInnerHTML={ (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PHKPDRM')
}
/> */}

        {/* <!-- End Google Tag Manager --> */}

        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PHKPDRM');`,
          }}
        />
      </Head>
      {/* <body> */}
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PHKPDRM"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      />
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'KVL Tires',
            item: 'https://kvltires.com/',
          },
          {
            position: 2,
            name: 'tires services',
            item: 'https://kvltires.com/tires-services',
          },
          {
            position: 3,
            name: '24X7 roadside assistance',
            item: 'https://kvltires.com/24X7-roadside-assistance',
          },
          {
            position: 4,
            name: 'locations',
            item: 'https://kvltires.com/locations',
          },
          {
            position: 4,
            name: 'careers',
            item: 'https://kvltires.com/careers',
          },
          {
            position: 4,
            name: 'credit application',
            item: 'https://kvltires.com/credit-application',
          },
        ]}
      />
      <CorporateContactJsonLd
        url="https://kvltires.com/"
        logo="https://kvltires.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FKvlTiresLogo.c226bd2d.png&w=384&q=75"
        contactPoint={[
          // {
          //   telephone: '+1-401-555-1212',
          //   contactType: 'customer service',
          //   areaServed: 'US',
          //   availableLanguage: ['English', 'Spanish', 'French'],
          // },
          {
            telephone: '+1-800-808-002',
            contactType: 'customer service',
            contactOption: 'TollFree',
            availableLanguage: 'en',
            areaServed: 'US',
          },
          // {
          //   telephone: '+1-877-453-1304',
          //   contactType: 'technical support',
          //   contactOption: 'TollFree',
          //   areaServed: ['US', 'CA'],
          //   availableLanguage: ['English', 'French'],
          // },
        ]}
      />
      <StateContext>
        {isDesktop ? <TopUpbar /> : null}

        <Topbar toggle={toggle} postion={PcurrPos} />
        <ErrorBoundary>
          {' '}
          <Navbar toggle={toggle} postion={PcurrPos} />
        </ErrorBoundary>

        <Component {...pageProps} />
        <Footer />
        <BottomBar />
        {/* <Script
      src="https://kit.fontawesome.com/d16bf6a891.js"
      crossOrigin="anonymous"
    /> */}
        <ErrorBoundary>
          {!isDesktop ? <Sidebar isOpen={isOpen} toggle={toggle} /> : null}
        </ErrorBoundary>
        <CookiePopup />
      </StateContext>
      {/* </body> */}
    </>
  );
};

export default MyApp;
