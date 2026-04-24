import React from 'react';
import { Link } from 'react-router';


const FriendSmallCard = ({ friend }) => {
    // console.log(friend)

    return (
        <Link to={`/friend-details/${friend.id}`}>
            <div className="card bg-base-100 shadow-sm">
                <figure className='pt-6'>
                    <img
                        className='w-20 h-20 rounded-full'
                        src={friend.picture}
                        alt="Shoes" />
                </figure>
                <div className="card-body text-center">
                    <h2 className="font-semibold text-xl text-[#1F2937]">{friend.name}</h2>
                    <h3 className='text-[12px] text-[#64748B]'>{friend.days_since_contact}d ago</h3>
                    <div className='flex justify-center gap-2 text-[12px] font-medium text-[#244D3F]'>
                        {
                            friend.tags.map((tag, ind) => <div key={ind} className='px-2 py-2 rounded-full bg-green-200'>{tag.toUpperCase()}</div>)
                        }
                    </div>
                    <div className='flex justify-center gap-2 text-[12px] font-medium text-white'>
                        {
                            friend.status === 'overdue' ?
                                <div className='px-2 py-2 rounded-full bg-[#EF4444]'>Overdue</div>
                                : friend.status === 'almost due' ?
                                    <div className='px-2 py-2 rounded-full bg-[#EFAD44]'>Almost Due</div>
                                    : <div className='px-2 py-2 rounded-full bg-[#244D3F]'>On-Track</div>
                        }
                    </div>

                </div>
            </div>

        </Link>
    );
};

export default FriendSmallCard;