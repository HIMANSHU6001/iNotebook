import React from 'react'
import { Home, Info, User, Trash, LogOut, Heart, Add, Search, Edit, Filter, DownArrow, BusinessBullet, PersonalBullet, ProjectBullet } from '../assets/icons/icons';

export default function Main() {
  return (
    <div className='h-[100vh] overflow-y-scroll'>
      <div className='grid grid-flow-row grid-cols-3 '>
        <div className=" col-span-2">
          <div className="grid grid-flow-col grid-cols-12 row mt-4 ml-3 border-2 border-primary rounded-lg text-lg text-gray-300 ">
            <div className="col-span-11 pl-1 py-1 ml-2">Search</div>
            <button className="col-span-1">
              <div className=' my-auto text-primary ' >
                {Search}
              </div>
            </button>
          </div>
        </div>
        <div className=" col-span-1  " >
          <div className='text-right mt-5 mr-24 text-lg'>
            {Filter} Sort {DownArrow}
          </div>
        </div>
      </div>
      <div className='mt-6 ml-4'>
        <button className='bg-primary text-white px-9 py-[10px] rounded-md text-sm'>
          All
        </button>
        <button className=' px-9 py-3 rounded-md text-sm '>
          Project
        </button>
        <button className=' px-9 py-3 rounded-md text-sm'>
          Business
        </button>
        <button className=' px-9 py-3 rounded-md text-sm'>
          Personal
        </button>
      </div>
      <div className="grid grid-flow-row grid-cols-4 ml-3 mt-7">
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
      </div>
    </div>
  )
}
