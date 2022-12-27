import React, { useState } from "react";
import { slideFromLeft, slideFromTop, fadeIn } from "../components/animations";
import { motion } from "framer-motion";

import moon from "../../assets/destination/image-moon.png";
import mars from "../../assets/destination/image-mars.png";
import europa from "../../assets/destination/image-europa.png";
import titan from "../../assets/destination/image-titan.png";

import moonWEBP from "../../assets/destination/image-moon.webp";
import marsWEBP from "../../assets/destination/image-mars.webp";
import europaWEBP from "../../assets/destination/image-europa.webp";
import titanWEBP from "../../assets/destination/image-titan.webp";

let destinations = [
  {
    name: "Moon",
    images: {
      png: moon,
      webp: moonWEBP,
    },
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    images: {
      png: mars,
      webp: marsWEBP,
    },
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    images: {
      png: europa,
      webp: europaWEBP,
    },
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Titan",
    images: {
      png: titan,
      webp: titanWEBP,
    },
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];

// export const slideAnim = {}
// MAIN FUNCTION
const planet = () => {
  let [data, setData] = useState(destinations[0]);
  const planetDetailsHandler = (e) => {
    destinations.forEach((destination) => {
      let targetName = e.target.innerText.toLowerCase();
      if (targetName === destination.name.toLowerCase()) {
        setData(destination);
        return;
      }
    });
  };
  let styleForUnderline = "before:w-full  before:!border-b-white";
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

  //Animations
  const stagger = {
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        type: "tween",
      },
    },
  };

  const navAnim = {
    hidden: { width: "100%" },
    show: {
      width: "100%",
      transition: {
        duration: 0.3,
        delay: 1.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="destination mt-28 grid w-full grid-cols-2 transition-all max-lg:mt-6 max-lg:grid-cols-1 ">
      {/* Planet Image Side */}
      <div className="flex flex-col items-center justify-center gap-12 overflow-hidden">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{ duration: 0.5, delay: 2.8 }}
          className="side-text"
        >
          <span className="side-num ">01</span>
          Pick Your destination
        </motion.span>
        <motion.img
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
            duration: 60,
            type: "tween",
            ease: "linear",
          }}
          src={data.images.webp}
          alt=""
          className="h-[44.5rem] w-[44.5rem] transition-[width,height]  max-lap:h-[30rem] max-lap:w-[30rem] max-tab:h-[17rem] max-tab:w-[17rem]"
        />
      </div>

      {/* Planet Details  */}
      <div className="flex justify-center max-tab:mt-12 tab:mt-20">
        <motion.div
          variants={stagger}
          initial={"hidden"}
          animate={"show"}
          className="flex shrink basis-[45rem] flex-col gap-8 text-left max-lg:max-w-[57rem] max-lg:text-center"
        >
          {/* Planet Nav  */}
          <motion.ul
            variants={navAnim}
            className="flex justify-start gap-16  font-barlowCondensed uppercase  transition-all max-lg:justify-center max-tab:flex-wrap max-tab:gap-8  "
          >
            <motion.li
              variants={fadeIn}
              transition={{ duration: 0.3 }}
              onClick={(e) => {
                planetDetailsHandler(e);
                destinationsMarker(e);
              }}
              className={`nav-link  text-[1.6rem] before:top-2  max-tab:ml-0 ${moon}]`}
            >
              Moon
            </motion.li>

            <motion.li
              variants={fadeIn}
              transition={{ duration: 0.3 }}
              onClick={(e) => {
                planetDetailsHandler(e);
                destinationsMarker(e);
              }}
              className={`nav-link text-[1.6rem] before:top-2 max-tab:ml-0 ${mars} `}
            >
              Mars
            </motion.li>

            <motion.li
              variants={fadeIn}
              transition={{ duration: 0.3 }}
              onClick={(e) => {
                planetDetailsHandler(e);
                destinationsMarker(e);
              }}
              className={`nav-link text-[1.6rem] before:top-2 max-tab:ml-0 ${europa} `}
            >
              Europa
            </motion.li>

            <motion.li
              variants={fadeIn}
              transition={{ duration: 0.3 }}
              onClick={(e) => {
                planetDetailsHandler(e);
                destinationsMarker(e);
              }}
              className={`nav-link text-[1.6rem] before:top-2 max-tab:ml-0 ${titan} `}
            >
              Titan
            </motion.li>
          </motion.ul>

          {/* Planet Name and Desc */}
          <div className="overflow-hidden ">
            <motion.h2
              variants={slideFromTop}
              transition={{ duration: 0.3, type: "spring", stiffness: 120 }}
            >
              {data.name}
            </motion.h2>
          </div>
          <div className="mx-auto overflow-hidden max-tab:mx-8">
            <motion.p variants={slideFromLeft} transition={{ duration: 0.5 }}>
              {data.description}
            </motion.p>
          </div>

          {/* Line */}

          <div className="overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.4, delay: 3.5 }}
              className="h-[1px]  bg-[#383B4B]  max-tab:mx-8"
            ></motion.div>
          </div>

          {/* Distance and Time */}
          <motion.div
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ duration: 1, delay: 4.4 }}
            className="flex  justify-center gap-24 overflow-hidden transition-all max-tab:flex-col max-tab:gap-10"
          >
            <motion.div
              initial={{ translateY: "-100%", opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 3.8,
                type: "spring",
                stiffness: 130,
              }}
              className="flex flex-col gap-2 p-4"
            >
              <span className="font-barlowCondensed text-subh2 uppercase text-white max-tab:text-[1.4rem]">
                Avg.Distance
              </span>
              <span className=" text-subh1 uppercase text-white">
                {data.distance}
              </span>
            </motion.div>
            <motion.div
              initial={{ translateY: "-100%", opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 4.5,
                type: "spring",
                stiffness: 130,
              }}
              className="flex flex-col gap-2 p-4"
            >
              <span className="font-barlowCondensed text-subh2 uppercase text-white max-tab:text-[1.4rem]">
                Est. travel time
              </span>
              <span className="text-subh1 uppercase text-white">
                {data.travel}
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default planet;
