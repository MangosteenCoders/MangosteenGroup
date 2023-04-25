import React from 'react'
import { getLanguage, getText } from '../locale'
import ToDown from '../components/ToDown'

export default function ContactHeader() {
  return (
    <div>
        <section className='contactSection'>
        <div className='blur'></div> 
        <div className="container">
            <div className='contactHeader'>
                <div data-aos="fade-right" data-aos-duration="2000">
                    <h2 data-aos="fade-right" data-aos-duration="2000">{getText('Contacts')}</h2>
                    <div data-aos="fade-up" data-aos-duration="2000" className='d-flex'>
                        <div>
                            <a href="tel:+998930105610">+998 (50) 010 56 10</a>
                            <button className='consultationBtn'>BEPUL KONSULTATSIYA</button>
                        </div>
                        <div className='noneBtn'>
                            <a href="tel:+998951666763">+998 (95) 166 67 63 </a>
                            <button className='consultationBtn'>BEPUL KONSULTATSIYA</button>
                        </div>
                    </div>
                    <ToDown />
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
