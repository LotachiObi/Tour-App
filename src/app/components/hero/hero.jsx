import React from 'react'
import Form from '../searchForm/page'
import Container from '../container'
import Image from 'next/image'

export default function Hero() {
  return (
    <Container id='/' className="grid lg:grid-cols-2 gap-[5px] p-10">
        <div className='py-10 md:py-20'>
            <p className='text-purple-500 font-semibold ml-1 text-lg'>Make your schedule with us</p>
            <h1 className='text-5xl sm:text-7xl lg:text-8xl font-bold mb-2 text-balance font-heading uppercase'>Explore your world</h1>
            <p className='text-lg text-slate-600'>discover amazing places at exclusive deals Eat, Shop, Visit mouth watering destinations </p>
            <div className='p-4 md:p-10 mt-10 rounded-md bg-white md:-mr-[60%] relative'>

                <Form />
                
            </div>
            
        </div>
        <div className='hidden md:flex justify-center bg-purple-450'>
                <Image src="/herrro.jpg" alt="A mountain top" width={480} height={500} className='pb-[20px] -mt-[40px] '/>
            </div>
    </Container>
  )
}
