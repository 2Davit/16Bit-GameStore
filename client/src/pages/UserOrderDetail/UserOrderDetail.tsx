import React, { useEffect, useState } from "react";
/* import Rating from "react-rating"; */
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import ProductUserDetail from "../../components/ProductUserDetail/ProductUserDetail";

interface Props {
  idOrder: string;
}
interface OrderDetail {
  address_order: string;
  amount_order: number;
  date: string;
  orderProduct: Array<any>;
}


function UserOrderDetail() {
  const dispatch = useDispatch();
  const { idOrder } = useParams<Props>();
  const [orderDetail, setOrderDetail] = useState<OrderDetail>({
    address_order: "",
    amount_order: 0,
    date: "",
    orderProduct: [],
  });
  
  const user = JSON.parse(localStorage.getItem("userData")!);

  useEffect(() => {
    async function getOrderDetail(idOrder: string) {
      let detail = await axios.get(`/order/${idOrder}`);
      let detailOrder = detail.data;
      setOrderDetail(detailOrder);
      return detailOrder;
    }
    getOrderDetail(idOrder);
  }, [idOrder]);
  

  return (
    <div>
      <div>Address: {orderDetail.address_order}</div>
      <div>Amount Order: {orderDetail.amount_order}</div>
      <div>Date: {orderDetail.date}</div>
      <div>
        {orderDetail.orderProduct.map((index: any) => 
          
            <ProductUserDetail index={index} idUser={user.id} />
          
        )}
      </div>
    </div>
  );
}

export default UserOrderDetail;
