import React, { Fragment } from "react";

const home = () => {
  return (
    <div className=" relative grid h-full w-full grid-rows-[auto_auto] flex-col  items-end justify-center p-48 max-lap:p-8 max-lap:text-center tab:mt-16  lap:grid lap:grid-cols-2 ">
      <div className="ml-6 flex flex-col gap-6 self-start max-tab:ml-0">
        <h5>SO, YOU WANT TO TRAVEL TO</h5>
        <h1>SPACE</h1>
        <p className=" max-w-[45rem] px-4  ">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="relative z-[10] flex h-full items-end justify-center  max-tab:mt-24 tab:mt-36">
        <div className=" relative flex h-[15rem] w-[15rem]   items-center  justify-center rounded-full bg-white before:absolute  before:box-content before:h-full before:w-full before:rounded-full before:border-white before:transition-all before:hover:border-[5rem]  before:hover:border-white/10  tab:h-[24.2rem]  tab:w-[24.2rem] lap:h-[27.4rem]  lap:w-[27.4rem]">
          <span className="text-h4 text-navy max-tab:text-[2rem]">EXPLORE</span>
        </div>
      </div>
    </div>
  );
};

export default home;
