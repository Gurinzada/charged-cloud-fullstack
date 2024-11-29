import { useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../services/api"

type company = {
    address:string,
    category:string,
    cnpj:string,
    email:string,
    name:string,
    description:string | null,
    userid:number,
    website:string | null
    id:number
}


export default function GetUserCompanies(){
    const [companies, setCompanies] = useState<company[] | null>(null)
    const navigate = useNavigate()

    const handleUserCompanies = async () => {
        const token = localStorage.getItem('token')
        if(!token) return navigate(0)
            const response = await api.get('/companies/', {
                headers:{
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "Application/json"
                }
            })
            if(response.status === 200){
                setCompanies(() => response.data)
                return
            } else{
                return navigate(0)
            }
    }

    return {companies, handleUserCompanies}
}