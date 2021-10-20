import React, { FC } from "react";
import { Link, useHistory } from "react-router-dom";
//Componentes
import { SearchBar } from "../index";
import { LogOut } from "../index";
import { Title } from "../index";
//Redux
import { getAllProducts } from "../../redux/actions/products_action";
import { Store } from "../../redux/reducer";
import { useDispatch, useSelector } from "react-redux";
import { openLogin } from "../../redux/actions/global_actions";
//Interfaces
import { ProductInCart } from "../../interfaces";
//Estilos
import { StyledNavBar, TotalNav, Img, NavbarResponsive } from "./StyledNavBar";
import { Dropdown, StyledSVG } from "../../GlobalStyles/GlobalStyles";
//Assets
import cart from "../../assets/img/svg/cart2.svg";
import heart from "../../assets/img/svg/heart1.svg";
import userPic from "../../assets/img/svg/user.svg";
import defaultAvatar from "../../assets/img/avatars/Avatar_9.png";

import alien from "../../assets/1.png"
import { FaShoppingCart } from 'react-icons/fa'
import { BsFillHeartFill } from 'react-icons/bs'


interface Props {
  setPage(num: number): void;
  toggleModal: any;
}

const NavBar: FC<Props> = ({ setPage, toggleModal }: any) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const homeOnClick = () => {
    dispatch(getAllProducts());
  };

  const openLoginModal = () => {
    history.push("/login");
    dispatch(openLogin(true));
  };

  const cartNumber: any = useSelector(
    (state: Store) => state.cartReducer.cart.list
  );

  const isAdmin = useSelector((state: Store) => state.authReducer.role.admin);

  const cartStorage = JSON.parse(localStorage.getItem("cart")!);

  // ================Dejar comentado==================
  // const user: User = useSelector((state: Store) => state.authReducer.user);
  // const userIsAdmin: UserState = useSelector((state: Store) => state.authReducer.role.admin);
  // ================Dejar comentado==================

  const number = cartStorage?.reduce((acc: number, prod: ProductInCart) => {
    acc = acc + prod.quantity!;
    return acc;
  }, 0);

  const user = JSON.parse(localStorage.getItem("userData")!);

  return (
    <TotalNav>
    <StyledNavBar>
      
        <div className="navbar__top">
          <div className="navbar__logo">
            <Link to="/home" onClick={homeOnClick}>
              {/* <Title /> */}

              <Img src={alien} />

            </Link>
          </div>
          <div className='search'>
            <SearchBar setPage={setPage} />
          </div>
          <ul className="navbar__options">
            {user?.data.name && (
              <li>
                <Link to="/favs" style={{display: 'flex', flexDirection: 'column'}}>
                  <StyledSVG src={heart} />
                  <span>Favs</span>
                </Link>
              </li>
            )}
            <Dropdown>
              <div style={{width: '33%', height: '100%', display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                {user?.data.name ? (
                  <div className="navbar__profile-pic">
                    <img src={defaultAvatar} alt="Imagen de perfil" />
                  </div>
                ) : (
                  <StyledSVG src={userPic} />
                  )}
                  <span>User</span>
              </div>
              <ul>
                {user?.data.name ? (
                  <>
                    <li className="dropdown__first-name">
                      <p>{user.data.name}</p>
                    </li>
                    <li>
                      <Link to="/user">My Profile</Link>
                    </li>
                    {isAdmin && (
                      <li className="dropdown__button">
                        <Link to="/admin">Admin Panel</Link>
                      </li>
                    )}
                    <li>
                      <div className="dropdown__button">
                        <LogOut />
                      </div>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <button
                        className="dropdown__button"
                        onClick={openLoginModal}
                      >
                        Login
                      </button>
                    </li>
                    <li>
                      <Link to="/signup" className="dropdown__button" >
                        Signup
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </Dropdown>

            <li>
              <button onClick={toggleModal} style={{display: 'flex', flexDirection: 'column'}}>
                <StyledSVG src={cart} />
                <span>Cart
                  {number > 0 && (
                    <span className="cart__number">
                      {number >= 100 ? "99+" : number}
                    </span>
                  )}
                </span>
              </button>
            </li>
          </ul>
        </div>
      
    </StyledNavBar>

    <NavbarResponsive>
    <ul className="navbar__options">
            {user?.data.name && (
              <li>
                <Link to="/favs" style={{display: 'flex', flexDirection: 'column'}}>
                  <BsFillHeartFill style={{color: '#ffffff'}}/>
                  <span style={{color: '#ffffff'}}>Favs</span>
                </Link>
              </li>
            )}
            <Dropdown>
              <div style={{width: '33%', height: '100%', display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                {user?.data.name ? (
                  <div className="navbar__profile-pic">
                    <img src={defaultAvatar} alt="Imagen de perfil" />
                  </div>
                ) : (
                  <StyledSVG src={userPic} />
                  )}
                  <span>User</span>
              </div>
              <ul>
                {user?.data.name ? (
                  <>
                    <li className="dropdown__first-name">
                      <p>{user.data.name}</p>
                    </li>
                    <li>
                      <Link to="/user">My Profile</Link>
                    </li>
                    {isAdmin && (
                      <li className="dropdown__button">
                        <Link to="/admin">Admin Panel</Link>
                      </li>
                    )}
                    <li>
                      <div className="dropdown__button">
                        <LogOut />
                      </div>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <button
                        className="dropdown__button"
                        onClick={openLoginModal}
                      >
                        Login
                      </button>
                    </li>
                    <li>
                      <Link to="/signup" className="dropdown__button" >
                        Signup
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </Dropdown>

            <li>
              <button onClick={toggleModal} style={{display: 'flex', flexDirection: 'column'}}>
                <FaShoppingCart/>
                <span>Cart
                  {number > 0 && (
                    <span className="cart__number">
                      {number >= 100 ? "99+" : number}
                    </span>
                  )}
                </span>
              </button>
            </li>
          </ul>
    </NavbarResponsive>
    </TotalNav>
  );
};

export default NavBar;
