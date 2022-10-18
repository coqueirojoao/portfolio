import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='w-full mx-auto fixed top-0 bg-slate-600/90 xl:bg-slate-600/20'>
      <nav className='flex justify-end gap-5 p-10'>
        <Link to='/'>
          <li className='text-xl xl:text-2xl text-white list-none opacity-70 hover:opacity-100 ease-in-out duration-300'>
            Home
          </li>
        </Link>
        <Link to='/projects'>
          <li className='text-xl xl:text-2xl text-white list-none opacity-70 hover:opacity-100 ease-in-out duration-300'>
            Projetos
          </li>
        </Link>
        <Link to='/about'>
          <li className='text-xl xl:text-2xl text-white list-none opacity-70 hover:opacity-100 ease-in-out duration-300'>
            Sobre mim
          </li>
        </Link>
      </nav>
    </header>
  );
}
