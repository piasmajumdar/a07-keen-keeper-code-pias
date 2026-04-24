import { createContext, useState } from "react";
import { toast } from "react-toastify";


export const TimelineContext = createContext('');

export const TimelineProvider = ({ children }) => {
    const [friendsTimeline, setFriendsTimeline] = useState([]);
    const dateOfActivity = new Date();

    const handleCheckIn = (event, friend) => {
        const activity = event.target.innerText;
        // console.log(event.target.innerText);
        const newFriendTimeline = {
            ...friend,
            activity,
            dateOfActivity
        }
        setFriendsTimeline([...friendsTimeline, newFriendTimeline])
        toast.success(`${activity} with ${friend.name}`)
        console.log(friendsTimeline)
    }

    const data = {
        friendsTimeline, setFriendsTimeline,
        handleCheckIn
    }

    return <TimelineContext.Provider value={data}>{children}</TimelineContext.Provider>
}