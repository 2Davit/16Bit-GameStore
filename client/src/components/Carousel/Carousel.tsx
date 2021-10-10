import React, { FC, useState } from 'react'
import { Product } from '../../interfaces';
import { CarouselContainer, Image, CarouselSubContainer, OnSale, Button, IconRight, IconLeft } from './Carousel.style';
import onSale from '../../assets/icons/onSale.png';


interface Props {
    products: Array<Product>;
}


const Carousel: FC<Props> = ({ products }) => {


    const [index, setIndex] = useState<number>(0);

    const [disable, setDisable] = useState<boolean>(false);

    
    if (products.length > 1 && !disable) {       
        setTimeout(() => {
            if (index === (products.length -1)) setIndex(0);
            else setIndex(index + 1);
        }, 4000)
    }
    
    function handleRightOnClick() {
        setDisable(true);
        if (index === (products.length -1)) setIndex(0);
        else setIndex(index + 1);
    };

    function handleLeftOnClick() {
        setDisable(true);
        if (index === 0) setIndex(products.length -1);
        else setIndex(index - 1);
    };


    return (
        <div style={{width:'100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
        {products.length > 1 ? <Button onClick={handleLeftOnClick} ><IconLeft /></Button> : null}
        <CarouselContainer to={`/game/${products[index].id_product}`} >
            <Image src={products[index].thumbnail_product} alt={products[index].name_product} />
            <CarouselSubContainer>
                <div style={{width:'100%', display: 'flex', justifyContent: 'space-between'}}>
                <h1>{products[index].name_product.length < 10 ? products[index].name_product : products[index].name_product.slice(0, 10) + '...'}</h1>
                <OnSale src={onSale} alt={products[index].name_product} />
                </div>
                <span>Price: ${products[index].price_product}</span>
                <p>{products[index].description_product.slice(0, 100)}...</p>
                
            </CarouselSubContainer>
        </CarouselContainer>
        {products.length > 1 ? <Button onClick={handleRightOnClick} ><IconRight /></Button> : null}
        </div>
    )

}

export default Carousel;
