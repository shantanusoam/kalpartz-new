import React, { useState } from 'react';

// import logo from "../../assets/TrailerAndLeasing/Images/logo.png";
// import logo1 from "../../assets/TrailerAndLeasing/Images/vanguard.png";

import { animateScroll as scroll } from 'react-scroll';

import {
  Nav,
  NavMenu,
  NavBtn,
  MobileIcon,
  NavItem,
  NavLinks,
} from './BottomBarElements';

const BottomBar = ({ toggle }) => {
  const [scrollNav] = useState(false);
  // const changeNav = ()=> {
  //   if(window.scrollY >= 100) {
  //     setScrollNav(true)
  //   }
  //   else{
  //     setScrollNav(false)
  //   }
  // }
  // useEffect(()=>{
  //   window.addEventListener('scroll',changeNav)
  // },[]);
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <Nav scrollNav={scrollNav}>
      <NavMenu>
        <NavItem>
          <NavLinks className="2xl:text-desc text-black md:text-sm md:text-xs">
            Sitemap
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks className="2xl:text-desc text-navsmall md:text-sm md:text-xs">
            Terms of Use
          </NavLinks>
        </NavItem>
        {/* <NavItem>
            <NavLinks
              to="/About"
              onClick={toggleHome}
              className="2xl:text-desc text-navsmall md:text-sm md:text-xs"
            >
              <a to="/About">Contact</a>
            </NavLinks>
          </NavItem> */}
        {/* <NavItem>
            <NavLinks to="/products" onClick={toggleHome}>
              <a
                to="/products"
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={-80}
              >
                Products
              </a>
            </NavLinks>
          </NavItem> */}
        {/* <NavItem>
            <NavLinks
              to="/Contact"
              onClick={toggleHome}
              className="2xl:text-desc text-navsmall md:text-sm md:text-xs"
            >
              <a to="/Contact">News & Events</a>
            </NavLinks>
          </NavItem> */}
        <NavItem>
          <NavLinks className="2xl:text-desc text-navsmall md:text-sm md:text-xs">
            Privacy Policy
          </NavLinks>
        </NavItem>
        {/* <NavItem>

          <NavLinks >
          <Link to='ContactUs' smooth={true} duration={500} spy={true} exact={true} offset={-80}>Contact Us</Link>
          </NavLinks>
          </NavItem> */}

        <MobileIcon onClick={toggle}>{/* <FaBars/> */}</MobileIcon>

        {/* Second Nav */}
        {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
      </NavMenu>
      <div className="flex flex-col justify-end w-full">
        <NavBtn>
          {/* <h3 className="2xl:text-desc text-navsmall md:text-sm md:text-xs text-white">
            Copyright © BigRig Group, 2022. All Rights Reserved
          </h3> */}
          <div className="2xl:text-desc md:mr-4 text-navsmall md:text-sm lg:text-xs text-black font-bold">
            Copyright ©KVLTires, 2022. All Rights Reserved
          </div>
        </NavBtn>
      </div>

      {/* <MobileIcon onClick={toggle}>
          <FaBars/>
        </MobileIcon> */}
    </Nav>
  );
};

export default BottomBar;
