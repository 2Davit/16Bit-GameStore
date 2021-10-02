import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getProductDetail } from "../../redux/actions/products_action";
import { Store } from "../../redux/reducer/productsReducer";
import { GameDetail, StyledSVG } from "./StyledProductDetail";
import { Btn, QuantityButton } from "../../GlobalStyles/GlobalStyles";
import cart from "../../assets/img/svg/cart.svg";
import joystick from "../../assets/img/svg/joystick.svg";
import mercadopagoimg from "../../assets/img/mercadopagoimg.webp";
import fivestars from "../../assets/img/fivestars.png";



interface Props {
  id: string;
}

const Detail: FC = () => {
  const { id } = useParams<Props>();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetail(parseInt(id)));
  }, [dispatch, id]);

  const detailProduct = useSelector(
    (state: Store) => state.productsReducer.detailProduct
  );

  interface Genre {
    name_genre: string;
  }

  return (
    <>
      <GameDetail>
        <NavLink to="/home" className='btn' >
          <button className="nes-btn is-primary">Home</button>
        </NavLink>
        <div className="game__img">
          {detailProduct.image_product?.map((e: string, i: number) => (
            <img
              key={i}
              src={detailProduct.image_product[0]}
              alt={detailProduct.name_product}
            />
          ))}
        </div>
        <div className="game__info">
          <h1 className="game__title">{detailProduct.name_product}</h1>
          <ul className="game__categories">
            {detailProduct.genres?.map((e: Genre, i: number) => (
              <li key={i} className="game__category">
                {e.name_genre.toUpperCase()}
              </li>
            ))}
          </ul>
          <div className="game__container-price-score">
            <p className="game__price">${detailProduct.price_product}</p>
            <span className="game__star-container">
              <img
                className="ratingStars"
                src={fivestars}
                alt="fivestars rating"
              />
            </span>
          </div>
          <p className="game__description">
            {detailProduct.description_product}
          </p>
          <Btn className="btn-youtube">Ver video</Btn>
          <div className="game__quantity">
            <span>Amount to buy:</span>
            <QuantityButton>-</QuantityButton>
            <span className="game__quantityvalue quantitytext">{20}</span>
            <QuantityButton>+</QuantityButton>
          </div>
          <p className="game__stock">Stock: 25</p>
          <div className="game__purchase-container">
            <div className="game__buttons">
              <Btn className="btn-card btn-img">
                Buy now
                <StyledSVG src={joystick} />
              </Btn>
              <Btn className="btn-sec btn-img">
                Add to cart
                <StyledSVG src={cart} />
              </Btn>
            </div>
            <img
              className="game__payment-methods-icons"
              src={mercadopagoimg}
              alt="mercadopago img"
            />
          </div>
        </div>
      </GameDetail>
    </>
  );
};

export default Detail;
