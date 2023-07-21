import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
        <footer className="absolute bottom-0 py-[3vh] text-base flex md:justify-between justify-center md:px-20  w-full z-20">
            <div className="flex space-x-8 hidden md:block">
                <span className="text-white ">2023 © Edition</span>
                <span className="text-white ">Ananya Khandelwal</span>
            </div>
            <div className="flex space-x-8">
                <Link target="_blank" href='#'><span className="text-white">Blogs</span></Link>
                <Link target="_blank" href='https://github.com/ananya150'><span className="text-white">Github</span></Link>
                <Link target="_blank" href='https://www.linkedin.com/in/ananya150/'><span className="text-white">Linkedin</span></Link>
                <Link target="_blank" href='https://twitter.com/AnanyaK150'><span className="text-white">Twitter</span></Link>
            </div>
        </footer>
    </div>
  )
}

export default Footer