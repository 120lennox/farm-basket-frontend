import axios from "axios"

// handle base url configurations
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

// axios instance with url configuration

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    },
})

// handling interceptors

//handle message routes 
export const messageService = {
    getInbox: async () =>{
        const response = await axios.create()
    }
}