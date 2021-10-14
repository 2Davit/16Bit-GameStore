import React from "react";
import { Link } from "react-router-dom";
//Componentes
import Profile from "./Profile/Profile";
//Estilos
import { UserCard } from "./StyledUserPage";
import { Fade } from "react-awesome-reveal";

const UserPage = () => {
  return (
    <Fade>
      <UserCard>
        <ul>
          <li>
            <Link to="/edit">Edit Profile </Link>
          </li>
          <li>
            <Link to="/orders">My Orders</Link>
          </li>
          <li>
            <Link to="/contact">Help</Link>
          </li>
        </ul>
        <Profile />
      </UserCard>
    </Fade>
  );
};

export default UserPage;
