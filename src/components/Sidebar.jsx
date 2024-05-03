import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddModal from './AddModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { Home, Info, User, Trash, LogOut, Heart, Add, Search, Edit, Filter, DownArrow, BusinessBullet, PersonalBullet, ProjectBullet } from '../assets/icons/icons';


export default function Sidebar() {
  const [username, setUsername] = useState('Username');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)

  return (
    <div className=' grid-flow-row grid-cols-1 bg-gray_bg pl-5 h-[100vh] overflow-y-auto'>
      <div>
        <Link to='/' className='text-primary text-[25px] font-semibold mt-1'>iNotebook</Link>
      </div>
      <div className="row mt-[35px] relative">
        {User}
        <p className='inline-block text-[16px] absolute top-[25%]'>{username}</p>
      </div>
      <div className='row mt-[30px]'>
        {Home}
        <Link to='/' className='inline-block text-[13px]'>Home</Link>
      </div>
      <div className='row mt-[20px]'>
        {Info}
        <Link to='/about' className='inline-block text-[13px]'>About</Link>
      </div>



      <div className='mt-[40px] text-[18px]'>
        QUICK LINKS
      </div>

      <button onClick={()=>{setIsAddModalOpen(true)}} className='row mt-[20px] block' type="button">
      {Add}
        <p className='inline-block text-[13px]'>Add new notes</p>
      </button>
     {isAddModalOpen && <AddModal setIsAddModalOpen={setIsAddModalOpen} isAddModalOpen={isAddModalOpen}/>}

      <button className='row mt-[10px] block'>
        {Heart}
        <p className='inline-block text-[13px]'>Favourites</p>
      </button>
      <button className='row mt-[10px] block'>
        {Trash}
        <p className='inline-block text-[13px]'>Recently deleted</p>
      </button>
      <button className='row mt-[10px] block'>
        {LogOut}
        <p className='inline-block text-[13px]'>Logout</p>
      </button>



      <div className='mt-[40px] text-[18px]'>
        NOTES
      </div>
      <button className='row mt-[20px] relative block'>
        {BusinessBullet}
        <p className='inline-block text-[13px] ml-5'>Business</p>
      </button>
      <button className='row mt-[10px] relative block'>
        {PersonalBullet}
        <p className='inline-block text-[13px] ml-5'>Personal</p>
      </button>
      <button className='row mt-[10px] relative block'>
        {ProjectBullet}
        <p className='inline-block text-[13px] ml-5'>Project</p>
      </button>
      <button className='row mt-[10px] block'>
        {Add}
        <p className='inline-block text-[13px]'>Add new tags</p>
      </button>
    </div>
  )
}
