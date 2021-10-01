import React, { FC } from "react";
import { Product } from "../../interfaces";
import { ProductCard } from "../index";
import { StyledCatalog } from "./StyledCatalog";

// interface NavBarProps {
//     currentProducts: any;
//   }

interface Props {
  currentProducts: any;
}

const Catalog: FC<Props> = ({ currentProducts }) => {
  return (
    <StyledCatalog id="catalog">
      {currentProducts?.length !== 0 &&
        currentProducts?.map((product: Product) => (
          <ProductCard
            key={product.id_product}
            image={product.thumbnail_product}
            name={product.name_product}
            price={product.price_product}
            id={product.id_product}
          />
        ))}
    </StyledCatalog>
  );
};

export default Catalog;
