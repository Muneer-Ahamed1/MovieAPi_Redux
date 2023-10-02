import { createContext,useContext } from "react";

const theme=createContext()
const ThemeProvider=theme.Provider;
export function useTheme() {
    return (
        useContext(theme)
    )
}
export default ThemeProvider;
