import Link from 'next/link';
import React from 'react'
import Container from '../container';

const navItems = [
  {
    title: "Home",
    href: '/home',
  },
  {
    title: "Places",
    href: '/about',
  },
  {
    title: "Eatries",
    href: '/places',
  },
  {
    title: "Comments",
    href: '/contact',
  }
];

const NavBar = () => {
  return (
    <Container className='max-w-7xl mx-auto'>

      <nav className='flex justify-between items-center py-6 max-w-7xl mx-auto px-4 l=md:px-8 lg:px-8'>
        <div className='font-bold text-xl -skew-x-6'>
          Tour App

        </div>

        <ul className='flex gap-6 md:flex gap-6 sm:hidden lg:flex gap-6 '>
          {navItems.map((nav) => (
            <li key={nav.title}>
              <Link href={nav.href} className='text-slate-600 hover:text-black hover:underline underline-offset-4'>{nav.title}</Link>
            </li>
          ))}
        </ul>

        <button className='px-6 py-2.5 bg-purple-500 rounded-lg text-white'>Login</button>
      </nav>
    </Container>
  );
}

export default NavBar;