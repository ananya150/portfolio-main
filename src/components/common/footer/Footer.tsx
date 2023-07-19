import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="absolute bottom-0 py-[3vh] text-base flex md:justify-between justify-center md:px-20  w-full">
            <div className="flex space-x-8 hidden md:block">
                <span className="text-white ">2023 © Edition</span>
                <span className="text-white ">Ananya Khandelwal</span>
            </div>
            <div className="flex space-x-8">
                <span className="text-white">Blogs</span>
                <span className="text-white">Twitter</span>
                <span className="text-white">Linkedin</span>
                <span className="text-white">Github</span>
            </div>
        </footer>
    </div>
  )
}

export default Footer