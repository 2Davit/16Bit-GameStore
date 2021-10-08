import { FC, useState } from "react";

import { AdminProduct } from "../../interfaces/index";
import PanelCatalog from "../PanelCatalog/PanelCatalog";
import { ContainerMainContent, ContainerNav, Searchbar, AddBtns, AddBtn, Search, ContainerCards, IconNext, IconPrev, IconContainer, BtnPaged } from "./ProductContent.style"

interface Props {
  totalProducts: any;
}

const MainContent: FC<Props> = ({ totalProducts }) => {
  
  const [page, setPage] = useState<number>(0)//iria de 10 en 10 ejm : 0-10,20,30
  const [page2, setPage2] = useState<number>(10)//19
  const [btnNext, setBtnNext] = useState<boolean>(false)
  const [btnPrev, setBtnPrev] = useState<boolean>(false)
  const [productSearch, setProductSearch] = useState(totalProducts.renderingProducts);
  let onViewProducts = productSearch.slice(page, page2)


  console.log(totalProducts.renderingProducts.length)
  console.log(page2)


  const handleNextPage = () => {
    if (totalProducts.renderingProducts.length === page2) {
      setBtnNext(true)
    } else {
      setPage(page + 10);
      setPage2(page2 + 10)
      setBtnPrev(false)
    }

  }

  const handlePreviousPage = () => {
    if(page <= 0){
      setBtnPrev(true)
    } else {
      setPage(page - 10);
      setPage2(page2 - 10)
      setBtnNext(false)
    }

  }
  const searchProduct = (e: any) => {
    let search = e.target.value.toLowerCase();
    if (search === "") {
      setProductSearch(totalProducts.renderingProducts);
    } else {
      
      let newArray = totalProducts.totalProducts.filter((product: any) => {
        return product.name_product.includes(search);
      });
      console.log("total:",newArray);
      setProductSearch(newArray);
    }
  };


  return (
    <ContainerMainContent>
      <ContainerNav>
        <Searchbar>
          <Search  placeholder='Search products...' onChange={searchProduct}/>
        </Searchbar>
        <AddBtns>
          <AddBtn to="/form">Add Product</AddBtn>
          <AddBtn to="/createGenre">Add Genre</AddBtn>
          <AddBtn to="/createPlatform">Add Platform</AddBtn>
        </AddBtns>
      </ContainerNav>

      <ContainerCards>
      <IconContainer>
      <BtnPaged disabled={btnPrev} onClick={handlePreviousPage}><IconPrev /></BtnPaged>
      <BtnPaged  disabled={btnNext} onClick={handleNextPage}><IconNext  /></BtnPaged>
      </IconContainer>
        {
          onViewProducts?.map((product: AdminProduct) => (
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
