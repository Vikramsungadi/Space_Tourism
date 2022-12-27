import React from "react";
import { delay, motion } from "framer-motion";
import logo from "../../assets/shared/logo.svg";
import close from "../../assets/shared/icon-close.svg";
import menu from "../../assets/shared/icon-hamburger.svg";

// destination Background images
import LapDest from "../../assets/destination/background-destination-desktop.jpg";
import tabDest from "../../assets/destination/background-destination-tablet.jpg";
import mobDest from "../../assets/destination/background-destination-mobile.jpg";

// crew Background images
import LapCrew from "../../assets/crew/background-crew-desktop.jpg";
import tabCrew from "../../assets/crew/background-crew-tablet.jpg";
import mobCrew from "../../assets/crew/background-crew-mobile.jpg";

// home Background images
import LapHome from "../../assets/home/background-home-desktop.jpg";
import tabHome from "../../assets/home/background-home-tablet.jpg";
import mobHome from "../../assets/home/background-home-mobile.jpg";

// tech Background images
import LapTech from "../../assets/technology/background-technology-desktop.jpg";
import tabTech from "../../assets/technology/background-technology-tablet.jpg";
import mobTech from "../../assets/technology/background-technology-mobile.jpg";

import { useState } from "react";
import { Link } from "react-router-dom";

// let destinationBg = [
//   `url('../assets/destination/background-destination-desktop.jpg')`,
//   `url('../assets/destination/background-destination-tablet.jpg')`,
//   `url('../assets/destination/background-destination-mobile.jpg')`,
// ];

let destinationBg = [LapDest, tabDest, mobDest];
let crewBg = [LapCrew, tabCrew, mobCrew];
let techBg = [LapTech, tabTech, mobTech];
let HomeBg = [LapHome, tabHome, mobHome];

const nav = () => {
  let [closebtn, setClosebtn] = useState("hidden");
  let styleForUnderline = "before:w-full before:border-b-white";
  let [home, setHome] = useState(styleForUnderline);
  let [crew, setCrew] = useState("");
  let [tech, setTech] = useState("");
  let [destinations, setDestinations] = useState("");

  let underline = [
    { func: setHome, value: "00", path: "/" },
    { func: setDestinations, value: "01", path: "/destinations" },
    { func: setCrew, value: "02", path: "/crew" },
    { func: setTech, value: "03", path: "/technology" },
  ];

  function changeBodyBg(lap, tab, mob) {
    let windowSize = window.innerWidth;
    if (windowSize >= 900) {
      document.body.style.backgroundImage = `url("${lap}")`;
    } else if (windowSize > 375) {
      document.body.style.backgroundImage = `url("${tab}")`;
    } else if (windowSize <= 375) {
      document.body.style.backgroundImage = `url("${mob}")`;
    }
  }

  // let page = window.location.pathname;
  // underline.forEach((data) => {
  //   if (page === data.path) {
  //     data.func("before:w-full before:border-b-white");
  //   } else {
  //     data.func("");
  //   }
  // });

  const changeBackground = (e) => {
    let page = e.target.children[0].innerText;
    let location = e.target.parentElement.pathname;
    console.log(location);
    if (page == "00") {
      changeBodyBg(HomeBg[0], HomeBg[1], HomeBg[2]);
    } else if (page == "01") {
      changeBodyBg(destinationBg[0], destinationBg[1], destinationBg[2]);
    } else if (page == "02") {
      changeBodyBg(crewBg[0], crewBg[1], crewBg[2]);
    } else if (page == "03") {
      changeBodyBg(techBg[0], techBg[1], techBg[2]);
    }

    underline.forEach((data) => {
      if (page === data.value || location === data.path) {
        console.log(location === data.path);
        data.func("before:w-full before:border-b-white");
      } else {
        data.func("");
      }
    });

    menuHandler();
  };
  // useEffect(() => {
  //   window.addEventListener("resize", changeBackground);
  // });
  const menuHandler = () => {
    setClosebtn("hidden");
  };

  const openMenu = () => {
    setClosebtn("block");
  };

  //Animaions

  const logoAnim = {
    hidden: { rotate: 0, opacity: 0 },
    show: {
      rotate: 360,
      opacity: 1,
      transition: { duration: 1, delay: 3 },
    },
  };
  const menuAnim = {
    hidden: { width: 0, opacity: 0 },
    show: {
      width: "2.4rem",
      opacity: 1,
      transition: { duration: 1, delay: 3 },
    },
  };

  const navLineAnim = {
    hidden: { width: 0 },
    show: {
      width: "100%",
      transition: { delay: 3.3 },
    },
  };

  return (
    <motion.div
      layout
      className="z-50 flex h-[9.6rem] items-center justify-between lg:relative  lg:top-[4rem] "
    >
      {/* logo  */}
      <a href="https://vikram-portfolio.vercel.app">
        <motion.img
          variants={logoAnim}
          initial={"hidden"}
          animate={"show"}
          id="nav-logo"
          src={logo}
          alt="logo"
          className="z-50 m-16 h-[4.8rem] w-[4.8rem] max-tab:ml-9 max-tab:h-16 max-tab:w-16"
        />
      </a>

      {/* Line  */}
      <div
        id="nav-line"
        className="relative z-[60] hidden shrink-[2] grow-0  lg:block lg:basis-[40rem] lap:basis-[57rem]"
      >
        <motion.div
          variants={navLineAnim}
          initial={"hidden"}
          animate={"show"}
          className="relative h-[1px] bg-white/25 lg:-right-8 lap:right-[-4rem]"
        ></motion.div>
      </div>

      {/* Nav Links  */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 0.5, delay: 3.7 }}
        id="nav-links"
        className={`z-[100] flex shrink flex-col justify-center overflow-hidden  bg-white/[0.04] backdrop-blur-lg transition-all max-tab:fixed max-tab:top-0 max-tab:right-0 max-tab:h-screen max-tab:grow max-tab:justify-center tab:flex tab:h-full tab:shrink  tab:grow-0 tab:basis-[47rem] lap:flex  lap:basis-[83rem] ${closebtn}`}
      >
        {/* close button  */}
        <img
          src={close}
          alt=""
          className=" mt-16 mb-20 mr-12 block h-8 w-8 cursor-pointer self-end tab:hidden"
          onClick={menuHandler}
        />

        {/* links  */}
        <motion.ul
          initial={{ width: 0 }}
          animate={
            window.innerWidth > 900 ? { width: "100%" } : { width: "70vw" }
          }
          transition={{ duration: 0.5 }}
          className="h-full items-center justify-center gap-16 max-tab:flex max-tab:w-[70vw] max-tab:flex-col  max-tab:items-start max-tab:justify-start max-tab:text-left  tab:flex tab:shrink tab:grow-0 tab:!basis-[47rem]  lap:basis-[83rem]"
        >
          <Link to="/" onClick={changeBackground}>
            <motion.li className={`nav-link ${home}`}>
              <span className="pointer-events-none hidden font-bold max-tab:block lap:block">
                00
              </span>
              HOME
            </motion.li>
          </Link>
          <Link onClick={changeBackground} to="/destinations">
            <li className={`nav-link ${destinations}`}>
              <span className="pointer-events-none hidden font-bold max-tab:block lap:block">
                01
              </span>
              DESTINATION
            </li>
          </Link>
          <Link onClick={changeBackground} to="/crew">
            <li className={`nav-link ${crew}`}>
              <span className="pointer-events-none hidden font-bold max-tab:block lap:block">
                02
              </span>
              CREW
            </li>
          </Link>
          <Link onClick={changeBackground} to="/technology">
            <li className={`nav-link ${tech}`}>
              <span className="pointer-events-none hidden font-bold max-tab:block lap:block">
                03
              </span>
              TECHNOLOGY
            </li>
          </Link>
        </motion.ul>
      </motion.div>

      {/* Hamburger Menu  */}
      <motion.img
        variants={menuAnim}
        initial={"hidden"}
        animate={"show"}
        src={menu}
        onClick={openMenu}
        className=" z-50 mr-8 h-[2.1rem] w-[2.4rem] cursor-pointer tab:!hidden"
        alt=""
      />
    </motion.div>
  );
};

export default nav;
