import { useEffect, useState } from "react";
import axios from "axios";

export default function useDoctor() {
    const [doctors, setDoctors] = useState([]);
    const [isLoading, setIsLoading] = useState(false); 
    const [error, setError] = useState(null); 

    useEffect(() => {   
        fetchDoctors();
    }, []);

    const fetchDoctors = async () => {
        try {
            setIsLoading(true);
            setError(null); 
            const {data} = await axios.get("/doctors/getAlldoctors");
            if (data) {
                setDoctors(data);
            }
        } catch (error) {
            console.error("Error fetching specializations:", error);
            setError("An error occurred while fetching specializations");
        } finally {
            setIsLoading(false);
        }
    };
    
  return { doctors, isLoading, error };
}
