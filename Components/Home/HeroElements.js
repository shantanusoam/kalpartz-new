import styled from 'styled-components';

export const HeroContainer = styled.div`
  background-image: radial-gradient(#42424280, #9f9e9e17),
    url(${(props) => props.bgImage});
  background-size: cover;
  display: flex;
  flex-direction: column;

  margin: 0;
  padding: 0;

  width: 100%;
  position: relative;
  height: 70vh;

  z-index: 1;
  // @media screen and (max-width: 1025px) {
  //   height: 50vh;
  // }
  @media screen and (max-width: 1024px) {
    height: 58vh;
  }
`;
export const ContainerMain = styled.div`
  postion: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1rem !important;
  h1 {
    font-size: 1.2rem;
    @media (min-width: 1024px) {
      font-size: 0rem;
    }
    font-weight: normal;
    color: #fff;
    letter-spacing: 0.3rem;
  }
  dev {
    text-align: center;
  }
`;
export const HeroBg = styled.div`
  background: ${(props) => `url(${props.BackgroundImage}) `};
  position: absolute;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: z;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  width: 100vw;
  height: 70vh;

  // @media screen and (max-width: 1025px) {
  //   height: 50vh;
  // }
  @media screen and (max-width: 1024px) {
    height: 58vh;
  }
`;
export const WWOCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  padding-bottom: 90px;
`;

export const WWOCArd = styled.div`
  flex: 0 0 200px;
  margin: 10px;

  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.01);
  z-index: 5;
  background-color: #ffffff;

  flex-direction: column;
  align-items: center;
  transition: 0.3s all ease;
  &:hover {
    box-shadow: 2px 5px 6px 0px rgba(0, 0, 6, 0.2);
  }
`;

export const WWOCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 200px;
`;
export const WWOCardimage = styled.div`
  display: flex;

  height: 100%;
`;

export const VideoBg = styled.video`
  width: 100%;

  height: 100%;

  -o-object-fit: cover;

  object-fit: cover;

  background: #232a34;
  background-image: linear-gradient(
    to right top,
    #051937,
    #004d7a,
    #008793,
    #00bf72,
    #a8eb12
  );
  @media screen and (max-width: 1024) {
    display: block;
    height: 60%;
    object-fit: cover;
  }
`;
export const HeroContent = styled.div`
  z-index: 2;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 10;
  @media only screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: flex-start;
    align-items: end;
  }

  // div{
  //     width: 55%;

  // }
`;
export const PCENTER = styled.h1`
  display: none;
  @media screen and (max-width: 1025px) {
    display: block;
    font-size: 1.5rem;
    font-weight: blod;
    color: #fff;
    text-align: center;
    margin-bottom: 6rem;
    padding: 0px;
  }
`;
export const HeroH1 = styled.h1`
  font-family: sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  z-index: 2;
  color: #ed1c24;

  @media screen and (max-width: 1025px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const HeroP = styled.h2`
  margin-bottom: 24px;
  font-family: sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 3.5rem;
  padding-bottom: 1rem;

  text-align: center;
  margin-top: 20%;

  z-index: 2;
  color: #ffffff;
  // border-bottom:4px solid;
  //     border-bottom-color: #FFAB53;
  //     display:block;
  //     margin:0 auto;

  //     padding-top:20px;
  &:hover {
    // border-bottom:4px solid;
    border-bottom-color: #ffab53;
    // display:block;
    // margin:0 auto;
    // width:50%;
    // padding-top:20px;
  }

  @media screen and (max-width: 1025px) {
    font-size: 54px;
    // padding: 0px 0px 50px 0px;
    text-align: center;
  }
  @media screen and (max-width: 1024px) {
    font-size: 40px;

    text-align: center;
  }
  @media screen and (max-width: 375px) {
    font-size: 42px;

    text-align: center;
  }
`;
export const CardHeading = styled.button`
  font-family: sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;

  padding: 25px 80px 25px 0px;
  text-align: start;
  z-index: 2;
  color: #ffffff;

  @media screen and (max-width: 1025px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 22px;
  }
`;
export const CardPara = styled.button`
  font-family: sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;

  text-align: center;
  z-index: 2;
  color: #ffffff;

  @media screen and (max-width: 1025px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 22px;
  }
`;
export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  z-index: 2;
  flex-direction: column;
  align-items: center;
`;
export const HeroPromoContainer = styled.div`
  z-index: 10;
  display: flex;
  flex: 0;
  justify-content: center;

  flex-direction: row;
  align-items: center;
  padding: 0px 0px 40px 0px;
  @media screen and (max-width: 1025px) {
    display: none;
  }
`;
export const HeroPromo = styled.div`
  margin-top: 32px;
  display: flex;
  flex: 1;
  z-index: 2;
  flex-direction: row;
  align-items: flex-end;
`;
export const SocialMediaActions = styled.div`
  display: flex;

  padding-right: 20px;

  /* padding: 0px 20px 0px 20px; */
  right: 0;
  top: 0;

  font-size: 3rem;
  cursor: pointer;
  color: #94cd01;
  &.active {
    color: #2f7dbd;
  }
  &:hover {
    color: #2f7dbd;
  }
`;
export const HomeContactContent = styled.div`
  margin-top: 32px;
  display: flex;
  z-index: 2;
  flex-direction: column;
  align-items: start;
  padding: 0px 20px 0px 0px;
`;
export const Callinfo = styled.p`
  font-family: sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;

  text-align: left;

  color: #ffffff;

  @media screen and (max-width: 1025px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 22px;
  }
`;
export const Info = styled.div`
  font-family: sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;

  text-align: center;
  z-index: 2;
  color: #ffffff;

  @media screen and (max-width: 1025px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 22px;
  }
`;
// export const WWOCCButtonM = styled(a)`
// display: none;

//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: #01e600;
//     color: #010606;
//   }
//   @media screen and (max-width: 1025px) {
//    padding: 25px;
// display: block;
//   display: flex;
//     justify-content: center;
//   background: #01e600;
//   padding: 10px 22px;
//   white-space: nowrap;
//   padding: 20px 92px;
//   font-size: 16px;
//   color: #fff;
//   outline: none;
//   border: none;

//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;

//   /* Second Nav */
//   margin-top: 44px;
// }
// `;
// export const WWOCCButton = styled(LinkR)`
// padding: 25px;

//   display: flex;
//     justify-content: center;
//   background: #01e600;
//   padding: 10px 22px;
//   white-space: nowrap;
//   padding: 20px 92px;
//   font-size: 16px;
//   color: #fff;
//   outline: none;
//   border: none;

//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;

//   /* Second Nav */

//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: #01e600;
//     color: #010606;
//   }
//   @media screen and (max-width: 1025px) {
//     display: none;
// }
// `;
// export const NavLinks = styled(LinkR)`
// color: ${({ scrollNav }) => (scrollNav ? '#fff' : '#000')};
// display: flex;
// align-items: center;
// text-decoration: none;
// padding: 0 1rem;
// height: 100%;
// cursor: pointer;
// &.active{
//     color: #01e600;
//   }
// &:hover{
//     color: #01e600;
//   };
// &.active {
//  border-bottom: 3px solid #15cdfc;
// }

// `;

export const Samosa = styled.div`
  margin-bottom: 25rem;
  // margin-top: 2rem;
  font-family: sans-serif;
  font-style: 300;
  font-weight: normal;
  font-size: 1.5rem;
  width: 62%;
  line-height: 1.5;

  text-align: center;
  align-items: center;

  z-index: 2;
  color: #ffffff;
  @media screen and (max-width: 1025px) {
    font-size: 50px;

    padding: 0px 0px 50px 0px;
    text-align: center;
  }

  @media screen and (max-width: 375px) {
    font-size: 42px;

    text-align: center;
  }
`;
