import { useState } from "react";


export default function useLabel(){
    const [animateLabel, setAnimateLabel] = useState<boolean>(false)

    const handleFocus = () => {
        setAnimateLabel(() => true)
    }


    return {animateLabel, handleFocus}
}