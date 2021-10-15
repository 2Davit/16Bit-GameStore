import { FC, useState } from "react";
import { ContainerNav } from "../ProductContent/ProductContent.style";
import {
  ContainerAdminHome,
  ContainerStadistic,
  GraLine,
  Vertical,
  Vertical2,
  Horizontal,
  TableInfo,
  H2,
  InfoDiv
} from "./AdminHome.style";
import {
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  Curve,
  VictoryArea,
  VictoryBar,
} from "victory";
import { Order, User, Product, DetailData } from "../../interfaces";

interface Props {
  totalOrders: Array<Order>;
  totalUsers: Array<User>;
  totalProducts: Array<Product>;
  totalSalesData: Array<DetailData>
}

const AdminHome: FC<Props> = ({ totalOrders, totalUsers, totalProducts, totalSalesData }) => {
  const listUsers = totalUsers.filter(
    (user) => user.id_user > totalUsers.length - 10
  );

  const listStock = totalProducts.filter((product) => product.in_stock <= 5);

  // const lengthMonth = totalOrders.filter(el => el.date.slice(8, 10) === '14') funciona para día
  const lengthMonth = totalOrders.filter((el) => el.date.slice(5, 7) === "10");
  const monthAmount = lengthMonth.map((el) => el.amount);
  const total = monthAmount?.reduce((a, b) => a + b, 0);
  console.log("stock", listStock);
  const prueba = totalSalesData;
  // console.log(totalSalesData)


    const datosOrder = prueba.filter(dato => ( dato.orderidOrder === prueba[0].id_order 
      ))
    // const datosProduct = datosOrder[0].productidProduct//id del producto
    // const datosProductId = prueba.filter(name => name.id_product === datosProduct)//sacamos la id que cumplan esta condicion
    // const datosProductName = datosProductId[0].name_product//sacamos el nombre del producto

 

    // const datosUser = prueba.filter(dato => (dato.id_user === prueba[0].userId)) //id usuario para conseguir id usuario + username
    // const datosUsername = datosUser[0].username; //nombre usuario
    // const datosFecha = prueba[0].date.slice(0,10) // fecha de compra
    // const datosEnvio = prueba[0].address//direccion envio
    // const datosStatus = prueba[0].status//status de la orden
    // const orderBill = prueba[0].amount //cuanto gastó
    
      const detail = `
      Status de la orden:
      // Usuario: 
      Juego comprado:hola
      Fecha de compra:
      Direccion de envio:
      Total Compra:
      `
    console.log(datosOrder)


  return (
    <ContainerAdminHome>
      <ContainerNav>
        
      </ContainerNav>
      <ContainerStadistic>
        <Vertical>
          <Horizontal>
            <GraLine>
              <VictoryChart
                theme={VictoryTheme.grayscale}
                height={300}
                width={700}
              >
                <VictoryBar
                  style={{
                    data: { fill: "#B55400", width: 25 },
                    parent: { border: "1px solid #ffffff" },
                  }}
                  data={[
                    { x: "Jan", y: 0, label: `` },
                    { x: "Feb", y: 20, label: `$3000` },
                    { x: "Mar", y: 18, label: `$2200` },
                    { x: "Apr", y: 25, label: `$4000` },
                    { x: "May", y: 22, label: `$3100` },
                    { x: "Jun", y: 16, label: `$2000` },
                    { x: "Jul", y: 17, label: `$2200` },
                    { x: "Aug", y: 25, label: `$3900` },
                    { x: "Sep", y: 20, label: `$3000` },
                    { x: "Oct", y: monthAmount.length, label: `$${total}` },
                    { x: "Nov", y: 0 },
                    { x: "Dec", y: 0 },
                  ]}
                />
              </VictoryChart>
            </GraLine>
          </Horizontal>
          <Horizontal>
            {/* {prueba? <div>{prueba.id_order}</div> : "nada"}
            {prueba ? prueba.filter(dato =>  dato.orderidOrder === prueba[0].id_order 
            ) : "nada"} */}

            {/* prueba[0].map(el => (
              <p style={{marginLeft:"2px", color:"black", backgroundColor:"blue"}}>{el.id_order}</p>

            )) */}
        
          </Horizontal>
        </Vertical>
        <Vertical2>
          <TableInfo >
            <H2>Latest Registered Users</H2>
            {listUsers.length !== 0 ? (
              listUsers.map((user) => (
                <InfoDiv>
                  <h4>{user.nickname}</h4>
                  <h5>{user.created.slice(0, 10)}</h5>
                </InfoDiv>
              ))
            ) : (
              <h1 style={{ color: "red" }}>Sin usuarios</h1>
            )}
          </TableInfo>

          <TableInfo >
            <H2>Nearly out of stock products</H2>
            {listStock.length !== 0 ? (
              listStock.slice(0, 10).map((product) => (
                <InfoDiv>
                  <h4>{product.name_product}</h4>
                  <h5>{product.in_stock}</h5>
                </InfoDiv>
              ))
            ) : (
              <h1 style={{ color: "red" }}>Sin products</h1>
            )}
          </TableInfo>
        </Vertical2>
      </ContainerStadistic>
    </ContainerAdminHome>
  );
};

export default AdminHome;
