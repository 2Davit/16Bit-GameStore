import styled from 'styled-components'

interface BtnProps {
    none: string;
}

export const ButtonTheme2 = styled.button<BtnProps> `
    position: fixed;
    top: 50%;
    right: 8px;
    display: ${({none}) => none === 'none' ? 'none' : 'block'};
`