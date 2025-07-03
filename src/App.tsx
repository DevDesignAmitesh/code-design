import { motion } from "motion/react";
import SideBar from "./SideBar";
import Rest from "./Rest";

const App = () => {
  return (
    <div className="h-screen w-full relative bg-white">
      <SideBar />
      <Rest />
    </div>
  );
};

export default App;
