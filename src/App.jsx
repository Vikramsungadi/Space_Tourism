import { Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import Nav from "./components/nav";
import Planet from "./pages/planet";
import Crew from "./pages/crew";
import Technology from "./pages/technology";

// destination Background images
import LapDest from "../assets/destination/background-destination-desktop.jpg";
import tabDest from "../assets/destination/background-destination-tablet.jpg";
import mobDest from "../assets/destination/background-destination-mobile.jpg";

// crew Background images
import LapCrew from "../assets/crew/background-crew-desktop.jpg";
import tabCrew from "../assets/crew/background-crew-tablet.jpg";
import mobCrew from "../assets/crew/background-crew-mobile.jpg";

// home Background images
import LapHome from "../assets/home/background-home-desktop.jpg";
import tabHome from "../assets/home/background-home-tablet.jpg";
import mobHome from "../assets/home/background-home-mobile.jpg";

// tech Background images
import LapTech from "../assets/technology/background-technology-desktop.jpg";
import tabTech from "../assets/technology/background-technology-tablet.jpg";
import mobTech from "../assets/technology/background-technology-mobile.jpg";

let destinationBg = [LapDest, tabDest, mobDest];
let crewBg = [LapCrew, tabCrew, mobCrew];
let techBg = [LapTech, tabTech, mobTech];
let HomeBg = [LapHome, tabHome, mobHome];

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

const changeBackgroundgAfterReload = () => {
  let page = window.location.pathname;
  if (page == "/") {
    changeBodyBg(HomeBg[0], HomeBg[1], HomeBg[2]);
  } else if (page == "/destinations") {
    changeBodyBg(destinationBg[0], destinationBg[1], destinationBg[2]);
  } else if (page == "/crew") {
    changeBodyBg(crewBg[0], crewBg[1], crewBg[2]);
  } else if (page == "/technology") {
    changeBodyBg(techBg[0], techBg[1], techBg[2]);
  }
};

function App() {
  // if (window.performance.navigation.type === 1) {
  //   window.location.pathname = "/";
  // }
  changeBackgroundgAfterReload();

  return (
    <div className="relative mx-auto max-w-[144rem] ">
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/destinations" element={<Planet />}></Route>
        <Route path="/crew" element={<Crew />}></Route>
        <Route path="/technology" element={<Technology />}></Route>
      </Routes>
    </div>
  );
}

export default App;
