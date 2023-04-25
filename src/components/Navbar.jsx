import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/brand.svg'
import { useState } from 'react'

import { MANGOSTEEN_LANGUAGE } from '../tools/constants'
import { getLanguage, getText } from '../locale'

import uz from '../images/uz.svg'
import ru from '../images/ru.svg'
import en from '../images/en.svg'



export default function Navbar() {

  const changeLanguage = (e) => {
    localStorage.setItem(MANGOSTEEN_LANGUAGE, e)
    document.location.reload(true)
  }

  const [active, setActive] = useState('nav-list')
  const [toggleIcon, setToggleIcon] = useState('nav__toggler')

  const navToggle = () => {
    active === 'nav-list'
      ? setActive('nav-list nav__active')
      : setActive('nav-list')

    toggleIcon === 'nav__toggler'
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler")
  }

const[navbar, setNavbar] = useState(false)

const changeNavbar = () => {
  if (window.scrollY >= 50) {
      setNavbar(true);
  } else {
      setNavbar(false)
  }
}
window.addEventListener('scroll', changeNavbar);

useEffect(() => {
}, [])

  return (
    <div className={`Navbar ${navbar ? 'navbarActive' : ''}`}>
      <div className="container nav-body">
        <Link to="/">
          <div className='nav-logo'>
            <img src={Logo} alt="..." />
          </div>
        </Link>

        <ul className={active}>
          <li>
            <Link onClick={navToggle}  className='nav-link' to='/'>{getText('home')}</Link>
          </li>
          <li>
            <Link onClick={navToggle} className='nav-link' to='/services'>{getText('services')}</Link>
            
          </li>
          <li>
            <Link onClick={navToggle} className='nav-link' to='/contacts'>{getText('contact')}</Link>
          </li>
          
          <li className='langWrap d-flex align-items-center'>
            <h5 className='nav-link d-flex align-items-center'>
              {getLanguage() === 'en' ? <><img src={en} width={30}/> English</> : getLanguage() === 'uz' ? <><img src={uz} width={30}/> O'zbek</> : <><img src={ru} width={30}/> Русский</>}
            </h5>

            <div className="wrap">
              <p onClick={() => changeLanguage('uz')}><span className="fi fi-uz"></span>  O'zbek</p>
              <p onClick={() => changeLanguage('ru')}> <span className='fi fi-ru'></span> Русский</p>
              <p onClick={() => changeLanguage('en')}> <span className='fi fi-gb'></span> English</p>
            </div>
          </li>
        </ul>

        <div onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </div>
  )
}
