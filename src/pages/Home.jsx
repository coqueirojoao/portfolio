import React from 'react';
import Header from '../components/Header';
import homeImg from '../assets/home-img.svg';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <div>
      <Header />
      <div className='flex flex-col my-16 items-center'>
        <div className='xl:w-1/2'>
          <img
            src={homeImg}
            alt='home-img'
            className='w-full xl:w-1/2 mx-auto'
          />
        </div>
        <div className='w-1/2 text-center mx-10'>
          <TypeAnimation
            sequence={[
              'Bem',
              1000,
              'Bem vindos(as)',
              1000,
              'Bem vindos(as) ao meu portfólio!',
              1000,
              'Bem vindos(as)',
              1000,
              'Bem',
              1000,
              '',
              500,
            ]}
            //  Continuing previous Text
            className='text-3xl xl:text-5xl text-gray-200 shadow-text'
            wrapper='div'
            repeat={Infinity}
          />
          <p className='text-lg xl:text-2xl py-10 text-gray-500 shadow-text leading-normal'>
            Aqui vocês vão encontrar informações sobre mim, sobre os meus
            projetos e formas de contato. <br />
            Espero que gostem da visita! :D
          </p>
          <hr className='border-purple-400/20' />
        </div>
        <div className='flex gap-5 text-gray-500 text-6xl mt-2'>
          <a href='https://www.linkedin.com/in/coqueirojoao/' target='blank'>
            <i className='fa-brands fa-linkedin hover:text-blue-500 ease-in-out duration-1000' />
          </a>
          <a href='https://github.com/coqueirojoao' target='blank'>
            <i className='fa-brands fa-github hover:text-black ease-in-out duration-1000' />
          </a>
        </div>
      </div>
    </div>
  );
}
