import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import styles from "../styles/card.module.scss"
import container from "../styles/container.module.scss"
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { Bounce, toast } from 'react-toastify';
import {CategoryType, CompanyProps} from '../services/companyType';

const categoryMap: Record<CategoryType, string> = {
    ME: "Microempresa",
    LTDA: "Sociedade Empresária Limitada",
    SS: "Sociedade Simples",
    SA: "Sociedade Anônima",
    ASFL: "Associações Sem Fins Lucrativos",
  }

export default function Card({name, email, cnpj, address, category, description, website, id}:CompanyProps){
    const navigate = useNavigate()

    const handleCategory = (categoryType: CategoryType): string => {
        return categoryMap[categoryType]
      }

    const handleDelete = async (id:number) => {
        try {
            const token = localStorage.getItem('token')
            if(!token) return navigate(0)
                const response = await api.delete(`/companies/${id}`, {
                    headers:{
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "Application/json"
                    }
                })
                if(response.data.message && response.status === 200){
                    toast.success("Empresa excluída com sucesso!", {
                        position: "bottom-right",
                        autoClose: 2000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce,
                    })
                    setTimeout(() => {
                        navigate(0)
                    },2000)
                }
        } catch {
            toast.error("Erro ao excluir empresa.", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
            setTimeout(() => {
                navigate(0)
            },5000)
        }
    }

    return(
        <div className={`${styles.ContainerCards}`}>
            <header className={styles.HeaderCard}>
                <h1 className={container.EnterpriseName}>{name}</h1>
            </header>
            <main className={styles.BodyCard}>
                <section className={styles.AreaInfos}>
                    <p className={styles.Infos}>Email: <span className={styles.AtributeInfo}>{email}</span></p>
                    <p className={styles.Infos}>CNPJ: <span className={styles.AtributeInfo}>{cnpj}</span></p>
                    <p className={styles.Infos}>Endereço: <span className={styles.AtributeInfo}>{address}</span></p>
                    <p className={styles.Infos}>Categoria: <span className={styles.AtributeInfo}>{handleCategory(category)}</span></p>
                </section>
                <section className={styles.AreaInfos}>
                    <p className={styles.Infos}>"{description}"</p>
                    <p className={styles.Infos}>{website}</p>
                </section>
            </main>
            <footer className={styles.FooterCard}>
                <div className={styles.AreaOptions}>
                    <picture onClick={() => navigate(`/updatecompany/${id}`)}><UpdateIcon  sx={{color:"#d40047", cursor:'pointer'}}/></picture>
                    <p className={styles.TextOption}>Atualizar</p>
                </div>
                <div className={styles.AreaOptions}>
                    <picture onClick={() => handleDelete(id)}><DeleteIcon sx={{color:"#d40047", cursor:'pointer'}}/></picture>
                    <p className={styles.TextOption}>Deletar</p>
                </div>
            </footer>
        </div>
    )
}