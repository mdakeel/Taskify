import { Axiosinstance } from "./axiosInstance"

export const http =async(type,route,payload)=>{
    return Axiosinstance[type]?.(route,payload,{
        Headers:{
            authorization:`beare ${localStorage.getItem}`
        }
    })
}