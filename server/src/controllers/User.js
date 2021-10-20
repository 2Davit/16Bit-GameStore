const { User } = require("../db");
const axios = require("axios");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;




async function postUser(req, res) {
  const {
    id_user,
    nickname_user,
    name_user,
    lastname_user,
    avatar_user,
    address_user,
    email_user,
    password_user,
    is_admin,
    is_active,
  } = req.body;

  try {
    await User.create({
      id_user,
      nickname_user,
      name_user,
      lastname_user,
      avatar_user,
      address_user,
      email_user,
      password_user,
      is_admin,
      is_active,
    });
    res.status(200).send("User succesfully added");
  } catch {
    res.status(404).send("Error");
  }
}

async function getUsers(req, res) {
  try {
    const users = await User.findAll();
    const userData = users.map((u) => {
      return {
        id_user: u.id_user,
        nickname: u.nickname_user,
        name: u.name_user,
        lastname: u.lastname_user,
        address: u.address_user,
        email: u.email_user,
        active: u.is_active,
        created: u.createdAt,
        admin: u.is_admin
      };
    });
    res.status(200).send(userData);
  } catch (err) {
    res.status(404).send(err);
  }
}

async function deleteOneUser(req, res) {
  const { id } = req.params;

  try {
    await User.destroy({
      where: { id_user: id },
    });
    res.status(200).send("User succesfully deleted");
  } catch (err) {
    res.status(404).send("Error");
  }
}

async function banOneUser(req, res) {
  const { id, status } = req.params;

  try {
    await User.update({ is_active: status }, { where: { id_user: id } });
    res.status(200).send(`User ${status === "true" ? "unbanned" : "banned"}`);
  } catch (err) {
    res.status(404).send("Error");
  }
}

async function updateOneUser(req, res) {
  const { id, email, address, name, lastname } = req.body;
  try {
    await User.update(
      {
        email_user: email,
        address_user: address,
        name_user: name,
        lastname_user: lastname,
      },
      { where: { id_user: id } }
    );
    res.status(200).send("User updated");
  } catch (err) {
    res.status(404).send("Error");
  }
}
async function promoteToAdmin(req, res) {


  try {
      const {id, admin} = req.params;
    await User.update(
      {
        is_admin: admin
      },
      { where: { id_user: id } }
    );
    res.status(200).send("User updated");
  } catch (err) {
    res.status(404).send(err, 'Error');
    
  }
}




module.exports = {
  postUser,
  getUsers,
  deleteOneUser,
  banOneUser,
  updateOneUser,
  promoteToAdmin
};
