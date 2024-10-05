import React from 'react';
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { CiLinkedin } from "react-icons/ci";
import { SiGithub } from "react-icons/si";

function LeftSider() {
    return (
        <div className='fixed left-0 bottom-0 px-10 sm:static '>
            <div className='flex flex-col items-center'>
                <div className='flex flex-col gap-5 sm:flex-row cursor-pointer'>
                    {/* Facebook Icon */}
                    <RiFacebookCircleLine className='text-gray-600 ' />
                    
                    {/* Mail Icon */}
                    <GoMail className='text-gray-600 ' />
                    
                    {/* Instagram Icon */}
                    <FaInstagram className='text-gray-600 ' />
                    
                    {/* LinkedIn Icon with link */}
                    <a href="https://www.linkedin.com/in/shaheer-khan-380a912bb/" target="_blank" rel="noopener noreferrer">
                        <CiLinkedin className='text-gray-600 ' />
                    </a>

                    {/* GitHub Icon with link */}
                    <a href="https://github.com/Shaheer-Khan1" target="_blank" rel="noopener noreferrer">
                        <SiGithub className='text-gray-600 ' />
                    </a>
                </div>
                <div className='w-[1px] h-32 bg-[#0e66587e] sm:hidden'></div>
            </div>
        </div>
    );
}

export default LeftSider;
