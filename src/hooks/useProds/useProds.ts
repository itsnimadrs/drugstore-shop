// import { InfiniteData, useInfiniteQuery, useQuery } from "@tanstack/react-query";
// import productServ, { Product } from "../../services/productServ";
// import subServ from "../../services/subServ";



// interface ProductQuery {
//   page?: number;
//   perPage: number;
//   ofCatId?: string;
//   ofSubCatId?: string;
//   richItems?: boolean;
// }

// interface ProductsData {
//   products: Product[];
//   totalCount: number;
// }

// const fetchProducts = async ({ page, perPage, ofCatId, ofSubCatId, richItems }: ProductQuery): Promise<ProductsData> => {
//   let { products, total } = await productServ.getAll(page, perPage, ofCatId, ofSubCatId);

//   if (richItems) {
//     const subCategories = await Promise.all(products.map((p: Product) => p.subcategory).map((subCatId: string) => subServ.getById(subCatId)));
//     products = products.map((p: Product, i: number) => ({
//       ...p,
//       categoryName: subCategories[i].category.name,
//       subcategoryName: subCategories[i].name
//     }));
//   }

//   return { products, totalCount: total };
// };

// const paginated = (query: ProductQuery) =>
//   useQuery<ProductsData, Error>({
//     queryKey: ["products", query],
//     queryFn: () => fetchProducts(query),
//     placeholderData: prevData => prevData
//   });

// const infinite = (query: ProductQuery) =>
//   useInfiniteQuery<ProductsData, Error, InfiniteData<ProductsData>, [string, ProductQuery], number>({
//     queryKey: ["products", query],
//     queryFn: ({ pageParam }): Promise<ProductsData> => fetchProducts({ ...query, page: pageParam }),
//     placeholderData: prevData => prevData,
//     initialPageParam: 1,
//     getNextPageParam: (lastPage, allPages) => (allPages.length < lastPage.totalCount / query.perPage ? allPages.length + 1 : null)
//   });

// const useProducts = { paginated, infinite };

// export default useProducts;