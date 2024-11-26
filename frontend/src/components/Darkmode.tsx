import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useMode } from '../hooks/useMode';

export default function DarkMode(){

    const {mode, handleDarkMode, handleWhiteMode} = useMode()

    return(
        <div>
            {mode === true ? 
                <picture onClick={handleWhiteMode}><WbSunnyIcon sx={{color:"#d40047", cursor:'pointer'}}/></picture> 
                : 
                <picture onClick={handleDarkMode}><DarkModeIcon sx={{color:"#d40047", cursor:'pointer'}}/></picture>
            }
        </div>
    )
}