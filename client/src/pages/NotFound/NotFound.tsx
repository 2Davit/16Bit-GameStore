import React, { FC } from "react";
import NotFoundImage from '../../assets/NotFound.png'
import { useHistory } from "react-router-dom";
import { BtnOnSale } from "../../components/Filter/StyledFilter";
import { NotFoundImg } from './NotFound.style'

const NotFound: FC = () => {
  const history = useHistory();
  return (
    <>
    <BtnOnSale style={{marginTop: "1rem", marginLeft:"1rem", width: "10em"}} className=" btn-card" onClick={() => history.push("/home")}>
          <i className="fas fa-caret-left"></i> Go back
        </BtnOnSale>
    <div style={{height:"100vh", display:"flex", alignItems: "center", justifyContent: "center", margin: "1rem 0"}}>
      <NotFoundImg  src={NotFoundImage} alt='notfound.png'/> 
    </div>
    </>
  );
};

export default NotFound;
