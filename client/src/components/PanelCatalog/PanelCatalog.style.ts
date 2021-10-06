import styled from 'styled-components'

export const ContainerPanelCata = styled.div`
    width: 80%;
    margin: 40px 0 0 0;
    display: flex;
    `
export const CardContent = styled.div`
    border-top-right-radius: 22px;
    border-bottom-right-radius: 22px;
   background: #222831;
   color: #EEEEEE;
   width: 70%;
   height: 100%;
   padding: 20px;
   display: flex;
   flex-direction: column;
`
export const ImageContent = styled.div`
   width: 30%;
    height: 100%;
    min-height: 350px;
`
export const Image = styled.img`
    width: 100%;
    height: 100%;
   object-fit: cover;
   border-top-left-radius: 22px;
    border-bottom-left-radius: 22px;
`
export const H3 = styled.h3`
   font-size: 1.5rem;
`
export const Paragraph = styled.p`
   text-align: justify;
`

export const ContainerDiv = styled.div`
    width: 100%;
    display: flex;
   
`
export const Info = styled.div`
   width: 50%;
   
   
`
export const EditInfoBtns = styled.div`
   display: flex;
   align-items: flex-end;
   justify-content: flex-end;
   width: 50%;
`

export const BtnEdit = styled.button`
    border: none;
    width: 50%;
    min-width: 95px;
    height: 30%;
    min-height: 40px;
    border-radius: 6px;
    background: #c3630f;
    color: #ffffff;
    font-weight: bold;

    &:hover{
        background: #B55400;
    }
`
export const InputLabel = styled.div`
   display: flex;
   
`
export const Form = styled.form`
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
`

export const Input = styled.input`
    font-size: 1.5rem;
    width: auto;
    color: #ffffff;
    background: transparent;
    border: none;
    outline: none;
    font-weight: bold;
`