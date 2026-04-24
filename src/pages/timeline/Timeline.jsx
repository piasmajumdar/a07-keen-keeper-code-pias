import React, { useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { Link, NavLink, Outlet } from 'react-router';

const Timeline = () => {
    const [selectedFilter, setSelectedFilter] = useState('');

    return (
        <div className='w-11/12 max-w-[1110px] mx-auto py-5 sm:py-20'>
            <div className='space-y-6'>
                <h2 className='font-bold text-3xl sm:text-4xl md:text-5xl text-[#1F2937]'>Timeline</h2>
                {/* DropDown FILTER */}
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn h-auto m-1 text-base sm:text-lg font-normal text-[#64748B]"> {selectedFilter ? selectedFilter : 'Filter timelines'} <RiArrowDownSLine className='ml-10 lg:ml-15'/></div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><Link onClick={()=> setSelectedFilter('')} to={'/timeline/'} className='text-gray-400'>Reset</Link></li>
                        <li><NavLink onClick={()=> setSelectedFilter('Call')} to={'/timeline/filter-call'}>Call</NavLink></li>
                        <li><NavLink onClick={()=> setSelectedFilter('Text')} to={'/timeline/filter-text'}>Text</NavLink></li>
                        <li><NavLink onClick={()=> setSelectedFilter('Video')} to={'/timeline/filter-video'}>Video</NavLink></li>
                    </ul>
                </div>

                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Timeline;