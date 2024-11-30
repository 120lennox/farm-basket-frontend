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

/**
 * authenticating axios with token, so it realizes the owner of the messages
 */

axiosInstance.interceptors.request.use(
    (config)=>{
        const token = localStorage.getItem('authToken')

        if (token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => Promise.reject(error)
)


//handle message routes 
export const messageService = {
    getInbox: async () =>{
        try{
            const response = await axiosInstance.get('https://farm-basket3.onrender.com/messages/inbox')
            return response.data
        } catch(error){
            if (axios.isAxiosError(error)){
                // other logic here'
                console.log('error', error)
                throw error.response?.data || new Error('failed to fetch')
            }
            throw error
        }
    },

    // other services
}