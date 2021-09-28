import React, { useEffect, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../redux/actions';
import { NavBar, Card } from '../../components';
import { Store } from '../../redux/reducer';



const Home: FC = () => {

  const dispatch = useDispatch();

  const totalProducts = useSelector((state: Store) => state.totalProducts);
  

  
  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])


  return (
    <div>
      <NavBar />
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
      {

        totalProducts.length !== 0 && totalProducts.map(product => <Card key={product.id} image={product.image_product} name={product.name_product} price={product.price_product} />)
        
      }
      </div>
    </div>
  )
}


export default Home;

