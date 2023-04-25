import React from 'react'
import { getLanguage, getText } from '../../locale'
import ToDown from '../ToDown'
import NeonBtn from '../NeonBtn'

export default function HeaderWeb() {
  return (
    <div className='HeaderWeb'>
      <div className="blur"></div>
      <div className="container">
        <div className="header-info">
          <div>
            <h1 data-aos="fade-right" data-aos-duration="2000"><span>{getText('webSite')}</span> {getText('xizmati')}</h1>

            <div data-aos="fade-up" data-aos-duration="2000">
              <NeonBtn />
              <br/>

            
            <ToDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
