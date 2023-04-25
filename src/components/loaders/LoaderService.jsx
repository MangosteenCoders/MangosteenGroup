import React from 'react'
import { getText } from '../../locale'


export default function LoaderService() {
  return (
    <div className='Loader'>
      <div className="d-flex">
        <p>{getText('services')}</p>

        <div class="leap-frog">
          <div class="leap-frog__dot"></div>
          <div class="leap-frog__dot"></div>
          <div class="leap-frog__dot"></div>
        </div>
      </div>
    </div>
  )
}
