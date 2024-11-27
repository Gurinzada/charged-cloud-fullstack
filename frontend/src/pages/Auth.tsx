import googleLogo from "../assets/googleLogo.jpg"
import GoogleButton from 'react-google-button'
import DarkMode from "../components/Darkmode"
import styles from "../styles/auth.module.scss"
import { useMode } from "../hooks/useMode"


export default function Auth(){

    const {mode} = useMode()
    

    // useEffect(() => {
    //     const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    //     if (prefersDarkMode) {
    //     console.log("O usuário prefere o modo escuro.");
    //     } else {
    //     console.log("O usuário prefere o modo claro.");
    //     }

    // },[mode])

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
                    <div>
                        <h1 className={styles.Title} style={{paddingTop:'0.75rem'}}>Sign in</h1>
                    </div>
                    <GoogleButton
                        onClick={() => window.location.href = 'http://localhost:3000/auth/google'}
                    />
                </div>
                <div>
                    <span className={styles.Rigths}>Todos os direitos reservados a © Cloud Enterprises - 2024</span>
                </div>
            </form>
        </main>
    )
}