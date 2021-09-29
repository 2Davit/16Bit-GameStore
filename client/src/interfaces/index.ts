interface Platform {
    name_platform: string
  }
  
  interface Genre {
    name_genre: string
  }


export interface Product {
    id_product: number;
    name_product: string;
    price_product: number;
    description_product: string;
    image_product: Array<string>;
    thumbnail_product: string;
    in_stock: boolean;
    on_sale: boolean; 
    release_year: number;
    genres: Array<Genre>;
    platforms: Array<Platform>;
}


export interface ProductInCart extends Product {
    
    quantity: number;
}



export interface ProductsState {
    totalProducts: Array<Product> | Array<any>;
    renderingProducts: Array<Product> | Array<any>;
    detailProduct: Product | unknown;
}

export interface CartState{
    cart: any;
}

export interface GlobalState{
    showCart:boolean;
}

export interface State{
    productsReducer: ProductsState;

    cartReducer:CartState;
    globalReducer:GlobalState;
}
