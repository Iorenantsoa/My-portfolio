import Link from "next/link";

import { RiLinkedinBoxFill, RiGithubFill, RiFacebookFill, RiInstagramFill, RiWhatsappFill } from 'react-icons/ri';

import {
    HiEnvelope,
} from 'react-icons/hi2';

const Socials = () => {
    return <div className=" flex items-center gap-x-5 text-lg"> 
        <Link
            href="https://github.com/iorenantsoa" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-all duration-300 text-[#F1F1F1]"
        >
            <RiGithubFill />
        </Link>
        <Link
            href="mailto:antsamalalacedriciorenantsoa@gmail.com" 
            className="hover:text-accent transition-all duration-300 text-[#F1F1F1]"
        >
            <HiEnvelope />
        </Link>

        <Link
            href="https://www.linkedin.com/in/iorenantsoa-cédric-antsamalala-226389337" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-all duration-300 text-[#F1F1F1]"
        >
            <RiLinkedinBoxFill />
        </Link>

        <Link
            href="https://web.facebook.com/iorenantsoacedric.antsamalala.5/" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-all duration-300 text-[#F1F1F1]"
        >
            <RiFacebookFill />
        </Link>

        <Link
            href="https://www.instagram.com/iorenantsoa_cedric/" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-all duration-300 text-[#F1F1F1]"
        >
            <RiInstagramFill />
        </Link>

        <Link
            href="https://wa.me/261342034768" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-all duration-300 text-[#F1F1F1]"
        >
            <RiWhatsappFill />
        </Link>
    </div>;
};

export default Socials;
