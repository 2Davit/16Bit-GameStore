import React, { FC } from 'react'


interface Props {
    handlePlatformFilter(e: any): void;
}


const Filter: FC<Props> = ({ handlePlatformFilter }) => {
    
    
    return (
        <div>
            <section>
                    <h5>By platform</h5>
                    <select onChange={handlePlatformFilter}>
                        <option value="">All</option>
                        <option value="gba">GBA</option>
                        <option value="nes">NES</option>
                        <option value="arcade">Arcade</option>
                        <option value="sega">Sega</option>
                        <option value="snes">SNES</option>
                        <option value="a2600">A2600</option>
                    </select>
                    </section>      
        </div>
    )
}

export default Filter
