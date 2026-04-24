import React, { useContext } from 'react';
import NoData from '../../../components/ui/Shared/NoData';
import { TimelineContext } from '../../../context/TimelineContext';

const FilterVideo = () => {
    const { friendsTimeline } = useContext(TimelineContext);
    // console.log(friendsTimeline);

    if (friendsTimeline.length == '0') {
        return <NoData></NoData>
    }

    return (
        <div>
            <h2>Filter by Video</h2>
        </div>
    );
};

export default FilterVideo;