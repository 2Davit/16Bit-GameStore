import { FC, useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "nes.css/css/nes.min.css";
import { useDispatch } from "react-redux";
import { addItemCart } from "../../redux/actions/cart_actions";
import {  Btn, BtnCartCard, OfferImg } from "../../GlobalStyles/GlobalStyles";
import { StyledProductCard, DivBtn, PriceGenreCont, Genres, Price, GenresContainer} from "./StyledProductCard";
import cart from "../../assets/img/svg/cart.svg";
import { toast } from "react-toastify";
import { animateScroll } from "react-scroll";
import { ProductInCart } from "../../interfaces";
import offer from '../../assets/img/offer.png'

interface Props {
  game: ProductInCart;
}
// cart.list[Gamepad.id].quantity >= 1;
const ProductCard: FC<Props> = ({ game }) => {
  // const cartStorage = JSON.parse(localStorage.getItem("cart")!);
  // const cartNumber: any = useSelector(
  //   (state: Store) => state.cartReducer.cart.list
  // );
  const [message, setMessage] = useState<string>("");
  const dispatch = useDispatch();

  const handleEffect = useCallback(() => {
    let stockInLocal = JSON.parse(localStorage.getItem("cart")!);
    let gameStorage = stockInLocal?.find(
      (g: ProductInCart) => g.id_product === game.id_product
    );

    let unavailable = gameStorage?.quantity >= game.in_stock ? true : false;
    return unavailable;
  }, [game.id_product, game.in_stock]);

  let disabled = handleEffect();

  useEffect(() => {
    handleEffect();
  }, [message, handleEffect]);

  const handleOpenClick = (ev: any) => {
    animateScroll.scrollTo(230, { duration: 300 });
  };

  const capitalize = (string:string) => {
    return string[0].toUpperCase() + string.slice(1);
  };

  const handleClick = () => {
    setMessage(message + "a");
    //el message de arriba es esencial. Se agradece no tocar!!
    let gameToDispatch = { ...game };
    gameToDispatch.quantity = 1;
    dispatch(addItemCart(gameToDispatch));
    toast.success(`${game.name_product} was added to your cart! 👾`, {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <StyledProductCard className="card">
      <div className="card__imgContainer">
        <img
          className="card__img"
          src={game.thumbnail_product}
          alt={game.name_product}
        />
        {game.on_sale === true ? <OfferImg src={offer}/> : ''}
      </div>
      <div className="card__content">
        <p className="card__title">
          {game.name_product?.length > 33
            ? capitalize(game.name_product.substring(0, 30)) + "..."
            : capitalize(game.name_product)}
        </p>
        <PriceGenreCont>
        <Price>${game.price_product}</Price>
        <GenresContainer>
          {game.name_genre? game.name_genre.map(genre => (
            
            <Genres>{genre}</Genres>
          )) : game.genres.map(genre => (
            
            <Genres>{genre.name_genre}</Genres>
          ))}
          </GenresContainer>
        </PriceGenreCont>
        
        {!disabled ? (
          <DivBtn className='div'>
            <BtnCartCard
              onClick={handleClick}
              // disabled={disabled}
            >
              {/* <p>Add Cart</p> */}
              {/* {cartNumber[game.id_product!].quantity >= 1 */}
              {/* ? "Already in cart"  nose porque no funcaaaaa*/}
              <img src={cart} alt="not found" />

            </BtnCartCard>

           </DivBtn>
        ) : (
          <Btn className="btn-sinstock">Sin Stock</Btn>
        )}
      </div>
      <Link
        to={`/game/${game.id_product}`}
        className="card__link"
        onClick={handleOpenClick}
      ></Link>
    </StyledProductCard>
  );
};

export default ProductCard;
