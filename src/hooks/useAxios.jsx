import axios from "axios";
import { useContext, useEffect } from "react";

export default function useAxios() {

    const get = async (url) => {
        return await axios.get(url).then(response => response.data);
    }

    const post = async  (url, body) => {
        return await axios.post(url, body).then(response => response.data);
    }
    
    const update = async  (url, body) => {
        return await axios.put(url, body).then(response => response.data);
    }

    return { get, post, update };
}