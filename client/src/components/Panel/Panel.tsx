import { FC } from "react";
import { ContainerPanel, ContainerImageUser, NameImage, Image, BtnAdminPanel, IconHome, IconSales, IconProducts, IconUsers, LogoLink, H2 } from './Panel.style'
// import gamestore from '../../assets/img/gamestore.png'
import defaultAvatar from "../../assets/img/avatars/Avatar_9.png";




interface Props {
  handleInfo(v: any): void;
}

const Panel: FC<Props> = ({ handleInfo /*info*/ }) => {
  const userData = JSON.parse(localStorage.getItem("userData") as string)
  const adminName = userData.data.username
  const capitalize = (string:string) => {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
  };
 
  return (
    <ContainerPanel>
        {/* <LogoLink to='/home'><LogoAdmin src={gamestore} alt="logo-oficial" /></LogoLink> */}
        <LogoLink to='/home'><H2>Gamestore</H2></LogoLink>
        <ContainerImageUser>
          <Image 
            src={defaultAvatar}
            alt="user"/>
          <NameImage>{ capitalize(adminName)}</NameImage>
        </ContainerImageUser>
        
          <BtnAdminPanel value="home" onClick={handleInfo} >
            <IconHome/> HOME
          </BtnAdminPanel>
          <BtnAdminPanel value="sales" onClick={handleInfo} >
            <IconSales/>SALES
          </BtnAdminPanel>
          <BtnAdminPanel value="products" onClick={handleInfo} >
            <IconProducts/>PRODUCTS
          </BtnAdminPanel>
          <BtnAdminPanel value="users" onClick={handleInfo} >
            <IconUsers/>USERS
          </BtnAdminPanel>      

    </ContainerPanel>
  );
};

export default Panel;
