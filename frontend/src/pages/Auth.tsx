import googleLogo from "../assets/googleLogo.jpg"
import DarkMode from "../components/Darkmode"
import styles from "../styles/auth.module.scss"
import { useMode } from "../hooks/useMode"
import useLabel from "../hooks/useLabel"


export default function Auth(){
    const {animateLabel, handleFocus} = useLabel()
    const {mode} = useMode()

    const handleRegister = (e:React.FormEvent) => {
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
                        <h1 className={styles.Title}>Login</h1>
                    </div>
                    <form className={styles.AreaLogin}>
                        <div className={styles.InputArea}>
                            <label className={`${styles.Label} ${animateLabel ? styles.LabelFocus : null}`} htmlFor="email">Email</label>
                            <input id="email" className={styles.Input} type="email" onFocus={handleFocus}/>
                        </div>
                        <div>
                            <button className={styles.Bnt}>Login</button>
                        </div>
                    </form>
                    <div>
                        <span className={styles.Option}>OU</span>
                    </div>
                    <button onClick={handleRegister} className={styles.Bnt}>Faça seu cadastro</button>
                </div>
                <div>
                    <span className={styles.Rigths}>Todos os direitos reservados a © Cloud Enterprises - 2024</span>
                </div>
            </form>
        </main>
    )
}