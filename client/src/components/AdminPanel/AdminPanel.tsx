import React, { useEffect } from "react";
import { Store } from "../../redux/reducer/";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions/products_action";
import MainContent from "./MainContent";
import Panel from "./Panel";
import AdminNavbar from "./AdminNavbar";
import styles from "./Styles/AdminPanel.module.css";

const AdminPanel = () => {
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
