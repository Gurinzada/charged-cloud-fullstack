import Header from "../components/Header";
import { useMode } from "../hooks/useMode";

export default function Client(){

    const {mode} = useMode()
    return(
        <div style={mode ? {backgroundColor: "#303030", transition: "2s ease"} : {backgroundColor:"#fff", transition: "2s ease"} }>
            <Header/>
        </div>
    )
}