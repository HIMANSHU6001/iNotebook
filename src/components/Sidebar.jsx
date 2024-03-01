import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { Home, Info, User, Trash, LogOut, Heart, Add, Search, Edit, Filter, DownArrow, BusinessBullet, PersonalBullet, ProjectBullet } from '../assets/icons/icons';


export default function Sidebar() {
  return (
    <div className=' grid-flow-row grid-cols-1 bg-gray_bg pl-5 h-[100vh] overflow-y-auto'>
      <div>
        <h4 className='text-primary text-[25px] font-semibold mt-1'>iNotebook</h4>
      </div>
      <div className="row mt-[35px] relative">
        {User}
        <p className='inline-block text-[16px] absolute top-[25%]'>Username</p>
      </div>
      <div className='row mt-[30px]'>
        {Home}
        <p className='inline-block text-[13px]'>Home</p>
      </div>
      <div className='row mt-[20px]'>
        {Info}
        <p className='inline-block text-[13px]'>About</p>
      </div>



      <div className='mt-[40px] text-[18px]'>
        QUICK LINKS
      </div>
      <div className='row mt-[20px]'>
        {Add}
        <p className='inline-block text-[13px]'>Add new notes</p>
      </div>
      <div className='row mt-[10px]'>
        {Heart}
        <p className='inline-block text-[13px]'>Favourites</p>
      </div>
      <div className='row mt-[10px]'>
        {Trash}
        <p className='inline-block text-[13px]'>Recently deleted</p>
      </div>
      <div className='row mt-[10px]'>
        {LogOut}
        <p className='inline-block text-[13px]'>Logout</p>
      </div>



      <div className='mt-[40px] text-[18px]'>
        NOTES
      </div>
      <div className='row mt-[20px] relative'>
        {BusinessBullet}
        <p className='inline-block text-[13px] ml-5'>Business</p>
      </div>
      <div className='row mt-[10px] relative'>
        {PersonalBullet}
        <p className='inline-block text-[13px] ml-5'>Personal</p>
      </div>
      <div className='row mt-[10px] relative'>
        {ProjectBullet}
        <p className='inline-block text-[13px] ml-5'>Project</p>
      </div>
      <div className='row mt-[10px]'>
        {Add}
        <p className='inline-block text-[13px]'>Add new tags</p>
      </div>
    </div>
  )
}
