

import { api } from "../api/http.ts";
import { SubCategory } from "./subServ";

export interface Category {
    _id: string;
    name: string;
    icon: string;
    createdAt: string;
    updatedAt: string;
    slugname: string;
    subcategories?: SubCategory[];
  }
  
  interface GetAllCategoriesResponse {
    page: number;
    per_page: number;
    categories: Category[];
    total: number;
  }
  
  const categoryEndpoint = "/categories";
  
  const getAll = () => api.get<GetAllCategoriesResponse>(categoryEndpoint + "?limit=100").then(res => res.data);
  
  const catServ = {
    getAll
  };
  
  export default catServ;