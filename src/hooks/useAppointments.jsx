import { useEffect, useState } from "react";
import axios from "axios";

export default function useAppointments() {
    const [appointments, setAppointments] = useState([]);
    const [isLoading, setIsLoading] = useState(false); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        getAllAppointments();
    }, []);
    
    const getAllAppointments = async () => {
        try{
            setIsLoading(true);
            setError(null);
            const {data} = await axios.get("/appointments/getAllAppointments")
            if (data) {
                setAppointments(data);
            }
        }catch(err){
            if (err.response && err.response.status === 401) {
            console.log("Unauthorized access. Please log in.");
            } 
            else {
            console.error("An error occurred while fetching data:", err);
        }}
    }   
        
    return { appointments, isLoading, error, };
}