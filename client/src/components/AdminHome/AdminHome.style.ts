import styled from 'styled-components'

export const ContainerAdminHome = styled.div`
    width: 100%;
    height: 100%;
`

export const ContainerStadistic = styled.div`
    height: 95%;
    width: 100%;
    display: flex;
    flex-direction: column;
`
export const Vertical = styled.div`
    
    width: 100%;
    height: 35%;
    display: flex;
    flex-direction: column;
`
export const Vertical2 = styled.div`
   
    width: 100%;
    height: 65%;
    display: flex;
    /* justify-content: space-around; */
    /* align-items: center; */
`
export const Horizontal = styled.div`
    
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    margin-top: 3rem;
    /* align-items: center; */
`
export const Horizontal2 = styled.div`
    
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    /* margin-top: 3rem; */
    /* align-items: center; */
`

export const GraLine = styled.div`
    width: 90%;
    height: 300px;
    background: #e1e1e1;
    border: 2px solid #393E46;
    border-radius: 2.5rem;
`

export const TableInfo = styled.div`
    background: #222831;
    margin: 0 5% 0 0;
    height: 80%;
    width: 20%;
    /* min-width: 350px; */
    border-radius: 2.5rem;
    border: 2px solid rgb(0, 0, 0);
    display: flex;
    flex-direction: column;
    
`
export const H2 = styled.h2`
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 1.2rem;
   background: #000000;
   width: 100%;
   height: 10%;
   border-top-left-radius: 2.5rem;
   border-top-right-radius: 2.5rem;
   text-align: center;
`
export const H3 = styled.h3`
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 1.2rem;
   background: #000000;
   width: 100%;
   height: 10%;
   border-bottom-left-radius: 2.5rem;
   border-bottom-right-radius: 2.5rem;
   text-align: center;
   margin: 0;
`
export const InfoDiv = styled.div`
  border-bottom: 2px solid #393E46;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 40px;

  h4{
    /* background: red; */
    width: 60%;
  }

  h5{

  }
`
export const OnSaleTable = styled.div`
  border: 2px solid #ffffff;
  width: 80%;
  height: 600px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  border-radius: 1.5rem;
  background: #222831;

  h2{
      background: #000000;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 60px;
      font-size: 1.3rem;
      margin-bottom: 10px;

  }
`
export const OnSaleDiv = styled.div`
  display: flex;
  align-items: center;
  background: #222831;
  margin-bottom: 10px;
  border-bottom: 2px solid #393E46;

  h5{
    width: 10%;
    text-align: center;
  }
  h4{
      text-align: start;
      margin-left: 25px;
      width: 65%;
  }
  img{
    border-radius: 1.5rem;
    
    width: 40px;
    height: 40px;  
  }
  
`
