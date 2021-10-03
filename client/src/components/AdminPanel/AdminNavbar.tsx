import React from "react";
import { Link } from "react-router-dom";
import styles from "./Styles/AdminNavbar.module.css"

const AdminNavbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/home">
      <button className={styles.logo}>Logo</button>
      </Link>
      <button>posible searchbar</button>
      <div className={styles.btnContainer}>
      <Link to="/form">
        <button className={styles.button}>Add Product</button>
      </Link>
      <Link to="/creategenre">
        <button className={styles.button}>Add Genre</button>
      </Link>
      <Link to="/createplatform">
        <button className={styles.button}>Add Platform</button>
      </Link>
      </div>
    </nav>
  );
};

export default AdminNavbar
