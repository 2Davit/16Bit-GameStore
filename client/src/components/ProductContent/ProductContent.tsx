import { FC } from "react";
import styles from "./MainContent.module.css";
import { AdminProduct } from "../../interfaces/index";
import PanelCatalog from "../PanelCatalog/PanelCatalog"
import { Link } from "react-router-dom";

interface Props {
  totalProducts: any;
  totalGenres: any;
  totalPlatforms: any;
}

const ProductContent: FC<Props> = ({ totalProducts, totalGenres, totalPlatforms }) => {
  return (

    <div className={styles.mainContainer}>
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
      <div>
        {totalProducts.renderingProducts?.length !== 0 &&
          totalProducts.renderingProducts?.map((product: AdminProduct) => (
            <PanelCatalog
              key={product.id_product}
              image={product.image_product}
              name={product.name_product}
              released={product.release_year}
              description={product.description_product}
              price={product.price_product}
              id={product.id_product}
              stock={product.in_stock}
              genre={product.name_genre}
              platform={product.name_platform}
              thumbnail={product.thumbnail_product}
            />
          ))}
      </div>
    </div>

  );
};

export default ProductContent;


