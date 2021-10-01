import { Img } from "@chakra-ui/image";
import React from "react";
import styles from "./Styles/MainContent.module.css"

const MainContent = () => {
  return (
    <div className={styles.mainContainer}>

      <div className={styles.grid}>
        <div>
          <h2>Title 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero enim, ultricies at rhoncus sit amet, commodo et tortor. Fusce porta nibh in ligula sodales iaculis.</p>
        </div>

        <div>
          <h2>Title 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero enim, ultricies at rhoncus sit amet, commodo et tortor. Fusce porta nibh in ligula sodales iaculis.</p>
        </div>

        <div>
          <h2>Title 3</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero enim, ultricies at rhoncus sit amet, commodo et tortor. Fusce porta nibh in ligula sodales iaculis.</p>
        </div>

      </div>

      <div className={styles.tables}>
        <div className={styles.tableInfo}>
          <img style={{width: "86%", objectFit:"cover"}} src="https://blog.open-office.es/media/blogs/writer/Trucos_Writer/Insertar-grafica-a-partir-de-tabla-openoffice-writer.png" alt="table"/>
        </div>

        <div className={styles.tableInfo}>
          <img style={{width: "86%", objectFit:"cover"}} src="http://unarubiamatematica.com/wp-content/uploads/2019/03/RepresentacionTablaValores.png" alt="table"/>
        </div>

      </div>

    </div>
  );
};

export default MainContent;
