import React from "react";
import logo from "./../../assets/shared/logo.svg";
import close from "./../../assets/shared/icon-close.svg";
import menu from "./../../assets/shared/icon-hamburger.svg";
import { useState } from "react";

const nav = () => {
  let [closebtn, setClosebtn] = useState("hidden");
  const menuHandler = () => {
    setClosebtn(() => "hidden");
  };
  const openMenu = () => {
    setClosebtn(() => "block");
  };
  return (
    <div className="flex h-[9.6rem] items-center justify-between lg:relative  lg:top-[4rem] ">
      <img
        id="nav-logo"
        src={logo}
        alt="logo"
        className="m-16 h-[4.8rem] w-[4.8rem] max-tab:ml-9 max-tab:h-16 max-tab:w-16"
      />

      <div
        id="nav-line"
        className="relative z-[60] hidden shrink-[2] grow-0 lg:block lg:basis-[40rem] lap:basis-[57rem]"
      >
        <div className="relative h-[1px] bg-white/25 lg:-right-8 lap:right-[-4rem]"></div>
      </div>

      <div
        // style={{ height: "100vh" }}
        id="nav-links"
        className={`z-50 flex shrink flex-col justify-center  bg-white/[0.04] backdrop-blur-lg transition-all max-tab:fixed max-tab:top-0 max-tab:right-0 max-tab:h-screen max-tab:grow max-tab:justify-center tab:flex tab:h-full tab:shrink  tab:grow-0 tab:basis-[47rem] lap:flex  lap:basis-[83rem] ${closebtn}`}
      >
        <img
          src={close}
          alt=""
          className=" mt-16 mb-20 mr-12 block h-8 w-8 cursor-pointer self-end tab:hidden"
          onClick={menuHandler}
        />
        <ul className="h-full items-center justify-center gap-16 max-tab:flex max-tab:w-[70vw] max-tab:flex-col  max-tab:items-start max-tab:justify-start max-tab:text-left  tab:flex tab:shrink tab:grow-0 tab:basis-[47rem]  lap:basis-[83rem]">
          <li className="nav-link">
            <span className="hidden font-bold max-tab:block lap:block">00</span>{" "}
            HOME
          </li>
          <li className="nav-link">
            <span className="hidden font-bold max-tab:block lap:block">01</span>{" "}
            DESTINATION
          </li>
          <li className="nav-link">
            <span className="hidden font-bold max-tab:block lap:block">02</span>{" "}
            CREW
          </li>
          <li className="nav-link">
            <span className="hidden font-bold max-tab:block lap:block">03</span>{" "}
            TECHNOLOGY
          </li>
        </ul>
      </div>
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
