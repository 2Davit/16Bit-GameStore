import React, { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./AdminNavbar.module.css"

import { ContainerAdmNav } from './AdminNavbar.style'

const AdminNavbar: FC = () => {
  return (
    <ContainerAdmNav>
      <nav className={styles.navbar}>
        <Link to="/home">
        <button className={styles.logo}>LogoSSS</button>
        </Link>
        <button>posible searchbarR</button>
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
    </ContainerAdmNav>
  );
};

export default AdminNavbar
