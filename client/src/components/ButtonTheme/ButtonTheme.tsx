import { FC } from 'react'
import { ButtonTheme2 } from './ButtonTheme.style'
import { SiRetropie } from 'react-icons/si'
import { IoGameController } from 'react-icons/io5'

interface Props {
    updateTheme(): void;
    none: any;
    theme: boolean;
}

const ButtonTheme: FC<Props> = ({ updateTheme, none, theme }) => {
    return (
        <>
           <ButtonTheme2
                onClick={() => updateTheme()} 
                none={none}
            >
                
                {
                   theme  ? <SiRetropie /> : <IoGameController/>
                } 
            </ButtonTheme2> 
        </>
    )
}

export default ButtonTheme