import React from "react";
import { Link } from "react-router-dom";
import styles from "./Styles/AdminNavbar.module.css"

const AdminNavbar = () => {
  return (
    <nav className={styles.navbar}>
      <button className={styles.logo}>Logo</button>
      <button>posible searchbar</button>
      <Link to="/form">
        <button className={styles.button}>ADD PRODUCT</button>
      </Link>
    </nav>
  );
};

export default AdminNavbar
