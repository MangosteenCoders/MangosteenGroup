import React from 'react'
import ToDown from '../ToDown'
import { getLanguage, getText } from '../../locale'


export default function HomeHeader() {

  return (
    <div className='HomeHeader'>
      <div className='container '>
        <div className="header-info">
          <div>
            <h1 data-aos="fade-right" data-aos-duration="2000">Mangosteen Group </h1>
            <div data-aos="fade-up" data-aos-duration="2000" >
            
              <a href="tel:+998951666763">
                <button className='consultationBtn'>
                  {getText('freeConsultation')}
                </button>
              </a>
              <ToDown />
              <br/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
