import React, { FC } from "react";
import {
  ContainerPanel,
  ContainerImageUser,
  NameImage,
  Image,
  BtnAdminPanel,
  IconHome,
  IconSales,
  IconProducts,
  IconUsers,
  LogoAdmin,
  LogoLink,
} from "./Panel.style";
import gamestore from "../../assets/img/gamestore.png";

// interface Info {
//     setHome: boolean,
//     setProducts: boolean,
//     setSales: boolean,
//     setUsers: boolean,
// }

interface Props {
  handleInfo(v: any): void;
  // info: Info;
}

const Panel: FC<Props> = ({ handleInfo /*info*/ }) => {
  // console.log(info)
  return (
    <ContainerPanel>
      <LogoLink to="/home">
        <LogoAdmin src={gamestore} alt="logo-oficial" />
      </LogoLink>
      <ContainerImageUser>
        <Image
          src="https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg"
          alt="user"
        />
        <NameImage>Admin Armando</NameImage>
      </ContainerImageUser>

      <BtnAdminPanel value="home" onClick={handleInfo}>
        <IconHome /> HOME
      </BtnAdminPanel>
      <BtnAdminPanel value="sales" onClick={handleInfo}>
        <IconSales />
        SALES
      </BtnAdminPanel>
      <BtnAdminPanel value="products" onClick={handleInfo}>
        <IconProducts />
        PRODUCTS
      </BtnAdminPanel>
      <BtnAdminPanel value="users" onClick={handleInfo}>
        <IconUsers />
        USERS
      </BtnAdminPanel>
    </ContainerPanel>
  );
};

export default Panel;
