import React, { useEffect, FC } from "react";
import { Store } from "../../redux/reducer";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions/products_action";
import styles from "./AdminPanel.module.css";
import { AdminNavbar, MainContent, Panel } from '../../components'

const AdminPanel: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const totalProducts: any = useSelector(
    (state: Store) => state.productsReducer
  );

  return (
    <div className={styles.mainContainer}>
      <AdminNavbar />
      <div className={styles.infoContainer}>
        <Panel />
        <MainContent totalProducts={totalProducts} />
      </div>
    </div>
  );
};

export default AdminPanel;
