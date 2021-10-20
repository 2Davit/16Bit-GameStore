import { FC } from "react";
import { ContainerNav } from "../ProductContent/ProductContent.style";
import {
  ContainerAdminHome,
  ContainerStadistic,
  GraLine,
  Vertical,
  Vertical2,
  Horizontal,
  Horizontal2,
  TableInfo,
  H2,
  H3,
  InfoDiv,
  OnSaleTable,
  OnSaleDiv,
  ProductNameDiv,
  ProductStockDiv
} from "./AdminHome.style";
import {
  VictoryChart,
  VictoryTheme,
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
 /*  const listUsers = totalUsers.filter(
    (user) => user.id_user > totalUsers.length - 10
  ); */

  
  const ordered = totalUsers.sort(function (a, b) {
    return b.id_user - a.id_user;
  });
  const filteredUsers = ordered.slice(0, 10)


  const listStock = totalProducts.filter((product) => product.in_stock <= 5);
      
  const lengthMonth = totalOrders.filter((el) => el.date.slice(5, 7) === "10");
  const monthAmount = lengthMonth.map((el) => el.amount);
  const total = monthAmount?.reduce((a, b) => a + b, 0);

  const onSale = totalProducts.filter((p) => p.on_sale === true);





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
                width={1500}
              >
                <VictoryBar
                  style={{
                    data: { fill: "#B55400", width: 45 },
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
          
        </Vertical>
        <Vertical2>
        <Horizontal2>
            <OnSaleTable>
              <h2>On sale products</h2>
              { onSale ? onSale.map(product => (
                <OnSaleDiv>
                  <h5>{product.id_product}</h5>
                  <img src={product.thumbnail_product} width="50px" height="50px" alt="img_product"/>
                  <h4>{product.name_product}</h4>
                  <h5>{product.in_stock}</h5>
                </OnSaleDiv>

              )): <h2 style={{ textAlign: 'center' }}>No Products On Sale</h2>}
             </OnSaleTable> 
          </Horizontal2>
          <TableInfo >
            <H2>Latest Registered Users</H2>
            <div style={{height: '80%', width: '100%', overflow:"scroll"}}>
            {filteredUsers.length !== 0 ? (
              filteredUsers.map((user) => (
                <InfoDiv>
                  <h4>{user.nickname}</h4>
                  <h5>{user.created.slice(0, 10)}</h5>
                </InfoDiv>
              ))
              ) : (
                <h2 style={{ textAlign: 'center' }}>No Users Registered</h2>
                )}
            </div>
            <H3>Total Users: {totalUsers.length}</H3>
          </TableInfo>

          <TableInfo >
            <H2>Low stock products</H2>
            {listStock.length !== 0 ? (
              listStock.slice(0, 10).map((product) => (
                <InfoDiv>
                  <ProductNameDiv >{product.name_product.length > 26 ? product.name_product.slice(0,26) + '...' : product.name_product}</ProductNameDiv>
                  <ProductStockDiv>{product.in_stock}</ProductStockDiv>
                </InfoDiv>
              ))
            ) : (
              <h2 style={{ textAlign: 'center' }}>All Seems Ok</h2>
            )}
          </TableInfo>
        </Vertical2>
      </ContainerStadistic>
    </ContainerAdminHome>
  );
};

export default AdminHome;
