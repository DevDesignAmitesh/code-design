import { motion } from "motion/react";

const App = () => {
  return (
    <div className="[perspective::1000px] [transform-style:preservep-3d] h-screen w-full bg-[#121212] text-neutral-100 flex justify-center items-center">
      <motion.button
        whileHover={{
          rotateX: 25,
          rotateY: 10,
          boxShadow: "0px 20px 50px rgba(255, 255, 255, 0.2)",
        }}
        style={{
          translateZ: 100,
        }}
        className="text-2xl border cursor-pointer rounded-md py-4 px-8"
      >
        motion
      </motion.button>
    </div>
  );
};

export default App;
