import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUserOrders } from "../../../redux/actions/orders_action";
import { Btn } from "../../../GlobalStyles/GlobalStyles";
import { Fade } from "react-awesome-reveal";
import { Store } from "../../../redux/reducer";
import { StyledOrders } from "../StyledUserPage";
interface UserOrder {
  address: string;
  amount: number;
  date: string;
  id_order: number;
  status: string;
}
const UserOrders = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const orders = useSelector((state: Store) => state.ordersReducer.orders.list);
  const user = JSON.parse(localStorage.getItem("userData")!);

  useEffect(() => {
    dispatch(getUserOrders(user.id));
  }, [dispatch]);

  console.log("orders", orders);
  return (
    <Fade>
      {orders.length > 0 ? (
        <StyledOrders>
          <h2>Your Orders</h2>
          <table>
            <thead>
              <tr>
                <th scope="date">Date</th>
                <th scope="col">Order #</th>
                <th scope="col">Address</th>
                <th scope="col">Total</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order: UserOrder) => {
                return (
                  <tr>
                    <td data-label="Date">{order.date}</td>
                    <td data-label="Order #">{order.id_order}</td>
                    <td data-label="Address">{order.address}</td>
                    <td data-label="Total">{order.amount}</td>
                    <td data-label="Status">{order.status}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </StyledOrders>
      ) : (
        <div>
          <h2>You don't have any orders</h2>
        </div>
      )}
      <Btn className="btn-sec" onClick={() => history.push("/user")}>
        Volver
      </Btn>
    </Fade>
  );
};

export default UserOrders;
