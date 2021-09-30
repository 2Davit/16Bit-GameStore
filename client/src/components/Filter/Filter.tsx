import React, { FC } from 'react'


interface Props {
    handlePlatformFilter(e: any): void;
    handleGenreFilter(e: any): void;
    handleOnSaleFilter(e: any): void;
}


const Filter: FC<Props> = ({ handlePlatformFilter, handleGenreFilter, handleOnSaleFilter }) => {
    
    
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

            <section>
                    <h5>By genre</h5>
                    <select onChange={handleGenreFilter}>
                        <option value="">All</option>
                        <option value="action">Action</option>
                        <option value="shooter">Shooter</option>
                        <option value="racing">Racing</option>
                        <option value="fighting">Fighting</option>
                        <option value="sports">Sports</option>
                        <option value="arcade">Arcade</option>
                        <option value="adventure">Adventure</option>
                        <option value="platform">Platform</option>
                        <option value="puzzle">Puzzle</option>
                        <option value="strategy">Strategy</option>
                        <option value="rpg">RPG</option>
                    </select>

                    <section>
                    <h5>On sale</h5>
                    <button onClick={handleOnSaleFilter} value="on_sale">On sale</button>
            </section>      
            </section>      
        </div>
    )
}

export default Filter
