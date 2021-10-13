import React from "react";

//Estilos
import { ProfileStyled } from "../StyledUserPage";
import defaultAvatar from "../../../assets/img/avatars/Avatar_9.png";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("userData")!);

  return (
    <ProfileStyled>
      <div>
        <div className="img-container">
          <img src={defaultAvatar} alt="pic profile" />
        </div>
      </div>
      <div>
        <h2>
          {user.data.name} {user.data.lastname}
        </h2>
        <p>{user.data.email}</p>
      </div>
    </ProfileStyled>
  );
};

export default Profile;
