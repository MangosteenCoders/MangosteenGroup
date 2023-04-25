import React, {useState, useEffect}from 'react'
import HomeHeader from '../components/Home/HomeHeader'
import OurServices from '../components/Home/OurServices'
import Questions from '../components/Home/Questions'
import CallMe from '../components/Services/CallMe.jsx'
import AboutCompany from '../components/Home/AboutCompany'
import ServicesInfo from '../components/Home/ServicesInfo'
import Footer from '../components/Footer'
import LoaderHome from '../components/loaders/LoaderHome'

export default function Home() {
  const [loading, setIsloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false)
    }, 1000)
  }, [])
  return (
    <div className='Home'>
      {
        loading ? <> <LoaderHome/> </>
        :
        <>
          <HomeHeader/>
          <OurServices/>
          <ServicesInfo/>
          <AboutCompany/>
          <Questions/>
          <CallMe/>
          <Footer />
        </>
      }
    </div>
  )
}
