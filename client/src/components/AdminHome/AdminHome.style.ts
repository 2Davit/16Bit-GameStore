import styled from 'styled-components'

export const ContainerAdminHome = styled.div`
    width: 100%;
    height: 100%;
`

export const ContainerStadistic = styled.div`
    height: 95%;
    width: 100%;
    display: flex;
`
export const Vertical = styled.div`
    
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
`
export const Vertical2 = styled.div`
   
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    /* align-items: center; */
    margin-top: 3rem;
`
export const Horizontal = styled.div`
    
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    margin-top: 3rem;
    /* align-items: center; */
`

export const GraLine = styled.div`
    width: 600px;
    height: 300px;
    background: #e1e1e1;
    border: 2px solid rgba(255, 255, 255, 0.8);
    border-radius: 2.5rem;
`

export const TableInfo = styled.div`
    background: #222831;
    height: 80%;
    width: 45%;
    border-radius: 2.5rem;
    border: 2px solid rgb(0, 0, 0);
`
export const H2 = styled.h2`
   padding: 1.5em; 
   font-size: 1.2rem;
   background: #000000;
   width: 100%;
   border-top-left-radius: 2.5rem;
   border-top-right-radius: 2.5rem;
   text-align: center;
`
export const InfoDiv = styled.div`
  border-bottom: 2px solid #393E46;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 40px;

  h4{
    font-size: 1.1;
  }

  h5{

  }
`