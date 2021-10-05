export interface Platform {
    name_platform: string
  }
export interface CreatePlatform{
    platform: string;
}
  
export interface Genre {
    name_genre: string
  }
export interface CreateGenre{
    genre: string;
}


export interface Product {
    id_product?: number;
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

export interface ProductCreate {
    id_product?: number;
    name_product: string;
    price_product: number;
    description_product: string;
    image_product: Array<string>;
    thumbnail_product: string;
    in_stock: boolean;
    on_sale: boolean; 
    release_year: number;
    genres: Array<string>;
    platforms: Array<string>;
}
export interface ProductValidate {
    id_product?: number;
    name_product: string;
    price_product: string;
    description_product: string;
    image_product: string;
    thumbnail_product: string;
    in_stock: string;
    on_sale: string; 
    release_year: string;
    genres: string;
    platforms: string;
}

export interface UserCreate {
    username: string;
    password: string;
    email: string;
    name: string;
    lastname: string;
    adress: string; // !
}


export interface ProductInCart extends Product {
    quantity: number;
}



export interface ProductsState {
    totalProducts: Array<Product> | Array<any>;
    renderingProducts: Array<Product> | Array<any>;
    detailProduct: Product | unknown;
    onSaleProducts: Array<Product> | Array<any>;
}

export interface CartState{
    cart: any;
}

export interface GlobalState{
    showCart:boolean;
}

export interface State{
    productsReducer: ProductsState;
    cartReducer: CartState;
    globalReducer: GlobalState;
}

export interface AdminProduct {
    id_product?: number;
    name_product: string;
    price_product: number;
    description_product: string;
    image_product: Array<string>;
    thumbnail_product: string;
    in_stock: boolean;
    on_sale: boolean; 
    release_year: number;
    name_genre: Array<Genre>;
    name_platform: Array<Platform>;
}
export interface EditProduct {
    id?: number;
    name: string;
    price: number;
    description: string;
    image: Array<string>;
    stock: boolean;
    released: number;
    genre: any;
    platform: any;
    thumbnail: string;
}