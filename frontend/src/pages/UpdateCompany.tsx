import Header from "../components/Header";
import { useMode } from "../hooks/useMode";
import container from "../styles/container.module.scss"
import styles from "../styles/updatecompany.module.scss"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";
import useCnpj from "../hooks/useCnpj";
import api from "../services/api";
import {CompanyProps} from "../services/companyType"
import Card from "../components/Card";

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
    const {cnpj, handleCnpjChange, setCnpj, cnpjError} = useCnpj()
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const getTheCompany = async() => {
            const token = localStorage.getItem('token')
            if(!token) return navigate(0)
            try {
                const response = await api.get(`/companies/${id}`, {
                    headers:{
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "Application/json"
                    }
                })
                if(response.status === 200 && response.data){
                    setCompany(() => response.data)
                } else{
                    navigate('/client')
                }
            } catch {
                toast.warn("Faça login novamente!", {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
            }
        }
        getTheCompany()
    },[])

    const handleUpdate = async(e:React.FormEvent) => {
        e.preventDefault()
        setBnt(true)
        setTimeout(() => {
            setBnt(false)
        },1000)
        if (cnpjError) {
            return toast.warn("Erro: verifique o CNPJ antes de enviar!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
        try {
            const token = localStorage.getItem('token')
        if(!token) return navigate(0)
        const response = await api.patch(`/companies/${company?.id}`, {
            name,
            address,
            email,
            description,
            cnpj,
            category,
            website
        }, {
            headers:{
                "Authorization": `Bearer ${token}`,
                "Content-Type": "Application/json"
            }
        })
        setName("")
        setEmail("")
        setAddress("")
        setCategory("")
        setCnpj("")
        setDescription("")
        setWebsite("")
        if(response.status === 200){
            toast.success("Empresa Atualizada com sucesso!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            })
            navigate('/client')
        }
        } catch {
            return toast.error("Erro ao atualizar empresa! Tente novamente.", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            })
        }
    }

    return(
        <div className={`${container.Container} ${mode ? `${container.darkmode}` : `${container.lightmode}`}`}>
            <Header/>
            <main className={styles.MainForm}>
                <form className={styles.ComapnyForm} onSubmit={handleUpdate}>
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
                <div className={styles.CardArea}>
                    <div>
                        <h1 className={styles.TitleForm}>Informações Anteriores</h1>
                    </div>
                    {company !== null ?
                       <div>
                            <Card {...company} description={company.description === "" ? "Descrição não Fornecida!" : company.description} website={company.website === "" ? "WebSite não Fornecido!" : company.website}/>
                       </div>
                    : null}
                </div>
            </main>
            <ToastContainer />
        </div>
    )
}