import styled from 'styled-components'
import { Container } from '../../../GlobalStyles/GlobalStyles'

export const ContainerLegal = styled(Container)`
    height: 75vh;
    padding: 4em;
    @media (max-width: 414px) {
        width: 80%;
        height: 100%;
        padding: 1em;
    }
`