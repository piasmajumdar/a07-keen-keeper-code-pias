import React, { useContext } from 'react';
import { TimelineContext } from '../../../context/TimelineContext';
import TimelineCard from '../../../components/Timeline/TimelineCard';
import NoData from '../../../components/ui/Shared/NoData';

const AllActivity = () => {
    const { friendsTimeline } = useContext(TimelineContext);
    console.log(friendsTimeline);

    if(friendsTimeline.length == '0'){
        return <NoData></NoData>
    }

    return (
        <div className='space-y-6'>

            {
                friendsTimeline.map((friend, ind) => <TimelineCard key={ind} friend={friend}></TimelineCard>)
            }


        </div>
    );
};

export default AllActivity;