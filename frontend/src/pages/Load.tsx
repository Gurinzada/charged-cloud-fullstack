import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import loadGif from "../assets/loading.gif"

export default function Load(){
    const [searchParams] = useSearchParams();
    const navigate = useNavigate()

    useEffect(() => {
        const handleMyId = () => {
            const googleId = searchParams.get("userid");
            if (googleId) {
                localStorage.setItem("token", googleId);
                navigate('/client')
            } else{
                navigate('/')
            }
        }
        handleMyId()
    }, [searchParams]);
    return(
        <picture>
            <img src={loadGif} alt="" />
        </picture>
    )
}