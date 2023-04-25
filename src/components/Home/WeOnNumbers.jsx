import React from 'react'
import { getLanguage, getText } from '../../locale'

export default function WeOnNumbers() {
  return (
    <div className="container">
      <div className='WeOnNumbers'>

        <h2>{getText('weOnNumbersTitle')}</h2>
        <div className='WeOnNumbersInfo'>
          <div>
            <span>5+</span>
            <h3>{getText('weOnNumbersEmployee')}</h3>
          </div>
          <div>
            <span>10+</span>
            <h3>{getText('weOnNumbersCustomers')}</h3>
          </div>
          <div>
            <span>40+</span>
            <h3>{getText('weOnNumbersSuccessful')}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
