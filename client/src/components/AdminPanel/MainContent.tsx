import { FC } from "react";
import styles from "./Styles/MainContent.module.css";
import { AdminProduct } from "../../interfaces/index";
import PanelCatalog from "../AdminPanel/PanelContent/PanelCatalog"

interface Props {
  totalProducts: any;
}

const MainContent: FC<Props> = ({ totalProducts }) => {
  return (
    <div className={styles.mainContainer}>
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

export default MainContent;
