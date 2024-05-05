import React, { useContext, useState } from 'react'
import { Home, Info, User, Trash, LogOut, Heart, Add, Search, Edit, Filter, DownArrow } from '../assets/icons/icons';
import UserContext from '../context/notes/userContext';


export default function Main() {
  const userContext = useContext(UserContext);
  const { currentTags, createTag, fetchTags, login, signup, logout } = userContext;
  const [active, setActive] = useState("All");
  const [dropdown, setDropdown] = useState(false)

  const handleClick = (value) => {
    setActive(value)
  }

  return (
    <div className='h-[100vh] overflow-y-scroll'>
      <div className='grid grid-flow-row grid-cols-3 '>
        <div className=" col-span-2">
          <div className="grid grid-flow-col grid-cols-12 row mt-4 ml-3 border-2 border-primary rounded-lg  ">
            <input type='text' className="col-span-11 pl-1 py-1 ml-2 border-none outline-none focus:border-red-600" placeholder='Search ' />
            <button className="col-span-1">
              <div className=' my-auto text-primary ' >
                {Search}
              </div>
            </button>
          </div>
        </div>
        <div className=" col-span-1 py-3">
          <div className='ml-32 mt-1'>
            <button onClick={() => { setDropdown(!dropdown) }} className="flex  text-white bg-red-400 hover:bg-red-600 rounded-md px-5 py-1.5" type="button">Sort <svg class="w-2.5 h-2. ml-3 5 my-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
            </svg>
            </button>

            <div hidden={!dropdown} class="z-10 fixed bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="multiLevelDropdownButton">
                <li>
                  <button class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Newest first</button>
                </li>
                <li>
                  <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" class="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dropdown<svg class="w-2.5 h-2.5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                  </svg></button>
                  <div id="doubleDropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Overview</a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">My downloads</a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Billing</a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Rewards</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                </li>
              </ul>
            </div>
          </div>
          {/* <button onClick={() => {setDropdown(!dropdown)} } className='block h-9 float-right mt-4 mr-24 border-2 border-primary_light hover:bg-primary_light focus:outline-none rounded-md px-4 items-center '>
            {Filter} Sort  {DownArrow}
            <div hidden={!dropdown} className='z-20 fixed'>
              <button>Sort by date</button>
            </div>
          </button> */}
        </div>
      </div>
      <div className='mt-6 ml-4 space-x-9 overflow-x-auto'>
        <button onClick={() => { handleClick("All") }} name="All" className={`${active === 'All' ? 'bg-primary' : ''} ${active === 'All' ? 'text-white' : 'text-black'} px-9 py-[10px] rounded-md text-sm border-2 border-white hover:border-red-400`}>
          All
        </button>
        {Object.keys(currentTags).map((key) => {
          return <button onClick={(e) => { handleClick(e.target.name) }} name={`${key}`} className={`${active === key ? 'bg-primary' : ''} ${active === key ? 'text-white' : 'text-black'} px-9 py-[10px] rounded-md text-sm border-2 border-white hover:border-red-400`}>
            {key}
          </button>
        })}
        {/* <button className=' px-9 py-3 rounded-md text-sm '>
          Project
        </button>
        <button className=' px-9 py-3 rounded-md text-sm'>
          Business
        </button>
        <button className=' px-9 py-3 rounded-md text-sm'>
          Personal
        </button> */}
      </div>
      <div className="grid grid-flow-row grid-cols-4 ml-3 mt-7">
        {/* <div className="border-2 m-1 rounded-md grid grid-flow-row grid-cols-1 pt-3">
          <div>
            <p className='text-xs text-[#8A8A8A] mx-5 my-2 '>12 June 2024
            <div className='float-right'>
              {Heart}
              {Edit}
              {Trash}
            </div></p>
          </div>
          <h3 className='my-3 mx-5'>
            {BusinessBullet} <span className='ml-2'>Meeting with a client</span>
          </h3>
          <p className='text-xs text-[#8A8A8A] mx-5  my-2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
          </p>
        </div> */}
        {/* <div className="border-2 m-1 rounded-md grid grid-flow-row grid-cols-1 pt-3">
          <div>
            <p className='text-xs text-[#8A8A8A] mx-5 my-2 '>12 June 2024
            <div className='float-right'>
              {Heart}
              {Edit}
              {Trash}
            </div></p>
          </div>
          <h3 className='my-3 mx-5'>
            {BusinessBullet} <span className='ml-2'>Meeting with a client</span>
          </h3>
          <p className='text-xs text-[#8A8A8A] mx-5  my-2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
          </p>
        </div>
        <div className="border-2 m-1 rounded-md grid grid-flow-row grid-cols-1 pt-3">
          <div>
            <p className='text-xs text-[#8A8A8A] mx-5 my-2 '>12 June 2024
            <div className='float-right'>
              {Heart}
              {Edit}
              {Trash}
            </div></p>
          </div>
          <h3 className='my-3 mx-5'>
            {BusinessBullet} <span className='ml-2'>Meeting with a client</span>
          </h3>
          <p className='text-xs text-[#8A8A8A] mx-5  my-2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
          </p>
        </div>
        <div className="border-2 m-1 rounded-md grid grid-flow-row grid-cols-1 pt-3">
          <div>
            <p className='text-xs text-[#8A8A8A] mx-5 my-2 '>12 June 2024
            <div className='float-right'>
              {Heart}
              {Edit}
              {Trash}
            </div></p>
          </div>
          <h3 className='my-3 mx-5'>
            {BusinessBullet} <span className='ml-2'>Meeting with a client</span>
          </h3>
          <p className='text-xs text-[#8A8A8A] mx-5  my-2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
          </p>
        </div>
        <div className="border-2 m-1 rounded-md grid grid-flow-row grid-cols-1 pt-3">
          <div>
            <p className='text-xs text-[#8A8A8A] mx-5 my-2 '>12 June 2024
            <div className='float-right'>
              {Heart}
              {Edit}
              {Trash}
            </div></p>
          </div>
          <h3 className='my-3 mx-5'>
            {BusinessBullet} <span className='ml-2'>Meeting with a client</span>
          </h3>
          <p className='text-xs text-[#8A8A8A] mx-5  my-2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
          </p>
        </div>
        <div className="border-2 m-1 rounded-md grid grid-flow-row grid-cols-1 pt-3">
          <div>
            <p className='text-xs text-[#8A8A8A] mx-5 my-2 '>12 June 2024
            <div className='float-right'>
              {Heart}
              {Edit}
              {Trash}
            </div></p>
          </div>
          <h3 className='my-3 mx-5'>
            {BusinessBullet} <span className='ml-2'>Meeting with a client</span>
          </h3>
          <p className='text-xs text-[#8A8A8A] mx-5  my-2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
          </p>
        </div>
        <div className="border-2 m-1 rounded-md grid grid-flow-row grid-cols-1 pt-3">
          <div>
            <p className='text-xs text-[#8A8A8A] mx-5 my-2 '>12 June 2024
            <div className='float-right'>
              {Heart}
              {Edit}
              {Trash}
            </div></p>
          </div>
          <h3 className='my-3 mx-5'>
            {BusinessBullet} <span className='ml-2'>Meeting with a client</span>
          </h3>
          <p className='text-xs text-[#8A8A8A] mx-5  my-2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
          </p>
        </div>
        <div className="border-2 m-1 rounded-md grid grid-flow-row grid-cols-1 pt-3">
          <div>
            <p className='text-xs text-[#8A8A8A] mx-5 my-2 '>12 June 2024
            <div className='float-right'>
              {Heart}
              {Edit}
              {Trash}
            </div></p>
          </div>
          <h3 className='my-3 mx-5'>
            {BusinessBullet} <span className='ml-2'>Meeting with a client</span>
          </h3>
          <p className='text-xs text-[#8A8A8A] mx-5  my-2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
          </p>
        </div>
        <div className="border-2 m-1 rounded-md grid grid-flow-row grid-cols-1 pt-3">
          <div>
            <p className='text-xs text-[#8A8A8A] mx-5 my-2 '>12 June 2024
            <div className='float-right'>
              {Heart}
              {Edit}
              {Trash}
            </div></p>
          </div>
          <h3 className='my-3 mx-5'>
            {BusinessBullet} <span className='ml-2'>Meeting with a client</span>
          </h3>
          <p className='text-xs text-[#8A8A8A] mx-5  my-2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
          </p>
        </div>
        <div className="border-2 m-1 rounded-md grid grid-flow-row grid-cols-1 pt-3">
          <div>
            <p className='text-xs text-[#8A8A8A] mx-5 my-2 '>12 June 2024
            <div className='float-right'>
              {Heart}
              {Edit}
              {Trash}
            </div></p>
          </div>
          <h3 className='my-3 mx-5'>
            {BusinessBullet} <span className='ml-2'>Meeting with a client</span>
          </h3>
          <p className='text-xs text-[#8A8A8A] mx-5  my-2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
          </p>
        </div>
        <div className="border-2 m-1 rounded-md grid grid-flow-row grid-cols-1 pt-3">
          <div>
            <p className='text-xs text-[#8A8A8A] mx-5 my-2 '>12 June 2024
            <div className='float-right'>
              {Heart}
              {Edit}
              {Trash}
            </div></p>
          </div>
          <h3 className='my-3 mx-5'>
            {BusinessBullet} <span className='ml-2'>Meeting with a client</span>
          </h3>
          <p className='text-xs text-[#8A8A8A] mx-5  my-2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
          </p>
        </div> */}
      </div>
    </div>
  )
}
