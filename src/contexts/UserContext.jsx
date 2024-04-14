import {createContext, useEffect, useState} from "react";
import axios from "axios";

export const UserContext = createContext();

export function UserContextProvider({children}) {
    const [user,setUser] = useState(null);
    const [userID,setUserID] = useState(null);
    const [ready,setReady] = useState(false);


    return (
        <UserContext.Provider value={{user,setUser,userID,setUserID,ready}}>
        {children}
        </UserContext.Provider>
    );
}