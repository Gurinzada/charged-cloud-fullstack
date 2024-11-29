import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import { useEffect, useState } from 'react';

type imagesCards={
    id:number,
    value:string
    valueText:string
}

type CardProps = {
    name: string;
    email: string;
    cnpj: string;
    address: string;
    category: string;
    description: string;
    website: string;
  };

export default function Card({name, email, cnpj, address, category, description, website}:CardProps){

    const [categoryText, setCategory] = useState<string>('')

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
    },[category])

    return(
        <div>
            <header>
                <h1>{name}</h1>
            </header>
            <main>
                <section>
                    <p>Email: {email}</p>
                    <p>CNPJ: {cnpj}</p>
                    <p>Endereço: {address}</p>
                    <p>Categoria: {categoryText}</p>
                </section>
                <section>
                    <p>"{description}"</p>
                    <p>{website}</p>
                </section>
            </main>
            <footer>
                <div>
                    <picture><UpdateIcon/></picture>
                    <p>Atualizar</p>
                </div>
                <div>
                    <picture><DeleteIcon/></picture>
                    <p>Deletar</p>
                </div>
            </footer>
        </div>
    )
}