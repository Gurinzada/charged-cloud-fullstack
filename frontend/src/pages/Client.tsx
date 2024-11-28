import Header from "../components/Header";
import { useMode } from "../hooks/useMode";
import container from "../styles/container.module.scss"

export default function Client(){

    const {mode} = useMode()
    return(
        <div className={`${container.Container} ${mode ? `${container.darkmode}` : `${container.lightmode}`}`}>
            <Header/>
        </div>
    )
}