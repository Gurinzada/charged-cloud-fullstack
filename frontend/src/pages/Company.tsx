import { useState } from "react";
import Header from "../components/Header";
import { useMode } from "../hooks/useMode";
import styles from "../styles/company.module.scss"
import container from "../styles/container.module.scss"
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import useCnpj from "../hooks/useCnpj";

export default function Company(){
    const {mode} = useMode()
    const [Bnt, setBnt] = useState<boolean>(false)
    const [name, setName] = useState<string>("")
    const [address, setAddress] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [category, setCategory] = useState<string>("")
    const [website, setWebsite] = useState<string>("")
    const navigate = useNavigate()
    const {cnpj, cnpjError, handleCnpjChange, setCnpj} = useCnpj()

    const handleForm = async (e:React.FormEvent) => {
        e.preventDefault()
        setBnt(true)
        setTimeout(() => {
            setBnt(false)
        },1000)
        if (cnpjError) {
            return toast("Erro: verifique o CNPJ antes de enviar!", {
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
        const response = await api.post("/companies/", {
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
        if(response.status === 201){
            return toast("Empresa Cadastrada com sucesso!", {
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
        } catch (error) {
            console.log(error)
            return toast("Erro ao cadastrar empresa! Tente novamente.", {
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
                <form className={styles.ComapnyForm} onSubmit={handleForm}>
                    <div style={{width:"100%"}}>
                        <h1 className={styles.TitleForm}>Cadastre uma empresa</h1>
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
                        <button className={`${styles.Bnt} ${Bnt ? styles.Anime : null}`}>Enviar</button>
                    </div>
                </form>
                <ToastContainer />
            </main>
        </div>
    )
}