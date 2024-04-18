import {createContext, useEffect, useState} from "react";
import axios from "axios";

export const UserContext = createContext();

export function UserContextProvider({children}) {
    const [user,setUser] = useState(null);
    const [ready,setReady] = useState(false);
    useEffect(() => {
        getData()
    }, [])
    
    async function getData() {
        try{
            console.log(user)
            const {data} = await axios.get('/getAuthenticatedUser')
            if (data ) {
                setReady(true);
                setUser(data);
                console.log(user)
            }
        }catch(err){
                if (err.response && err.response.status === 401) {
                    console.log("Unauthorized access. Please log in.");
                } 
                else {
                    console.error("An error occurred while fetching data:", err);
                }      
        }
    }

    return (
        <UserContext.Provider value={{user,setUser,ready}}>
        {children}
        </UserContext.Provider>
    );
}