import { ReactNode } from "react"
import { Navigate } from "react-router-dom"

function isAutheticated(){
    const token = localStorage.getItem('token')
    if(token) return true
    return false
}

export default function PrivateRoute(props:{children:ReactNode}){
    return isAutheticated() === true ? props.children : <Navigate to={'/'}/>
}