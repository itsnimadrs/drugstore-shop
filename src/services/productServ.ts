import {api} from "../api/http.ts";

import { Category } from "./catServ";
import { SubCategory } from "./subServ";

export interface Product {
    name: string;
    category: string;
    subcategory: string;
    price: number;
    quantity: number;
    description: string;
    thumbnail: string;
    images: string[];
    rating: {
      rate: number;
      count: number;
    };
    categoryName?: string;
    subcategoryName?: string;
    slugname: string;
    createdAt: string;
    updatedAt: string;
    _id: string;
  }
  
  export interface ChoosedProduct {
    name: string;
    category: Category;
    subcategory: SubCategory;
    price: number;
    quantity: number;
    description: string;
    thumbnail: string;
    images: string[];
    rating: {
      rate: number;
      count: number;
    };
    slugname: string;
    createdAt: string;
    updatedAt: string;
    _id: string;
  }
  
  interface GetAllResponse {
    page: number;
    per_page: number;
    products: Product[];
    total: number;
  }
  
  export interface EditingData {
    id: string;
    product: Object;
  }
  
  const productEndpoint = "/products";
  
  const getAll = (page: number = 1, limit: number = 5, ofCatId?: string, ofSubCatId?: string) => {
    const filterQuery = ofSubCatId ? `&subcategory=${ofSubCatId}` : ofCatId ? `&category=${ofCatId}` : "";
    return api.get<GetAllResponse>(`${productEndpoint}?limit=${limit}&page=${page}${filterQuery}`).then(res => res.data);
  };
  
  const addNew = (product: FormData) => api.post(productEndpoint, product);
  
  const getById = (id: string) =>
    api
      .get<ChoosedProduct>(`${productEndpoint}/${id}`)
      .then(res => res.data)
      .catch(er => {
        throw er;
      });
  
      const editById = ({ id, product }: EditingData) => api.patch<Product>(`${productEndpoint}/${id}`, product).then(res => res.data);
  
  const productServ = {
    getAll,
    addNew,
    getById,
    editById
  };
  export default productServ;