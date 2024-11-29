import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import { useEffect, useState } from 'react';
import styles from "../styles/card.module.scss"
import container from "../styles/container.module.scss"
import { useNavigate } from 'react-router-dom';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import api from '../services/api';
import GetUserCompanies from '../hooks/GetUserCompanies';

type imagesCards={
    id:number,
    value:string
    valueText:string
}

type CardProps = {
    id:number,
    name: string;
    email: string;
    cnpj: string;
    address: string;
    category: string;
    description: string;
    website: string;
  };

export default function Card({name, email, cnpj, address, category, description, website, id}:CardProps){

    const [categoryText, setCategory] = useState<string>('')
    const {setReload} = GetUserCompanies()
    const navigate = useNavigate()

    useEffect(() => {
        const handleCategory = async(category:string) => {
            try {
                const response = await fetch('/db.json', {
                    method:'GET',
                    headers:{
                        "Content-Type": "Application/json"
                    }
                })
                
                if(response.ok){
                    const getName:imagesCards[] = await response.json()
                    const nameToReturn = getName.find((item) => item.value === category)
                    if(nameToReturn){
                        setCategory(() => nameToReturn.valueText)
                    } else{
                        setCategory(() => "Erro")
                    }
                }
            } catch (error) {
                console.log(error)
            }
        }
        handleCategory(category)
    },[])

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
                    navigate(0)
                }
        } catch {
           navigate(0)
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
                    <p className={styles.Infos}>Categoria: <span className={styles.AtributeInfo}>{categoryText}</span></p>
                </section>
                <section className={styles.AreaInfos}>
                    <p className={styles.Infos}>"{description}"</p>
                    <p className={styles.Infos}>{website}</p>
                </section>
            </main>
            <footer className={styles.FooterCard}>
                <div className={styles.AreaOptions}>
                    <picture><UpdateIcon  sx={{color:"#d40047", cursor:'pointer'}}/></picture>
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