import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Content from "./components/Content";

const App = () => {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="flex h-screen">
      <Sidebar setActivePage={setActivePage} />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <Content activePage={activePage} />
      </div>
    </div>
  );
};

export default App;
