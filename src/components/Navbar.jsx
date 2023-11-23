import React, { useState, useEffect, useRef } from 'react'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'
import { Link } from "react-router-dom";


const Navbar = () => {

  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(true)

  function handleclick(prop) {
    
    document.getElementById(prop).scrollIntoView({
      behavior:'smooth'})
  }

  return (
    <nav
      className={
        `${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20`
      }
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/' className='flex items-center gap-2 '
        style={{
            
          WebkitTapHighlightColor: 'transparent',
          WebkitTouchCallout: 'none',
          WebkitUserSelect: 'none',
          KhtmlUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none',
          userSelect: 'none',
          outline: 'none !important'
      
  }}
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}>
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>Portfolio &nbsp; <span className='sm:block hidden'>| &nbsp; Nikhil Gupta</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {
            navLinks.map((link => (
              <li
                key={link.id}
                className={`${active === link.title ?
                  'text-white' :
                  'text-secondary'
                  } hover:text-white text-[18px]
                font-medium cursor-pointer `}
                
              >
                <span 
                style={{
            
                  WebkitTapHighlightColor: 'transparent',
                  WebkitTouchCallout: 'none',
                  WebkitUserSelect: 'none',
                  KhtmlUserSelect: 'none',
                  MozUserSelect: 'none',
                  msUserSelect: 'none',
                  userSelect: 'none',
                  outline: 'none !important'
              
          }}
                onClick={() =>{ setActive(link.title);handleclick(link.id)}}
                  
                 >{link.title}</span>
              </li>
            )))
          }
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? menu : close} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${toggle ? 'hidden' : 'flex'} absolute rounded-xl black-gradient p-6 top-[50px] right-0 mx-4 my-2 min-w-[140px] z-10 `}>
            <ul className='list-none flex flex-col justify-end items-start gap-4 '>
              {
                navLinks.map((link => (
                  <li
                    key={link.id}
                    className={`${active === link.title ?
                      'text-white' :
                      'text-secondary'
                      } font-medium cursor-pointer text-[16px]`}
                    
                  >
                    <span 
                    style={{
            
                      WebkitTapHighlightColor: 'transparent',
                      WebkitTouchCallout: 'none',
                      WebkitUserSelect: 'none',
                      KhtmlUserSelect: 'none',
                      MozUserSelect: 'none',
                      msUserSelect: 'none',
                      userSelect: 'none',
                      outline: 'none !important'
                  
              }}
                onClick={() => { setActive(link.title); setToggle(!toggle);handleclick(link.id) }}
                 >{link.title}</span>
                  </li>
                )))
              }
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar