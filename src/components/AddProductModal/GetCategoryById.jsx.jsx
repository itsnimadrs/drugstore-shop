import { useQuery } from "@tanstack/react-query";
import { instance } from "../../constants";
import { CATEGORIES_URL } from "../../../config";

export const GetCategoryById = ({ categoryId }) => {
  const {
    isPending: isCategoryPending,
    error: categoryError,
    data: categoryData,
  } = useQuery({
    queryKey: ["panelCategoryData", categoryId],
    queryFn: () =>
      instance.get(`${CATEGORIES_URL}/${categoryId}`).then((res) => res.data),
  });

  if (isCategoryPending) return "Loading...";

  if (categoryError) return "An error has occurred: " + categoryError.message;

  return <>{categoryData.data.category.name}</>;
};
