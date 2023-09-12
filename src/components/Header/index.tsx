'use client'
import { HeaderContainer } from "./styles"
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { useContext } from "react";

interface Props {
    toggleTheme(): void
}

export const Header = ({toggleTheme}: Props) => {
    const colors = useContext(ThemeContext)
    const title = useContext(ThemeContext)

    return (
        <HeaderContainer>
            <h2>Hello word</h2>

            <Switch 
                onChange={toggleTheme}
                checked={title?.title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={30}
                handleDiameter={20}
                offColor={colors?.colors.accent200}
                onColor={colors?.colors.primary300}
            />
        </HeaderContainer>
    )
}