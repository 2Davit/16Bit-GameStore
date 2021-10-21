import React, { useState } from "react";
import { Btn, Hr } from "../../../GlobalStyles/GlobalStyles";
import { FormEditProfile, StyledEditProfile, EditBtnContainer } from "../StyledUserPage";
import { useHistory } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../../redux/actions/admin_actions";
import Swal from "sweetalert2";
import { animateScroll } from "react-scroll";

const EditProfile = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("userData")!);

  const [input, setInput] = useState({
    id: user.id,
    password: "",
    email: user.data.email,
    address: user.data.address,
    name: user.data.name,
    lastname: user.data.lastname,
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    user.data.email = input.email;
    user.data.address = input.address;
    user.data.name = input.name;
    user.data.lastname = input.lastname;

    axios.put("/user/updateUser", {
      id: user.id,
      email: input.email,
      address: input.address,
      name: input.name,
      lastname: input.lastname,
    });

    localStorage.setItem("userData", JSON.stringify(user));
    toast.success("Your user has been updated succesfully! 😁", {
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

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        dispatch(deleteUser(user.id));
        localStorage.clear();
        animateScroll.scrollTo(0, { duration: 300 });
        history.push("/home");
      }
    });
  };

  return (
    <Fade>
      <StyledEditProfile>
        <div>
          <FormEditProfile onSubmit={handleSubmit}>
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
            <EditBtnContainer>
              <Btn style={{marginBottom:"1rem"}} type="submit" className="btn-card">
                Confirm
              </Btn>
              <Btn onClick={() => history.push("/user")} className="btn-sec">
                Cancel
              </Btn>
            </EditBtnContainer>
          </FormEditProfile>
          <Hr />
          <section className="deleteAccount">
            <h3>Delete my account</h3>
            <p>This action cannot be undone.</p>
            <Btn onClick={handleDelete} className="btn-danger">
              Delete my account
            </Btn>
          </section>
        </div>
      </StyledEditProfile>
    </Fade>
  );
};

export default EditProfile;
