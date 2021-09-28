import React, { useEffect, FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions";
import { NavBar, Card, Paginate } from "../../components";
import { Store, Product } from "../../redux/reducer";


const Home: FC = () => {
  const dispatch = useDispatch();
  const totalProducts = useSelector((state: Store) => state.totalProducts);
  
  //Paginate
  // const [order, setOrder] = useState<string>("");
  //uso estados locales para el paginado
  const [currentPage, setCurrentPage] = useState<number>(1); // empiezo en la pag 1

  const pages = (pageNum:number):void => {
    setCurrentPage(pageNum);
  };
  const productsPerPage: number = 10;

  let lastIdx: number = currentPage * productsPerPage; // en la primera página, lastIdx = 1 * 9 = 9
  let firstIdx: number = lastIdx - productsPerPage; // en la primera página, firstIdx = 9 - 9 = 0
  let currentProducts: Array<Product> = totalProducts.slice(firstIdx, lastIdx); // en la primera página, currentCharacters = countries.slice(0,9)
  ///////////

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <Paginate 
        amountPerPage = {productsPerPage} 
        totalAmount = {totalProducts.length} 
        pageNumber = {pages}
      />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {currentProducts.length !== 0 &&
          currentProducts.map((product, i) => (
            <Card
              key={i}
              image={product.image_product}
              name={product.name_product}
              price={product.price_product}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
