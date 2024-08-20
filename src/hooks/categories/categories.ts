import { useQuery } from "@tanstack/react-query";
import catServ, { Category } from "../../services/catServ.ts";
import subServ from "../../services/subServ.ts";

type CategoriesData = Category[];

const fetchCategories = async (): Promise<CategoriesData> => {
    let { categories } = await catServ.getAll();
  
    const subCategories = await Promise.all(categories.map((c: Category) => c._id).map((catId: string) => subServ.getAll(catId)));
    categories.forEach((c: Category, i: number) => (c.subcategories = subCategories[i].subcategories));
  
    return categories;
  };
  
  const useCategories = () =>
    useQuery<CategoriesData, Error>({
      queryKey: ["categories"],
      queryFn: () => fetchCategories(),
      placeholderData: prevData => prevData
    });
  
  export default useCategories;