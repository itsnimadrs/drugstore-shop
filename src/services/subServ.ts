import {api} from "../api/http.ts";

const subCategoryEndpoint = "/subcategories";

export interface SubCategory {
    _id: string;
    name: string;
    category: string;
    createdAt: string;
    updatedAt: string;
    slugname: string;
  }
  
  interface GetAllSubCategoriesResponse {
    page: number;
    per_page: number;
    subcategories: SubCategory[];
    total: number;
  }
  
  const getAll = (byCategoryId?: string) => {
    const filterQuery = byCategoryId ? `&category=${byCategoryId}` : "";
    return api.get<GetAllSubCategoriesResponse>(`${subCategoryEndpoint}?limit=100${filterQuery}`).then(res => res.data);
  };
  
  const getById = (id: string) => api.get(subCategoryEndpoint + "/" + id).then(res => res.data);
  
  const subServ = {
    getAll,
    getById
  };
  
  export default subServ;