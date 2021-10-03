import React, { useState, FC } from 'react'
import { Mario } from './MarioLoading.style';
import imagen1 from '../../assets/icons/1.png';
import imagen2 from '../../assets/icons/2.png';
import imagen3 from '../../assets/icons/3.png';
import imagen4 from '../../assets/icons/4.png';



const MarioLoading: FC = () => {


    const marios:Array<string> = [imagen1, imagen2, imagen3, imagen4]

    const [index, setIndex] = useState<number>(0);

    setTimeout(() => {
        if (index === (marios.length -1)) setIndex(0);
        else setIndex(index + 1);
    }, 400)

    return (
        <div style={{background: '#51A5FE', borderRadius: '2rem', padding: '2rem', display: 'flex', justifyContent:'space-between', alignItems:'center', flexDirection: 'column'}} >
            <Mario src={marios[index]} />
            <h2>Not games found</h2>
        </div>
    )
}

export default MarioLoading
