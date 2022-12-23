import React from "react";

const technology = ({ data, onClick }) => {
  return (
    <div className="mt-16 ">
      {/* Space Launch 101  */}
      <span className="side-text flex w-full justify-start max-lg:justify-start max-tab:justify-center">
        <span className="side-num ">03</span>
        space launch 101
      </span>
      {/* Wrapper  */}
      <div className=" mb-16 grid grid-cols-2  max-lg:grid-cols-1">
        {/* Tech Details Side*/}
        <div className="flex items-center max-lg:flex-col">
          {/* Tech Details Side wrapper*/}
          <div className="flex items-center gap-36 transition-all max-lg:mt-12 max-lg:flex-col max-tab:gap-12">
            {/* Switcher  */}
            <div className="ml-16  flex flex-col gap-12 max-lg:flex-row">
              <div
                value="0"
                onClick={onClick}
                className="flex h-[8rem] w-[8rem] items-center justify-center rounded-full border-2 border-white border-opacity-50 text-[3.2rem] text-white transition-all hover:border-opacity-100 max-lap:h-[6rem] max-lap:w-[6rem] max-lg:text-[2.4rem] max-tab:h-[4rem] max-tab:w-[4rem] max-tab:text-[1.8rem]"
              >
                1
              </div>{" "}
              <div
                value="1"
                onClick={onClick}
                className="flex h-[8rem] w-[8rem] items-center justify-center rounded-full border-2 border-white border-opacity-50 text-[3.2rem] text-white transition-all hover:border-opacity-100 max-lap:h-[6rem] max-lap:w-[6rem] max-lg:text-[2.4rem] max-tab:h-[4rem] max-tab:w-[4rem] max-tab:text-[1.8rem]"
              >
                2
              </div>{" "}
              <div
                value="2"
                onClick={onClick}
                className="flex h-[8rem] w-[8rem] items-center justify-center rounded-full border-2 border-white border-opacity-50 text-[3.2rem] text-white transition-all hover:border-opacity-100 max-lap:h-[6rem] max-lap:w-[6rem] max-lg:text-[2.4rem] max-tab:h-[4rem] max-tab:w-[4rem] max-tab:text-[1.8rem]"
              >
                3
              </div>
            </div>

            {/* Launch Vehicles */}
            <div className="flex flex-col  gap-4  max-lg:items-center">
              <span className="font-barlowCondensed text-[1.6rem] uppercase tracking-[2.7px] text-white">
                The terminology...
              </span>
              <span className="name max-lap:text-[4rem] max-tab:text-[2.4rem1]">
                {data.name}
              </span>
              <p className="max-lg:max-w-[50rem] max-lg:text-center max-tab:w-[85%] max-tab:max-w-[46rem]">
                {data.description}
              </p>
            </div>
          </div>
        </div>

        {/* Tech Image Side  */}
        <div className=" flex items-start justify-end max-lg:-order-1">
          <img
            src={
              window.innerWidth <= 768
                ? data.images.landscape
                : data.images.portrait
            }
            alt={data.name}
            className={`relative lg:left-[${
              window.innerWidth - 1440
            }px] max-lap:w-[70%] max-lg:max-h-[35rem] max-lg:w-full max-lg:object-cover max-tab:max-h-[25rem]`}
          />
        </div>
      </div>
    </div>
  );
};

export default technology;
