import React from 'react';

export default function Footer() {
  return (
    <div className='w-full mx-auto bottom-0 bg-slate-600/40 xl:bg-slate-600/20 p-5'>
      <footer className='flex justify-around flex-wrap gap-3 items-center'>
        <p className='text-white text-center'>
          Desenvolvido por <span className='text-green-800'>Coqueiro</span>,
          utilizando React && Tailwind.
        </p>
        <div className='flex gap-5 text-3xl text-gray-500'>
          <a href='https://www.linkedin.com/in/coqueirojoao/' target='blank'>
            <i className='fa-brands fa-linkedin hover:text-blue-500 ease-in-out duration-1000' />
          </a>
          <a href='https://github.com/coqueirojoao' target='blank'>
            <i className='fa-brands fa-github hover:text-black ease-in-out duration-1000' />
          </a>
        </div>
      </footer>
    </div>
  );
}
