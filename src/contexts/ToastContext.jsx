import { createContext } from "react";

const initialValue = {
    messages: [],
    alertError: (message, duration) => { console.log(message, duration); },
    alertSuccess: (message, duration) => { console.log(message, duration); },
    alertInfo: (message, duration) => { console.log(message, duration); },
};

export default createContext(initialValue);