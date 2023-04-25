import React, {useState, useEffect} from 'react'
import HeaderWeb from '../components/Services/HeaderWeb'
import WebPrice from '../components/Services/WebPrice'
import HeaderTelegram from '../components/Services/HeaderTelegram'
import CallMe from '../components/Services/CallMe'
import Footer from '../components/Footer'
import LoaderService from '../components/loaders/LoaderService'

export default function Services() {
  const [loading, setIsloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false)
    }, 1000)
  }, [])
  return (
    <div className='Services'>
      {
        loading ? <> <LoaderService/> </>
        :
        <>
          <HeaderWeb/>
          <WebPrice/>
          <HeaderTelegram/>
          <CallMe/>
          <Footer />
        </>
      }
    </div>
  )
}
