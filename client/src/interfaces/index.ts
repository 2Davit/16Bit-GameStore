export interface Product {
    id?: number;
    name_product: string;
    price_product: number;
    release_year: number;
    genres: Array<string>;
    description_product: string;
    image_product: string;
    thumbnail_product: string;       
    platform: string;
    in_stock: boolean;
    on_sale: boolean;
    is_videogame: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface ProductInCart extends Product {
    
    quantity: number;
}

interface DetailProduct {
    id?: number;
    name_product?: string;
    price_product?: number;
    release_year?: number;
    genres?: Array<string>;
    description_product?: string;
    image_product?: string;
    thumbnail_product?: string;       
    platform?: string;
    in_stock?: boolean;
    on_sale?: boolean;
    is_videogame?: boolean;
    createdAt?: string;
    updatedAt?: string;
}


export interface ProductsState {
    totalProducts: Array<Product> | Array<any>;
    renderingProducts: Array<Product> | Array<any>;
    detailProduct: DetailProduct;
}

export interface CartState{
    cart:any;
}

export interface GlobalState{
    showCart:boolean;
}

export interface State{
    productsReducer: ProductsState;
    cartReducer:CartState;
    globalReducer:GlobalState;
}


// export interface KonvaTextEventTarget extends EventTarget {
//     index: number
//   }
  
//  export interface KonvaMouseEvent extends React.MouseEvent<HTMLElement> {
//     target: KonvaTextEventTarget
//   }
