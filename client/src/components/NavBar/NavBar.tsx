import React, { FC } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
//Componentes
import { SearchBar } from "../index";
import { Title } from "../index";
//Redux
import { getAllProducts } from "../../redux/actions/products_action";
import { Store } from "../../redux/reducer";
import { useDispatch, useSelector } from "react-redux";
import { openLogin } from "../../redux/actions/global_actions";
//Interfaces
import { ProductInCart } from "../../interfaces";
//Estilos
import { StyledNavBar } from "./StyledNavBar";
import { Dropdown, StyledSVG } from "../../GlobalStyles/GlobalStyles";
//Assets
import cartIco from "../../assets/img/svg/cart2.svg";
import heart from "../../assets/img/svg/heart1.svg";
import userPic from "../../assets/img/svg/user.svg";
import defaultAvatar from "../../assets/img/avatars/Avatar_9.png";
import { verifyUser } from "../../redux/actions/auth_actions";

interface Props {
  setPage(num: number): void;
  toggleModal: any;
}

const NavBar: FC<Props> = ({ setPage, toggleModal }: any) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isAuthenticated, getAccessTokenSilently, loginWithPopup, logout } =
    useAuth0();

  const user = JSON.parse(localStorage.getItem("userData")!);
  const cart: any = JSON.parse(localStorage.getItem("cart")!);
  const subtotal = cart?.reduce((acc: number, product: ProductInCart) => {
    acc = acc + product.price_product! * product.quantity!;
    return acc;
  }, 0.0);

  const order = {
    id_user: user?.id,
    status_order: "cart",
    amount_order: subtotal,
    cart: cart?.map((c: ProductInCart) => ({
      id_product: c.id_product,
      price_product: c.price_product,
      quantity: c.quantity,
    })),
  };

  const homeOnClick = () => {
    dispatch(getAllProducts());
  };

  const openLoginModal = () => {
    history.push("/login");
    dispatch(openLogin(true));
  };

  const handleLogin = async () => {
    await loginWithPopup();
    const token = await getAccessTokenSilently();
    dispatch(verifyUser(token));
  };

  const handleLogout = async () => {
    if (order.amount_order > 0) {
      await axios.post("/order/save", order);
    }
    logout();
    localStorage.clear();
  };

  const cartNumber: any = useSelector(
    (state: Store) => state.cartReducer.cart.list
  );

  // ================Dejar comentado==================
  // const user: User = useSelector((state: Store) => state.authReducer.user);
  // const userIsAdmin: UserState = useSelector((state: Store) => state.authReducer.role.admin);
  // ================Dejar comentado==================

  const number = cartNumber?.reduce((acc: number, prod: ProductInCart) => {
    acc = acc + prod.quantity!;
    return acc;
  }, 0);

  return (
    <StyledNavBar>
      <div className="wrapper">
        <div className="navbar__top">
          <div className="navbar__logo">
            <Link to="/home" onClick={homeOnClick}>
              <Title />
            </Link>
          </div>
          <SearchBar setPage={setPage} />
          <ul className="navbar__options">
            {user?.data.name && (
              <li>
                <Link to="/favs">
                  <StyledSVG src={heart} />
                  <span>Favs</span>
                </Link>
              </li>
            )}
            <Dropdown>
              {user?.data.name ? (
                <div className="navbar__profile-pic">
                  <img src={user?.data.avatar} alt="Imagen de perfil" />
                </div>
              ) : (
                <StyledSVG src={userPic} />
              )}
              <span>User</span>
              <ul>
                {user?.data.name ? (
                  <>
                    <li className="dropdown__first-name">
                      <p>{user.data.name}</p>
                    </li>
                    <li>
                      <Link to="/user">My Profile</Link>
                    </li>
                    {/* {userIsAdmin && (
                        <li>
                          <Link to="/admin">Admin</Link>
                        </li>
                      )} */}
                    <li>
                      <div className="dropdown__button">
                        <button onClick={handleLogout}>Logout</button>
                      </div>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <button
                        className="dropdown__button"
                        onClick={handleLogin}
                      >
                        Login
                      </button>
                    </li>
                    {/*                     <li>
                      <Link to="/signup" className="dropdown__button">
                        Signup
                      </Link>
                    </li> */}
                  </>
                )}
              </ul>
            </Dropdown>

            <li>
              <button onClick={toggleModal}>
                <StyledSVG src={cartIco} />
                <span>Cart</span>
                {!!number && (
                  <span className="cart__number">
                    {number >= 100 ? "99+" : number}
                  </span>
                )}
              </button>
            </li>
          </ul>
        </div>
        <div className="navbar__bottom">
          <ul className="navbar-bottom__menu">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </StyledNavBar>
  );
};

export default NavBar;
