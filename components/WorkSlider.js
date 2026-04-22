import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { BsArrowRight, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper';

// Importation du Modal personnalisé
import ModalPage from '../pages/modal';  // Assure-toi de l'importer depuis le bon fichier
import { SiBootstrap, SiDjango, SiDotnet, SiExpo, SiFacebook, SiGithubactions, SiGooglecolab, SiJavascript, SiJquery, SiJupyter, SiKeras, SiMicrosoftexcel, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiPhp, SiPlotly, SiPostgresql, SiPython, SiQt, SiReact, SiRedux, SiStripe, SiSymfony, SiTailwindcss, SiTensorflow, SiWordpress } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";



// Data (Exemple fourni)
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'Ariary Insights',
          path: '/ariary-insights.png',
          description: "A macroeconomic data analysis project focused on Madagascar: forecasting economic trends with ARIMA and visualizing key indicators through a web interface.",
          technologies: [
            <SiPython key={100} className='w-[25px] h-[25px]' />,
            <SiPlotly key={101} className='w-[25px] h-[25px]' />,
            <SiNextdotjs key={102} className='w-[25px] h-[25px]' />,
            <SiGooglecolab key={103} className='w-[25px] h-[25px]' />,
            <SiMicrosoftexcel key={104} className='w-[25px] h-[25px]' />,
          ],
          link: 'https://ariary-insights.vercel.app/'
        },
        {
          title: 'Autrans Still Magic',
          path: '/asm_project.png',
          imageClassName: 'object-left-top',
          description: "Basketball camp trainee registration platform. I handled WordPress registration site maintenance and updates, integrated Stripe payments, retrieved registration data through webhooks, synchronized it with a dedicated admin panel, and implemented tracking for registrations, payments, dashboards, and student follow-up during camps.",
          technologies: [
            <SiNextdotjs key={0} className='w-[25px] h-[25px]' />,
            <SiNodedotjs key={1} className='w-[25px] h-[25px]' />,
            <SiWordpress key={2} className='w-[25px] h-[25px]' />,
            <SiStripe key={3} className='w-[25px] h-[25px]' />,
            <SiTailwindcss key={4} className='w-[25px] h-[25px]' />
          ],
          link: '#'
        },
        {
          title: 'SLIQ 360',
          path: '/sliq_project.png',
          imageClassName: 'object-left-top',
          description: "SaaS accounting management platform for accounting firms in the UK. I collaborated with the development team across the full development lifecycle.",
          technologies: [
            <SiDjango key={5} className='w-[25px] h-[25px]' />,
            <SiPostgresql key={6} className='w-[25px] h-[25px]' />
          ],
          link: '#'
        },
        {
          title: 'Tempo',
          path: '/imageNotFound.jpg',
          description: "Internal company CRM. I contributed to migrating the monolithic Django application to a decoupled architecture based on Django REST Framework and React.",
          technologies: [
            <SiDjango key={9} className='w-[25px] h-[25px]' />,
            <SiReact key={10} className='w-[25px] h-[25px]' />
          ],
          link: '#'
        },
      ],
    },
    {
      images: [
        {
          title: 'Leader Skills Unlimited',
          path: '/imageNotFound.jpg',
          description: "Leadership training platform. I fully redesigned and rebuilt the frontend part of the application.",
          technologies: [
            <SiDjango key={7} className='w-[25px] h-[25px]' />,
            <SiPostgresql key={8} className='w-[25px] h-[25px]' />
          ],
          link: '#'
        },
        {
          title: 'SueMag',
          path: '/SueMAg.jpg',
          description: "I manage the Facebook page of SueMag, an online store specializing in clothing, bags, shoes , ETC... My role includes content creation, community engagement, and optimizing ad campaigns to increase brand visibility and drive sales.",
          technologies: [
            <SiFacebook key={11} className='w-[25px] h-[25px]' />, 
          ],
          link: 'https://web.facebook.com/Suesoary/'
        },
        {
          title: 'TutoForYou',
          path: '/TutoForYou (3).jpg',
          description: "TutoForYou is an online learning platform offering tutorials and courses in various fields, including web development and programming. Users can explore a structured catalog of courses, organized into predefined playlists, making it easier to progressively learn new technologies. The platform features an intuitive and responsive interface, allowing users to easily access explanatory videos and enriching articles, while tracking their progress through the courses.",
          technologies: [
            <SiJavascript key={12} className='w-[25px] h-[25px]' />,
            <SiNextdotjs key={13} className='w-[25px] h-[25px]' />,
            <SiTailwindcss key={14} className='w-[25px] h-[25px]' />,
            <SiDotnet key={15} className='w-[25px] h-[25px]' />,
            <SiMongodb key={16} className='w-[25px] h-[25px]' />
          ],
          link: 'https://github.com/Iorenantsoa/TutoForYouNextJs'
        },
        {
          title: 'Sweetiiies',
          path: '/Sweetiiies.png',
          description: "Facebook page dedicated to my poetry: sharing original creations and managing interaction with a community passionate about literature.",
          technologies: [
            <SiFacebook key={17} className='w-[25px] h-[25px]' />, 
          ],
          link: 'https://web.facebook.com/profile.php?id=100092687839134'
        },
         
      ],
    },
    {
      images: [
        {
          title: 'G-permiConstruire',
          path: '/G-permiConstruire (4).jpg',
          description: "FoncierPlus is an application dedicated to managing land properties, including titled land, cadastral information, and land certificates. Designed to facilitate tracking for property owners, the application allows users to manage their land documents, submit building permit applications, and monitor the progress of those requests. With a user-friendly interface, FoncierPlus provides simplified access to property information, assists in verifying the legality of property titles, and offers tools for efficient real estate management.",
          technologies: [
            <SiPhp key={24} className='w-[25px] h-[25px]' />,
            <SiSymfony key={25} className='w-[25px] h-[25px]' />,
            <SiJquery key={26} className='w-[25px] h-[25px]' />,
            <SiBootstrap key={27} className='w-[25px] h-[25px]' />,
            <SiMysql key={28} className='w-[25px] h-[25px]' />,
          ],
          link: 'https://github.com/IsmaelFanomezantsoa/gestion_fonciere_et_PC'
        },
        {
          title: 'nyBaiboliko',
          path: '/Ny baiboliko (3).jpg',
          description: "NyBaiboliko is a mobile application designed to provide easy access to the Bible in Malagasy, including both the Old and New Testaments. It offers a user-friendly interface, allowing users to read and explore the Scriptures in their native language. The app includes features such as verse search, personal annotations, and the ability to create favorites. With nyBaiboliko, users can enrich their spiritual journey and stay connected to their faith daily.",
          technologies: [
            <SiJavascript key={29} className='w-[25px] h-[25px]' />,
            <TbBrandReactNative key={30} className='w-[25px] h-[25px]' />,
            <SiRedux key={31} className='w-[25px] h-[25px]' />,
            <SiExpo key={32} className='w-[25px] h-[25px]' />
          ],
          link: 'https://github.com/Iorenantsoa/ny_baiboliko'
        },
        {
          title: 'My Portfolio',
          path: '/portfolio.jpg',
          description: "This portfolio displays the skills and projects I've worked on as a developer and offers insights, into the services I provide as details, about my background and how to reach me.",
          technologies: [
            <SiJavascript key={33} className='w-[25px] h-[25px]' />,
            <SiNextdotjs key={34} className='w-[25px] h-[25px]' />,
            <SiTailwindcss key={35} className='w-[25px] h-[25px]' />
          ],
          link: 'https://github.com/Iorenantsoa/'
        },
        {
          title: 'RenalScanAI',
          path: '/RenalScanAI (1).jpg',
          description: "RenalScanAI is an innovative application that uses artificial intelligence to detect and classify various kidney diseases from medical images. Developed to assist healthcare professionals in diagnosing renal conditions, the application relies on a convolutional neural network (CNN) model trained with TensorFlow Keras to analyze images and provide accurate predictions on four types of kidney diseases.",
          technologies: [
            <SiPython key={36} className='w-[25px] h-[25px]' />,
            <SiTensorflow key={37} className='w-[25px] h-[25px]' />,
            <SiKeras key={38} className='w-[25px] h-[25px]' />,
            <SiQt key={39} className='w-[25px] h-[25px]' />
          ],
          link: 'https://github.com/Iorenantsoa/G_stage'
        },
      ],
    },
    {
      images: [
       {
          title: 'G-stage',
          path: '/Gstage (5).jpg',
          description: "G-Stage is an application for managing internships, thesis defenses, and student supervision in academic institutions. Designed to facilitate coordination between students, supervisors, and administrators, the application allows for tracking the internship process from submission to the final defense. Students can submit their internship applications, view the details of their supervision, and schedule their thesis defenses, while supervisors and administrators can monitor project progress and approve various stages.",
          technologies: [
            <SiPhp key={40} className='w-[25px] h-[25px]' />,
            <SiSymfony key={41} className='w-[25px] h-[25px]' />,
            <SiJquery key={42} className='w-[25px] h-[25px]' />,
            <SiBootstrap key={43} className='w-[25px] h-[25px]' />,
            <SiMysql key={44} className='w-[25px] h-[25px]' />,
          ],
          link: 'https://github.com/Iorenantsoa/G_stage'
        },
        
      ],
    },
  ],
};

const WorkSlider = () => {
  // Gestion de l'état pour le modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', path: '' });
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [navState, setNavState] = useState({ isBeginning: true, isEnd: false });

  // Fonction pour ouvrir le modal avec les données spécifiques
  const openModal = (image) => {
    setModalContent(image);  // Met à jour le contenu du modal
    setIsModalOpen(true);    // Ouvre le modal
  };

  // Fonction pour fermer le modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative">
      <Swiper
        spaceBetween={10}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        onSwiper={(swiper) => {
          setNavState({ isBeginning: swiper.isBeginning, isEnd: swiper.isEnd });
        }}
        onSlideChange={(swiper) => {
          setNavState({ isBeginning: swiper.isBeginning, isEnd: swiper.isEnd });
        }}
        modules={[Pagination, Navigation]}
        className="min-h-[280px]"
      >
        {workSlides.slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer opacity-95">
              {slide.images.map((image, index) => (
                <div
                  key={index}
                  className="relative w-full aspect-[16/10] rounded-lg overflow-hidden group"
                  onClick={() => openModal(image)}  // Ouvre le modal au clic
                >
                  <div className="relative w-full h-full overflow-hidden">
                    {/* image */}
                    <Image
                      src={image.path}
                      fill
                      alt={image.title}
                      sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      className={`object-cover ${image.imageClassName || 'object-center'}`}
                    />
                    {/* overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-l from-[#020202] via-[#474747] to-[#020202] opacity-0 group-hover:opacity-80 transition-all duration-700" />
                    {/* title */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em] text-[#F5F5F5] font-semibold">
                        {/* title part 1 */}
                        <div className="delay-100">CLICK</div>
                        {/* title part 2 */}
                        <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                          ME
                        </div>
                        {/* icon */}
                        <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                          <BsArrowRight />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        ref={prevRef}
        type="button"
        aria-label="Previous slide"
        disabled={navState.isBeginning}
        aria-disabled={navState.isBeginning}
        className={`absolute -left-3 top-1/2 z-50 hidden -translate-y-1/2 rounded-full border border-slate-50/20 bg-[#0D1117]/70 p-2 text-slate-50 shadow-md backdrop-blur transition-all duration-300 md:flex ${
          navState.isBeginning ? 'opacity-0 pointer-events-none' : 'hover:border-accent hover:text-accent'
        }`}
      >
        <BsChevronLeft className="h-6 w-6" />
      </button>
      <button
        ref={nextRef}
        type="button"
        aria-label="Next slide"
        disabled={navState.isEnd}
        aria-disabled={navState.isEnd}
        className={`absolute -right-3 top-1/2 z-50 hidden -translate-y-1/2 rounded-full border border-slate-50/20 bg-[#0D1117]/70 p-2 text-slate-50 shadow-md backdrop-blur transition-all duration-300 md:flex ${
          navState.isEnd ? 'opacity-0 pointer-events-none' : 'hover:border-accent hover:text-accent'
        }`}
      >
        <BsChevronRight className="h-6 w-6" />
      </button>

      {/* Modal */}
      {isModalOpen && (
        <ModalPage
          isOpen={isModalOpen}
          closeModal={closeModal}
          content={modalContent}
        />
      )}
    </div>
  );
};

export default WorkSlider;
