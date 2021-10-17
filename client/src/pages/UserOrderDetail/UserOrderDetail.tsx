import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { StyledOrderDetail } from "../UserPage/StyledUserPage";
import { Btn } from "../../GlobalStyles/GlobalStyles";
import { Fade } from "react-awesome-reveal";

interface Props {
  idOrder: string;
  idUser: string;
}
interface OrderDetail {
  address_order: string;
  amount_order: number;
  status_order: string;
  date: string;
  orderProduct: Array<any>;
  id_order: number;
}
interface InputReview {
  score: number;
  description: string;
}

function UserOrderDetail() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { idOrder, idUser } = useParams<Props>();
  const [orderDetail, setOrderDetail] = useState<OrderDetail>({
    id_order: 0,
    address_order: "",
    amount_order: 0,
    status_order: "",
    date: "",
    orderProduct: [],
  });

  const [userReview, setUserReview] = useState<Array<any>>([]);
  const [input, setInput] = useState<InputReview>({
    score: 0,
    description: "",
  });

  
  const user = JSON.parse(localStorage.getItem("userData")!);
  useEffect(() => {
    async function getUserReviews(idUser: string) {
      let userReviews = await axios.get(`/videogames/review/0/${idUser}`);
      setUserReview(userReviews.data)
      return userReviews.data;
    }

    async function getOrderDetail(idOrder: string) {
      let detail = await axios.get(`/order/${idOrder}`);
      let detailOrder = detail.data;
      setOrderDetail(detailOrder);
      return detailOrder;
    }
    getOrderDetail(idOrder);
    getUserReviews(idUser);
  }, [idOrder, idUser])
  
  
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
  console.log(userReview);
  return (
    <Fade>
      <StyledOrderDetail>
        <h2>Order #{orderDetail.id_order} </h2>
        <div className="tables-container">
          <div>
            <h3>Order Details</h3>
            <table className="table-small">
              <tbody>
                <tr>
                  <td>Date:</td>
                  <td>{orderDetail.date.split("T")[0]}</td>
                </tr>
                <tr>
                  <td>Total amount:</td>
                  <td>${orderDetail.amount_order}</td>
                </tr>
                <tr>
                  <td>Status</td>
                  <td>{orderDetail.status_order}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h3>Products</h3>
            <table>
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Unit Price</th>
                  <th scope="col">Total Price</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {orderDetail.orderProduct &&
                  orderDetail.orderProduct.map((index) => {

                    
                    return (
                      <tr key={index.id}>
                        <td data-label="Name">{index.product.name_product}</td>
                        <td data-label="Quantity">{index.quantity}</td>
                        <td data-label="Unit Price">
                          ${index.product.price_product}
                        </td>
                        <td data-label="Total Price">
                          ${index.quantity * index.product.price_product}
                        </td>
                        <td>
                          <Link to={`/review/${user.id}/${index.product.id_product}`}>
                            <button className="btn__leaveReview">
                            {!userReview.find((r: any) => r.productIdProduct === index.product.id_product) ? 'Leave a review 🖋' : 'Check your review 🔍'}
                            </button>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
              <tfoot>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Total: ${orderDetail?.amount_order}</td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <Btn className=" btn-card" onClick={() => history.push("/orders")}>
          <i className="fas fa-caret-left"></i> Go back
        </Btn>
      </StyledOrderDetail>
    </Fade>
  );
}

export default UserOrderDetail;
