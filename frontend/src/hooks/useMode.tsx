import { createContext, ReactNode, useContext, useState } from "react"

type ModeType = {
    mode: boolean,
    handleDarkMode: () => void
    handleWhiteMode: () => void
}

const ModeContext = createContext<ModeType>({} as ModeType)

export const ModeContextProvider = (props:{children:ReactNode}) => {
    const [mode, setMode] = useState<boolean>(false)

    const handleDarkMode = () => {
        setMode(() => true)
    }

    const handleWhiteMode = () => {
        setMode(() => false)
    }

    return(
        <ModeContext.Provider value={{mode, handleDarkMode, handleWhiteMode}}>
            {props.children}
        </ModeContext.Provider>
    )
}

export const useMode = () => useContext(ModeContext)