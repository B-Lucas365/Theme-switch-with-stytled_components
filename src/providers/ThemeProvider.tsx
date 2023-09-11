import { ThemeProvider } from "styled-components";
import light from "../styled-components/light";

interface ChildrenTypes {
    children: React.ReactNode
}

export const StyledProviderTheme = ({children}: ChildrenTypes) => {
    return(
        <ThemeProvider theme={light}>
            {children}
        </ThemeProvider>
    )
}