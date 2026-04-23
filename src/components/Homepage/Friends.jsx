import React from 'react';
import useFriendsData from '../../hooks/useFriendsData';
import Loader from '../ui/Loader/Loader';
import FriendSmallCard from '../FriendSmallCard/FriendSmallCard';

const Friends = () => {
    const { friends, loading } = useFriendsData();
    // console.log(friends);
    return (
        <div className='pt-10 pb-20 border-t border-t-[#E9E9E9]'>
            <h2 className='font-semibold text-2xl text-[#1F2937] mb-4'>Your Friends</h2>
            {
                loading ? (<Loader></Loader>) : (
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                        {
                            friends.map(friend => {
                                return <FriendSmallCard key={friend.id} friend={friend}></FriendSmallCard>
                            })
                        }
                    </div>
                )
            }
        </div>

    );
};

export default Friends;