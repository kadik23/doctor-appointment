import {useState} from 'react'
import axios from "axios";

function usePatient() {
    const [patient, setPatient] = useState([]);
    
    const getOnePatient = async (id) => {
        try{
            console.log("id: "+ id)
            const {data} = await axios.get(`patients/getOnePatient/${id}`)
            if (data) {
                setPatient(data);
            }
        }catch(err){
            if (err.response && err.response.status === 401) {
            console.log("Unauthorized access. Please log in.");
            } 
            else {
            console.error("An error occurred while fetching data:", err);
        }}
    }    

    return {patient,getOnePatient}
}

export default usePatient