import { useState } from "react"

export default function Header(){
    const [userInfos, setUserInfos] = useState()


    return(
        <header>
            <div>
                <h1>Bem vindo</h1>
            </div>
        </header>
    )
}