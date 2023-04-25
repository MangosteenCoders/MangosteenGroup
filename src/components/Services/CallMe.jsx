import React from 'react'
import { getLanguage, getText } from '../../locale'
import NeonBtn from '../NeonBtn'

export default function CallMe() {
  return (
    <div className='CallMe'>
      <div className="container">
        <div className="text-center">
          <h3>{getText('callMeTitle')}</h3>
          <p>{getText('callMeText')}</p>
          
          <div data-aos="fade-up" data-aos-duration="1500" className="">
            <a href="tel:+998951666763">
              <button className='consultationBtn'>
                Qo'ng'iroq qilish
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
