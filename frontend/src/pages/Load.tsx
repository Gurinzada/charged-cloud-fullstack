import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import loadGif from "../assets/loading.gif"
import api from "../services/api";

export default function Load(){
    const [searchParams] = useSearchParams();
    const navigate = useNavigate()

    useEffect(() => {
        const handleMyId = async() => {
            try {
                const token = searchParams.get("userid")
            if (token) {
                localStorage.setItem("token", token)
                const response = await api.post('/users/validate', {   
                }, {
                    headers:{
                        "Content-Type": "Application/json",
                        "Authorization": `Bearer ${token}`
                    }
                })
                if(response.status === 200 && response.data.userChecked){
                   return  navigate('/client')
                }
            }
            } catch {
                localStorage.removeItem('token')
                navigate('/')
            }
        }
        handleMyId()
    }, [searchParams])

    return(
        <picture style={{height:"100vh"}}>
            <img src={loadGif} alt="" style={{height:"100vh", width:"100%"}}/>
        </picture>
    )
}