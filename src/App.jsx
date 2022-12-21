import Home from "./pages/home";
import Nav from "./components/nav";
import Planet from "./pages/planet";

function App() {
  return (
    <div className="relative mx-auto max-w-[144rem]">
      <Nav></Nav>
      <Home></Home>
      <Planet></Planet>
    </div>
  );
}

export default App;
