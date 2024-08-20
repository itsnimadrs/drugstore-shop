import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToCart } from "../../services/apiCart";

export function useAddToCart() {
  const queryClient = useQueryClient();

  const { mutate: addCart, isLoading: isCreating } = useMutation({
    mutationFn: ({ product, quantity }) => addToCart(product, quantity),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
      queryClient.refetchQueries({
        queryKey: ["cart"],
        type: "active",
        exact: true,
      });
    },
    onError: (err) => console.log(err),
  });

  return { isCreating, addCart };
}
