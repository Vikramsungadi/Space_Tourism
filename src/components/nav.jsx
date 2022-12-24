import React from "react";
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

  return (
    <div className="flex h-[9.6rem] items-center justify-between lg:relative  lg:top-[4rem] ">
      {/* logo  */}
      <a href="https://vikram-portfolio.vercel.app">
        <img
          id="nav-logo"
          src={logo}
          alt="logo"
          className="m-16 h-[4.8rem] w-[4.8rem] max-tab:ml-9 max-tab:h-16 max-tab:w-16"
        />
      </a>

      {/* Line  */}
      <div
        id="nav-line"
        className="relative z-[60] hidden shrink-[2] grow-0 lg:block lg:basis-[40rem] lap:basis-[57rem]"
      >
        <div className="relative h-[1px] bg-white/25 lg:-right-8 lap:right-[-4rem]"></div>
      </div>

      {/* Nav Links  */}
      <div
        id="nav-links"
        className={`z-50 flex shrink flex-col justify-center  bg-white/[0.04] backdrop-blur-lg transition-all max-tab:fixed max-tab:top-0 max-tab:right-0 max-tab:h-screen max-tab:grow max-tab:justify-center tab:flex tab:h-full tab:shrink  tab:grow-0 tab:basis-[47rem] lap:flex  lap:basis-[83rem] ${closebtn}`}
      >
        {/* close button  */}
        <img
          src={close}
          alt=""
          className=" mt-16 mb-20 mr-12 block h-8 w-8 cursor-pointer self-end tab:hidden"
          onClick={menuHandler}
        />

        {/* links  */}
        <ul className="h-full items-center justify-center gap-16 max-tab:flex max-tab:w-[70vw] max-tab:flex-col  max-tab:items-start max-tab:justify-start max-tab:text-left  tab:flex tab:shrink tab:grow-0 tab:basis-[47rem]  lap:basis-[83rem]">
          <Link to="/" onClick={changeBackground}>
            <li className={`nav-link ${home}`}>
              <span className="pointer-events-none hidden font-bold max-tab:block lap:block">
                00
              </span>
              HOME
            </li>
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
        </ul>
      </div>

      {/* Hamburger Menu  */}
      <img
        src={menu}
        onClick={openMenu}
        className="mr-8 h-[2.1rem] w-[2.4rem] cursor-pointer tab:hidden"
        alt=""
      />
    </div>
  );
};

export default nav;
