import Container from "../container";
import { testimonyItems } from "../data/page";
import Image from "next/image";

export default function Testimony(){
    return (
        <Container className="py-20">

        <h2 className="text-4xl font-heading font-semibold text-center capitalize">
        What our customers say!
        </h2>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-10 mt-20">
       
            {testimonyItems.map(testimony => (
                <div key={testimony.Name} className="bg-white p-6 rounded-md flex gap-4 md:w-[calc(50%-20px)]">
                    <div>
                        
                            <Image
                                src={testimony.Image}
                                alt={testimony.Name}
                                width={120}
                                height={100}
                                className='w-16 h-1/6 rounded-full shrink-6 object-cover'
                            />
                        
                        <div>
                            <div className='flex justify-between '>
                                <p className='text-lg font-semibold'>{testimony.Name}</p>
                                <p className='text-lg text-slate-400 font-semibold'>{testimony.Country}</p>
                            </div>
                            
                            <div className=''>
                                <p className='font-medium'> {testimony.Content}</p>
                                
                                <p className='text-slate-600'>{testimony.Period}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        
        </div>
        </Container>
    )
}