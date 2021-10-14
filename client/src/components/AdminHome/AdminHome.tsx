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
import { Order, User, Product } from "../../interfaces";

interface Props {
  totalOrders: Array<Order>;
  totalUsers: Array<User>;
  totalProducts: Array<Product>;
}

const AdminHome: FC<Props> = ({ totalOrders, totalUsers, totalProducts }) => {
  const listUsers = totalUsers.filter(
    (user) => user.id_user > totalUsers.length - 10
  );

  const listStock = totalProducts.filter((product) => product.in_stock <= 5);

  // const lengthMonth = totalOrders.filter(el => el.date.slice(8, 10) === '14') funciona para día
  const lengthMonth = totalOrders.filter((el) => el.date.slice(5, 7) === "10");
  const monthAmount = lengthMonth.map((el) => el.amount);
  const total = monthAmount?.reduce((a, b) => a + b, 0);
  console.log("stock", listStock);

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
            <h2>nada</h2>
        
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
