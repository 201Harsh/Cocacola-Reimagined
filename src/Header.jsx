import React from 'react'
import logo from '/logo.webp'

const Header = () => {
  return (
    <nav className='flex justify-between items-center p-6 h-[120px] w-full bg-[#111]'>
        <div>
            <img className='logo' src={logo} alt="" />
        </div>
        <div>
            <ul className='flex gap-10 text-lg font-semibold cursor-pointer'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>Shop</li>
            </ul>
        </div>
    </nav>
  )
}

export default Header
