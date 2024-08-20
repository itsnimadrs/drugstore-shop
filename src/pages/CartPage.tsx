import { ReactNode } from "react";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import EmptyCartIcon from "@mui/icons-material/ProductionQuantityLimits";
import LeftArrowIcon from "@mui/icons-material/KeyboardBackspace";
import StripedTable from "../components/widget/StripedTable";


import CustomLink from "../components/common/CustomLink";
import useCart from "../hooks/useCart";
// import useProductsByIds from "../hooks/useProductsByIds";



import tableColumns from "../tablesColumns/cart";
import React from "react";
import { CartItem, cartActions } from "../features/cartSlice";
import productid from "../hooks/productID/productid";
import { ChoosedProduct } from "../services/productServ";

export type RichCartItem = CartItem &
  Partial<ChoosedProduct> & {
    loading?: ReactNode;
   
  };

const CartPage = () => {
  const cart = useCart();
  const dispatch = useDispatch();

  const { products, isLoading } = productid(cart.map(item => item._id));
  const richCartItems: RichCartItem[] = cart.map((item, i) => ({ ...item, ...(products[i].data ?? { loading: "loading" }) }));

  const handleChangeQty = (item: RichCartItem) => dispatch(cartActions.processItem({ _id: item._id, qty: item.qty }));
  const handleDelete = (item: RichCartItem) => dispatch(cartActions.removeItemById(item._id));

  const totalPrice = richCartItems.reduce((total, item) => total + item.qty * (item.price ?? 0), 0);

  return (
    <Box p={5} minHeight='80vh'>
      <Typography variant='h4' component='h2' mb={5} textAlign='center'>
       : "سبد خرید"
      </Typography>

      {cart.length ? (
        <>
          <StripedTable columns={tableColumns} rowsData={richCartItems} actions={{ delete: handleDelete, qty: handleChangeQty }} />

          <Box sx={{ display: "flex", justifyContent: "end", alignItems: "center", gap: 10, my: 10 }}>
            <Typography sx={{ display: "flex", gap: 3 }}>
              مجموع کل: <span>{(totalPrice)} تومان</span>
            </Typography>
            <CustomLink to='/checkout'>
              <Button variant='contained'>
                تکمیل خرید
                <LeftArrowIcon sx={{ ml: 1 }} />
              </Button>
            </CustomLink>
          </Box>
        </>
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, my: 10 }}>
          <EmptyCartIcon sx={{ fontSize: 100, color: "red" }} />
          <Typography>سبد خرید شما خالی‌ست!</Typography>
          <CustomLink to='/categories' sx={{ mt: 5 }}>
            <Button variant='contained'>
              برو به فروشگاه
              <LeftArrowIcon sx={{ ml: 1 }} />
            </Button>
          </CustomLink>
        </Box>
      )}
    </Box>
  );
};

export default CartPage;
