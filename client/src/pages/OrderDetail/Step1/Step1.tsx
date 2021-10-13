import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Mini from "../../../components/ProductCard/Mini";
import { Btn } from "../../../GlobalStyles/GlobalStyles";
import { StyledSVG, StepOne } from "../StyledOrderDetail";
import PurchaseStep1 from "../../../assets/img/svg/purchase-steps-1.svg";
import { Fade } from "react-awesome-reveal";
import { ProductInCart } from "../../../interfaces";
import { Store } from "../../../redux/reducer";

const Step1 = () => {
  const history = useHistory();

  const [total, setTotal] = useState(0.0);
  const [subtotal, setSubtotal] = useState(0.0);

  const cart: any = useSelector((state: Store) => state.cartReducer.cart.list);

  useEffect(() => {
    if (cart) {
      setSubtotal(
        cart.reduce((acc: number, product: ProductInCart) => {
          acc = acc + product.price_product * product.quantity!;
          return acc;
        }, 0.0)
      );
    }
  }, [cart]);

  useEffect(() => {
    setTotal(subtotal);
  }, [subtotal]);

  let userInStorage = JSON.parse(localStorage.getItem("userData")!);

  let isRegister = userInStorage ? "/order/payment" : "/signup";

  const handleClick = () => {
    history.push(isRegister);
  };

  if (cart.length < 1) {
    history.push("/home");
  }

  return (
    <div>
      <div
        className="step-container"
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginBottom: "2em",
        }}
      >
        <h2>Your Cart:</h2>
        <StyledSVG src={PurchaseStep1} />
      </div>
      <Fade>
        <StepOne>
          <div>
            {cart.map((purchase: ProductInCart) => {
              return <Mini detail={purchase} key={purchase.id_product} />;
            })}
          </div>
          <div>
            <aside>
              <h3>Order Detail</h3>
              <div className="aside__subtotal">
                <p>Subtotal</p>
                <p>${subtotal}</p>
              </div>
              <div className="aside__discount">
                <p>Discount</p>
                <p>0%</p>
              </div>
              <hr />
              <div className="aside__total">
                <p>Total</p>
                <p>${total}</p>
              </div>
              <Btn className="btn-card" onClick={handleClick}>
                Next
              </Btn>
            </aside>
          </div>
        </StepOne>
      </Fade>
    </div>
  );
};

export default Step1;
