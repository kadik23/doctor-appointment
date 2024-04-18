import { useEffect, useState } from "react";
import axios from "axios";

export default function useRooms() {
    const [specializations, setSpecializations] = useState([]);
    const [isLoading, setIsLoading] = useState(false); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchSpecializations = async () => {
        setIsLoading(true);
        setError(null); 

        try {
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

        fetchSpecializations();
    }, []);

  return { specializations, isLoading, error };
}
