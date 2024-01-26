import { useEffect, useState } from "react";
import LeftSideBar from "./components/LeftSideBar";
import NavBar from "./components/NavBar";

import AdminMainList from "./pages/admin/AdminMainList";

function App() {
  const [innerWidth, setInnerWidth] = useState(null);

  useEffect(() => {
    let vh = window.innerHeight;
    const vw = window.innerWidth;
    setInnerWidth(vw);
    document.documentElement.style.setProperty("--height", `${vh}px`);
    getComputedStyle(document.documentElement).getPropertyValue("--height");
  }, []);

  return (
    <div className="App">
      <div className="main">
        <LeftSideBar innerWidth={innerWidth} />
        <div className="layout">
          <NavBar />
          <AdminMainList />
        </div>
      </div>
    </div>
  );
}

export default App;
