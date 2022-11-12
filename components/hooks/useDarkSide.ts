import { useEffect, useState} from "react";

export default function useDarkSide(): any {

    const [theme, setTheme] = useState(
        typeof window !== "undefined" ? localStorage.theme : "light"
    );
    const colorTheme = theme === 'dark' ? 'light' : 'dark';

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);

        //save theme to local storage
        if (typeof window !== "undefined") {
            localStorage.setItem("theme", theme);
        }
        }, [theme, colorTheme]);

    return [colorTheme, setTheme];
}