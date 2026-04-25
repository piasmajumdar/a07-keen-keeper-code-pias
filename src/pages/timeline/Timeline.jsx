import React, { useContext, useEffect, useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { Link, NavLink, Outlet } from 'react-router';
import { TimelineContext } from '../../context/TimelineContext';
import TimelineCard from '../../components/Timeline/TimelineCard';
import NoData from '../../components/ui/Shared/NoData';

const Timeline = () => {
    const { friendsTimeline } = useContext(TimelineContext);
    const [filteredFriends, setFilteredFriends] = useState(friendsTimeline);


    const [selectedFilter, setSelectedFilter] = useState('');
    const [selectedSort, setSelectedSort] = useState('');
    const [search, setSearch] = useState('');

    const handleFilterReset = () => {
        setSelectedFilter('');
        setFilteredFriends(friendsTimeline);
    }

    const handleCall = () => {
        setSelectedFilter('Call')
        const filteredByCallFriends = friendsTimeline.filter(friend => friend.act == 'Call');
        setFilteredFriends(filteredByCallFriends);
    }

    const handleText = () => {
        setSelectedFilter('Text');
        const filteredByTextFriends = friendsTimeline.filter(friend => friend.act == 'Text');
        setFilteredFriends(filteredByTextFriends);
    }

    const handleVideo = () => {
        setSelectedFilter('Video');
        const filteredByVideoFriends = friendsTimeline.filter(friend => friend.act == "Video");
        setFilteredFriends(filteredByVideoFriends);

    }

    const handleNewest = () => {
        setSelectedSort('Newest')
        const newest = filteredFriends.sort((a, b) => new Date(b.dateOfAct) - new Date(a.dateOfAct));
        setFilteredFriends(newest);
    }

    const handleOldest = () => {
        setSelectedSort('Oldest');
        const oldest = filteredFriends.sort((a, b) => new Date(a.dateOfAct) - new Date(b.dateOfAct));
        setFilteredFriends(oldest);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const inputSearch = e.target.search.value;
        setSearch(inputSearch)
        // console.log(inputSearch)

        if(inputSearch){
            const searchedFriends = filteredFriends.filter(friend=> friend.name.toLowerCase().trim().includes(inputSearch.toLowerCase().trim()) || friend.act.toLowerCase().trim().includes(inputSearch.toLowerCase().trim()));
            // console.log(searchedFriends)
            setFilteredFriends(searchedFriends)
        }


    }




    // console.log(filteredFriends);

    return (
        <div className='w-11/12 max-w-[1110px] mx-auto py-5 sm:py-20'>
            <div className='space-y-6'>
                <div className='flex flex-wrap justify-between items-center gap-2'>
                    <h2 className='font-bold text-3xl sm:text-4xl md:text-5xl text-[#1F2937]'>Timeline</h2>
                    <form onSubmit={handleSubmit}>
                        <label className="input pr-0">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input type="search" name='search' required placeholder="Search" />
                            <button className='btn ' type="submit">Search</button>
                        </label>
                    </form>
                </div>
                <div className='flex flex-wrap justify-start items-center'>
                    {/* DropDown FILTER */}
                    <div className="dropdown dropdown-start">
                        <div tabIndex={0} role="button" className="btn h-auto m-1 text-base sm:text-lg font-normal text-[#64748B]"> {selectedFilter ? selectedFilter : 'Filter timelines'} <RiArrowDownSLine className='ml-10 lg:ml-15' /></div>
                        {/* <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><Link onClick={() => setSelectedFilter('')} to={'/timeline/'} className='text-gray-400'>Reset</Link></li>
                            <li><NavLink onClick={() => setSelectedFilter('Call')} to={'/timeline/filter-call'}>Call</NavLink></li>
                            <li><NavLink onClick={() => setSelectedFilter('Text')} to={'/timeline/filter-text'}>Text</NavLink></li>
                            <li><NavLink onClick={() => setSelectedFilter('Video')} to={'/timeline/filter-video'}>Video</NavLink></li>
                        </ul> */}
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><button onClick={handleFilterReset} className='text-gray-400'>Reset</button></li>
                            <li><button onClick={handleCall} to={'/timeline/filter-call'}>Call</button></li>
                            <li><button onClick={handleText} to={'/timeline/filter-text'}>Text</button></li>
                            <li><button onClick={handleVideo} to={'/timeline/filter-video'}>Video</button></li>
                        </ul>
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        {/* DropDown Sort By Date */}
                        <div className="dropdown dropdown-start">
                            <div tabIndex={0} role="button" className="btn h-auto m-1 text-base sm:text-lg font-normal text-[#64748B]"> {selectedSort ? selectedSort : 'Sort By Date'} <RiArrowDownSLine className='ml-1    ' /></div>
                            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><Link to={'/timeline/'} onClick={() => setSelectedSort('')} className='text-gray-400'>Reset</Link></li>
                                <li><button onClick={handleNewest}>Newest</button></li>
                                <li><button onClick={handleOldest}>Oldest</button></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* <Outlet></Outlet> */}
                <div className='space-y-6'>

                    {
                        filteredFriends.length == '0'
                            ? <NoData></NoData>
                            : filteredFriends.map((friend, ind) => <TimelineCard key={ind} friend={friend}></TimelineCard>)
                    }


                </div>
            </div>
        </div>
    );
};

export default Timeline;