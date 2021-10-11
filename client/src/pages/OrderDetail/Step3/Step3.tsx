import React from "react";
import { useHistory } from "react-router-dom";
import PurchaseStep3 from "../../../assets/img/svg/purchase-steps-3.svg";
import { StepThree, StyledSVG } from "../StyledOrderDetail";
import { Btn } from "../../../GlobalStyles/GlobalStyles";
import Confetti from "react-confetti";
const Step3 = () => {
  const history = useHistory();

  return (
    <StepThree>
      <Confetti width={window.innerWidth - 16} height={window.innerHeight} />
      <h2 className="mb-1">Order details</h2>
      <StyledSVG className="mb-2" src={PurchaseStep3} />
      <div className="step__info">
        <img src="https://c.tenor.com/a_JvvZ_a5dAAAAAi/sonic-fox.gif" alt='not found' />
        <p>Your purchase has been made successfully</p>
        <p>
          Your order number is <span>0000</span>
        </p>
      </div>
      <Btn className="btn btn-card" onClick={() => history.push("/home")}>
        Continue shopping
      </Btn>
    </StepThree>
  );
};
export default Step3;
