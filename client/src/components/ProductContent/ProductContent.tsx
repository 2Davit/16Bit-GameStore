import { FC, useState } from "react";
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { deleteProduct } from "../../redux/actions/admin_actions";
import { AdminProduct } from "../../interfaces/index";
import PanelCatalog from "../PanelCatalog/PanelCatalog";
import { ContainerMainContent, ContainerNav, Searchbar, AddBtns, AddBtn, Search, ContainerCards, IconNext, IconPrev, IconContainer, BtnPaged1, BtnPaged2, ContainerNotExist, H2 } from "./ProductContent.style"

interface Props {
  totalProducts: any;
}

const MainContent: FC<Props> = ({ totalProducts }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [page, setPage] = useState<number>(0)//iria de 10 en 10 ejm : 0-10,20,30
  const [page2, setPage2] = useState<number>(10)//19
  const [btnNext, setBtnNext] = useState<boolean>(false)
  const [btnPrev, setBtnPrev] = useState<boolean>(false)
  const [productSearch, setProductSearch] = useState(totalProducts.renderingProducts);
  let onViewProducts = productSearch.slice(page, page2)
  console.log(onViewProducts)





  const handleNextPage = () => {
    if (productSearch.length < (page2 + 1) ) {
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

  function handleDeleteProduct(e:React.MouseEvent<any>) {
    dispatch(deleteProduct(e.currentTarget.value));
    alert("Cambio realizado con éxito.");
    history.push('/admin')
  }
  const searchProduct = (e: any) => {
    let search = e.target.value.toLowerCase();
    if (search === "") {
      setProductSearch(totalProducts.renderingProducts);
      setBtnNext(false);
    } else {
      
      let newArray = totalProducts.renderingProducts.filter((product: any) => {
        return product.name_product.toLowerCase().includes(search);
      });
      setPage(0);
      setPage2(10);
      setProductSearch(newArray);
    }
  };


  return (
    <ContainerMainContent>
      <ContainerNav>
        <Searchbar>
          <Search  placeholder=' Search products...' onChange={searchProduct}/>
        </Searchbar>
        <AddBtns>
          <AddBtn to="/form">Add Product</AddBtn>
          <AddBtn to="/createGenre">Add Genre</AddBtn>
          <AddBtn to="/createPlatform">Add Platform</AddBtn>
        </AddBtns>
      </ContainerNav>

      <ContainerCards>
      <IconContainer>
      <BtnPaged1 byeBtn={btnPrev} disabled={btnPrev} onClick={handlePreviousPage}><IconPrev byeBtnI={btnPrev} /></BtnPaged1>
      <BtnPaged2 byeBtn={btnNext} disabled={btnNext} onClick={handleNextPage}><IconNext  byeBtnI={btnNext} /></BtnPaged2>
      </IconContainer>
        {
          onViewProducts.length !== 0 ?
          onViewProducts?.map((product: AdminProduct) => (
            <div>
              <button onClick={handleDeleteProduct} value={product.id_product}>Delete</button>
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
            </div>
            )) : 
            <ContainerNotExist>
              <H2>Product Not Found</H2>
              <h5>Try Looking for Another</h5>
            </ContainerNotExist>

          }
      </ContainerCards>
    </ContainerMainContent>
  );
};

export default MainContent;
