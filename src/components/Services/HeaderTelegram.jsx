import React from 'react'
import { getLanguage, getText } from '../../locale'
import NeonBtn from '../NeonBtn'

export default function HeaderTelegram() {
  return (
    <div className='HeaderTelegram' id='telegram'>
      <div className="container">
      <div className="header-info">
          <div>
            <h1 data-aos="fade-right" data-aos-duration="2000">{getText('telegramBot')}{getText('yaratishHizmati')}</h1>

            <div data-aos="fade-up" data-aos-duration="2000" >
              <NeonBtn />
              <br/>

            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
              <defs>
                <filter id="goo">
                  <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
                  <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                </filter>
              </defs>
            </svg>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
