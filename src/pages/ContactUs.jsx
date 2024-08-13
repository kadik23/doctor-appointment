import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

function ContactUs() {
return (
<div className='h-auto md:h-[44rem] p-10 md:p-16'>
    <h1 className='text-center text-2xl md:text-3xl font-bold text-regal-green mb-10'>Contact Us</h1>
    <div className='flex flex-col md:flex-row justify-between'>
        <div className='flex flex-col w-full md:w-[45%]'>
        <h1 className='text-lg font-semibold mb-4'>Get in Touch</h1>
        <form className='flex flex-col gap-4'>
            <input type="text" placeholder='Your Name' className='p-3 border border-gray-300 rounded-lg' />
            <input type="email" placeholder='Your Email' className='p-3 border border-gray-300 rounded-lg' />
            <textarea placeholder='Your Message' className='p-3 border border-gray-300 rounded-lg' rows="5"></textarea>
            <button type='submit' className='text-white bg-regal-green py-2 rounded-lg hover:bg-opacity-80 active:scale-105 transition-all duration-200'>Send Message</button>
        </form>
        </div>
        <div className='w-full md:w-[45%] flex flex-col gap-8 mt-10 md:mt-0'>
        <div className='flex items-center gap-4'>
            <Icon icon="mdi:phone-outline" width="24" height="24" className='text-regal-green' />
            <div>
            <h1 className='font-semibold'>Phone</h1>
            <span className='text-sm'>+123 456 789</span>
            </div>
        </div>
        <div className='flex items-center gap-4'>
            <Icon icon="mdi:email-outline" width="24" height="24" className='text-regal-green' />
            <div>
            <h1 className='font-semibold'>Email</h1>
            <span className='text-sm'>contact@clinic.com</span>
            </div>
        </div>
        <div className='flex items-center gap-4'>
            <Icon icon="mdi:map-marker-outline" width="24" height="24" className='text-regal-green' />
            <div>
            <h1 className='font-semibold'>Location</h1>
            <span className='text-sm'>123 Medical St, New York, NY</span>
            </div>
        </div>
        </div>
    </div>
    </div>
    )
}

export default ContactUs