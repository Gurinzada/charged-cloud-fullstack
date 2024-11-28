import Header from "../components/Header";
import { useMode } from "../hooks/useMode";
import styles from "../styles/company.module.scss"
import container from "../styles/container.module.scss"

export default function Company(){
    const {mode} = useMode()
    return(
        <div className={`${container.Container} ${mode ? `${container.darkmode}` : `${container.lightmode}`}`}>
            <Header/>
            <main className={styles.MainForm}>
                <form className={styles.ComapnyForm}>
                    <div>
                        <h1>Cadastre uma empresa</h1>
                    </div>
                    <div className={styles.AreaInput}>
                        <label htmlFor="name">Nome fantasia</label>
                        <input type="text" id="name" required />
                    </div>
                    <div className={styles.AreaInput}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" required />
                    </div>
                    <div className={styles.AreaInput}>
                        <label htmlFor="cnpj">Cnpj</label>
                        <input type="text" id="cnpj" required minLength={14} maxLength={14}/>
                    </div>
                    <div className={styles.AreaInput}>
                        <label htmlFor="address">Endereço</label>
                        <input type="text" id="address" required/>
                    </div>
                    <div className={styles.AreaInput}>
                        <label htmlFor="category">Categoria</label>
                        <select id="category" required>
                            <option value="#" selected disabled>Selecione a categoria</option>
                            <option value="ME">Microempresa</option>
                            <option value="LTDA">Sociedade Empresária Limitada</option>
                            <option value="SS">Sociedade Simples</option>
                            <option value="SA">Sociedade Anônima</option>
                            <option value="ASFL">Associações Sem Fins Lucrativos</option>
                        </select>
                    </div>
                    <div className={styles.AreaInput}>
                        <label htmlFor="description">Descrição</label>
                        <input type="text" id="description" />
                    </div>
                    <div className={styles.AreaInput}>
                        <label htmlFor="website">Site</label>
                        <input type="text" id="website" />
                    </div>
                    <div>
                        <button>Enviar</button>
                    </div>
                </form>
            </main>
        </div>
    )
}