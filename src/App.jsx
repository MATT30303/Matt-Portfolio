import Home from "./pages/Home";
import About from "./pages/About";
import { Skull, Navbar } from "./components/global";
import { useState } from "react";
function App() {
  const [Nav, setNav] = useState(0);
  const navSelect = (num) => {
    setNav(num);
  };
  console.log(Nav);
  const pages = [<Home />, <About />];

  return (
    <>
      <Skull></Skull>
      <Navbar nav={Nav} navSelect={navSelect}></Navbar>
      {pages[Nav]}
    </>
  );
}
export default App;
