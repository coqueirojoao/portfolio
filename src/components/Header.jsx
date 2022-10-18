import React from 'react';
import { Link } from 'react-router-dom';
import coqueiro from '../assets/coqueiro.png';

export default function Header() {
  return (
    <header className='w-full mx-auto fixed top-0 bg-slate-600/40 xl:bg-slate-600/20 py-1'>
      <nav className='flex justify-end items-center'>
        <div className='flex justify-start w-1/2 px-8'>
          <img
            src={coqueiro}
            alt='header-logo'
            width={80}
            className='drop-shadow-lg shadow-black'
          />
        </div>
        <div className='flex justify-end gap-5 w-1/2 px-5'>
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
        </div>
      </nav>
    </header>
  );
}
