/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React from 'react';

const MapDropdown = ({ data }) => (
  <>
    {' '}
    <div id="mainnewnavcontainer">
      <div id="innermainnavcontainer">
        <div className="group inline-block w-full">
          <button
            type="button"
            className="outline-none focus:outline-none  px-3 py-1 hover:bg-yellow-shadowhover bg-white rounded-md flex items-center w-full h-12"
          >
            <span className="pr-1 font-semibold flex-1">{data.name}</span>
            <span>
              <svg
                className="fill-current h-4 w-4 transform group-hover:-rotate-180
                         transition duration-150 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </span>
          </button>
          <ul
            className="bg-white  rounded-sm transform scale-0 group-hover:scale-100 absolute
                    transition duration-150 ease-in-out origin-top min-w- w-max"
          >
            <span className="w-max mx-4 text-white">{data.name}</span>
            {/* <ul>
            {data.Sites.map((data) => (
              <ListItem key={data.id} listItem={data} />
            ))}
          </ul> */}
            {data.Sites
              ? data.Sites.map((subdata, index) => (
                  <li
                    key={index}
                    className="rounded-sm px-6 py-1 hover:bg-yellow-shadowhover flex justify-center items-center"
                  >
                    {subdata.Sites != null ? (
                      <>
                        <button
                          type="button"
                          className="outline-none focus:outline-none  px-3 py-1  bg-white rounded-sm flex items-center w-full h-12"
                        >
                          <span className="pr-1 font-semibold flex-1">
                            {subdata.name}
                          </span>
                          <span className="mr-auto">
                            <svg
                              className="fill-current h-4 w-4 transform hover:-rotate-180
    transition duration-150 ease-in-out"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </span>
                        </button>
                        <ul
                          className=" bg-white border rounded-sm absolute  right-0
transition duration-150 ease-in-out origin-top-left
min-w-32
"
                        >
                          {/* {subdata.Sites.map((Ssubdata, index) => (
                            <li className="px-3 py-1 ">
                              <NavItemnew key={data.id}>
                                <NavLinksnew>{data.name}</NavLinksnew>
                              </NavItemnew>
                            </li>
                          ))} */}
                        </ul>
                      </>
                    ) : null}
                  </li>
                ))
              : null}

            {/* <li class="rounded-sm px-3 py-1 hover:bg-gray-100">
            <NavItemnew>
              <NavLinksnew>{data.navItem}</NavLinksnew>
            </NavItemnew>
          </li>
          <li class="rounded-sm px-3 py-1 hover:bg-gray-100">
            <NavItemnew>
              <NavLinksnew>{data.navItem}</NavLinksnew>
            </NavItemnew>
          </li>
          <li class="rounded-sm px-3 py-1 hover:bg-gray-100">
            <NavItemnew>
              <NavLinksnew>{data.navItem}</NavLinksnew>
            </NavItemnew>
          </li>
          <li class="rounded-sm px-3 py-1 hover:bg-gray-100">
            <NavItemnew>
              <NavLinksnew>Kalfreight</NavLinksnew>
            </NavItemnew>
          </li> */}
          </ul>
        </div>
      </div>
    </div>
  </>
);

export default MapDropdown;
