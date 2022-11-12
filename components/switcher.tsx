import React, {useState} from 'react';
import useDarkSide from './hooks/useDarkSide';
import { DarkModeSwitch } from  'react-toggle-dark-mode';


export default function Switcher(): any {
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState( colorTheme === 'light' ? true : false);
    
    const toggleDarkMode = (checked: boolean) => {
        setTheme(colorTheme)
        setDarkSide(checked);
    };

    return(
        <>
            <div className="m-3 flex flex-col items-center">
                <DarkModeSwitch 
                checked={darkSide}
                onChange={toggleDarkMode}
                size={20}
                />
            </div>
        </>
    )
}