import styled from 'styled-components'
import { Container } from '../../GlobalStyles/GlobalStyles'

export const ContainerAdmin = styled(Container)`
    background: red;
    display: flex;
    font-family: ${p => p.theme.fontAdmin};
`

export const InfoContainer = styled.div`
    background: blue;
    width: 15%;
    height: 100vh;
`

export const MainContainer = styled.div`
    background: #EEEEEE;
    width: 85%;
    height: 100vh;
`