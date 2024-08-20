import { useQueries, useQueryClient } from "@tanstack/react-query";
import * as api from "../api/api";
import { useQuery, useMutation, queryCache } from "react-query";

const useProduct = (id) => {
  return useQuery(["product", id], api.getProduct);
};

export { useProduct };
