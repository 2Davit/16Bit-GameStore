
import { FC, useState } from "react";
import { ContainerNav } from "../ProductContent/ProductContent.style";
import { ContainerAdminHome, ContainerStadistic, GraLine } from "./AdminHome.style";
import { VictoryLine, VictoryChart, VictoryTheme, Curve, VictoryArea, VictoryBar } from "victory";
import { Order, User, Product } from "../../interfaces";


interface Props {
  totalOrders: Array<Order>;
  totalUsers: Array<User>;
  totalProducts: Array<Product>
}


const AdminHome: FC<Props> = ({ totalOrders, totalUsers, totalProducts }) => {

  const listUsers = totalUsers.filter(user => user.id_user > (totalUsers.length - 10))

  const listStock = totalProducts.filter(product => product.in_stock <= 5);

  // const lengthMonth = totalOrders.filter(el => el.date.slice(8, 10) === '14') funciona para día 
  const lengthMonth = totalOrders.filter(el => el.date.slice(5, 7) === '10')
  const monthAmount = lengthMonth.map(el => el.amount)
  const total = monthAmount?.reduce((a, b) => a + b, 0)
  console.log(total)

  return (
    <ContainerAdminHome>
      <ContainerNav>
        <h3>Armando EL INCREDULO SUPREMO</h3>
      </ContainerNav>
      <ContainerStadistic>
        <GraLine >
          <VictoryChart theme={VictoryTheme.grayscale} height={400} width={800}>
            <VictoryBar
              // interpolation="natural"
              style={{
                data: { stroke: "#000" },
                parent: { border: "1px solid #000000" },
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
                { x: "Oct", y: 22, label: `$${total}` },
                { x: "Nov", y: 0 },
                { x: "Dec", y: 0 },
              ]}
            />
          </VictoryChart>
        </GraLine>
        <div style={{ background: "blue", width: "20%" }}>
          Latest Registered Users
          {listUsers ? listUsers.map((user) => (
            <div style={{ color: "black" }}>
              <h5>{user.nickname}</h5>
              <h5>{user.created.slice(0, 10)}</h5>
            </div>
          )) : 'nada'}
        </div>

        <div style={{ background: "blue", width: "20%" }}>
        Nearly out of stock products
          {listStock ? listStock.slice(0, 10).map(product => (
            <div style={{ color: "black" }}>
              <h5>{product.name_product}</h5>
              <h5>{product.in_stock}</h5>
            </div>
          )) : 'nada'}
        </div>

      </ContainerStadistic>
    </ContainerAdminHome>
  );
};

export default AdminHome;
