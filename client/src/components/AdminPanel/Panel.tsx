import React from "react";
import styles from "./Styles/Panel.module.css";

const Panel = () => {
  return (
    <div className={styles.mainContainer}>
      <div>
        <button className={styles.button}>HOME</button>
        <button className={styles.button}>SALES</button>
        <button className={styles.button}>PRODUCTS</button>
        <button className={styles.button}>USERS</button>
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
