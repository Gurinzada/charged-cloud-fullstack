import { useState } from "react";
import Header from "../components/Header";
import { useMode } from "../hooks/useMode";
import styles from "../styles/company.module.scss"
import container from "../styles/container.module.scss"

export default function Company(){
    const {mode} = useMode()
    const [Bnt, setBnt] = useState<boolean>(false)
    const [name, setName] = useState<string>("")
    const [address, setAddress] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [cnpj, setCnpj] = useState<string>("")
    const [category, setCategory] = useState<string>("")
    const [website, setWebsite] = useState<string>("")

    const handleForm = () => {
        setBnt(true)
        setTimeout(() => {
            setBnt(false)
        },1000)
    }

    return(
        <div className={`${container.Container} ${mode ? `${container.darkmode}` : `${container.lightmode}`}`}>
            <Header/>
            <main className={styles.MainForm}>
                <form className={styles.ComapnyForm}>
                    <div>
                        <h1>Cadastre uma empresa</h1>
                    </div>
                    <div className={styles.AreaInput}>
                        <label className={`${styles.Label}`} htmlFor="name">Nome fantasia</label>
                        <input onChange={(e) => setName(e.target.value)} value={name} className={container.Input} type="text" id="name" required />
                    </div>
                    <div className={styles.AreaInput}>
                        <label htmlFor="email" className={`${styles.Label}`}>Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} className={container.Input} type="email" id="email" required />
                    </div>
                    <div className={styles.AreaInput}>
                        <label className={`${styles.Label}`} htmlFor="cnpj">CNPJ</label>
                        <input onChange={(e) => setCnpj(e.target.value)} value={cnpj} className={container.Input} type="text" id="cnpj" required minLength={14} maxLength={14}/>
                    </div>
                    <div className={styles.AreaInput}>
                        <label className={`${styles.Label}`} htmlFor="address">Endereço</label>
                        <input onChange={(e) => setAddress(e.target.value)} value={address} className={container.Input} type="text" id="address" required/>
                    </div>
                    <div className={styles.AreaSelect}>
                        <label className={styles.LabelSelect} htmlFor="category">Categoria</label>
                        <select onChange={(e) => setCategory(e.target.value)} value={category} className={container.Input} id="category" required>
                            <option value="#" selected disabled>Selecione a categoria</option>
                            <option value="ME">Microempresa</option>
                            <option value="LTDA">Sociedade Empresária Limitada</option>
                            <option value="SS">Sociedade Simples</option>
                            <option value="SA">Sociedade Anônima</option>
                            <option value="ASFL">Associações Sem Fins Lucrativos</option>
                        </select>
                    </div>
                    <div className={styles.AreaInput}>
                        <label className={`${styles.Label}`} htmlFor="description">Descrição</label>
                        <input onChange={(e) => setDescription(e.target.value)} value={description} className={container.Input} type="text" id="description" />
                    </div>
                    <div className={styles.AreaInput}>
                        <label className={`${styles.Label}`} htmlFor="website">Site</label>
                        <input onChange={(e) => setWebsite(e.target.value)} value={website} className={container.Input} type="text" id="website" />
                    </div>
                    <div className={styles.AreaBnt}>
                        <button onClick={handleForm} className={`${styles.Bnt} ${Bnt ? styles.Anime : null}`}>Enviar</button>
                    </div>
                </form>
            </main>
        </div>
    )
}