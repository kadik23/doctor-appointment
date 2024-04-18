import {useState} from 'react'
import axios from "axios";

function useDoctor() {
    const [oneDoctor, setOneDoctor] = useState([]);
    
    const getOneDoctor = async (id) => {
        try{
             
            const {data} = await axios.get(`doctors/getOneDoctor/${id}`)
            if (data) {
                setOneDoctor(data);
            }
        }catch(err){
            if (err.response && err.response.status === 401) {
            console.log("Unauthorized access. Please log in.");
            } 
            else {
            console.error("An error occurred while fetching data:", err);
        }}
    }    

    return {oneDoctor,getOneDoctor}
}

export default useDoctor