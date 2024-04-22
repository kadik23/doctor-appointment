import { useEffect, useState } from "react";
import axios from "axios";

export default function useSpecializations() {
    const [specializations, setSpecializations] = useState([]);
    const [isLoading, setIsLoading] = useState(false); 
    const [error, setError] = useState(null); 

    useEffect(() => {   
        fetchSpecializations();
    }, []);

    const fetchSpecializations = async () => {
        try {
            setIsLoading(true);
            setError(null); 
            const {data} = await axios.get("/specializations/getAllSpecializations");
            if (data) {
                setSpecializations(data);
            }
        } catch (error) {
            console.error("Error fetching specializations:", error);
            setError("An error occurred while fetching specializations");
        } finally {
            setIsLoading(false);
        }
    };
    
  return { specializations, isLoading, error };
}
