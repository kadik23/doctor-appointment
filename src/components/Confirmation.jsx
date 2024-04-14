import { useContext,useEffect } from "react";
import ConfirmationContext from "../contexts/ConfirmationContext";
import ConfirmationImg from '../assets/Images/Confirmation.png';
import { BookContext } from '../contexts/BookContext';
import axios from "axios";

export default function Confirmation() {
    const toastManager = useContext(ConfirmationContext);
    return (
        <div className="w-full fixed top-0 left-0 flex flex-col items-center my-4 z-50">
            {
                toastManager.messages.map((message, index) => {
                    return (
                        <Message key={index} message={message} />
                    )
                })
            }
        </div>
    )
}

function Message({ message }) {
    if (message.type == "success") {
        const {  patientData, setPatientData } = useContext(BookContext)
        var doctor 
        useEffect(() => {
            const getDoctorName = async () =>{
                try{
                    const {data} = await axios.get(`/doctors/getOneDoctor/${patientData.doctor_Id}`)
                    if(data){
                        setPatientData(prevState => ({
                            ...prevState,
                            doctorName: data.fullname
                        }));      
                    }
                }catch(e){
                    console.log(e)
                }
            }
            getDoctorName()
        }, [])
        
        return (
            <div id="toast-success" className="flex flex-col items-center  w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg border-2" role="alert">
                <div>
                    <img src={ConfirmationImg} alt="" />
                </div>
                <div className="w-full flex flex-col items-center gap-3">
                    {patientData && <p> {patientData.fullname},we've got you confirmed for your appointment</p>}
                    {patientData &&  <h1>{patientData.time} | Dr.{patientData.doctorName}</h1>}
                    {patientData && <span>Saturday {patientData.date}</span> }
                    <span>Clinic Address</span>
                </div>
                <a href='/home' className='text-regal-green border-1 border-regal-green py-1 px-5 rounded-2xl my5 hover:text-white hover:bg-regal-green  transition-all duration-200 mx-3'>OK</a>
            </div>
        )
    }

    if (message.type == "error") {
        return (
            <div id="toast-danger" className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg border-2 " role="alert">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
                    </svg>
                    <span className="sr-only">Error icon</span>
                </div>
                <div className="ml-3 text-sm font-normal">{message.message}</div>
            </div>
        )
    }

    if (message.type == "info") {
        return (
            <div id="toast-warning" className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg border-2 " role="alert">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
                    </svg>
                    <span className="sr-only">Warning icon</span>
                </div>
                <div className="ml-3 text-sm font-normal">{message.message}</div>
            </div>
        )
    }


}