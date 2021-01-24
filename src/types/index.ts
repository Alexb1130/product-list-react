export interface Product {
    name: string,
    image: string,
    price: string | number
}

export interface ProductsData {
    current_page: number,
    total_count: number,
    previous_page_url: string | boolean,
    next_page_url: string | boolean,
    products: Product[]
}

export interface RequestParams {
    sort_field: string,
    sort_direction: string,
    page: number,
    search?: string,
}

export type Option = {
    id: string,
    name: string
    value: string | number
}

export type SearchField = {
    name: string,
    placeholder: string
    value: string
}

export type SortByFieldSelect = {
    name: string,
    options: Option[]
}

export type SortByDirectionSelect = {
    name: string,
    options: Option[]
}