import { FC } from "react";
import styles from "./Styles/MainContent.module.css";
import { Product } from "../../interfaces/index";
import PanelCatalog from "../AdminPanel/PanelContent/PanelCatalog"

interface Props {
  totalProducts: any;
}

const MainContent: FC<Props> = ({ totalProducts }) => {
  /* console.log(totalProducts.renderingProducts[0]) */
  return (
    <div className={styles.mainContainer}>
      <div>
        {totalProducts.renderingProducts?.length !== 0 &&
          totalProducts.renderingProducts?.map((product: Product) => (
            <PanelCatalog
              key={product.id_product}
              image={product.thumbnail_product}
              name={product.name_product}
              released={product.release_year}
              description={product.description_product}
              price={product.price_product}
              id={product.id_product}
              stock={product.in_stock}
              genre={product.genres}
            />
          ))}
      </div>
    </div>
  );
};

export default MainContent;
