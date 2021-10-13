import React, { useState } from "react";
import { Btn, Hr } from "../../../GlobalStyles/GlobalStyles";
import { FormEditProfile, StyledEditProfile } from "../StyledUserPage";
import { useHistory } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const EditProfile = () => {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("userData")!);

  const [input, setInput] = useState({
    password: "",
    email: user.data.email,
    address: user.data.address,
    name: user.data.name,
    lastname: user.data.lastname,
  });

  const handleChange = (e: any) => {
    setInput(() => ({
      ...input,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Fade>
      <StyledEditProfile>
        <div>
          <FormEditProfile>
            <h1 className="form__title">Edit User</h1>
            <label>
              <span>First Name:</span>
              <input
                type="text"
                value={input.name}
                name="name"
                onChange={handleChange}
              />
            </label>
            <label>
              <span>Last Name:</span>
              <input
                type="text"
                value={input.lastname}
                name="lastname"
                onChange={handleChange}
              />
            </label>
            <label>
              <span>Email:</span>
              <input
                type="email"
                value={input.email}
                name="email"
                onChange={handleChange}
              />
            </label>
            <label>
              <span>Address:</span>
              <input
                type="text"
                value={input.address}
                name="address"
                onChange={handleChange}
              />
            </label>
            <div className="passwordSection">
              <label>
                <span>Password:</span>
                <input
                  type="password"
                  value={input.password}
                  name="password"
                  onChange={handleChange}
                />
              </label>
              <div className="small-text small-spacing small-warning">
                <p>Edit this field only if you want to change your password.</p>
                <p>Otherwise, leave it empty.</p>
              </div>
            </div>
            <div className="buttons">
              <Btn
                onClick={() => alert("deberia editar el user")}
                className="btn-card"
              >
                Confirm
              </Btn>
              <Btn onClick={() => history.push("/user")} className="btn-sec">
                Cancel
              </Btn>
            </div>
          </FormEditProfile>
          <Hr />
          <section className="deleteAccount">
            <h3>Delete my account</h3>
            <p>This action cannot be undone.</p>
            <Btn
              onClick={() => alert("deberia borrar la cuenta")}
              className="btn-danger"
            >
              Delete my account
            </Btn>
          </section>
        </div>
      </StyledEditProfile>
    </Fade>
  );
};

export default EditProfile;
