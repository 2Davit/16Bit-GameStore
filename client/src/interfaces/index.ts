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

export interface State {
    totalProducts: Array<Product> | Array<any>;
    renderingProducts: Array<Product> | Array<any>;
    detailProduct: DetailProduct;
}