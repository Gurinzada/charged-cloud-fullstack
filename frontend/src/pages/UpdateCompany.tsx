import Header from "../components/Header";
import { useMode } from "../hooks/useMode";
import container from "../styles/container.module.scss"
import styles from "../styles/updatecompany.module.scss"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import useCnpj from "../hooks/useCnpj";
import api from "../services/api";
import {CompanyProps} from "../services/companyType"
import Card from "../components/Card";
import { error } from "console";

export default function UpdateCompany(){
    const {mode} = useMode()
    const [Bnt, setBnt] = useState<boolean>(false)
    const [name, setName] = useState<string>("")
    const [address, setAddress] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [category, setCategory] = useState<string>("")
    const [website, setWebsite] = useState<string>("")
    const [company, setCompany] = useState<CompanyProps | null>(null)
    const {cnpj, handleCnpjChange} = useCnpj()
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const getTheCompany = async() => {
            const token = localStorage.getItem('token')
            if(!token) return navigate(0)
            try {
                const response = await api.get(`/${id}`, {
                    headers:{
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "Application/json"
                    }
                })
                if(response.status === 200){
                    setCompany(() => response.data)
                }
            } catch {
                console.log(error)
            }
        }
        getTheCompany()
    },[])

    return(
        <div className={`${container.Container} ${mode ? `${container.darkmode}` : `${container.lightmode}`}`}>
            <Header/>
            <main className={styles.MainForm}>
                <form className={styles.ComapnyForm} >
                    <div style={{width:"100%"}}>
                        <h1 className={styles.TitleForm}>Atualize as informações</h1>
                    </div>
                    <div className={styles.AreaInput}>
                        <label className={`${styles.Label}`} htmlFor="name">Nome fantasia</label>
                        <input placeholder="Digite o nome da Empresa" onChange={(e) => setName(e.target.value)} value={name} className={container.Input} type="text" id="name" required />
                    </div>
                    <div className={styles.AreaInput}>
                        <label htmlFor="email" className={`${styles.Label}`}>Email</label>
                        <input placeholder="Digite o Email da Empresa" onChange={(e) => setEmail(e.target.value)} value={email} className={container.Input} type="email" id="email" required />
                    </div>
                    <div className={styles.AreaInput}>
                        <label className={`${styles.Label}`} htmlFor="cnpj">CNPJ</label>
                        <input placeholder="Digite o CNPJ da Empresa" onChange={handleCnpjChange} value={cnpj} className={container.Input} type="text" id="cnpj" required minLength={14} maxLength={18}/>
                    </div>
                    <div className={styles.AreaInput}>
                        <label className={`${styles.Label}`} htmlFor="address">Endereço</label>
                        <input placeholder="ex: Rua X Nº Y, Bairro Z" onChange={(e) => setAddress(e.target.value)} value={address} className={container.Input} type="text" id="address" required/>
                    </div>
                    <div className={styles.AreaSelect}>
                        <label className={styles.Label} htmlFor="category">Categoria</label>
                        <select onChange={(e) => setCategory(e.target.value)} value={category} className={`${container.Input} ${styles.SelectArea}`} id="category" required>
                            <option value="" selected disabled>Selecione a categoria</option>
                            <option value="ME">Microempresa</option>
                            <option value="LTDA">Sociedade Empresária Limitada</option>
                            <option value="SS">Sociedade Simples</option>
                            <option value="SA">Sociedade Anônima</option>
                            <option value="ASFL">Associações Sem Fins Lucrativos</option>
                        </select>
                    </div>
                    <div className={styles.AreaInput}>
                        <label className={`${styles.Label}`} htmlFor="description">Descrição</label>
                        <input placeholder="ex: lucramos X ao ano" onChange={(e) => setDescription(e.target.value)} value={description} className={container.Input} type="text" id="description" />
                    </div>
                    <div className={styles.AreaInput}>
                        <label className={`${styles.Label}`} htmlFor="website">Site</label>
                        <input placeholder="ex: www.site.com" onChange={(e) => setWebsite(e.target.value)} value={website} className={container.Input} type="text" id="website" />
                    </div>
                    <div className={styles.AreaBnt}>
                        <button className={`${styles.Bnt} ${Bnt ? styles.Anime : null}`}>Atualizar</button>
                    </div>
                </form>
                <div>
                    {/* {company !== null ?
                        <Card {...company}/>
                    : null} */}
                </div>
            </main>
            <ToastContainer />
        </div>
    )
}