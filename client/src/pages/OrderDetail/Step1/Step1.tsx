import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Mini from "../../../components/ProductCard/Mini";
import { Btn } from "../../../GlobalStyles/GlobalStyles";
import { StyledSVG, StepOne, GameClose } from "../StyledOrderDetail";
import PurchaseStep1 from "../../../assets/img/svg/purchase-steps-1.svg";
import { Fade } from "react-awesome-reveal";
import { ProductInCart } from "../../../interfaces";
import { Store } from "../../../redux/reducer";
import { FormStyled } from "../../FormRegister/StyledFormRegister";
import Modal from "react-modal";
import MemoryGame from "./memory";
import closeCross from "../../../assets/img/svg/close-filled-purple.svg";

const Step1 = () => {
  const history = useHistory();

  const [total, setTotal] = useState(0.0);
  const [subtotal, setSubtotal] = useState(0.0);
  const [coupon, setCoupon] = useState(0);

  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(40, 40, 40, 0.95)",
      zIndex: "9999",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      padding: "3em 0.5em 1em 0.5em",
      width: document.documentElement.clientWidth - 50,
      maxWidth: "500px",
      transform: "translate(-50%, -50%)",
      border: "2px solid #00a8ff",
      borderRadius: "10px",
      boxShadow: "0 0 5px #00a8ff",
      color: "#F5F4F8",
      background: "#222",
      zIndex: "9999",
    },
  };

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
    setTotal(subtotal - subtotal * (coupon / 100));
  }, [subtotal, coupon]);

  let userInStorage = JSON.parse(localStorage.getItem("userData")!);

  let isRegister = userInStorage ? "/order/payment" : "/signup";

  const handleClick = () => {
    history.push(isRegister);
  };

  const [memory, setMemory] = useState(false);
  const handleGame = (e: any) => {
    e.preventDefault();
    document.body.style.overflow = "hidden";
    setMemory(true);
  };

  const closeGame = (e: any) => {
    e.preventDefault();
    document.body.style.overflow = "unset";
    setMemory(false);
  };

  const handleCoupon = (e: any) => {
    if (e.target.value === "ALEXITO") {
      setCoupon(25);
    } else {
      setCoupon(0);
    }
  };

  if (cart?.length < 1) {
    history.push("/home");
  }
  return (
    <div>
      {
        <Modal
          isOpen={memory}
          style={customStyles}
          contentLabel={"Login"}
          portalClassName={"ReactModalPortal"}
          ariaHideApp={false}
        >
          <GameClose onClick={closeGame}>
            <StyledSVG src={closeCross} />
          </GameClose>
          <Fade big>
            <MemoryGame />
          </Fade>
        </Modal>
      }
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
              <FormStyled className="coupon">
                <label>
                  <span>Discount coupon</span>
                  <input
                    className={coupon > 0 ? "checked" : ""}
                    type="text"
                    onChange={handleCoupon}
                  />
                </label>
                <Btn className="btn-sec" onClick={handleGame}>
                  Win a discount code
                </Btn>
              </FormStyled>
              <div className="aside__subtotal">
                <p>Subtotal</p>
                <p>${subtotal}</p>
              </div>
              <div className="aside__discount">
                <p>Discount</p>
                <p>{coupon}%</p>
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
