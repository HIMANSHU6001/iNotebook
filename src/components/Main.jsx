import React, { useContext, useState } from 'react'
import { Home, Info, User, Trash, LogOut, Heart, Add, Search, Edit, Filter, DownArrow } from '../assets/icons/icons';
import UserContext from '../context/notes/userContext';



export default function Main() {
  const userContext = useContext(UserContext);
  const { currentTags, createTag, fetchTags, login, signup, logout } = userContext;
  const [active, setActive] = useState("All");
  const [dropdown, setDropdown] = useState(false);
  const [doubleDropdown, setDoubleDropdown] = useState(false);

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
          <div className='ml-32 mt-1 absolute'>
            <button onClick={() => { setDropdown(!dropdown) }} className="flex  text-white bg-red-400 hover:bg-red-600 rounded-md px-5 py-1.5" type="button">Sort <svg className="w-2.5 h-2. ml-3 5 my-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
            </svg>
            </button>

            <div hidden={!dropdown} className="z-10 fixed bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="multiLevelDropdownButton">
                <li>
                  <button className=" w-full text-left block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Newest first</button>
                </li>
                <li>
                  <button className="w-full text-left block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Oldest first</button>
                </li>
                <li>
                  <button className="w-full text-left block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Favourites</button>
                </li>
                <li>
                  <button onClick={() => { setDoubleDropdown(!doubleDropdown) }} className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Tags<svg className="w-2.5 h-2.5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                  </svg></button>
                  <div hidden={!doubleDropdown} className="z-20 absolute left-32 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                      {Object.keys(currentTags).map((key) => {
                        return <li>
                          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{key}</button>
                        </li>
                      })}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
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
