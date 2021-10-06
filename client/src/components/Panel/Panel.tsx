import React,{ FC } from "react";
import styles from "./Panel.module.css";

interface Props{
  handleInfo(v:any): void;
}

const Panel: FC<Props> = ({handleInfo}) => {

  return (
    <div className={styles.mainContainer}>
      <button>Logo</button>
      <div>
        <button value="home" onClick={handleInfo} className={styles.button}>HOME</button>
        <button value="sales" onClick={handleInfo} className={styles.button}>SALES</button>
        <button value="products" onClick={handleInfo} className={styles.button}>PRODUCTS</button>
        <button value="users" onClick={handleInfo} className={styles.button}>USERS</button>
      </div>
      <div className={styles.button}>
        <img
          style={{
            width: "100%",
            height: "100%",
            padding: "1rem",
            borderRadius: "9999px",
          }}
          src="https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Panel;
