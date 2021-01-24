import {Api} from "../api";
import {RequestParams, ProductsData} from "../types";

export class ProductsService {
    static async getProducts(params: RequestParams | {} = {}) {
        let data: ProductsData | {} = {};
        
        try {
            data = (await Api.client.get('/', {params})).data;
        } catch (err) {
            data = {};
            throw err;
        }

        return data;
    }    
}