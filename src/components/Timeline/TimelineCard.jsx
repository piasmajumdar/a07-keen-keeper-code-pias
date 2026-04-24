import React from 'react';
import Call from '../../assets/call.png'
import Text from '../../assets/text.png'
import Video from '../../assets/video.png'

const TimelineCard = ({ friend }) => {
    console.log(friend)
    return (
        <div>
            <div className="card bg-base-100 card-xs shadow-sm p-4">
                <div className="card-body flex-row gap-4 items-center">
                    <div>
                        <img src={friend.activity === 'Call' ? Call : friend.activity === 'Text' ? Text : Video} alt="" />
                    </div>
                    <div className='text-[#64748B]'>
                        <h2><span className='text-xl font-medium text-[#244D3F]'>{friend.activity}</span> <span className='text-lg'>with {friend.name}</span></h2>
                        <p className='font-medium text-base'>{new Date(friend.dateOfActivity).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                        })}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimelineCard;