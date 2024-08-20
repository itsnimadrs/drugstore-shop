import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ClearIcon from "@mui/icons-material/Clear";
import SaveIcon from "@mui/icons-material/Save";

interface AddToCartBtnProps {
  enabled: boolean;
  addedQty: number | undefined;
  selectedQty: number;
  onClick: () => void;
}

const AddToCartBtn = ({ enabled, addedQty, selectedQty, onClick }: AddToCartBtnProps) => {
  if (enabled && !addedQty)
    return (
      <Button variant='contained' fullWidth onClick={onClick}>
        اضافه به سبد خرید
        <AddShoppingCartIcon sx={{ ml: 2 }} />
      </Button>
    );

  if (enabled && addedQty === selectedQty)
    return (
      <Button variant='outlined' color='error' fullWidth onClick={onClick}>
        حذف از سبد خرید
        <ClearIcon sx={{ ml: 2 }} />
      </Button>
    );

  if (enabled && addedQty && addedQty !== selectedQty)
    return (
      <Button variant='contained' color='success' fullWidth onClick={onClick}>
        ثبت تغییرات
        <SaveIcon sx={{ ml: 2 }} />
      </Button>
    );

  if (!enabled)
    return (
      <Button variant='outlined' color='warning' fullWidth sx={{ cursor: "not-allowed" }}>
        ناموجود
      </Button>
    );
};

export default AddToCartBtn;
