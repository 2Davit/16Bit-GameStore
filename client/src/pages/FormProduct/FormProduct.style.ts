import styled from 'styled-components'


export const FormContainer = styled.form`
display: flex;
flex-direction: column;
width: 50%;
margin: 0 auto;
background: aqua;
padding: 2rem;
`
export const Fields = styled.div`
display: flex;
width: 100%;
`

export const FormLabel = styled.label`
 width: 20%;
 text-align: left;
`
export const FormInput = styled.input`
width: 80%;
height: 90%;
`
export const FormErrors = styled.div`
color: red;
width: 100%;
text-align: center;
`