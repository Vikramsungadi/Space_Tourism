import { useState } from "react";
import data from "../data.json";

import Home from "./pages/home";
import Nav from "./components/nav";
import Planet from "./pages/planet";
import { Route, Routes } from "react-router-dom";

let destinationBg = [
  `url('../assets/destination/background-destination-desktop.jpg')`,
  `url('../assets/destination/background-destination-tablet.jpg')`,
  `url('../assets/destination/background-destination-mobile.jpg')`,
];

function App() {
  let [planetdata, setPlanetdata] = useState(data.destinations[0]);

  const planetDetailsHandler = (e) => {
    data.destinations.forEach((destination) => {
      if (e.target.innerText.toLowerCase() === destination.name.toLowerCase()) {
        setPlanetdata(destination);
        return;
      }
    });
  };

  return (
    <div className="relative mx-auto max-w-[144rem] ">
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Home></Home> */}
        </Route>
        <Route
          path="/destinations"
          element={<Planet data={planetdata} onClick={planetDetailsHandler} />}
        >
          {/* <Planet data={planetdata} onClick={planetDetailsHandler}></Planet> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
