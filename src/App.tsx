import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { RiMessage2Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

const App = () => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <motion.div className="w-full h-screen bg-gray-50 flex justify-center items-center">
      {open && (
        <AnimatePresence>
          <motion.div
            exit={{
              filter: "blur(20px)",
            }}
            initial={{
              opacity: 0,
              scale: 0.9,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="bg-white w-[420px] h-[620px] rounded-xl shadow-md flex flex-col justify-start items-center py-9 px-8"
          >
            <p className="text-[22px] font-bold capitalize w-full text-left">
              aceternity UI components
            </p>
            <p className="text-[14px] mt-2 text-gray-500 capitalize">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto.lorem2
            </p>
            <div className="w-[200px] mt-4 shadow-md p-4 bg-gray-50 rounded-md flex justify-center items-center">
              <FaGithub size={25} />
              <p className="text-[18px] ml-2 font-bold capitalize">
                aceternity
              </p>
              <RxCross1
                onClick={() => setOpen(false)}
                size={18}
                className="text-neutral-500 ml-4 cursor-pointer"
              />
            </div>
            <div className="flex-1 relative overflow-hidden w-full border-dashed border border-neutral-600 mt-6 rounded-md shadow-md">
              <motion.div className="absolute inset-0 w-full h-full flex flex-col justify-start divide-y divide-dashed divide-gray-400 items-center bg-white">
                <div className="w-full flex justify-center items-center gap-8 p-6">
                  <div className="bg-white shadow-md rounded-md p-3">
                    <RiMessage2Line size={25} />
                  </div>
                  <div className="flex flex-col justify-center items-start">
                    <p className="text-[17px] font-bold capitalize w-full text-left">
                      aceternity UI components
                    </p>
                    <p className="text-[12px] mt-1 text-gray-500 capitalize">
                      Lorem ipsum dolor, sit amet.
                    </p>
                  </div>
                </div>
                <div className="w-full flex justify-center items-center gap-8 p-6">
                  <div className="bg-white shadow-md rounded-md p-3">
                    <RiMessage2Line size={25} />
                  </div>
                  <div className="flex flex-col justify-center items-start">
                    <p className="text-[17px] font-bold capitalize w-full text-left">
                      aceternity UI components
                    </p>
                    <p className="text-[12px] mt-1 text-gray-500 capitalize">
                      Lorem ipsum dolor, sit amet.
                    </p>
                  </div>
                </div>
                <div className="w-full flex justify-center items-center gap-8 p-6">
                  <div className="bg-white shadow-md rounded-md p-3">
                    <RiMessage2Line size={25} />
                  </div>
                  <div className="flex flex-col justify-center items-start">
                    <p className="text-[17px] font-bold capitalize w-full text-left">
                      aceternity UI components
                    </p>
                    <p className="text-[12px] mt-1 text-gray-500 capitalize">
                      Lorem ipsum dolor, sit amet.
                    </p>
                  </div>
                </div>
                <div className="w-full flex h-full gap-4 justify-center items-center">
                  <div className="bg-white shadow-xl rounded-full h-8 w-8 flex justify-center items-center">
                    <IoMdAdd size={18} className="text-neutral-600" />
                  </div>
                  <span className="text-black capitalize font-semibold">
                    create project
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </motion.div>
  );
};

export default App;
