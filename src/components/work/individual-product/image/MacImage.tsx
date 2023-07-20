/* eslint-disable @next/next/no-img-element */
import React from 'react'

const MacImage = ({imageUrl}: {imageUrl: string}) => {
  return (
    <div className="mac-container">
        <img src={imageUrl} alt="Your Image"/>
    </div>

  )
}

export default MacImage