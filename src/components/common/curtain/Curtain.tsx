'use client';
import React from "react"
import { AnimatePresence, motion } from "framer-motion"

const curtainVariant = {
  enter: {
    transition: {
      staggerChildren: 0.08
    }
  },
  end: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: 1
    }
  }
}

const colorVariant = {
  start: { scaleX: 1 },
  enter: {
    scaleX: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  },
  end: {
    scaleX: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
}

const Curtain = () => {

  return (
    <AnimatePresence >
      <motion.div
        initial="start"
        animate="enter"
        exit="end"
        variants={curtainVariant}
        className="curtain"
      >
        <motion.div variants={colorVariant} className="fixed top-0 left-0 h-full w-full origin-right will-change-transform z-50 bg-[#fff]" />
      </motion.div>
    </AnimatePresence>
  )
}

export default Curtain