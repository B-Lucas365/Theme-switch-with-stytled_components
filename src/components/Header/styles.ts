'uise client'
import styled from "styled-components"

export const HeaderContainer = styled.header`
    height: 60px;
    background: ${props => props.theme.colors.primary100};
    color: ${props => props.theme.colors.text200};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
`