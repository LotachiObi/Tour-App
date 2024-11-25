import React from 'react'
import Container from '../container'
import { destinationItems } from '../data/page';
import Link from 'next/link';
import Image from 'next/image';
import Rating from '../rating/page';
import Eatry from '../eatry/page';
import { BedIcon } from 'lucide-react';


export default function Tours() {
    return <Container className="py-20">
        <h2 className='text-4xl font-heading font-semibold text-center'>
            Most Desired Destination
        </h2>
        <p className='text-center max-w-4xl mx-auto text-slate-600 mt-2'>
            Observe our top destinations voted by delighted customers around the city
        </p>

        <ul className='grid sm:grid-cols-1 lg:grid-cols-3 gap-10 mt-20'>
            {destinationItems.map(destination => (
                <Link href={destination.Id.toString()} key={destination.Id} className='group'>
                    <div>
                        <div className='aspect-[16/10] rounded-md overflow-hidden'>
                            <Image
                                src={destination.Image}
                                alt={destination.Title}
                                width={320}
                                height={300}
                                className='w-full h-full object-cover transition-transform group-hover:scale-110 origin-bottom duration-300'
                            />
                        </div>
                        <div>
                            <div className='flex justify-between items-center'>
                                <p className='text-lg font-semibold'>{destination.Title}</p>
                                
                            </div>
                            
                            <div className='flex justify-between items-center'>
                                <p className='font-medium'> {destination.Price}</p>
                                <p className='text-slate-600 flex items-center gap-2'><BedIcon size={20} /></p>
                                <p className='text-slate-600'>{destination.Period}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </ul>
        <Eatry />
    </Container>;
}
