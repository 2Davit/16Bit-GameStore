import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllGenres,
  getAllPlatforms,
  getAllProducts,
  onSaleFilter,
} from "../../redux/actions/products_action";
import { getRole } from "../../redux/actions/auth_actions";
import { Paginate, Filter, Catalog, Carousel } from "../../components";
import { Store } from "../../redux/reducer/";
import { ContainerHome, ContainerCarrusel, ContainerCatalog, ContainerPaginate, MobilePaginate, MobileCatalog, MobileDisabled, ScrollUp } from "./Home.style";
import { createNavbar } from "../../redux/actions/admin_actions";
import { getCart } from "../../redux/actions/cart_actions";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import {FaArrowUp} from 'react-icons/fa'

const Home = ({ setPage, currentProducts, productsPerPage, pages, setMobilePage, mobilePage, mobilePerPage }: any) => {
  const dispatch = useDispatch();

  const onSaleProducts: any = useSelector(
    (state: Store) => state.productsReducer.onSaleProducts
  );

  const totalProducts: any = useSelector(
    (state: Store) => state.productsReducer.totalProducts
  );


  const { user, isAuthenticated } = useAuth0();
  const userData = JSON.parse(localStorage.getItem("userData") as string);

  useEffect(() => {
    if (isAuthenticated && !userData) {
      axios
        .post("/auth/google", {
          username: user?.nickname,
          name: user?.given_name,
          lastname: user?.family_name,
          email: user?.email,
          picture: user?.picture,
        })
        .then((res) =>
          localStorage.setItem("userData", JSON.stringify(res.data))
        )
        .then((res) => window.location.reload());
    }
    dispatch(getAllProducts());
    dispatch(onSaleFilter("carousel"));
    dispatch(getAllGenres());
    dispatch(getAllPlatforms());
    dispatch(getRole());
    dispatch(createNavbar());
    dispatch(getCart());
  }, [dispatch]);

  const handlePaginate = () => {
    if (mobilePage > (mobilePerPage.length + 12)) {
     return
    } else {
      setMobilePage(
        mobilePage + 12
      );
    }


  }


  return (
    <ContainerHome>
      <ContainerCarrusel>
        {onSaleProducts.length !== 0 && <Carousel products={onSaleProducts} />}
      </ContainerCarrusel>
      <ContainerCatalog>
        <Filter setPage={setPage} />
        <Catalog currentProducts={currentProducts} />
      </ContainerCatalog>
      <MobileCatalog id="#top">
        <Catalog mobilePerPage={mobilePerPage} />
      </MobileCatalog>
      <ContainerPaginate>
        <Paginate
          amountPerPage={productsPerPage}
          totalAmount={totalProducts?.length}
          pageNumber={pages}
        />
        {mobilePage > (mobilePerPage.length + 12) ? <MobileDisabled >No More Games...</MobileDisabled> : <MobilePaginate onClick={handlePaginate}>Show More</MobilePaginate>}
      </ContainerPaginate>
      <ScrollUp href="#top"><FaArrowUp/></ScrollUp>
    </ContainerHome>
  );
};

export default Home;
