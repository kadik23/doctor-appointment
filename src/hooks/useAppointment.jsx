import {useState,useContext} from 'react'
import axios from "axios";
import ToastContext from '../contexts/ToastContext';

function useAppointment() {
    const [oneAppointment, setOneAppointment] = useState([]);
    const toastManager = useContext(ToastContext);
    const alertSuccessHandler = () => { toastManager.alertSuccess("Login successful"); }
    const alertErroreHandler = () => { toastManager.alertError("Login failed"); }
    const [redirect, setRedirect] = useState(false);

    const getOneAppointment = async (id) => {
        try{
            const {data} = await axios.get(`appointments/getOneAppointment/${id}`)
            if (data) {
                setOneAppointment(data);
            }
        }catch(err){
            if (err.response && err.response.status === 401) {
            console.log("Unauthorized access. Please log in.");
            } 
            else {
            alertErroreHandler()
            console.error("An error occurred while fetching data:", err);
        }}
    }   
    
    const deleteAppointment = async (id) => {
        try{
            const {data} = await axios.delete(`appointments/deleteAppointment/${id}`)
            if (data) {
                alertSuccessHandler()
                setTimeout(() => {
                    setRedirect(true);
                }, 3000);            }
        }catch(err){
            alertErroreHandler()
            if (err.response && err.response.status === 401) {
            console.log("Unauthorized access. Please log in.");
            } 
            else {
            console.error("An error occurred while deleting data:", err);
        }}
    }

    if (redirect) {
        return window.location.href = '/my_appointments';
    }

    return {oneAppointment,getOneAppointment,deleteAppointment}
}

export default useAppointment