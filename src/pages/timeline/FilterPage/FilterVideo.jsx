import React, { useContext } from 'react';
import NoData from '../../../components/ui/Shared/NoData';
import { TimelineContext } from '../../../context/TimelineContext';
import TimelineCard from '../../../components/Timeline/TimelineCard';

const FilterVideo = () => {
    const { friendsTimeline } = useContext(TimelineContext);
    // console.log(friendsTimeline);

    const filteredByVideoFriends = friendsTimeline.filter(friend => friend.act == "Video");

    if (friendsTimeline.length == '0') {
        return <NoData></NoData>
    }

    return (
        <div className='space-y-6'>

            {
                filteredByVideoFriends.map((friend, ind) => <TimelineCard key={ind} friend={friend}></TimelineCard>)
            }

        </div>
    );
};

export default FilterVideo;