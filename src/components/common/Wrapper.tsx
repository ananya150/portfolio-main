'use client';
import { AnimatePresence } from 'framer-motion'
import React from 'react'

const Wrapper = ({children}: any) => {
  return (
    <AnimatePresence initial={false} mode="popLayout">
        {children}
    </AnimatePresence>
  )
}

export default Wrapper