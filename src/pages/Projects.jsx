import React from 'react';
import projects from '../data/projects';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

export default function Projects() {
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
            <h1 className='text-6xl text-gray-200'>Projetos</h1>
            <hr className='mt-8 w-1/2 border-purple-300/20' />
          </div>
          <div className='flex justify-center mt-8 text-center text-2xl text-gray-200'>
            <h3 className='xl:w-1/2'>
              Nessa página estarão listados projetos que desenvolvi, tanto em
              processos seletivos, quanto no curso da{' '}
              <a
                href='https://www.betrybe.com/'
                target='blank'
                className='text-green-800 hover:text-green-900 ease-in-out duration-1000'
              >
                Trybe
              </a>
              , ou outros de cunho pessoal!
            </h3>
          </div>
          <div className='flex flex-col xl:flex-row justify-center items-center xl:items-stretch flex-wrap w-full my-16 gap-7 text-center'>
            {projects.map((project) => (
              <div className='xl:w-1/3 mx-2 shadow-lg border-t border-blue-600/30 shadow-black/50 p-3 rounded xl:hover:w-1/2 ease-in-out duration-1000'>
                <a href={project.address} target='blank'>
                  <img
                    src={project.image}
                    alt='image-project'
                    className='rounded w-full'
                  />
                  <p className='text-2xl text-gray-300'>{project.title}</p>
                  <p className='text-gray-200'>{project.description}</p>
                  <div className='flex gap-3 pt-5 justify-center'>
                    {project.skills.map((skill) => (
                      <span className='bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300'>
                        {skill}
                      </span>
                    ))}
                  </div>
                </a>
              </div>
            ))}
          </div>
        </main>
        <Footer />
      </motion.div>
    </div>
  );
}
