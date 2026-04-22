
import ParticlesContainer from '../components/ParticlesContainer'
import { ReactTyped } from "react-typed";

import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { LuDownload } from "react-icons/lu";
import { RiGithubFill } from 'react-icons/ri'
import Link from 'next/link';
import HomeAvatar from '../components/HomeAvatar';
import Head from 'next/head';

const Home = () => {



  return (


    <>

      <Head>
        <title>iorenantsoa | Home</title>
        <meta name="description" content="Welcome to the homepage of iorenantsoa's portfolio. Explore my projects and services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
      <div className="min-h-screen  flex items-center  py-36  ">


        <div className="w-full xl:w-[100%] h-full absolute right-0 bg-[#0D1117] -z-50 ">
          <ParticlesContainer />
        </div>


        <motion.div
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden xl:flex absolute bottom-0 right-[00px] -z-20  w-[50%] mx-auto">
          <HomeAvatar />
        </motion.div>


        <div className=' min-w-[100%]'>

          <div className="container mx-auto    flex justify-center xl:justify-start">
            <div className="flex flex-col items-center xl:items-start gap-x-8">
              <motion.h1
                variants={fadeIn('down', 0.2)}
                initial='hidden'
                animate="show"
                exit="hidden"
                className=" h3 z-30 text-slate-50  text-center xl:text-left"
              >
                 
               Boost your <br />brand{"'"}s visibility  <br /> in
                <span className="text-accent "> the digital world.</span>
              </motion.h1>


              <motion.p
                variants={fadeIn('down', 0.3)}
                initial='hidden'
                animate="show"
                exit="hidden"
                className="max-w-sm xl:max-w-xl mx-auto xl:mx-0  text-slate-50 z-30  text-center xl:text-start  "
              >
                <ReactTyped
                  strings={[
                    // " Hi, I’m  <span className='font-medium text-lg'>Ratsimbazafy Iorenantsoa Cédric Antsamalala</span>, Passionate about new technologies and eager to learn, with motivation to tackle challenges and explore new opportunities. Curious and proactive in applying skills and making a meaningful contribution to innovative projects."
                    "Hi, I'm <span className='font-medium text-lg'>Iorenantsoa Cédric Antsamalala</span>, a passionate digital marketer and developer. I thrive on crafting impactful digital strategies and building innovative solutions. Always eager to learn, I embrace challenges and turn ideas into growth opportunities."
                  ]}
                  typeSpeed={10}
                />

              </motion.p>

              <div className="flex flex-col items-center justify-center xl:hidden relative gap-y-3 mt-8">


                <Link
                  href="/IorenantsoaCV.pdf"
                  className="rounded-md flex items-center bg-accent text-slate-50 border border-transparent py-3 px-5 text-center text-sm font-semibold transition-all hover:bg-[#d12b1f] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#f05044] focus:ring-opacity-50 active:bg-[#b8251c] active:shadow-inner disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                  <LuDownload className="h-5 w-5 mr-2 text-slate-50 font-semibold" />
                  DOWNLOAD MY CV
                </Link>
                <Link
                  href="https://github.com/iorenantsoa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md flex items-center bg-transparent border border-slate50 text-gray-300 py-3 px-5 text-center text-sm font-semibold transition-all hover:bg-black hover:text-slate-50 hover:font-semibold hover:bg-opacity-30 focus:bg-slate-200 active:bg-slate-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">

                  <RiGithubFill className="h-5 w-5 mr-2 text-gray-300" />
                  GitHub
                </Link>

              </div>
              <motion.div
                variants={fadeIn('down', 0.4)}
                initial='hidden'
                animate="show"
                exit="hidden"
                className="hidden xl:flex text-slate-50 z-20 justify-around mt-8 gap-x-4 "
              >

                <Link
                  href="/IorenantsoaCV.pdf"
                  className="rounded-md flex items-center bg-accent text-slate-50 border border-transparent py-3 px-5 text-center text-sm font-semibold transition-all hover:bg-[#d12b1f] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#f05044] focus:ring-opacity-50 active:bg-[#b8251c] active:shadow-inner disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                  <LuDownload className="h-5 w-5 mr-2 text-slate-50 font-semibold" />
                  DOWNLOAD MY CV
                </Link>
                <Link
                  href="https://github.com/iorenantsoa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md flex items-center bg-transparent border border-slate50 text-gray-300 py-3 px-5 text-center text-sm font-semibold transition-all hover:bg-slate-100 hover:text-slate-50 hover:font-semibold hover:bg-opacity-10 active:bg-slate-100 active:text-slate-50 active:font-semibold active:bg-opacity-10 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">

                  <RiGithubFill className="h-5 w-5 mr-2 text-gray-300" />
                  GitHub
                </Link>
              </motion.div>
            </div>

          </div>
        </div>
      </div>

    </>


  )
};

export default Home;




