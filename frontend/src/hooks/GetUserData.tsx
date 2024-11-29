import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";


type user = {
    email:string
    firstName:string,
    picture:string,
}

export default function GetUserData(){
    const [userInfos, setUserInfos] = useState<user | null>(null)
    const navigate = useNavigate()

    const handleUserInfos = async() => {
        const token = localStorage.getItem('token')
        if(!token) return navigate('/')
        
        const response = await api.get('/users/info', {
            headers:{
                "Content-Type": "Application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        if(response.status === 200){
            setUserInfos(() => response.data)
            return
        }
        localStorage.removeItem('token')
        return navigate('/')
    }

    return {userInfos, handleUserInfos}
}