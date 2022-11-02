import React from 'react';
import styled from 'styled-components';
export const NewDeerDiv = styled.div`
  padding: 2rem 20rem 2rem 5rem;
  margin: 0rem 0rem 0rem -5rem;
  justify-content: flex-end;
  align-items: center;

  z-index: 20;
  clip-path: polygon(0 0, 83% 0, 100% 100%, 0% 100%);
  background-color: #f15a22;
  cursor: pointer;
`;
const NewDeerGuard = () => {
  return (
    <div>
      <div className="lg:block hidden">
        <div
          style={{
            backgroundImage:
              // eslint-disable-next-line operator-linebreak
              'url(' +
              'https://i0.wp.com/kalpartz.com/wp-content/uploads/2022/07/istockphoto-1312161653-170667a-1.png?fit=1918%2C661&ssl=1' +
              ')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <div>
            <div className="lg:grid lg:grid-cols-12 py-20">
              <div className="lg:flex  col-span-6   items-center ">
                <div className="pl-20">
                  <NewDeerDiv className="bg-orange-600 p-12 pl-20 -ml-20 pr-32">
                    <div className="text-white font-bold text-4xl pb-6">
                      New Deer Guard
                    </div>
                    <div className="text-white font-normal text-2xl">
                      Get on the road with the best articles.
                    </div>
                  </NewDeerDiv>
                  <div className="py-12 ">
                    <div className="text-white font-bold text-3xl">
                      All Makes and Models
                    </div>
                  </div>
                  <div className="rounded-lg bg-orange-600 px-6 py-3 inline-block">
                    <div className="text-white font-bold text-lg">
                      Call For Price
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:px-10 px-6 lg:px-0  lg:col-span-6  max-w-5xl col mx-auto  text-center lg:text-left lg:ml-20 lg:mr-20 ml-0">
                <div className="flex flex-col justify-center items-center ">
                  <div>
                    <img src="https://i0.wp.com/kalpartz.com/wp-content/uploads/2022/07/XG-150-BLACK-1.png?fit=777%2C448&ssl=1"></img>
                  </div>
                  <div className="flex flex-row justify-between items-center gap-6">
                    <div>
                      <img src="https://i0.wp.com/kalpartz.com/wp-content/uploads/2022/07/937_deer-crossing.png?fit=120%2C122&ssl=1"></img>
                    </div>
                    <div>
                      <img src="https://i0.wp.com/kalpartz.com/wp-content/uploads/2022/07/Kenworth-logo-2560x1440-2.png?fit=249%2C54&ssl=1"></img>
                    </div>
                    <div>
                      <img src="https://i0.wp.com/kalpartz.com/wp-content/uploads/2022/07/Volvo-logo-2014-1920x1080-1.png?fit=198%2C105&ssl=1"></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewDeerGuard;
