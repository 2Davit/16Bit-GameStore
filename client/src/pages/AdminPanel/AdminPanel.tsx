import React, { useEffect, FC, useState } from "react";
import { Store } from "../../redux/reducer";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllGenres,
  getAllPlatforms,
  getAllProducts,
} from "../../redux/actions/products_action";
import { deleteNavbar } from '../../redux/actions/admin_actions'
import {
  AdminHome,
  Panel,
  ProductContent,
  UserContent,
  SalesContent,
} from "../../components";
import { ContainerAdmin, InfoContainer, MainContainer } from './AdminPanel.style'

const AdminPanel: FC = (props) => {  
  const dispatch = useDispatch();
  const [info, setInfo] = useState({
    setHome: true,
    setProducts: false,
    setSales: false,
    setUsers: false,
  });
  const handleInfo = (e: any) => {
    if (e.target.value === "home") {
      setInfo({
        ...info,
        setHome: true,
        setProducts: false,
        setSales: false,
        setUsers: false,
      });
    }
    if (e.target.value === "sales") {
      setInfo({
        ...info,
        setSales: true,
        setHome: false,
        setProducts: false,
        setUsers: false,
      });
    }
    if (e.target.value === "products") {
      setInfo({
        ...info,
        setHome: false,
        setProducts: true,
        setSales: false,
        setUsers: false,
      });
    }
    if (e.target.value === "users") {
      setInfo({
        ...info,
        setUsers: true,
        setHome: false,
        setProducts: false,
        setSales: false,
      });
    }
    // if(location.state){
    //   setInfo({
    //     ...info,
    //     setHome: false,
    //     setProducts: true,
    //     setSales: false,
    //     setUsers: false,
    //   });
    // }
  };
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllGenres());
    dispatch(getAllPlatforms());
    dispatch(deleteNavbar());
  }, [dispatch]);
  const totalProducts: any = useSelector(
    (state: Store) => state.productsReducer
  );
  return (
    <ContainerAdmin>
      <InfoContainer>
        <Panel /*info={info}*/ handleInfo={handleInfo} />
      </InfoContainer>
      <MainContainer>
        {info.setHome ? (
          <AdminHome />
        ) : info.setProducts ? (
          <ProductContent totalProducts={totalProducts} />
        ) : info.setSales ? (
          <SalesContent />
        ) : info.setUsers ? (
          <UserContent />
        ) : (
          "Oops Something Went Wrong..."
        )}
      </MainContainer>
    </ContainerAdmin>
  );
};
export default AdminPanel;
