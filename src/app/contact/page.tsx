import React from 'react'
import Header from '@/components/homepage/header'
import { Sidebar } from '@/components/common/sidebar/Sidebar'
import Curtain from '@/components/common/curtain/Curtain'
import Contact from '@/components/homepage/contact'
import ContactForm from '@/components/contact/ContactForm'
import Footer from '@/components/common/footer/Footer'

const ContactMe = () => {
  return (
    <div className='overflow-x-clip relative'>
        <Sidebar scrollThreshold={150} />
        <div className='dark'>
          <div className='dark:bg-[#1c1d20] overflow-x-clip' >
            <Curtain />
            <Header />
            <ContactForm />
            <Footer/>
          </div>
        </div>
    </div>
  )
}

export default ContactMe