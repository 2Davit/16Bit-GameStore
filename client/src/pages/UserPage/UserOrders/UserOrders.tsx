import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUserOrders } from "../../../redux/actions/orders_action";
import { Btn } from "../../../GlobalStyles/GlobalStyles";
import { Fade } from "react-awesome-reveal";
import { Store } from "../../../redux/reducer";
import { StyledOrders } from "../StyledUserPage";
import { Link } from "react-router-dom";
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

  return (
    <Fade>
      {orders.length > 0 ? (
        <StyledOrders>
          <h2>Your Orders</h2>
          <table>
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Order #</th>
                <th scope="col">Address</th>
                <th scope="col">Total</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order: UserOrder) => {
                if (order.status !== "cart") {
                  return (
                    <tr>
                      <td data-label="Date">{order.date.split("T")[0]}</td>
                      <td data-label="Order #">{order.id_order}</td>
                      <td data-label="Address">{order.address}</td>
                      <td data-label="Total">{order.amount}</td>
                      <td data-label="Status">{order.status}</td>
                      <Link to={`/orderdetail/${user.id}/${order.id_order}`}>
                        <button className="btn__orderDetail">
                          Order Detail
                        </button>
                      </Link>
                    </tr>
                  );
                } else {
                  return null;
                }
              })}
            </tbody>
          </table>
          <Btn className="btn-card" onClick={() => history.push("/user")}>
            <i className="fas fa-caret-left"></i> Go back
          </Btn>
        </StyledOrders>
      ) : (
        <div>
          <h2>You don't have any orders</h2>
          <Btn className="btn-card" onClick={() => history.push("/user")}>
            <i className="fas fa-caret-left"></i> Go back
          </Btn>
        </div>
      )}
    </Fade>
  );
};

export default UserOrders;
