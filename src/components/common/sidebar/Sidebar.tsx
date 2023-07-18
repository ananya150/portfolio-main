'use client';
import * as React from "react";
import { useRef, useState, useEffect } from "react";
import { motion, sync, useCycle } from "framer-motion";
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

export const Sidebar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 200; // Adjust this value as needed

      setIsVisible(scrollPosition > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav className={`fixed top-0 right-0 bottom-0 w-[100%] md:w-[600px] z-40 ${isVisible ? '' : 'hidden'}`}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="absolute top-0 right-0 bottom-0 w-[100%] md:w-[600px] dark:bg-[#fff] bg-[#1c1d20]" variants={sidebar} />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
  );
};
