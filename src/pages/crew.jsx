import React, { useState } from "react";
import { motion } from "framer-motion";

import ansari from "../../assets/crew/image-anousheh-ansari.png";
import hurley from "../../assets/crew/image-douglas-hurley.png";
import shuttleworth from "../../assets/crew/image-mark-shuttleworth.png";
import glover from "../../assets/crew/image-victor-glover.png";

import ansariWEBP from "../../assets/crew/image-anousheh-ansari.webp";
import hurleyWEBP from "../../assets/crew/image-douglas-hurley.webp";
import shuttleworthWEBP from "../../assets/crew/image-mark-shuttleworth.webp";
import gloverWEBP from "../../assets/crew/image-victor-glover.webp";
import { slideFromTop, fadeIn } from "../components/animations";

let crewdata = [
  {
    name: "Douglas Hurley",
    images: {
      png: hurley,
      webp: hurleyWEBP,
    },
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "Mark Shuttleworth",
    images: {
      png: shuttleworth,
      webp: shuttleworthWEBP,
    },
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "Victor Glover",
    images: {
      png: glover,
      webp: gloverWEBP,
    },
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    name: "Anousheh Ansari",
    images: {
      png: ansari,
      webp: ansariWEBP,
    },
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];

const crew = () => {
  let [data, setData] = useState(crewdata[0]);

  const crewDetailsHandler = (e) => {
    setData(crewdata[e.target.attributes.value.value]);
  };
  let styleForDot = "!opacity-[1]";
  let [one, setOne] = useState(styleForDot);
  let [two, setTwo] = useState();
  let [three, setThree] = useState();
  let [four, setFour] = useState();

  let crewMembers = [setOne, setTwo, setThree, setFour];

  const crewMarker = (e) => {
    crewMembers.forEach((crewMember, index) => {
      if (Number(e.target.attributes.value.value) === index) {
        crewMember(styleForDot);
      } else {
        crewMember("");
      }
    });
  };

  //ANIMATIONS

  const parentAnim = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        when: "beforeChildren",
        type: "tween",
      },
    },
  };

  return (
    <div className="-z-1 absolute top-0 mx-auto grid w-full grid-cols-2 overflow-hidden max-lg:top-40 max-lg:grid-cols-1 max-tab:top-20">
      {/* Crew Details  */}
      <div className=" ml-24 flex h-screen flex-col justify-center max-lg:mx-auto max-lg:h-auto max-lg:w-full max-tab:mx-2 max-tab:justify-start  ">
        {/* Meet Crew  */}
        <motion.span
          variants={fadeIn}
          initial={"hidden"}
          animate={"show"}
          transition={{ duration: 0.5, delay: 2 }}
          className="side-text mt-16 ml-0 max-lg:my-0 max-lg:ml-20 max-tab:hidden "
        >
          <span className="side-num ">02</span>
          Meet your crew
        </motion.span>

        {/* crew member data  */}
        <div className="flex shrink-0 basis-[40rem] justify-center max-lg:basis-[30rem] max-lg:text-center   max-tab:basis-0  ">
          <motion.div
            variants={parentAnim}
            initial={"hidden"}
            animate={"show"}
            className=" flex w-full flex-col justify-center gap-4 max-lg:items-center max-tab:justify-start"
          >
            {/* Role  */}
            <div className="overflow-hidden">
              <motion.div
                className="overflow-hidden"
                variants={slideFromTop}
                transition={{ duration: 0.3, type: "spring", stiffness: "120" }}
              >
                <span className="text-[3.2rem] uppercase text-white opacity-50 max-lg:text-[2.4rem] max-tab:text-[1.6rem] ">
                  {data.role}
                </span>
              </motion.div>
            </div>

            {/* Name  */}
            <div className="overflow-hidden">
              <motion.div
                variants={slideFromTop}
                transition={{ duration: 0.3, type: "spring", stiffness: "120" }}
                className="overflow-hidden"
              >
                <span className="name">{data.name}</span>
              </motion.div>
            </div>

            {/* About  */}

            <div className="overflow-hidden max-tab:max-w-[70%]">
              <motion.div
                variants={slideFromTop}
                transition={{ duration: 0.3, type: "spring", stiffness: "120" }}
              >
                <p className="max-lg:max-w-[50rem] ">{data.bio}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
        {/* switcher */}
        <div className=" flex gap-4 max-lg:mx-auto max-tab:hidden">
          <div
            onClick={(e) => {
              crewDetailsHandler(e);
              crewMarker(e);
            }}
            value="0"
            className={`h-4 w-4 cursor-pointer rounded-full bg-white opacity-[0.17] transition-opacity hover:opacity-[0.5] ${one}`}
          ></div>
          <div
            onClick={(e) => {
              crewDetailsHandler(e);
              crewMarker(e);
            }}
            value="1"
            className={`h-4 w-4 cursor-pointer rounded-full bg-white opacity-[0.17] transition-opacity hover:opacity-[0.5] ${two}`}
          ></div>
          <div
            onClick={(e) => {
              crewDetailsHandler(e);
              crewMarker(e);
            }}
            value="2"
            className={`h-4 w-4 cursor-pointer rounded-full bg-white opacity-[0.17] transition-opacity hover:opacity-[0.5] ${three}`}
          ></div>
          <div
            onClick={(e) => {
              crewDetailsHandler(e);
              crewMarker(e);
            }}
            value="3"
            className={`h-4 w-4 cursor-pointer rounded-full bg-white opacity-[0.17] transition-opacity hover:opacity-[0.5] ${four}`}
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
          <motion.img
            variants={fadeIn}
            initial={"hidden"}
            animate={"show"}
            transition={{ duration: 1, delay: 0.5 }}
            src={data.images.webp}
            alt=""
            className="w-full object-contain transition-all max-lg:w-[60%]   max-tab:w-2/3 lg:w-[90%]"
          />
        </div>
        {/* switcher */}
        <div className=" my-16 flex gap-4 max-tab:mt-2 tab:hidden">
          <div
            onClick={(e) => {
              crewDetailsHandler(e);
              crewMarker(e);
            }}
            value="0"
            className={`h-4 w-4 cursor-pointer rounded-full bg-white opacity-[0.17] transition-opacity hover:opacity-[0.5] ${one}`}
          ></div>
          <div
            onClick={(e) => {
              crewDetailsHandler(e);
              crewMarker(e);
            }}
            value="1"
            className={`h-4 w-4 cursor-pointer rounded-full bg-white opacity-[0.17] transition-opacity hover:opacity-[0.5] ${two}`}
          ></div>
          <div
            onClick={(e) => {
              crewDetailsHandler(e);
              crewMarker(e);
            }}
            value="2"
            className={`h-4 w-4 cursor-pointer rounded-full bg-white opacity-[0.17] transition-opacity hover:opacity-[0.5] ${three}`}
          ></div>
          <div
            onClick={(e) => {
              crewDetailsHandler(e);
              crewMarker(e);
            }}
            value="3"
            className={`h-4 w-4 cursor-pointer rounded-full bg-white opacity-[0.17] transition-opacity hover:opacity-[0.5] ${four}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default crew;
