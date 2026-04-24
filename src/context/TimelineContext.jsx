import { createContext, useState } from "react";
import { toast } from "react-toastify";


export const TimelineContext = createContext('');

export const TimelineProvider = ({ children }) => {
    const [friendsTimeline, setFriendsTimeline] = useState([]);
    const dateOfAct = new Date();

    const handleCheckIn = (act, friend) => {
        // const act = event.target.innerText;
        // console.log(event.target.innerText); --> Bug because of clicked on div/span.
        const newFriendTimeline = {
            ...friend,
            act,
            dateOfAct
        }
        setFriendsTimeline([...friendsTimeline, newFriendTimeline])
        toast.success(`${act} with ${friend.name}`)
        // console.log(friendsTimeline)
    }

    const data = {
        friendsTimeline, setFriendsTimeline,
        handleCheckIn
    }

    return <TimelineContext.Provider value={data}>{children}</TimelineContext.Provider>
}