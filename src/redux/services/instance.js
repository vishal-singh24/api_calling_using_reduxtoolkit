
import axios from 'axios'
import {URL} from '@env'
export const createAxiosInstance=(baseUrl)=>{
    console.log("URL"+URL);

    const instance=axios.create({

        baseURL:baseUrl,
        timeout:5000,
        headers:{
            'Content-Type': 'application/json', 
        }
    });
    // instance.interceptors.response.use(
    //     response=>{
    //         return response
    //     },
    //     error=>{
    //         return Promise.reject(error)
    //     }
    // );
    return instance;
};
export const authApi=createAxiosInstance(URL)
