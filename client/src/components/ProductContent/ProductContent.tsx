import { FC } from "react";

import { AdminProduct } from "../../interfaces/index";
import PanelCatalog from "../PanelCatalog/PanelCatalog";
import { Link } from "react-router-dom";
import { ContainerMainContent, ContainerNav, Searchbar, AddBtns, AddBtn, Search, ContainerCards } from "./ProductContent.style"

interface Props {
  totalProducts: any;
}

const MainContent: FC<Props> = ({ totalProducts }) => {
  return (
    <ContainerMainContent>
      <ContainerNav>
        <Searchbar>
          <Search placeholder='Search products...'/>
        </Searchbar>
        <AddBtns>
          <AddBtn><Link style={{color: '#EEEEEE', textDecoration: 'none'}} to="/form">Add Product</Link></AddBtn>
          <AddBtn><Link style={{color: '#EEEEEE', textDecoration: 'none'}} to="/creategenre">Add Genre</Link></AddBtn>
          <AddBtn><Link style={{color: '#EEEEEE', textDecoration: 'none'}} to="/createplatform">Add Platform</Link></AddBtn>
        </AddBtns>
      </ContainerNav>
      <ContainerCards>
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
      </ContainerCards>
    </ContainerMainContent>
  );
};

export default MainContent;
