import React from 'react';
import { FaPlus } from "react-icons/fa6";
import useFriendsData from '../../hooks/useFriendsData';

const Banner = () => {
    const {friends} = useFriendsData(); 

    const onTrackFriends = friends.filter(friend=> friend.status == "on-track");
    const overdueFriends = friends.filter(friend=> friend.status == "overdue");
    const AlmostDueFriends = friends.filter(friend=> friend.status == "almost due");
    

    return (
        <div className='pt-20'>
            <div className='text-center space-y-4'>
                <h2 className='text-[#1F2937] text-3xl sm:text-4xl md:text-5xl font-bold'>Friends to keep close in your life</h2>
                <h3 className='text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                    <br /> relationships that matter most.
                </h3>
                <button className='btn flex justify-center items-center gap-1 text-white font-semibold bg-[#244D3F] text-base mx-auto'><FaPlus /> Add a Friend</button>
            </div>

            <div className='flex flex-wrap gap-6 my-10'>
                <div className="card bg-base-100 card-xs shadow-sm flex-1">
                    <div className="card-body text-center py-2 px-1 sm:py-8 sm:px-4">
                        <h2 className="font-semibold text-xl sm:text-3xl text-[#244D3F]">{friends.length}</h2>
                        <h2 className='text-[#64748B] text-base sm:text-lg'>Total Friends</h2>
                    </div>
                </div>
                <div className="card bg-base-100 card-xs shadow-sm flex-1">
                    <div className="card-body text-center py-2 px-1 sm:py-8 sm:px-4">
                        <h2 className="font-semibold text-xl sm:text-3xl text-[#244D3F]">{onTrackFriends.length}</h2>
                        <h2 className='text-[#64748B] text-base sm:text-lg'>On Track</h2>
                    </div>
                </div>
                <div className="card bg-base-100 card-xs shadow-sm flex-1">
                    <div className="card-body text-center py-2 px-1 sm:py-8 sm:px-4">
                        <h2 className="font-semibold text-xl sm:text-3xl text-[#244D3F]">{AlmostDueFriends.length + overdueFriends.length}</h2>
                        <h2 className='text-[#64748B] text-base sm:text-lg'>Need Attention</h2>
                    </div>
                </div>
                <div className="card bg-base-100 card-xs shadow-sm flex-1">
                    <div className="card-body text-center py-2 px-1 sm:py-8 sm:px-4">
                        <h2 className="font-semibold text-xl sm:text-3xl text-[#244D3F]">12</h2>
                        <h2 className='text-[#64748B] text-base sm:text-lg'>Interactions This Month</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;