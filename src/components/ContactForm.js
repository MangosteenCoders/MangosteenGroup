import axios from 'axios'
import { useState } from 'react'
import { getLanguage, getText } from '../locale'

export default function ContactForm() {
  const BOT_TOKEN = "6144923882:AAHwtPSAS0AAmfhkG56VObE9uwYKtazcglw";
  const CHAT_ID = "-1001832600674"

  const sendForm = (e) => {
    e.preventDefault()
    let name = e.target[0].value
    let number = e.target[1].value
    let message = e.target[2].value

    let text = `<b>Ismi:</b> ${name} \n<b>Telefon raqami:</b> ${number} \n<b>Xabar:</b> ${message}`

    axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text
    }, {
      headers: {
        "Content-Type": 'multipart/form-data',
      }
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })

      let style = {}
      if(inputValue === '') {
        style = {
          border: '2px solid red'
        }
      }
       else {
        style = {
          border: '2px solid green'
        }
      }
      setStyled(style)
  }

  const [styled, setStyled] = useState({})
  const [inputValue, setValue] = useState('')
  const [error, setError] = useState('')

  const changeNameHandler = (e) => {
    let error = ''
    let elInputName = e.target.name
    let elInputValue = e.target.value
    let a = { [elInputName]: elInputValue }

    let style = {}
    if(a[elInputName] === '') {
      style = {
        border: '2px solid red'
      };
      setError('To’ldirish majburiy!')
    }

     else {
      style = {
        border: '2px solid green'
      }
      setError('')
    }
    setStyled(style)
    setValue(elInputValue)
  }

  return (
    <section className='contactFormSection'>
      <div className="container">
        <div data-aos="fade-right" data-aos-duration="2000" className='contactText'>
          <h2>{getText('contactQuestTitle')}</h2>
          <p>{getText('contactQuestText')}</p>
        </div>
        <div className='contactContent row'>
          <div id='toDown' className='contactForm col-7'>
            <form onSubmit={sendForm} data-aos="zoom-out-up" data-aos-duration="2000" className='contactFormContent'>
              <label>Ваше Ф.И.О</label>
              <input style={styled} onChange={changeNameHandler}  className='col-12' type="text" placeholder={getText('contactInputHolder')} />
              <p style={{color: 'red'}}>{error}</p>
              <label>Телефон</label>
              <input style={styled} onChange={changeNameHandler}  className='col-12' type="text" placeholder={getText('contatInputHolderPhone')} />
              <p style={{color: 'red'}}>{error}</p>
              <label>Xabaringiz</label>
              <textarea style={styled} onChange={changeNameHandler}  className='col-12' placeholder={getText('contactInputHolderText')}></textarea>
              <p style={{color: 'red'}}>{error}</p>
              <div className='contactSocialContent'>
                <button className='consultationBtn contactConsultationBtn'>Submit</button>
                <div className='contactSocialLink'>
                  <a href="https://t.me/Mangosteenuz" target='_blank'>
                    <i className='bx bxl-telegram'></i>
                  </a>
                  <a href="https://instagram.com/mangosteengroup?igshid=YmMyMTA2M2Y=" target='_blank'>
                    <i className='bx bxl-instagram-alt'></i>
                  </a>
                  <a href="https://github.com/MangosteenCoders" target='_blank'>
                    <i className='bx bxl-github'></i>
                  </a>
                </div>
              </div>
            </form>
          </div>
          <div data-aos="fade-left" data-aos-duration="2000" className='contactInfoContent col-3'>
            <div className='contactInfo'>
              <h2>Телефон</h2>
              <a href="tel:+998500105610">+998 50 010 56 10 </a>
              <a href="tel:+998951666763">+998 95 166 67 63 </a>
            </div>
            <div className='contactInfo'>
              <h2>Почта</h2>
              <a href="#">Mangosteen@mail.ru</a>
            </div>
            <div className='contactInfo'>
              <h2>Время работы</h2>
              <p>Dush-Yak 9:00 - 00:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
