import { Search } from 'lucide-react'
import React from 'react'

export default function Form() {
  return (
    <form className='grid md:grid-cols-4 gap-4'>
      <div className='flex flex-col'>
        <label htmlFor="search">Search</label>
        <input type="text" placeholder='Search'
        className='py-2 outline-none border-b-slate-100'/>
      </div>

      <div className='flex flex-col'>
        <label htmlFor="destination">Destination</label>
        <select id='destination' className='py-2 outline-none border-b-slate-100 '>
        <option value="ado">Ado-roundabout</option>
        <option value="powerline">Power-Line</option>
        <option value="uturn">Court-yard</option>
        <option value="anu">Anu-crescent</option>
        <option value="folarin">Folarin</option>
        <option value="remileck">Remileck</option>
        <option value="coca">Coca-cola</option>
        </select>
      </div>

      <div className='flex flex-col'>
        <label htmlFor="destination">Duration</label>
        <select id='destination' className='py-2 outline-none border-b-slate-100 '>
        <option value="1">1 day</option>
        <option value="2">2 days</option>
        <option value="3-5">3-5 days</option>
        <option value="8">8 days</option>
        </select>
      </div>
      <button className='bg-purple-500 text-white py-4 rounded-md md:-mr-10 md:-my-10 flex justify-center items-center md:flex-col gap-2'>
        <Search className='size-[20]'/>
        search</button>
    </form>
  )
}
