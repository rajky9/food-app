import React, { useState } from 'react'

import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai'
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { MdFavorite, MdHelp } from 'react-icons/md'



const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClickMenu = () => setNav(!nav)
  return (
    <div className='max-w-[1640px] flex items-center justify-between mx-auto py-2 px-4'>
      {/* LEFT SITE*/}
      <div className='flex items-center'>
        <AiOutlineMenu size={30} className='cursor-pointer' onClick={handleClickMenu} />
        <h2 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Best <span className='font-medium'>Eats</span></h2>
        <div className='hidden lg:flex bg-gray-200 rounded-full p-1 items-center text-[14px]'>
          <p className='bg-black rounded-full text-white p-2'>Delivery</p>
          <p className='p-2'>Pickup</p>
        </div>
      </div>
      {/* SEARCH INPUT*/}
      <div className='bg-gray-200 w-[300px] flex items-center px-2 text-[14px] rounded-full'>
        <AiOutlineSearch size={25} />
        <input type="text" placeholder='search food' className='w-full focus:outline-none bg-transparent p-2' />
      </div>
      {/* SHOPPING CART*/}
      <button className='bg-black text-white hidden md:flex items-center rounded-full'>
        <BsFillCartFill size={20} className='mr-2' /> Cart
      </button>
      {/* Mobile Menu*/}
      {/* Overlay Background */}
      {nav && <div className='bg-black/75 fixed top-0 left-0 w-full h-screen ' onClick={handleClickMenu}></div>}

      <div className={nav ? 'fixed w-[300px] h-screen bg-white top-0 left-0 duration-300'
        : 'fixed w-[300px] h-screen bg-white top-[0] left-[-100%] duration-300'
      }>
        <div className='flex justify-between items-center'>
          <h2 className='p-4 text-2xl'>Best <span className='font-bold'>Eats</span></h2>
          <AiOutlineClose size={25} className='mr-3 cursor-pointer' onClick={handleClickMenu} />
        </div>
        <nav>
          <ul>
            <li className='p-4 flex items-center'><TbTruckDelivery size={25} /> <span className='text-xl ml-3'>Deliver</span></li>
            <li className='p-4 flex items-center'><MdFavorite size={25} /> <span className='text-xl ml-3'>Favorities</span></li>
            <li className='p-4 flex items-center'><FaWallet size={25} /> <span className='text-xl ml-3'>Wallet</span></li>
            <li className='p-4 flex items-center'><MdHelp size={25} /> <span className='text-xl ml-3'>Help</span></li>
            <li className='p-4 flex items-center'><AiFillTag size={25} /> <span className='text-xl ml-3'>Promotions</span></li>
            <li className='p-4 flex items-center'><BsFillSaveFill size={25} /> <span className='text-xl ml-3'>Best Ones</span></li>
            <li className='p-4 flex items-center'><FaUserFriends size={25} /> <span className='text-xl ml-3'>Invite Friends</span></li>
          </ul>
        </nav>
      </div>



    </div>
  )
}

export default Navbar