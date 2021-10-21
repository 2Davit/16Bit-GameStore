import { FC, useState } from "react";
import { Order, User } from "../../interfaces";
import axios from 'axios';
import {
  ContainerNav,
  ContainerMainContent,
  IconContainer,
  BtnPaged1,
  BtnPaged2,
  IconPrev,
  IconNext,
  Searchbar,
  Search,
  AddBtns,
  ContainerNotExist,
  H2,
} from "../ProductContent/ProductContent.style";
import {
  OrderMainContainer,
  TitleContainer,
  OrderContainer,
  InfoOrder,
  TitleOrder,
  OrderSelect,
  NavBtn,
  InfoSelect
} from "./SalesContent.style";

interface Props {
  totalOrders: Array<Order>;
  totalUsers: Array<User>;
}


const SalesContent: FC<Props> = ({ totalOrders, totalUsers }) => {

  const [page, setPage] = useState<number>(0); //iria de 10 en 10 ejm : 0-10,20,30
  const [page2, setPage2] = useState<number>(10); //19
  const [btnNext, setBtnNext] = useState<boolean>(false);
  const [btnPrev, setBtnPrev] = useState<boolean>(false);


  let orderOldest = totalOrders.sort(function (a, b) {
    return a.id_order - b.id_order;
  });

  const [orderSearch, setOrderSearch] = useState(totalOrders);
  const [btnStatus, setBtnStatus] = useState<boolean>(true);
  let onViewOrders = orderSearch.slice(page, page2);

  const handleSelect = (e: any) => {
    if (e.target.value === "fulfilled") {
      setOrderSearch(
        totalOrders.filter((orders) => orders.status === "fulfilled")
      );
    } else if (e.target.value === "pending") {
      setOrderSearch(
        totalOrders.filter((orders) => orders.status === "pending")
      );
    } else if (e.target.value === "delivered") {
      setOrderSearch(
        totalOrders.filter((orders) => orders.status === "delivered")
      );
    } else if (e.target.value === "cancelled") {
      setOrderSearch(
        totalOrders.filter((orders) => orders.status === "cancelled")
      );
    } else if (e.target.value === "cart") {
      setOrderSearch(totalOrders.filter((orders) => orders.status === "cart"));
    } else {
      setOrderSearch(totalOrders);
    }
  };
  let orderLatest = totalOrders.sort(function (a, b) {
    return b.id_order - a.id_order;
  });

  const handleOldest = () => {
    setOrderSearch(orderOldest);
    setBtnStatus(false);
  };
  const handleLatest = () => {
    setOrderSearch([...orderLatest]);
    setBtnStatus(true);
  };

  const handleNextPage = () => {
    if (orderSearch.length < page2 + 1) {
      setBtnNext(true);
    } else {
      setPage(page + 10);
      setPage2(page2 + 10);
      setBtnPrev(false);
    }
  };

  const handlePreviousPage = () => {
    if (page <= 0) {
      setBtnPrev(true);
    } else {
      setPage(page - 10);
      setPage2(page2 - 10);
      setBtnNext(false);
    }
  };

  const searchOrder = (e: any) => {
    let search = e.target.value.toLowerCase();

    if (search === "") {
      setOrderSearch(totalOrders);
      setBtnNext(false);
    } else {


      let newArray = totalOrders.filter((user: any) => {
        return user.nickname_user.toLowerCase().includes(search);
      });

      setPage(0);
      setPage2(10);
      setOrderSearch(newArray);
    }
  };

  const handleSelectStatus = (e: any) => {
    axios.put(`/order/${e.target.name}/${e.target.value}`)
    if (e.target.value === 'dispatched' || e.target.value === 'delivered') {
        axios.post('/email/status', { id_order: e.target.name,
                                      status: e.target.value })
    }
  }





  return (
    <ContainerMainContent>
      <ContainerNav>
        <Searchbar    >
          <Search placeholder=" Search orders..." onChange={searchOrder} />

        </Searchbar>
        <AddBtns>
          <OrderSelect onClick={(e) => handleSelect(e)}>
            <option value="">Order Status</option>
            <option value="pending">Pending</option>
            <option value="fulfilled">Fulfilled</option>
            <option value="delivered">Delivered</option>
            <option value="dispatched">Dispatched</option>
            <option value="cancelled">Cancelled</option>
            <option value="cart">Cart</option>

          </OrderSelect>
          {btnStatus ? (
            <NavBtn onClick={() => handleOldest()}>Older Sales</NavBtn>
          ) : (
            <NavBtn onClick={() => handleLatest()}>Latest Sales</NavBtn>
          )}
        </AddBtns>
      </ContainerNav>

      <OrderMainContainer>
        <IconContainer>
          <BtnPaged1
            byeBtn={btnPrev}
            disabled={btnPrev}
            onClick={handlePreviousPage}
          >
            <IconPrev byeBtnI={btnPrev} />
          </BtnPaged1>
          <BtnPaged2
            byeBtn={btnNext}
            disabled={btnNext}
            onClick={handleNextPage}
          >
            <IconNext byeBtnI={btnNext} />
          </BtnPaged2>
        </IconContainer>
        <TitleContainer>
          <TitleOrder>Order Id</TitleOrder>
          <TitleOrder>Status</TitleOrder>
          <TitleOrder>Buyer</TitleOrder>
          <TitleOrder>Address</TitleOrder>
          <TitleOrder>Amount</TitleOrder>
          <TitleOrder>Date</TitleOrder>
        </TitleContainer>
        {onViewOrders.length > 0 ? (
          onViewOrders.map((o: Order) => (
            <OrderContainer
              backg={
                o.id_order ? (o.id_order % 2 === 0 ? "#e1e1e1" : "#eeeeee") : ""
              }
              key={o.id_order}
              style={{ color: "black" }}
            >
              <InfoOrder>{o.id_order}</InfoOrder>
              <InfoSelect name={o.id_order} onClick={(e) => handleSelectStatus(e)}>
                <option value="pending">Pending</option>
                <option value="fulfilled">Fulfilled</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
                <option value="dispatched">Dispatched</option>

              </InfoSelect>
              {/* <InfoOrder></InfoOrder> */}
              <InfoOrder>{o.nickname_user}</InfoOrder>
              <InfoOrder>{o.address}</InfoOrder>
              <InfoOrder>{o.amount}</InfoOrder>
              <InfoOrder>{o.date.slice(0, 10)}</InfoOrder>
            </OrderContainer>
          ))
        ) : (
          <ContainerNotExist>
            <H2>Oops, No Orders Found...</H2>
          </ContainerNotExist>
        )}
      </OrderMainContainer>
    </ContainerMainContent>
  );
};

export default SalesContent;
