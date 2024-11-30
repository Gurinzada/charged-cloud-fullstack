import { useEffect, useState } from "react";
import Header from "../components/Header";
import { useMode } from "../hooks/useMode";
import container from "../styles/container.module.scss"
import GetUserCompanies from "../hooks/GetUserCompanies";
import GetUserData from "../hooks/GetUserData";
import {CompanyProps} from '../services/companyType';
import Card from "../components/Card";
import styles from "../styles/profile.module.scss"

export default function Profile(){
    const {mode} = useMode()
    const {companies, handleUserCompanies} = GetUserCompanies()
    const {handleUserInfos, userInfos} = GetUserData()
    const [lastProject, setLastProject] = useState<CompanyProps | null>(null)

    useEffect(() => {
        const callCompany = async() => {
            await handleUserCompanies()
        }
       const callUser = async() => {
        await handleUserInfos()
       }
        const fetchData = async () => {
            await callCompany()
            await callUser()
        }
        fetchData()
    },[])

    useEffect(() => {
        const handleLastProject = () => {
            if(companies !== null){
                const lengthCompany = (companies.length - 1)
                setLastProject(() => companies[lengthCompany])
    
            }
        }
        handleLastProject()
    },[companies])

    return(
        <div className={`${container.Container} ${mode ? `${container.darkmode}` : `${container.lightmode}`}`}>
            <Header/>
            <main className={styles.MainArea}>
                <div className={styles.ProfileCard}>
                    <section className={styles.ProfileInfos}>
                        <picture>
                            <img src={userInfos?.picture} alt="" className={styles.MyPhoto}/>
                        </picture>
                        <div className={styles.InfosContainer}>
                            <div>
                                <h1 className={styles.Title}>Dados pessoais</h1>
                            </div>
                            <div className={styles.Data}>
                                <p className={styles.FieldInfos}>Nome: <span className={styles.Infos}>{userInfos?.firstName}</span></p>
                                <p className={styles.FieldInfos}>Email: <span className={styles.Infos}>{userInfos?.email}</span></p>
                            </div>
                            </div>
                    </section>
                    <section className={styles.ProfileInfos}>
                        <div className={`${styles.AreaCompany} ${styles.borderForBottom}`}>
                            <div>
                                <h1 className={styles.Title}>Número de empresas cadastradas</h1>
                            </div>
                            <div className={styles.Circle}>
                                <p className={styles.NumberCompany}>{companies?.length}</p>
                            </div>
                            <div className={styles.Subtitle}>
                                <p>Empresas</p>
                            </div>
                        </div>
                        <div className={styles.AreaCompany}>
                            <div>
                                <h1 className={styles.Title}>Última empresa cadastrada</h1>
                            </div>
                            <div>
                                {lastProject ? <Card {...lastProject} description={lastProject.description === "" ? "Descrição não Fornecida!" : lastProject.description} website={lastProject.website === "" ? "WebSite não Fornecido!" : lastProject.website}/> : <p>Erro ao carregar</p>}
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}