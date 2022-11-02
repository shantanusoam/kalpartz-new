/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import styled from 'styled-components';

const SidebarLink = styled.div`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled.a`
  background: #414757;
  height: 60px;

  display: flex;
  align-items: center;
  flex-direction: column;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  &:hover {
    background: #632ce4;
    cursor: pointer;
  }
`;

// const SubMenu = ({ item }) => {
//   const [subnav, setSubnav] = useState(false);
//   const [Ssubnav, setSSubnav] = useState(false);

//   const showSubnav = () => setSubnav(!subnav);
//   const show = () => {
//     subnav
//       ? setSSubnav(!subnav) && Ssubnav(false)
//       : setSSubnav(true) && Ssubnav(true);
//   };
//   return (
//     <>
//       <SidebarLink onClick={item.Sites && showSubnav}>
//         <div>
//           {/* {item.icon} */}
//           <SidebarLabel>{item.name}</SidebarLabel>
//         </div>
//         {/* <div>{item.Sites && subnav ? item.Sites : null}</div> */}
//       </SidebarLink>
//       {subnav &&
//         item.Sites.map((item, index) => (
//           <DropdownLink to={item.name} key={index}>
//             {/* {item.icon} */}
//             <SidebarLabel>{item.name}</SidebarLabel>
//             {/* <SidebarLabel>{item.address}</SidebarLabel> */}
//           </DropdownLink>
//         ))}
//     </>
//   );
// };

// export default SubMenu;
