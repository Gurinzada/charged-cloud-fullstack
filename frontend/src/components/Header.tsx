import { useEffect} from "react"
import GetUserData from "../hooks/GetUserData"
import { Link, useNavigate } from "react-router-dom"
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import styles from "../styles/header.module.scss"
import DarkMode from "./Darkmode";
import api from "../services/api";

export default function Header(){
    const {handleUserInfos, userInfos} = GetUserData()
    const navigate = useNavigate()

    useEffect(() => {
       handleUserInfos()
    },[])

    const handleLogout = async () => {
        const token = localStorage.getItem('token')
        if(!token) return navigate(0)
        
        const response = await api.post('/users/logout', {

        }, {
            headers:{
                "Authorization": `Bearer ${token}`,
                "Content-Type": "Application/json"
            }
        })
        if(response.status === 200 && response.data.logout){
            localStorage.removeItem('token')
            return navigate('/')
        } else{
            return navigate(0)
        }
    }
    
    return(
        <header className={styles.Header}>
            <div>
                <DarkMode/>
            </div>
            <div className={styles.AreaName}>
                <h1 className={styles.Title}>Bem vindo ao Cloud, {userInfos ? userInfos.firstName : "Erro"}</h1>
            </div>
            <nav className={styles.Navbar}>
                <div>
                    <Link className={styles.Link} to={"/client"}>Home</Link>
                </div>
                <div>
                    <Link className={styles.Link} to={"/createcompany"}>Cadastrar empresa</Link>
                </div>
                <picture onClick={handleLogout}>
                    <LogoutIcon className={styles.IteractiveIcon} sx={{color:"#d40047", cursor:'pointer'}}/>
                </picture>
                <picture>
                    <AccountBoxIcon className={styles.IteractiveIcon} sx={{color:"#d40047", cursor:'pointer'}}/>
                </picture>
            </nav>
        </header>
    )
}