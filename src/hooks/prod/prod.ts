import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import productServ, { ChoosedProduct } from "../../services/productServ.ts";

const useProduct = (id: string) =>
  useQuery<ChoosedProduct, AxiosError>({
    queryKey: ["products", id],
    queryFn: () => {
      try {
        return productServ.getById(id);
      } catch (error) {
        throw error;
      }
    },
    placeholderData: prevData => prevData
  });

export default useProduct;