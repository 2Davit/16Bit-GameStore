import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

interface Props {
  idOrder: string;
}
interface OrderDetail {
  address_order: string;
  amount_order: number;
  date: string;
  orderProduct: Array<any>;
}
interface InputReview {
  score: number;
  description: string;
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
  const [input, setInput] = useState<InputReview>({
    score: 0,
    description: "",
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
  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }

  async function handleReview(idUser: string, idProduct: string) {
    try {
      await axios.post(`/videogames/review/${idUser}/${idProduct}`, input);
      setInput({
        score: 0,
        description: "",
      });
      alert("Thanks for send your review");
    } catch {
      alert("Ya dejaste una review");
    }
  }

  return (
    <div>
      <div>Address: {orderDetail.address_order}</div>
      <div>Amount Order: {orderDetail.amount_order}</div>
      <div>Date: {orderDetail.date}</div>
      <div>
        {orderDetail.orderProduct.map((index: any) => {
          return (
            <>
              <h4>Name Product: {index.product.name_product}</h4>
              <h4>Price Product: ${index.product.price_product}</h4>
              <h4>Quantity: {index.quantity}</h4>
              <Link to={`/game/${index.product.id_product}`}>
                <button>Game Detail</button>
              </Link>

              <form>
                <label>YOUR OPINION</label>
                <textarea
                  value={input.description}
                  name="description"
                  onChange={(e: any) => handleChange(e)}
                ></textarea>
                <label>YOUR SCORE</label>
                <input
                  value={input.score}
                  name="score"
                  onChange={(e: any) => handleChange(e)}
                  type="number"
                  min="1"
                  max="5"
                ></input>
              </form>
              <button
                onClick={() => handleReview(user.id, index.product.id_product)}
              >
                Send Review
              </button>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default UserOrderDetail;
