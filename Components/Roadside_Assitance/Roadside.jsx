import Image from 'next/image';
// import { IoIosCheckmark } from 'react-icons/io';
import { MdLocalPhone } from 'react-icons/md';
// import { BiMessageDetail } from 'react-icons/bi';
import servicetruck from '../../Assets/Images/Roadside_Assistance/servicetruck.png';
import useMediaQuery from '../../Hooks/CustomMediaQuery';

const Roadside = () => {
  const isDesktop = useMediaQuery('(min-width:1148px)');
  return (
    <div id="roadmain">
      <div id="roadmaininner">
        <div className="bg-bg-white-1">
          <div className="lg:grid lg:grid-cols-2 lg:py-4 py-0 xl:py-0">
            {isDesktop ? null : (
              <div className="block  flex justify-center    md:py-8 py-8 z-10">
                <h1 className="text-4xl tracking-tight  text-black font-Helvetica font-semibold ">
                  <span className="block text-center md:text-2xl text-xl">
                    <span className="text-kaltire-red font-Verdana">24/7</span>{' '}
                    <span className="font-poppins">ROADSIDE ASSISTANCE</span>
                  </span>
                </h1>
              </div>
            )}

            <div className="  lg:my-12 lg:pl-12 z-0 md:px-0 mx-8">
              <Image
                className="lg:inset-0 h-60 w-full  lg:h-full object-cover object-center "
                src={servicetruck}
                alt="24/7 Roadside Assistance Tire Services"
              />
            </div>
            <div className="flex items-center  2xl:pt-2 md:py-8 lg:py-0">
              <div className="md:px-0 px-6 lg:px-0 md:mx-12 mx-2   pt-0 pb-4 md:pb-0">
                {isDesktop ? (
                  <div className="text-3xl tracking-tight  text-black font-poppins font-bold block">
                    <h1 className="block font-Helvetica text-4xl">
                      <span className="text-kaltire-red font-Verdana">
                        24/7
                      </span>
                      <span className="pl-4 font-poppins">
                        ROADSIDE ASSISTANCE
                      </span>
                    </h1>
                  </div>
                ) : null}
                <p className="text-neutral-500 mt-5 2xl:text-lg lg:pr-4 lg:text-base text-sm font-normal   whitespace-normal text-justify font-Helvetica ">
                  We understand how much you depend on your vehicle. So, if you
                  ever encounter a sudden blowout, get in touch with us for
                  quick roadside assistance. We provide 24-hour breakdown
                  services to everyone in need. With strategically located
                  service facilities, we can effectively service most, if not
                  all, of your emergency needs throughout North America. So next
                  time, instead of searching for ‘roadside assistance near me’,
                  call our 24/7/365 service center at +1-800-808-0025. Our
                  trained & knowledgeable staff are always ready to answer your
                  service calls.
                  {/* Dial +1-800-808-0025 */}
                </p>
                {/* <div className="inline-block py-3">
                <p className="pt-2">
                  <div className="flex items-center ">
                    <span>
                      <IoIosCheckmark className="h-12 w-12 text-kaltire-red" />
                    </span>
                    <span>Lorem ipsum dolor sit.</span>
                  </div>
                </p>
                <p className="pt-2">
                  <div className="flex items-center ">
                    <span>
                      <IoIosCheckmark className="h-12 w-12 text-kaltire-red" />
                    </span>
                    <span>Lorem ipsum dolor sit.</span>
                  </div>
                </p>
                <p className="pt-2">
                  <div className="flex items-center ">
                    <span>
                      <IoIosCheckmark className="h-12 w-12 text-kaltire-red" />
                    </span>
                    <span>Lorem ipsum dolor sit.</span>
                  </div>
                </p>
                <p className="pt-2">
                  <div className="flex items-center ">
                    <span>
                      <IoIosCheckmark className="h-12 w-12 text-kaltire-red" />
                    </span>
                    <span>Lorem ipsum dolor sit.</span>
                  </div>
                </p>
              </div> */}
                {/* The Phone and Email icons start  */}
                <div className="block pt-4" id="PhoneEmailRoad" />
                <div className="flex">
                  <div id="Hotline" className="flex items-center">
                    <div id="Hotline-first" className=" mr-2">
                      <MdLocalPhone className="h-6 w-6 text-kaltire-red" />
                    </div>
                    <div id="Hotline-second">
                      <h2 className="font-bold font-poppins">Toll Free</h2>
                      <a
                        href="tel:+1-800-808-0025"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <p className="font-poppins">+1-800-808-0025</p>
                      </a>
                    </div>
                  </div>
                  {/* <div id="LiveChat" className="md:ml-6 ml-10 flex items-center">
                  <div id="LivechatFirst" className="md:mx-4 mx-2">
                    <BiMessageDetail className="h-6 w-6 text-kaltire-red" />
                  </div>
                  <div id="LivechatSecond">
                    <h1 className="font-bold">Live Chat </h1>
                    <p>Chat with experts</p>
                  </div>
                </div> */}
                </div>
              </div>
            </div>
            {/* The Phone and Email icons end */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Roadside;
