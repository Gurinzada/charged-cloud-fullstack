import googleLogo from "../assets/googleLogo.jpg"
import DarkMode from "../components/Darkmode"
import styles from "../styles/auth.module.scss"
import { useMode } from "../hooks/useMode"
import { useEffect } from "react"
import { useSearchParams, useNavigate } from "react-router-dom"
import api from "../services/api"


export default function Auth(){
    const {mode} = useMode()
    const [searchParams] = useSearchParams();
    const navigate = useNavigate()

    const handleAuth = (e:React.FormEvent) => {
        e.preventDefault()
        window.location.href = ('http://localhost:3000/auth/google')

    }
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
        <main style={mode ? {backgroundColor: "#303030", transition: "2s ease"} : {backgroundColor:"#fff", transition: "2s ease"} } className={styles.MainArea}>
            <form className={styles.Forms}>
                <div className={styles.LeftPart}>
                    <div>
                        <DarkMode/>
                    </div>
                    <h1 className={styles.Title}>Faça sua autenticação com a Google agora</h1>
                    <picture >
                        <img src={googleLogo} alt="google-logo" className={styles.IconGoogle}/>
                    </picture>
                </div>
                <div className={styles.RightPart}>
                    <button onClick={handleAuth} className={styles.Bnt}>Sign in</button>
                </div>
                <div>
                    <span className={styles.Rigths}>Todos os direitos reservados a © Cloud Enterprises - 2024</span>
                </div>
            </form>
        </main>
    )
}