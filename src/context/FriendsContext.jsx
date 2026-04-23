import { createContext } from "react";


export const FriendsContext = createContext();

export const FriendsProvider = ({ children }) => {

    const data = {
        
    }

    return <FriendsContext.Provider value={data}>{children}</FriendsContext.Provider>
}