import { FC, useEffect, useState,  } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getOrders } from "../../redux/actions/admin_actions";
import { Store } from "../../redux/reducer/";
import { Order } from "../../interfaces";
import { ContainerNav, ContainerMainContent, IconContainer, BtnPaged1, BtnPaged2, IconPrev, IconNext, Searchbar, Search } from '../ProductContent/ProductContent.style'
import { OrderMainContainer, TitleContainer, OrderContainer, InfoOrder, TitleOrder } from './SalesContent.style'

const SalesContent: FC = () => {

    const totalOrders = useSelector(
        (state: Store) => state.adminReducer.orders
    )
    
    const dispatch = useDispatch();
    const [page, setPage] = useState<number>(0)//iria de 10 en 10 ejm : 0-10,20,30
    const [page2, setPage2] = useState<number>(10)//19
    const [btnNext, setBtnNext] = useState<boolean>(false)
    const [btnPrev, setBtnPrev] = useState<boolean>(false)
    const [orderSearch, setOrderSearch] = useState(totalOrders);
    // let onViewOrders = orderSearch.slice(page, page2)
    useEffect(() => {
        dispatch(getOrders())
    }, [dispatch]);



    // const handleNextPage = () => {
    //     if (orderSearch.length < (page2 + 1)) {
    //         setBtnNext(true)
    //     } else {
    //         setPage(page + 10);
    //         setPage2(page2 + 10)
    //         setBtnPrev(false)
    //     }

    // }

    // const handlePreviousPage = () => {
    //     if (page <= 0) {
    //         setBtnPrev(true)
    //     } else {
    //         setPage(page - 10);
    //         setPage2(page2 - 10)
    //         setBtnNext(false)
    //     }
    // }
    // const searchOrder = (e: any) => {
    //     let search = e.target.value.toLowerCase();
    //     if (search === "") {
    //         setOrderSearch(totalOrders);
    //         setBtnNext(false);
    //     } else {

    //         let newArray = totalOrders.filter((user: any) => {
    //             return user.nickname.toLowerCase().includes(search);
    //         });
    //         setPage(0);
    //         setPage2(10);
    //         setOrderSearch(newArray);
    //     }
    // };

    return (
        <ContainerMainContent>
            <ContainerNav>
            <Searchbar>
          <Search placeholder=' Search orders...'  />
        </Searchbar>
            </ContainerNav>
            {/* onChange={searchOrder} linea 69
            onClick={handlePreviousPage} linea 77
            onClick={handleNextPage} linea 78 */}
            <OrderMainContainer>
            <IconContainer>
                    <BtnPaged1 byeBtn={btnPrev} disabled={btnPrev} ><IconPrev byeBtnI={btnPrev} /></BtnPaged1>
                    <BtnPaged2 byeBtn={btnNext} disabled={btnNext} ><IconNext byeBtnI={btnNext} /></BtnPaged2>
                </IconContainer>
                <TitleContainer >

                    <TitleOrder>Order Id</TitleOrder>
                    <TitleOrder>Status</TitleOrder>
                    <TitleOrder>Buyer</TitleOrder>
                    <TitleOrder>Address</TitleOrder>
                    <TitleOrder>Amount</TitleOrder>
                    <TitleOrder>Date</TitleOrder>

                </TitleContainer>
                {totalOrders ? totalOrders.map((o: Order) => (
                    <OrderContainer backg={o.id_order ? o.id_order % 2 === 0 ? '#e1e1e1': '#eeeeee' : ""} key={o.id_order} style={{ color: "black" }} >
                        <InfoOrder>{o.id_order}</InfoOrder>
                        <InfoOrder>{o.status}</InfoOrder>
                        <InfoOrder>Comprador</InfoOrder>
                        <InfoOrder>{o.address}</InfoOrder>
                        <InfoOrder>{o.amount}</InfoOrder>
                        <InfoOrder>{o.date}</InfoOrder>


                    </OrderContainer>
                )) : "No Orders Found"}
            </OrderMainContainer>
        </ContainerMainContent>
    )
}

export default SalesContent
