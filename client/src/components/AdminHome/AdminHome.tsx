
import { FC, useState } from "react";
import { ContainerNav } from "../ProductContent/ProductContent.style";
import { ContainerAdminHome, ContainerStadistic, GraLine } from "./AdminHome.style";
import { VictoryLine, VictoryChart, VictoryTheme, Curve, VictoryArea, VictoryBar } from "victory";
import { Order } from "../../interfaces";


interface Props {
  totalOrders: Array<Order>;
}

const AdminHome: FC<Props> = ({totalOrders}) => {

  const [month, setMonth] = useState(0)

  // const lengthMonth = totalOrders.filter(el => el.date.slice(8, 10) === '14') funciona para día 
  const lengthMonth = totalOrders.filter(el => el.date.slice(5, 7) === '10')
  const monthAmount = lengthMonth.map(el => el.amount )
  const total = monthAmount?.reduce((a, b) => a + b, 0)
  console.log(total)

  return (
    <ContainerAdminHome>
      <ContainerNav>
        <h3>GABO EL INCREDULO MAYOR</h3>
      </ContainerNav>
      <ContainerStadistic>
        <GraLine >
          <VictoryChart theme={VictoryTheme.grayscale}  height={400} width={800}>
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
      </ContainerStadistic>
    </ContainerAdminHome>
  );
};

export default AdminHome;
