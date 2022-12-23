import { useState } from "react";
import data from "../data.json";

import Home from "./pages/home";
import Nav from "./components/nav";
import Planet from "./pages/planet";
import Crew from "./pages/crew";
import Technology from "./pages/technology";

import { Route, Routes } from "react-router-dom";
let destinationBg = [
  `url('../assets/destination/background-destination-desktop.jpg')`,
  `url('../assets/destination/background-destination-tablet.jpg')`,
  `url('../assets/destination/background-destination-tablet.jpg')`,
];
let crewBg = [
  `url('../assets/crew/background-crew-desktop.jpg')`,
  `url('../assets/crew/background-crew-tablet.jpg')`,
  `url('../assets/crew/background-crew-mobile.jpg')`,
];
let techBg = [
  `url('../assets/technology/background-technology-desktop.jpg')`,
  `url('../assets/technology/background-technology-tablet.jpg')`,
  `url('../assets/technology/background-technology-mobile.jpg')`,
];
let HomeBg = [
  `url('../assets/home/background-home-desktop.jpg')`,
  `url('../assets/home/background-home-tablet.jpg')`,
  `url('../assets/home/background-home-tablet.jpg')`,
];

function changeBodyBg(lap, tab, mob) {
  let windowSize = window.innerWidth;
  console.log(document.body.style.backgroundAttachment);
  if (windowSize >= 900) {
    document.body.style.backgroundImage = lap;
  } else if (windowSize >= 768) {
    document.body.style.backgroundImage = tab;
  } else if (windowSize <= 768) {
    document.body.style.backgroundImage = mob;
  }
  console.log(document.body.style.backgroundImage);
}

const changeBackground = () => {
  // e.preventDefault();
  let page = window.location.pathname;
  console.log(page);
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
  changeBackground();
  console.log(window.location.pathname);
  let [planetdata, setPlanetdata] = useState(data.destinations[0]);
  let [crewdata, setCrewdata] = useState(data.crew[0]);
  let [techdata, setTechdata] = useState(data.technology[0]);

  const planetDetailsHandler = (e) => {
    data.destinations.forEach((destination) => {
      if (e.target.innerText.toLowerCase() === destination.name.toLowerCase()) {
        setPlanetdata(destination);
        return;
      }
    });
  };

  const crewDetailsHandler = (e) => {
    setCrewdata(data.crew[e.target.attributes.value.value]);
  };

  const techDetailsHandler = (e) => {
    setTechdata(data.technology[e.target.attributes.value.value]);
  };

  return (
    <div className="relative mx-auto max-w-[144rem] ">
      {/* NAV BAR  */}
      <Nav></Nav>
      <Routes>
        {/* HOME  */}
        <Route path="/" element={<Home />}></Route>
        {/* DESTINATIONS  */}
        <Route
          path="/destinations"
          element={<Planet data={planetdata} onClick={planetDetailsHandler} />}
        ></Route>
        {/* CREW  */}
        <Route
          path="/crew"
          element={<Crew data={crewdata} onClick={crewDetailsHandler} />}
        ></Route>
        {/* TECHNOLOGY  */}
        <Route
          path="/technology"
          element={<Technology data={techdata} onClick={techDetailsHandler} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
