import React from 'react';
import { RiPhoneFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';

const random = () => (
  <div className="text-black bg-white flex flex-center flex-row p-8  justify-between ">
    <div className="flex flex-center flex-col pl-6">
      <div className="mb-6">
        <div className="font-semibold text-lg">
          KVL Tires, KAL Partz, KAL Freight English Ave
        </div>
        <div className=" font-light text-lg">
          46205 English Ave Indianapolis, IN
        </div>
        <div className=" font-light text-lg">Manager: Telly Ingram</div>
      </div>
      <div className="pb-2">
        <div className=" font-light text-lg flex flex-row items-center ">
          <RiPhoneFill className="mr-4" />
          (317) 820-7387
        </div>
        <div className=" font-light text-lg flex flex-row items-center ">
          <MdEmail className="mr-4" />
          antoniom@kalfreight.com
        </div>
      </div>
    </div>
    <div className="flex flex-center flex-col w-1/4">
      <span className="text-black font-semibold text-lg">Hours</span>
      <div>
        Monday: 7:30 AM - 5:00PM Tuesday: 7:30 AM - 5:00PM Wednesday: 7:30 AM -
        5:00PM Thursday: 7:30 AM - 5:00PM Friday: 7:30 AM - 5:00PM Saturday:
        Closed Sunday: Closed
      </div>
    </div>
    <div className="flex flex-center flex-col w-2/12 ">
      <img src="https://kalfreight.com/Uploads/image/21imguf_safty-small.jpg" />
      <div className="text-right  pt-2">
        <a
          className="text-blue-500"
          href="https://www.google.com/maps/place/160+Industrial+St,+San+Marcos,+CA+92078,+USA/@33.136296,-117.1580465,17z/data=!3m1!4b1!4m5!3m4!1s0x80db8ab3b9f18c1b:0x6b10250b71a8172e!8m2!3d33.136296!4d-117.1580465"
        >
          See on maps
        </a>
      </div>
    </div>
  </div>
);

export default random;
