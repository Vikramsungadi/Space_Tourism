import React, { useState } from "react";

const planet = ({ data, onClick }) => {
  let styleForUnderline = "before:w-full before:!border-b-white";
  let [moon, setMoon] = useState(styleForUnderline);
  let [mars, setMars] = useState();
  let [europa, setEuropa] = useState();
  let [titan, setTitan] = useState();

  let destinationPlaces = [
    { place: "moon", func: setMoon },
    { place: "mars", func: setMars },
    { place: "europa", func: setEuropa },
    { place: "titan", func: setTitan },
  ];

  const destinationsMarker = (e) => {
    let destinationName = e.target.innerText.toLowerCase();
    destinationPlaces.forEach((data) => {
      if (data.place === destinationName) {
        data.func(styleForUnderline);
      } else {
        data.func("");
      }
    });
  };
  return (
    <div className="mt-28 grid w-full grid-cols-2 transition-all max-lg:mt-6 max-lg:grid-cols-1">
      {/* Planet Image Side */}
      <div className="flex flex-col items-center justify-center gap-12">
        <span className="side-text">
          <span className="side-num ">01</span>
          Pick Your destination
        </span>
        <img
          src={`${data.images.png}`}
          alt=""
          className="h-[44.5rem] w-[44.5rem] transition-[width,height]  max-lap:h-[30rem] max-lap:w-[30rem] max-tab:h-[17rem] max-tab:w-[17rem]"
        />
      </div>

      {/* Planet Details  */}
      <div className="flex justify-center max-tab:mt-12 tab:mt-20">
        <div className="flex shrink basis-[45rem] flex-col gap-8 text-left max-lg:max-w-[57rem] max-lg:text-center">
          {/* Planet Nav  */}
          <ul className="flex justify-start gap-16 font-barlowCondensed uppercase   transition-all max-lg:justify-center max-tab:flex-wrap max-tab:gap-8  ">
            <li
              onClick={(e) => {
                onClick(e);
                destinationsMarker(e);
              }}
              className={`nav-link  text-[1.6rem] before:top-2  max-tab:ml-0 ${moon}]`}
            >
              Moon
            </li>
            <li
              onClick={(e) => {
                onClick(e);
                destinationsMarker(e);
              }}
              className={`nav-link text-[1.6rem] before:top-2 max-tab:ml-0 ${mars} `}
            >
              Mars
            </li>
            <li
              onClick={(e) => {
                onClick(e);
                destinationsMarker(e);
              }}
              className={`nav-link text-[1.6rem] before:top-2 max-tab:ml-0 ${europa} `}
            >
              Europa
            </li>
            <li
              onClick={(e) => {
                onClick(e);
                destinationsMarker(e);
              }}
              className={`nav-link text-[1.6rem] before:top-2 max-tab:ml-0 ${titan} `}
            >
              Titan
            </li>
          </ul>

          {/* Planet Name and Desc */}
          <h2>{data.name}</h2>
          <p className="mx-auto max-tab:mx-8">{data.description}</p>

          {/* Line */}
          <div className="h-[1px] w-full bg-[#383B4B]  max-tab:mx-8"></div>

          {/* Distance and Time */}
          <div className="flex  justify-center gap-24 transition-all max-tab:flex-col max-tab:gap-10">
            <div className="flex flex-col gap-2 p-4">
              <span className="font-barlowCondensed text-subh2 uppercase text-white max-tab:text-[1.4rem]">
                Avg.Distance
              </span>
              <span className=" text-subh1 uppercase text-white">
                {data.distance}
              </span>
            </div>
            <div className="flex flex-col gap-2 p-4">
              <span className="font-barlowCondensed text-subh2 uppercase text-white max-tab:text-[1.4rem]">
                Est. travel time
              </span>
              <span className="text-subh1 uppercase text-white">
                {data.travel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default planet;
