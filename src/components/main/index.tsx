import React, {useState, useEffect} from "react";
import {ProductsData, RequestParams} from "../../types";
import {ProductsService} from "../../services";
import {SearchSortForm} from "../common/SearchSortForm";
import {Table} from "../common/Table";
import {Pagination} from "../uiKit/Pagination";

const productsDataDefault: ProductsData = {
    current_page: 1,
    total_count: 0,
    previous_page_url: false,
    next_page_url: false,
    products: []
}

const requestParamsDefault: RequestParams = {
    sort_field: 'name',
    sort_direction: 'asc',
    page: 1,
}

export const Main = () => {
    const [productsData, setProductsData] = useState<ProductsData>(productsDataDefault);
    const [requestParams, setRequestParams] = useState<RequestParams>(requestParamsDefault);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const loadProducts = async () => {
            setLoading(true);

            try {
                const productsData = await ProductsService.getProducts(requestParams);
                setProductsData(productsData as ProductsData);
                setLoading(false);
                setError(null);

            } catch (err) {
                setLoading(false);
                setError(err);
            }
        }
        loadProducts();
    }, [requestParams])

    const onSearch = (value: string) => {
        if(!value) {
            setRequestParams(requestParams);
        }
        setRequestParams({...requestParams, search: value});
    }

    const onSortByField = (value: string) => {
        setRequestParams({...requestParams, sort_field: value})
    }

    const onSortByDirection = (value: string) => {
        setRequestParams({...requestParams, sort_direction: value})
    }

    const onNextPage = () => {
        setRequestParams((prevState => {
            return {
                ...requestParams,
                page: prevState.page + 1
            }
        }))
    }
    const onPrevPage = () => {
        setRequestParams((prevState => {
            return {
                ...requestParams,
                page: prevState.page - 1
            }
        }))
    }

    const {products, current_page, next_page_url, previous_page_url} = productsData;

    return(
        <div className="container">
            <SearchSortForm
                onSearch={onSearch}
                onSortByField={onSortByField}
                onSortByDirection={onSortByDirection}
            />
            <div className="products-list">
                {
                    loading ? <div className="loading">loading</div>: <Table data={products} /> &&
                    error ? <div className="error">Error</div>: <Table data={products} />
                }
            </div>
            <div className="pagination">
                <Pagination
                    currentPage={current_page}
                    prevPage={previous_page_url}
                    nextPage={next_page_url}
                    onNextPage={onNextPage}
                    onPrevPage={onPrevPage}
                />
            </div>
        </div>
    )
}