import  { createContext, useState } from "react";

export const BookContext = createContext();

export const BookContextProvider = ({ children  }) => {
  const [step, setStep] = useState(1);
  const [patientData,setPatientData] = useState({
    fullname:null,
    gender:null,
    phone:null,
    age:null,
    doctor_id:null,
    date:null,
    time:null
  });
  return (
    <BookContext.Provider value={{step, setStep,patientData,setPatientData }}>
      {children}
    </BookContext.Provider>
  );
};
