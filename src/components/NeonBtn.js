import React from 'react'
import { getText } from '../locale'

export default function NeonBtn() {
  return (
    <div>
      <button className='consultationBtn'>
        {getText('freeConsultation')}
      </button>
    </div>
  )
}