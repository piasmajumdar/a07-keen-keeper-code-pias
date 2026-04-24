import React, { useContext } from 'react';
import { TimelineContext } from '../../../context/TimelineContext';
import NoData from '../../../components/ui/Shared/NoData';
import TimelineCard from '../../../components/Timeline/TimelineCard';

const FilterCall = () => {
    const { friendsTimeline } = useContext(TimelineContext);

    const filteredByCallFriends = friendsTimeline.filter(friend => friend.act == 'Call');
    // console.log(filteredByCallFriends);

    // console.log(friendsTimeline);

    if (friendsTimeline.length == '0') {
        return <NoData></NoData>
    }

    return (

        <div className='space-y-6'>

            {
                filteredByCallFriends.map((friend, ind) => <TimelineCard key={ind} friend={friend}></TimelineCard>)
            }


        </div>

    );
};

export default FilterCall;