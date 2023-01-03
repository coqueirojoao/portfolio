import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SoftSkills from '../components/SoftSkills';
import { motion } from 'framer-motion';
import skills from '../data/skills';

export default function About() {
  return (
    <div>
      <Header />
      <motion.div
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <main className='my-32'>
          <div className='flex flex-col justify-center items-center w-full'>
            <h1 className='text-6xl text-gray-200'>Sobre mim</h1>
            <hr className='mt-8 w-1/2 border-purple-300/20' />
          </div>
          <div className='mx-3 xl:mx-auto mt-24 border xl:w-3/4 bg-gray-300 rounded shadow-lg shadow-black'>
            <div className='flex flex-col xl:flex-row justify-evenly items-center py-3'>
              <img
                src='https://imageup.me/images/175814f1-214d-4e0f-a1e6-5e6c1c0a3c73.jpeg'
                alt='profile-img'
                className='w-72 xl:w-96 rounded-full shadow-xl shadow-black/70'
              />
              <div className='xl:w-1/3 text-justify w-72 mt-5'>
                Me chamo <strong>João Pedro Coqueiro de Azevedo</strong>, tenho
                27 anos e sou nascido e residente no estado da Bahia.
                <br />
                Tenho bacharel em Direito, provido pela UniFTC, e atualmente
                estou estudando na escola de programação da{' '}
                <a
                  href='https://www.betrybe.com/'
                  target='blank'
                  className='text-green-800 hover:text-green-900 ease-in-out duration-1000'
                >
                  Trybe.
                </a>
                <br />
                Estou em fase de transição de carreira para a área de
                desenvolvimento web, área essa da qual me apaixonei e me dedico
                todos os dias com bastante disciplina e foco!
                <br />
                <h2 className='mt-4 text-center'>
                  <strong>{`< Soft Skills />`}</strong>
                </h2>
                <p className='mt-4'>
                  Alem das minhas skills baseadas em programação, também posso
                  dar um destaque nas minhas soft-skills.
                  <br />
                  Posso destaca-las como sendo principalmente:
                  <br />
                  <div className='flex justify-center mt-3'>
                    <SoftSkills />
                  </div>
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center w-full mt-8'>
            <h1 className='text-6xl text-gray-200'>Skills</h1>
            <hr className='mt-8 w-1/2 border-purple-300/20' />
          </div>
          <div className='flex mx-auto gap-5 xl:w-1/2 justify-center flex-wrap mt-24'>
            {skills.map((skill) => (
              <div className='w-28 xl:w-64 p-5 shadow-lg shadow-black rounded-xl bg-slate-700 xl:hover:w-72 ease-in-out duration-1000'>
                <img src={skill.logo} alt={skill.title} />
              </div>
            ))}
          </div>
        </main>
        <Footer />
      </motion.div>
    </div>
  );
}
