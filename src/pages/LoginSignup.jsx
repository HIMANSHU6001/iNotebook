import React from 'react'
import { useState, useEffect } from 'react'
import { ClosedEye, Google, OpenEye } from '../assets/icons/icons'

function LoginSignup() {
  const [fadeIn, setFadeIn] = useState(null);
  const [slide, setSlide] = useState(null)
  const [showPasswd, setShowPasswd] = useState(false);
  const [currentPage, setCurrentPage] = useState('Signup')
  const IMAGES = {
    login: new URL('../assets/images/welcome.png', import.meta.url).href,

    signup: new URL('../assets/images/signup.png', import.meta.url).href
  }
  

  const togglePage = () => {
    if (currentPage === 'Signup') {
      setCurrentPage("Login")
      setFadeIn(true)
      setSlide("slideRight")
    }
    else {
      setCurrentPage('Signup')
      setFadeIn(false)
      setSlide("slideLeft")
    }
  }

  return (
    <div>
      <div>
        <div className={`welcome absolute w-3/5 h-full bg-[#FFE1E1] ${slide}`}>
          <div hidden={!fadeIn} className={`w-fit mt-20 text-2xl mx-auto ${fadeIn===true ? 'fadeIn':'fadeOut'}`} >Nice to see you again</div>
          <div hidden={fadeIn} className={`w-fit mt-20 text-2xl mx-auto ${!fadeIn===true ? 'fadeIn':'fadeOut'}`} >Let's get you started</div>
          <div hidden={!fadeIn} className={`w-fit text-[#CE0C0C] font-semibold mt-6 text-5xl mx-auto ${fadeIn===true ? 'fadeIn':'fadeOut'}`}>Welcome back</div>
          <div hidden={fadeIn} className={`w-fit text-[#CE0C0C] font-semibold mt-6 text-5xl mx-auto ${!fadeIn===true ? 'fadeIn':'fadeOut'}`}>Create an Account</div>
          <img hidden={!fadeIn} className={`m-auto ${fadeIn===true ? 'fadeIn':'fadeOut'}`} src={IMAGES.login} alt='first image' />
          <img hidden={fadeIn} className={`m-auto ${!fadeIn===true ? 'fadeIn':'fadeOut'}`} src={IMAGES.signup} alt='first image' />
        </div>
      </div>


      <div className='grid grid-cols-5 grid-rows-1'>
        <div className="login col-span-2 pl-16 pt-10 w-80">
          <h4 className='text-primary text-[40px] font-semibold'>iNotebook</h4>
          <h3 className='text-[30px] font-bold mt-8'>Log in.</h3>
          <form className='mt-11 w-80' action="">
            <label htmlFor="email" className='text-zinc-700 font-semibold'>Enter your Email address</label>
            <input className='block mt-2 h-9 w-80 rounded-sm' style={{ "border": "1px solid gray" }} type="text" name="email" id="email" placeholder='  name@example.com' />
            <label htmlFor="passwd" className='text-zinc-700 block mt-9 font-semibold'>Enter your Password</label>
            <div className='mt-2 w-80 h-9 rounded-sm' style={{ "border": "1px solid gray" }} >
              <input className='h-full w-72' type="text" name="passwd" id="passwd" placeholder='  atleast 8 charecters ' />
              <span className='cursor-pointer' onClick={() => { setShowPasswd(!showPasswd) }}>{showPasswd ? OpenEye : ClosedEye}</span>
            </div>
            <span className='text-[14px] text-red-500 text-base float-right' >Forgot Password?</span>
          </form>
          <button className='mt-14  w-80 h-12 block text-white rounded-3xl bg-red-600'>
            Log in
          </button>

          <button className='mt-14 w-80 h-12 block rounded-3xl' style={{ "border": '2px solid black' }}>
            {Google} Continue with Google
          </button>

          <div className='w-full mt-10 ml-10 font-semibold' >Dont have an account? <span onClick={() => { togglePage() }} className='cursor-pointer text-red-600'>Sign up</span></div>
        </div>
        <div></div>
        
        <div className="signup col-span-2 pl-16 pt-10 w-80">
        <h4 className='text-primary text-[40px] font-semibold'>iNotebook</h4>
          <h3 className='text-[30px] font-bold mt-8'>Sign up.</h3>
          <form className='mt-11 w-80' action="">
            <label htmlFor="email" className='text-zinc-700 font-semibold'>Enter your Email address</label>
            <input className='block mt-2 h-9 w-80 rounded-sm' style={{ "border": "1px solid gray" }} type="text" name="email" id="email" placeholder='  name@example.com' />
            <label htmlFor="passwd" className='text-zinc-700 block mt-9 font-semibold'>Enter your Password</label>
            <div className='mt-2 w-80 h-9 rounded-sm' style={{ "border": "1px solid gray" }} >
              <input className='h-full w-72' type="text" name="passwd" id="passwd" placeholder='  atleast 8 charecters ' />
              <span className='cursor-pointer' onClick={() => { setShowPasswd(!showPasswd) }}>{showPasswd ? OpenEye : ClosedEye}</span>
            </div>
            <span className='text-[14px] text-red-500 text-base float-right' >Forgot Password?</span>
          </form>
          <button className='mt-14  w-80 h-12 block text-white rounded-3xl bg-red-600'>
            Sign up
          </button>

          <button className='mt-14 w-80 h-12 block rounded-3xl' style={{ "border": '2px solid black' }}>
            {Google} Continue with Google
          </button>

          <div className='w-96 mt-10 ml-10 font-semibold' >Already have an account? <span onClick={() => { togglePage() }} className='cursor-pointer text-red-600'>Log in</span></div>
        
        </div>
      </div>
    </div>
  )
}

export default LoginSignup