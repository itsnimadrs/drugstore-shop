import axios from "axios";
import { BASE_URL } from "../../api/api";
import { useParams } from "react-router-dom";

export interface IProduct {
  id: number;
  name: string;
  price: number;
  unit: string | null;
  image: string;
}

interface IProductResponse {
  products: IProduct[];
}

// fetch products list from API
export const getProducts = async () => {
    const {id} = useParams()
  try {
    const res = await axios.get(`${BASE_URL}/products/${id}`);
    const data = res.data.data as IProductResponse;
    if (data == null || data.products == null)
      throw new Error("missing product info");
    return data.products;
  } catch (err) {
    if (err instanceof Error)
      throw new Error("Error in fetching products: " + err.message);
    return [];
  }
};