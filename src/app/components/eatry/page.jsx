import React from 'react'
import { eatryItems } from '../data/eat'
import Container from '../container'
import Link from 'next/link'
import Image from 'next/image'

export default function Eatry() {
  return <Container className="py-20">
        <h2 className='text-4xl font-heading font-semibold text-center'>
            Most Desired Eatry And Lounges
        </h2>
        <p className='text-center max-w-4xl mx-auto text-slate-600 mt-2'>
            Observe our top local eatries and bars voted by delighted customers around the city
        </p>

        <ul className='grid sm:grid-cols-1 lg:grid-cols-3 gap-10 mt-20'>
            {eatryItems.map( eatry=> (
                <Link href={eatry.Id.toString()} key={eatry.Id} className='group'>
                    <div>
                        <div className='aspect-[16/10] rounded-md overflow-hidden'>
                            <Image
                                src={eatry.Image}
                                alt={eatry.Title}
                                width={320}
                                height={300}
                                className='w-full h-full object-cover transition-transform group-hover:scale-110 origin-bottom duration-300'
                            />
                        </div>
                        <div>
                            <div className='flex justify-between items-center'>
                                <p className='text-lg font-semibold'>{eatry.Title}</p>
                                
                            </div>
                            
                            <div className='flex justify-between items-center'>
                                <p className='font-medium'>{eatry.Price}</p>
                                <p className='text-slate-600'>{eatry.Period}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </ul>
      
    </Container>
  
};
