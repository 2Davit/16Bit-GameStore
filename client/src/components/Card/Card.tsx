import React, { FC, useState } from 'react';
import { CardContainer, CardImage, CardPrice, CardSubContainer, CardTitle, CardButton } from './Card.style';
import { RiEyeCloseFill, RiEyeFill } from 'react-icons/ri';

interface Props {
    image: string;
    name: string;
    price: number;
}


const Card: FC<Props> = ({ image, name, price }) => {

    const [visible, setVisible] = useState<boolean>(false);

    return (
        
        <CardContainer>
            <CardButton onClick={() => setVisible(!visible)}>
                {visible ? <RiEyeFill/> : <RiEyeCloseFill/>}
            </CardButton>
            <CardImage src={image} alt={name}/>
            <CardSubContainer visible={visible}>
                <CardTitle>{name}</CardTitle>
                <CardPrice>{price}</CardPrice>
            </CardSubContainer>
        </CardContainer>
        
    )
}

export default Card
