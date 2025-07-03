import type React from "react";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { motion, type Variants } from "motion/react";

interface Links {
  icon: React.ReactElement;
  label: string;
}

const SideBar = () => {
  const Links: Links[] = [
    {
      label: "home",
      icon: <IoHomeOutline size={20} />,
    },
    {
      label: "analytics",
      icon: <TbBrandGoogleAnalytics size={20} />,
    },
    {
      label: "users",
      icon: <FaUserGroup size={20} />,
    },
    {
      label: "settings",
      icon: <IoSettingsOutline size={20} />,
    },
  ];

  const [open, setOpen] = useState(true);

  const sideBarVariant: Variants = {
    open: {
      width: "16rem",
    },
    close: {
      width: "4.5rem",
    },
  };

  const linksVariant: Variants = {
    open: {
      opacity: 1,
      y: 0,
    },
    close: {
      opacity: 0,
      y: -10,
    },
  };

  const linksParent: Variants = {
    open: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
    close: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  return (
    <motion.div
      initial={false}
      animate={open ? "open" : "close"}
      exit={"closed"}
      transition={{
        duration: 0.3,
      }}
    >
      <motion.div
        variants={sideBarVariant}
        className="absolute inset-y-0 p-5 left-0 bg-white flex flex-col justify-start items-start"
      >ra
        <div className="w-full flex justify-between items-center gap-4">
          {open && <p className="font-bold text-xl capitalize">dashboard</p>}
          <p
            onClick={() => setOpen((p) => !p)}
            className="h-8 w-8 cursor-pointer rounded-full flex justify-center shadow-md items-center"
          >
            {open ? <FaAngleLeft size={18} /> : <FaAngleRight size={18} />}
          </p>
        </div>
        <motion.div
          variants={linksParent}
          className="flex w-full flex-col justify-center items-start mt-10"
        >
          {Links.map((item) => (
            <motion.div
              variants={linksVariant}
              className="flex justify-start items-center gap-4 text-[15px] capitalize text-neutral-500 font-medium py-3 px-2 rounded-md hover:bg-neutral-100 w-full"
              key={item.label}
            >
              {item.icon}
              {open && <p>{item.label}</p>}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SideBar;
