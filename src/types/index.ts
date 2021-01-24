export interface Product {
    name: string,
    image: string,
    price: string | number
}

export enum Fields {
    CURRENT_PAGE = 'current_page',
    TOTAL_COUNT = 'total_count',
    PREVIOUS_PAGE_URL = 'previous_page_url',
    NEXT_PAGE_URL = 'next_page_url',
    PRODUCTS = 'products'

}

export interface ProductsData {
    current_page: number,
    total_count: number,
    previous_page_url: string,
    next_page_url: string,
    products: Product[]
}

export interface RequestParams {
    sort_field: string,
    sort_direction: string,
    search: string,
    page: number
}