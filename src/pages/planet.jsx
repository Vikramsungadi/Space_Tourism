import React from "react";
import moon from "../../assets/destination/image-moon.png";

const planet = () => {
  return (
    <div className="grid w-full grid-cols-2">
      <div className="flex flex-col items-center justify-center gap-8">
        <span className="text-white` self-start justify-self-start text-[2.8rem] uppercase">
          <span className="text-white opacity-25">01</span> Pick Your
          destination
        </span>
        <img src={moon} alt="" className="h-[44.5rem] w-[44.5rem]" />
      </div>

      <div>
        <div className="flex flex-col gap-8 text-left ">
          <ul className="flex justify-between gap-16">
            <li className="nav-link">Moon</li>
            <li className="nav-link">Mars</li>
            <li className="nav-link">Europa</li>
            <li className="nav-link">Titan</li>
          </ul>
          <h2>Moon</h2>
          <p>
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <div className="h-[1px] w-full"></div>
          <div className="flex gap-12">
            <div className="flex flex-col gap-2 p-4">
              <span className="text-subh2 text-white">Avg.Distance</span>
              <span className="text-subh1 text-white">384,400</span>
            </div>{" "}
            <div className="flex flex-col gap-2 p-4">
              <span className="text-subh2 uppercase text-white">
                Est. travel time
              </span>
              <span className="text-subh1 uppercase text-white">3 days</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default planet;
