import React from 'react'
import Curtain from './curtain/Curtain'
import { Sidebar } from './sidebar/Sidebar'

const Common = () => {
  return (
    <div className='overflow-x-clip'>
        <Curtain />
        <Sidebar />
    </div>
  )
}

export default Common