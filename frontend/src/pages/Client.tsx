import { useEffect } from "react";
import Header from "../components/Header";
import { useMode } from "../hooks/useMode";
import container from "../styles/container.module.scss"
import GetUserCompanies from "../hooks/GetUserCompanies";
import Card from "../components/Card";
import styles from "../styles/client.module.scss"
import { ToastContainer } from "react-toastify";

export default function Client(){
    const {mode} = useMode()
    const {companies, handleUserCompanies} = GetUserCompanies()

    useEffect(() => {
         handleUserCompanies()
    },[])


    return(
        <div className={`${container.Container} ${mode ? `${container.darkmode}` : `${container.lightmode}`}`}>
            <Header/>
            <main className={styles.MainAreaCars}>
                <div>
                    <h1 className={styles.Title}>Acompanhe suas empresas</h1>
                </div>
               <section className={styles.SectionCards}>
                {companies && companies.length > 0 ? companies.map((item) => (
                    <Card address={item.address} category={item.category} cnpj={item.cnpj} description={item.description || "Descrição não Fornecida!"} email={item.email} name={item.name} website={item.website || "WebSite não Fornecido!"} id={item.id}/>
                )) : null}
               </section>
               <ToastContainer/>
            </main>
        </div>
    )
}