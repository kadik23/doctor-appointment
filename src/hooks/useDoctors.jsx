import { useEffect, useState } from "react";
import axios from "axios";

export default function useRooms() {
    const [doctors, setDoctors] = useState([]);
    const [isLoading, setIsLoading] = useState(false); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        const getRooms = async () => {
            try{
    
            const {data} = await axios.get("/doctors/getAllDoctors")
                if (data) {
                    setDoctors(data);
                    if(doctors){
                        for(let i=0; i<doctors.length; i++) {
                        console.log(doctors[i])
                        }}
                }
                
            }catch(err){
                if (err.response && err.response.status === 401) {
                console.log("Unauthorized access. Please log in.");
                } 
                else {
                console.error("An error occurred while fetching data:", err);
            }}
        }    
        getRooms();
    }, []);

        
    return { doctors };
}