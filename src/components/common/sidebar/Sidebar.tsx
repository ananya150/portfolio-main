'use client';
import * as React from "react";
import { useRef, useState, useEffect } from "react";
import { motion, sync, useCycle, useTime, useTransform } from "framer-motion";
import { useDimensions } from "../../../utils.ts/use-dimension";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 80px) 80px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(45px at calc(100% - 80px) 80px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const sidebarVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
    transition: {
      duration: 2,
    },
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const time = useTime();

  const handleButtonCLick = () => {
    if(open){
      setOpen(false);
      return;
    }
    setOpen(true);
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = window.innerHeight; // Adjust this value as needed

      setIsVisible(scrollPosition > threshold);
      if(scrollPosition < threshold) setOpen(false);
      
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div className={`${isVisible ? '' : 'hidden'}`}>
      <motion.nav className={`fixed top-0 right-0 bottom-0 w-[100%] md:w-[550px] z-40`}
        initial={false}
        animate={open ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div className="absolute top-0 right-0 bottom-0 w-[100%] md:w-[550px] dark:bg-[#fff] bg-[#1c1d20]" variants={sidebar} />
          <Navigation />
          <MenuToggle toggle={handleButtonCLick} />
        </motion.nav>
        <motion.div
          className={`fixed top-0 left-0 bottom-0 md:right-[0px] z-30 overlay ${open? '' : 'hidden'}`}
        />
    </motion.div>
  );
};
