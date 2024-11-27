import googleLogo from "../assets/googleLogo.jpg"
import DarkMode from "../components/Darkmode"
import styles from "../styles/auth.module.scss"
import { useMode } from "../hooks/useMode"


export default function Auth(){
    const {mode} = useMode()

    const handleAuth = (e:React.FormEvent) => {
        e.preventDefault()
        window.location.href = ('http://localhost:3000/auth/google')

    }

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
                        <button onClick={handleAuth} className={styles.Bnt}>Login</button>
                    </div>
                    <div>
                        <span className={styles.Option}>OU</span>
                    </div>
                    <button onClick={handleAuth} className={styles.Bnt}>Faça seu cadastro</button>
                </div>
                <div>
                    <span className={styles.Rigths}>Todos os direitos reservados a © Cloud Enterprises - 2024</span>
                </div>
            </form>
        </main>
    )
}