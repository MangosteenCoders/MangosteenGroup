import React, {useState, useEffect} from 'react'
import ContactHeader from '../components/ContactHeader'
import ContactForm from '../components/ContactForm'
import LoaderContact from '../components/loaders/LoaderContact';

export default function Contacts() {
  const [loading, setIsloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false)
    }, 1000)
  }, [])
  return (
    <div>
      {
        loading ? <> <LoaderContact/> </>
        :
        <>
          <ContactHeader /> 
          <ContactForm />
        </>
      }
    </div>
  )
}