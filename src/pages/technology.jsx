import React, { useState } from "react";

import launchL from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import capsuleL from "../../assets/technology/image-space-capsule-landscape.jpg";
import spaceportL from "../../assets/technology/image-spaceport-landscape.jpg";

import launchP from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import capsuleP from "../../assets/technology/image-space-capsule-portrait.jpg";
import spaceportP from "../../assets/technology/image-spaceport-portrait.jpg";

let technologydata = [
  {
    name: "Launch vehicle",
    images: {
      portrait: launchP,
      landscape: launchL,
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    name: "Spaceport",
    images: {
      portrait: spaceportP,
      landscape: spaceportL,
    },
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    name: "Space capsule",
    images: {
      portrait: capsuleP,
      landscape: capsuleL,
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

// MAIN FUNCTION
const technology = () => {
  //Data Handling
  let [data, setData] = useState(technologydata[0]);

  const techDetailsHandler = (e) => {
    setData(technologydata[e.target.attributes.value.value]);
  };

  //underline handlers
  let styleForBall = "bg-white text-navy";
  let [one, setOne] = useState(styleForBall);
  let [two, setTwo] = useState();
  let [three, setThree] = useState();

  let TechUsed = [setOne, setTwo, setThree];

  const techMarker = (e) => {
    TechUsed.forEach((data, index) => {
      if (Number(e.target.attributes.value.value) === index) {
        data(styleForBall);
      } else {
        data("");
      }
    });
  };

  return (
    <div className="mt-16">
      {/* Space Launch 101  */}
      <span className="side-text flex w-full justify-start max-lg:justify-start max-tab:justify-center">
        <span className="side-num ">03</span>
        space launch 101
      </span>
      {/* Wrapper  */}
      <div className=" grid grid-cols-2  max-lg:grid-cols-1">
        {/* Tech Details Side*/}
        <div className="flex items-center max-lg:flex-col">
          {/* Tech Details Side wrapper*/}
          <div className="flex items-center gap-36 transition-all max-lg:mt-12 max-lg:flex-col max-tab:gap-12">
            {/* Switcher  */}
            <div className="flex  flex-col gap-12 max-lg:flex-row lg:ml-16">
              <div
                value="0"
                onClick={(e) => {
                  techDetailsHandler(e);
                  techMarker(e);
                }}
                className={`flex h-[8rem] w-[8rem] items-center justify-center rounded-full border-2 border-white border-opacity-50 text-[3.2rem] text-white transition-all hover:border-opacity-100 max-lap:h-[6rem] max-lap:w-[6rem] max-lg:text-[2.4rem] max-tab:h-[4rem] max-tab:w-[4rem] max-tab:text-[1.8rem] ${one}`}
              >
                1
              </div>{" "}
              <div
                value="1"
                onClick={(e) => {
                  techDetailsHandler(e);
                  techMarker(e);
                }}
                className={`flex h-[8rem] w-[8rem] items-center justify-center rounded-full border-2 border-white border-opacity-50 text-[3.2rem] text-white transition-all hover:border-opacity-100 max-lap:h-[6rem] max-lap:w-[6rem] max-lg:text-[2.4rem] max-tab:h-[4rem] max-tab:w-[4rem] max-tab:text-[1.8rem] ${two}`}
              >
                2
              </div>{" "}
              <div
                value="2"
                onClick={(e) => {
                  techDetailsHandler(e);
                  techMarker(e);
                }}
                className={`flex h-[8rem] w-[8rem] items-center justify-center rounded-full border-2 border-white border-opacity-50 text-[3.2rem] text-white transition-all hover:border-opacity-100 max-lap:h-[6rem] max-lap:w-[6rem] max-lg:text-[2.4rem] max-tab:h-[4rem] max-tab:w-[4rem] max-tab:text-[1.8rem] ${three}`}
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
