import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiGithubFill, RiCloseFill } from 'react-icons/ri';

import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import { randomUUID } from 'crypto';

export default function Modal({ isOpen, closeModal, content }) {
  // Ferme le modal avec 'Escape'
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  const handleClickOutside = (e) => {
    if (e.target.id === 'modal-background') {
      closeModal();
    }
  };

  return (
    <motion.div
      variants={fadeIn('show', 0.1)}
      initial="hidden"
      animate="show"
      exit="hidden"
      id="modal-background"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-50 bg-opacity-30 backdrop-blur-sm "
      onClick={handleClickOutside}
    >
      <div
        className="relative w-[90%] h-[80%] xl:w-[80%] bg-[#0D1117] rounded-xl shadow-lg flex flex-col    ">
        {/* Header du modal */}
        <div className="p-4 bg-[#0D1117] rounded-xl rounded-b-none  text-xl xl:text-3xl font-bold border-b text-slate-50 flex justify-between items-center xl:px-5">
          {content.title}  {/* Affiche le titre dynamique */}

          <RiCloseFill className="h-8 w-8 mr-2 text-gray-300 cursor-pointer hover:text-accent text-bold transition-all duration-500" onClick={closeModal} />

        </div>

        {/* Contenu (Body) du modal */}
        <div className="flex-1 overflow-auto p-6 flex flex-col md:flex-row scrollbar-none">
          {/* Image à gauche (ou en haut sur mobile) */}
          <div className="md:w-1/2 w-full md:h-auto h-64 relative">
            <Image
              src={content.path}
              alt={content.title}
              width={1000}
              height={1000}
              className={`rounded-lg w-full h-full object-cover ${content.imageClassName || 'object-center'}`} 
            />
          </div>

          {/* Texte à droite (ou en dessous sur mobile) */}
          <div className="md:w-1/2 w-full mt-4 md:mt-0 md:ml-6">
            <h2 className="text-2xl font-semibold mb-4 text-slate-50 text-center xl:text-start">Description</h2>
            <p className='text-justify xl:text-left'>
              {content.description}

            </p>
            <hr className='text-slate-50 my-5 w-3/4 mx-auto opacity-50' />
            <hr className='text-slate-50 my-5 w-1/2 mx-auto opacity-50' />
            <h3 className='font-semibold text-center xl:text-start text-slate-50 text-2xl'>Technologies</h3>
            <div className='text-slate-50 flex  flex-wrap w-full gap-5 py-4 justify-center xl:justify-start' >
              {
                content.technologies.map(techno => {
                  return (
                    <span key={randomUUID} >{techno}</span>
                  )
                })
              }
            </div>
          </div>
        </div>

        {/* Footer du modal */}
        <div className="p-4 bg-[#0D1117] border-t flex justify-end md:justify-end gap-x-3 rounded-xl rounded-t-none">
          <Link
            onClick={closeModal}
            href= {content.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md flex items-center bg-transparent border border-slate50 
            text-gray-300 py-2 px-4 text-center text-sm font-semibold transition-all duration-500
             hover:bg-slate-50 hover:text-slate-50 hover:font-semibold hover:bg-opacity-30 focus:bg-slate-50 
             active:bg-slate-50 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none " type="button">

            <RiGithubFill className="h-5 w-5 mr-2 text-gray-300" />
            Link to GitHub 
          </Link>
          <button
            onClick={closeModal}
            className="hidden bg-accent text-white px-4 py-2  rounded-md hover:bg-red-600 transition duration-300 md:flex items-center justify-center"
          >
            <span><RiCloseFill className='h-5 w-5   text-white font-semibold' /></span>
            Close
          </button>
        </div>
      </div>
    </motion.div>
  );
}
