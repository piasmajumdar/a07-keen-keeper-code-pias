import React, { useContext } from 'react';
import { TimelineContext } from '../../../context/TimelineContext';
import NoData from './../../../components/ui/Shared/NoData';
import TimelineCard from '../../../components/Timeline/TimelineCard';

const FilterText = () => {

    const { friendsTimeline } = useContext(TimelineContext);
    // console.log(friendsTimeline);

    const filteredByTextFriends = friendsTimeline.filter(friend => friend.act == 'Text');

    if (filteredByTextFriends.length == '0') {
        return <NoData></NoData>
    }

    return (

        <div className='space-y-6'>

            {
                filteredByTextFriends.map((friend, ind) => <TimelineCard key={ind} friend={friend}></TimelineCard>)
            }

        </div>
    );
};

export default FilterText;