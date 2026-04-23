import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <div className='bg-[#244D3F] pt-20 pb-8 text-center'>
            <div className='w-11/12 max-w-[1110px] mx-auto space-y-10'>
                <div className='space-y-4'>
                    <h2 className='text-5xl text-white font-bold'>KeenKeeper</h2>
                    <p className='text-white/80'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <h3 className='text-white font-medium text-xl'>Social Links</h3>
                    <div className='flex justify-center gap-2'>
                        <button className='w-10 h-10 rounded-full bg-white text-[#101727] flex justify-center items-center cursor-pointer'><a href='/'><RiInstagramFill className='text-2xl' /> </a> </button>
                        <button className='w-10 h-10 rounded-full bg-white text-[#101727] flex justify-center items-center cursor-pointer'><a href='/'><FaFacebookSquare className='text-2xl' /></a> </button>
                        <button className='w-10 h-10 rounded-full bg-white text-[#101727] flex justify-center items-center cursor-pointer'><a href='/'><FaXTwitter className='text-2xl' /></a> </button>
                    </div>
                </div>
                <div className='text-white/50 flex justify-between pt-8 border-t border-t-[#1A8862]/50'>
                    <div>© 2026 KeenKeeper. All rights reserved.</div>
                    <div className='flex gap-4'>
                        <a className='cursor-pointer'>Privacy Policy</a>
                        <a className='cursor-pointer'>Terms of Service</a>
                        <a className='cursor-pointer'>Cookies</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;