import React, { useEffect, FC } from "react";
import { Store } from "../../redux/reducer";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllGenres,
  getAllPlatforms,
  getAllProducts,
} from "../../redux/actions/products_action";
import styles from "./AdminPanel.module.css";
import { AdminNavbar, MainContent, Panel } from "../../components";

const AdminPanel: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllGenres());
    dispatch(getAllPlatforms());
  }, [dispatch]);

  const totalProducts: any = useSelector(
    (state: Store) => state.productsReducer
  );

  const totalGenres: any = useSelector(
    (state: Store) => state.productsReducer.genres
  );

  const totalPlatforms: any = useSelector(
    (state: Store) => state.productsReducer.platforms
  );

  return (
    <div className={styles.mainContainer}>
      <AdminNavbar />
      <div className={styles.infoContainer}>
        <Panel />
        <MainContent totalProducts={totalProducts} totalGenres={totalGenres} totalPlatforms={totalPlatforms} />
      </div>
    </div>
  );
};

export default AdminPanel;
