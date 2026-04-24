import React, { useContext } from 'react';
import { TimelineContext } from '../../../context/TimelineContext';
import NoData from './../../../components/ui/Shared/NoData';

const FilterText = () => {

    const { friendsTimeline } = useContext(TimelineContext);
    // console.log(friendsTimeline);

    if (friendsTimeline.length == '0') {
        return <NoData></NoData>
    }

    return (
        <div>
            <h2>Filter By Text</h2>
        </div>
    );
};

export default FilterText;