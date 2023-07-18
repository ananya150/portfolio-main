import React from 'react'
import Curtain from './curtain/Curtain'
import { Sidebar } from './sidebar/Sidebar'

const Common = () => {
  return (
    <div className='dark'>
        <Curtain />
        <Sidebar />
    </div>
  )
}

export default Common