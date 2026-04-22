import React, { useState } from 'react'
// icons
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNode,
  FaFigma,
  FaGithub,
  FaGitAlt,
  FaAngular,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiAdobexd,
  SiAdobephotoshop,
  SiDocker,
  SiGithubactions,
  SiGnubash,
  SiJenkins,
  SiNestjs,
  SiKotlin,
  SiExpo,
  SiSymfony,
  SiNumpy,
  SiPython,
  SiScikitlearn,
  SiTensorflow,
  SiKeras,
  SiPandas,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiSqlite,
  SiGoogleanalytics,
  SiMailchimp,
  SiHootsuite,
  SiCanva,
  SiBuffer,
  SiGoogleads,
  SiWordpress,
  SiFlutter,
  SiOpenai
} from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";

import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const N8nIcon = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...props}>
    <rect x="2.5" y="2.5" width="19" height="19" rx="6" fill="currentColor" opacity="0.25" />
    <text
      x="12"
      y="15.2"
      textAnchor="middle"
      fontSize="8.5"
      fontWeight="700"
      fill="currentColor"
      style={{ letterSpacing: '0.6px' }}
    >
      n8n
    </text>
  </svg>
);

//  data
export const aboutData = [
  // {
  //   title: 'skills',
  //   info: [
  //     {
  //       title: 'Web Development',
  //       icons: [
  //         <FaHtml5 key={0} />,
  //         <FaCss3 key={1} />,
  //         <RiJavascriptFill key={2} />,
  //         <BiLogoTypescript key={3} />,
  //         <FaReact key={4} />,
  //         <FaAngular key={5} />,
  //         <SiNextdotjs key={6} />,
  //         <FaNode key={7} />,
  //         <SiNestjs key={8} />,
  //         <SiSymfony key={9} />,

  //       ],
  //     },
  //     {
  //       title: 'Mobile Development',
  //       icons: [
  //         <SiKotlin key={10} />,
  //         <TbBrandReactNative key={11} />,
  //         <SiExpo key={12} />,

  //       ],
  //     },
  //     {
  //       title: 'Artificial Intelligence (AI)',
  //       icons: [
  //         <SiPython key={13} />,
  //         <SiNumpy key={14} />,
  //         <SiPandas key={15} />,
  //         <SiScikitlearn key={16} />,
  //         <SiTensorflow key={17} />,
  //         <SiKeras key={18} />,

  //       ],
  //     },

  //     {
  //       title: 'Databases',
  //       icons: [<SiSqlite key={19} />, <SiPostgresql key={20} />, <SiMongodb key={21} />, <SiMysql key={22} />,],
  //     },
  //     {
  //       title: 'Version Control',
  //       icons: [<FaGitAlt key={23} />, <FaGithub key={24} />],
  //     },
  //     {
  //       title: 'UI/UX Design',
  //       icons: [<FaFigma key={25} />, <SiAdobexd key={62} />, <SiAdobephotoshop key={27} />],
  //     },
  //   ],
  // },

  {
    title: 'skills',
    info: [
      {
        title: 'Digital Marketing',
        icons: [
          <FaFacebook key={13} />,
          <FaTwitter key={14} />,
          <FaInstagram key={15} />,
          <FaLinkedin key={16} />,
          <FaTiktok key={22}/>,
          <SiGoogleanalytics key={17} />, 
          <SiMailchimp key={19} />,
          <SiHootsuite key={20} />,
          <SiCanva key={52} />, 
          <SiBuffer key={40} />,
          <SiGoogleads key={54} />, 
          <SiWordpress key={55} />, 

        ],
      },
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key={0} />,
          <FaCss3 key={1} />,
          <RiJavascriptFill key={2} />,
          <BiLogoTypescript key={3} />,
          <FaReact key={4} />,
          <FaAngular key={5} />,
          <SiNextdotjs key={6} />,
          <FaNode key={7} />,
          <SiNestjs key={8} />,
          <SiSymfony key={9} />,
          <SiWordpress key={54} />, 

        ],
      },
      {
        title: 'Mobile Development',
        icons: [
          <SiKotlin key={10} />,
          <TbBrandReactNative key={11} />,
          <SiExpo key={12} />,
          <SiFlutter key={12} />,
        ],
      },

      {
        title: 'DevOps & Automation',
        icons: [
          <SiDocker key={56} />,
          <SiJenkins key={57} />,
          <SiGithubactions key={58} />,
          <N8nIcon key={59} />,
          <SiPython key={60} />,
          <SiGnubash key={61} />,
        ],
      },
      
      {
        title: 'Artificial Intelligence (AI)',
        icons: [
          <SiOpenai key={27} />,
          <SiPython key={21} />,
          <SiNumpy key={22} />,
          <SiPandas key={23} />,
          <SiScikitlearn key={24} />,
          <SiTensorflow key={25} />,
          <SiKeras key={26} />,
          
        ],
      },
      {
        title: 'Databases',
        icons: [
          <SiSqlite key={27} />,
          <SiPostgresql key={28} />,
          <SiMongodb key={29} />,
          <SiMysql key={30} />,
        ],
      },
      {
        title: 'Version Control',
        icons: [
          <FaGitAlt key={31} />,
          <FaGithub key={32} />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [
          <FaFigma key={33} />,
          <SiAdobexd key={34} />,
          <SiAdobephotoshop key={35} />,
        ],
      },
    ],
  },
  
  {
    title: 'experience',
    info: [
      {
        title: 'Full Stack Developer - Tempus Donum',
        school: 'Collaborate with development teams to ensure code quality, maintain and update existing projects, fix bugs, and help migrate monolithic systems to decoupled frontend/backend architectures. Stack: JavaScript, Next.js, Node.js, Django, WordPress, PostgreSQL, MongoDB.',
        stage: 'August 2025 - Present',
      },
      {
        title: 'WordPress Developer - Freelance',
        school: 'Building and customizing WordPress websites for clients, ensuring optimal performance and user experience.',
        stage: 'November 2024 - Present',
      },
      {
        title: 'Web Designer - Freelance',
        school: 'Designing responsive and user-friendly websites tailored to clients’ needs and brand identity.',
        stage: 'November 2024 - Present',
      },
      {
        title: 'Bachelor’s Project - IES-AV (Institut d’Enseignement Supérieur d’Antsirabe Vakinankaratra)',
        school: 'Developed an image classification model to detect kidney diseases using Convolutional Neural Networks (CNNs).',
        stage: 'july 2023',
      },
      {
        title: 'Intern Developer - Paositra Malagasy',
        school: 'Worked on internal projects to enhance company processes.',
        stage: 'august 2022 - november 2022',
      },
    ],
  },
  {
    title: 'formations & credentials',
    info: [
      {
        title: "Software Engineering (M2)",
        school: "IES-AV (Institut d'Enseignement Superieur d'Antsirabe Vakinankaratra)",
        stage: '2025',
      },
      {
        title: 'Freelancing (Certified)',
        school: "Ministere de l'Enseignement Technique et de la Formation Professionnelle",
        stage: '2025',
      },
      {
        title: 'Fundamentals of Communication',
        school: 'Orange Digital Center',
        stage: '2025',
      },
      {
        title: 'Digital Marketing',
        school: 'Orange Digital Center',
        stage: '2024',
      },
      
      {
        title: 'First Year of Master’s in Software Engineering (M1)  ',
        school: 'IES-AV (Institut d’Enseignement Supérieur d’Antsirabe Vakinankaratra)',
        stage: '2024',
      },
      {
        title: 'Maintenance and Networks',
        school: "Nir’Info",
        stage: '2023',
      },
      {
        title: 'Third Year of Bachelor’s in Software Engineering (L3)',
        school: 'IES-AV (Institut d’Enseignement Supérieur d’Antsirabe Vakinankaratra)',
        stage: '2023',
      },
    ],
  },
];

import CountUp from 'react-countup';
import ParticlesContainer from '../../components/ParticlesContainer';
import AvatarAbout from '../../components/AvatarAbout';
import Head from 'next/head';


const About = () => {
  const [index, setIndex] = useState(0)

  return (
    <div>
      <Head>
        <title>iorenantsoa | About</title>
        <meta name="description" content="Learn more about iorenantsoa, my background, experience, and skills." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>

      <div className="min-h-screen  flex items-center py-36 ">
        <div className="w-full xl:w-[100%] h-full absolute right-0 bg-[#0D1117] -z-50 ">
          <ParticlesContainer />
        </div>
        {/* Avatar image */}
        <motion.div
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden xl:flex absolute bottom-0 justify-end -z-20 ">
          <AvatarAbout />
        </motion.div>

        <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 '>

          {/* text */}
          <div className='flex-1 flex flex-col justify-start items-center xl:items-start z-40  '>
            <motion.h2 className='h3 md:text-4xl xl:text-4xl text-center xl:text-left '
              variants={fadeIn('right', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >

              {/* Passionate <br /> <span className='text-accent'>JavaScript </span> &  <span className='text-accent'> TypeScript</span><br /> Developer */}
              Connecting <br /> <span className='text-accent'>Technology</span> & <span className='text-accent'>Strategy</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('right', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className='max-w-[500] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-center xl:text-left '>
              {/* In my role, as a developer specializing in JavaScript and TypeScript technologies I prioritize crafting user sophisticated web solutions that deliver on client expectations while maintaining levels of performance and reliability. */}
              In my role, as a developer and digital marketer specializing in JavaScript and TypeScript technologies, I focus on creating sophisticated web solutions that not only meet client expectations but also drive business growth through effective digital strategies, ensuring top performance and reliability.
            </motion.p>
            {/* counter */}
            <motion.div
              variants={fadeIn('right', 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-10'>
              <div className='flex flex-1 xl:gap-x-6'>
                {/* Experience */}
                <div className='relative flex-1 after:w-[1px] after:h-full after:bg-[#bec3ca] after:absolute after:top-0 after:right-0 pr-5'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={5} duration={5} />
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] text-slate-50 font-bold'>Years of Study</div>
                </div>
                {/* Clients */}
                <div className='relative flex-1 after:w-[1px] after:h-full after:bg-[#bec3ca] after:absolute after:top-0 after:right-0 px-5'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={15} duration={7} />+
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] text-slate-50 font-bold'>Projects</div>
                </div>
                {/* Projects */}
                <div className='relative flex-1 after:w-[1px] after:h-full after:bg-[#bec3ca] after:absolute after:top-0 after:right-0 px-5'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={11} duration={5} />+
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] text-slate-50 font-bold'>Completed Projects</div>
                </div>
              </div>
            </motion.div>



          </div>


          {/* info */}
          <motion.div
            variants={fadeIn('left', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='flex flex-col w-full xl:max-w-[48%] min-h-[480px]'>

            <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
              {
                aboutData.map((item, itemIndex) => {
                  return (
                    <div
                      key={itemIndex}
                      className={`cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[3px]
                       after:absolute after:-bottom-1 after:left-0 z-10 font-medium t ${index === itemIndex ? 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300' : 'after:bg-slate-50 text-slate-50'}
                     `}
                      onClick={() => setIndex(itemIndex)}
                    >
                      {item.title}
                    </div>
                  )
                })
              }
            </div>

            <div className=' py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-start xl:items-start flex-wrap mx-auto xl:mx-0'>
              {aboutData[index].info.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-start flex-wrap font-bold text-slate-50 my-1 '
                  >
                    <div className='flex justify-between '>
                      <div >
                        <div className="font-normal mb-2 md:mb-0 md:mr-8 ">{item.stage && `( ${item.stage} )`} {item.title}</div>
                        <div className="mb-2 md:mb-0 md:mr-8  text-[0.8rem] text-sm text-gray-400 font-normal">{item.school}</div>

                      </div>
                    </div>
                    <div className='flex gap-x-4 flex-wrap gap-y-2'>
                      {item.icons?.map((icon, itemIndex) => {
                        return (
                          <div className='text-2xl text-slate-200 ' key={itemIndex} >
                            {icon}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>



          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
