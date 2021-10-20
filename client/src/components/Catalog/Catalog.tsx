import  { FC } from "react";
import { Product } from "../../interfaces";
import { ProductCard } from "../index";
import { StyledCatalog, MobileCatalog } from "./StyledCatalog";
import { MarioLoading } from "../index";



interface Props {
  currentProducts?: any;
  mobilePerPage?: any;

}

const Catalog: FC<Props> = ({ currentProducts, mobilePerPage }) => {
  return (
    <>
      <StyledCatalog id="catalog">
        {currentProducts?.length !== 0 ? (
          currentProducts?.map((product: Product) => (
            <ProductCard game={product} key={product.id_product} />
          ))
        ) : (
          <MarioLoading />
        )}
      </StyledCatalog>
      {/* -------------------------- Abajo esta mobile NO TOCAR!!! ---------------------------------- */}

      <MobileCatalog id="catalog">
        {mobilePerPage?.length !== 0 ? (
          mobilePerPage?.map((product: Product) => (
            <ProductCard game={product} key={product.id_product} />
          ))
        ) : (
          <MarioLoading />
        )}
      </MobileCatalog>
    </>);
};

export default Catalog;
