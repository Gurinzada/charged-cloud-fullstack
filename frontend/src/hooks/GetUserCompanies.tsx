import { useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../services/api"
import {CompanyProps} from '../services/companyType';

export default function GetUserCompanies(){
    const [companies, setCompanies] = useState<CompanyProps[] | null>(null)
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