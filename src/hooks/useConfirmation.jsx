import { useState } from "react";


export default function useConfirmation(){
    let MESSAGE_ID = 0;
    const [messages, setMessages] = useState([]);

    const alert = (message, type, duration) => {
        let id = MESSAGE_ID;
        setMessages(state => [...state, { id: id, message, type }]);
        MESSAGE_ID++;
        console.log(messages);
    }

    const alertError = (message, duration) => {
        alert(message, "error", duration);
    }

    const alertInfo = (message, duration) => {
        alert(message, "info", duration);
    }

    const alertSuccess = (message, duration) => {
        alert(message, "success", duration);
    }

    return {
        messages,
        alertError,
        alertInfo,
        alertSuccess
    };
}