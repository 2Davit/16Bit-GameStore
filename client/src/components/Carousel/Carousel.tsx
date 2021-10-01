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

    if (!disable) {
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
        <Button onClick={handleLeftOnClick} ><IconLeft /></Button>
        <CarouselContainer to={`/game/${products[index].id_product}`} >
            <Image src={products[index].thumbnail_product} alt={products[index].name_product} />
            <CarouselSubContainer>
                <div style={{width:'100%', display: 'flex', justifyContent: 'space-between'}}>
                <h1>{products[index].name_product}</h1>
                <OnSale src={onSale} alt={products[index].name_product} />
                </div>
                <span>{products[index].price_product}</span>
                <p>{products[index].description_product.slice(0, 120)}...</p>
                
            </CarouselSubContainer>
        </CarouselContainer>
        <Button onClick={handleRightOnClick} ><IconRight /></Button>
        </div>
    )

}

export default Carousel;
