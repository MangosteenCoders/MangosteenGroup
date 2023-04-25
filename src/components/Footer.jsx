import React from 'react'

export default function Footer() {
  return (
    <section className='footerSection'>
      <div className="container">
        <div className="row footerContent">
          <div className="col-md-3 col-6 footerInfo">
            <div>
              <h2>Telegram</h2>
              <a target='_blank' href="https://t.me/Mangosteenuz">mangosteen</a>
            </div>
            <i class='bx bxl-telegram' ></i>
          </div>
          <div className="col-md-3 col-6 footerInfo" >
            <div>
              <h2>instagram</h2>
              <a target='_blank' href="https://instagram.com/mangosteengroup?igshid=YmMyMTA2M2Y=">mangosteen</a>
            </div>
            <i class='bx bxl-instagram'></i>
          </div>
          <div className="col-md-3 col-6 footerInfo">
            <div>
              <h2>FaceBook</h2>
              <a target='_blank' href="https://github.com/MangosteenCoders">mangosteen</a>
            </div>
            <i class='bx bxl-facebook' ></i>
          </div>
          <div className="col-md-3 col-6 footerInfo">
            <div>
              <h2>Telefon</h2>
              <a href="tel:+998500105610">+998 (50) 010 56 10</a>
            </div>
            <i class='bx bx-phone'></i>
          </div>
        </div>
      </div>
    </section>
  )
}
