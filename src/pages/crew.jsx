import React from "react";

const crew = ({ data, onClick }) => {
  return (
    <div className="absolute top-0 mx-auto grid w-full grid-cols-2 overflow-hidden max-lg:top-40 max-lg:grid-cols-1 max-tab:top-20">
      {/* Crew Details  */}
      <div className=" ml-24 flex h-screen flex-col justify-center max-lg:mx-auto max-lg:h-auto max-lg:w-full max-tab:mx-2 max-tab:justify-start  ">
        {/* Meet Crew  */}
        <span className="side-text mt-16 ml-0 max-lg:my-0 max-lg:ml-20 max-tab:hidden ">
          <span className="side-num ">02</span>
          Meet your crew
        </span>

        {/* crew member data  */}
        <div className="flex shrink-0 basis-[40rem] justify-center max-lg:basis-[30rem] max-lg:text-center   max-tab:basis-0  ">
          <div className=" flex w-full flex-col justify-center gap-4 max-lg:items-center max-tab:justify-start">
            {/* Role  */}
            <span className="text-[3.2rem] uppercase text-white opacity-50 max-lg:text-[2.4rem] max-tab:text-[1.6rem] ">
              {data.role}
            </span>

            {/* Name  */}
            <span className="name">{data.name}</span>

            {/* About  */}
            <p className="max-lg:max-w-[50rem] max-tab:max-w-[70%]">
              {data.bio}
            </p>
          </div>
        </div>
        {/* switcher */}
        <div className=" flex gap-4 max-lg:mx-auto max-tab:hidden">
          <div
            onClick={onClick}
            value="0"
            className="h-4 w-4 cursor-pointer rounded-full bg-white opacity-[0.17] transition-opacity hover:opacity-[0.5]"
          ></div>
          <div
            onClick={onClick}
            value="1"
            className="h-4 w-4 cursor-pointer rounded-full bg-white opacity-[0.17] transition-opacity hover:opacity-[0.5]"
          ></div>
          <div
            onClick={onClick}
            value="2"
            className="h-4 w-4 cursor-pointer rounded-full bg-white opacity-[0.17] transition-opacity hover:opacity-[0.5]"
          ></div>
          <div
            onClick={onClick}
            value="3"
            className="h-4 w-4 cursor-pointer rounded-full bg-white opacity-[0.17] transition-opacity hover:opacity-[0.5]"
          ></div>
        </div>
      </div>

      {/* Crew Image  */}
      <div className="flex items-end justify-center max-tab:-order-1 max-tab:flex-col max-tab:items-center">
        {/*Image  Meet Crew  */}
        <span className="side-text my-16 ml-0 max-tab:mb-8 tab:hidden ">
          <span className="side-num ">02</span>
          Meet your crew
        </span>
        {/* IMAGE  */}
        <div className="relative bottom-0 flex max-w-[44.4rem]  items-end justify-center transition-all after:absolute after:bottom-0 after:h-full after:w-full  after:border-b after:border-b-[#383B4B] max-tab:my-24 max-tab:max-h-[23rem] max-tab:w-[32rem] lg:after:border-b-0">
          <img
            src={data.images.png}
            alt=""
            className="w-full object-contain transition-all max-lg:w-[60%]   max-tab:w-2/3 lg:w-[90%]"
          />
        </div>
        {/* switcher */}
        <div className=" my-16 flex gap-4 max-tab:mt-2 tab:hidden">
          <div
            onClick={onClick}
            value="0"
            className="h-4 w-4 cursor-pointer rounded-full bg-white opacity-[0.17] transition-opacity hover:opacity-[0.5]"
          ></div>
          <div
            onClick={onClick}
            value="1"
            className="h-4 w-4 cursor-pointer rounded-full bg-white opacity-[0.17] transition-opacity hover:opacity-[0.5]"
          ></div>
          <div
            onClick={onClick}
            value="2"
            className="h-4 w-4 cursor-pointer rounded-full bg-white opacity-[0.17] transition-opacity hover:opacity-[0.5]"
          ></div>
          <div
            onClick={onClick}
            value="3"
            className="h-4 w-4 cursor-pointer rounded-full bg-white opacity-[0.17] transition-opacity hover:opacity-[0.5]"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default crew;
