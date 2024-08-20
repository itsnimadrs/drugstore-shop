import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";


interface QtySelectorProps {
  qty: number;
  onChange: (qty: number) => void;
  max: number;
}

const QtySelector = ({ qty, onChange, max }: QtySelectorProps) => {
  const handleIncrement = () => {
    onChange(Math.min(qty + 1, max));
  };

  const handleDecrement = () => {
    onChange(Math.max(qty - 1, 1));
  };

  return (
    <ButtonGroup>
      <Button variant='contained' onClick={handleIncrement} disabled={qty === max}>
        <AddIcon />
      </Button>

      <Typography
        sx={{
          width: "50px",
          fontWeight: "bold",
          borderTop: "1px solid #999",
          borderBottom: "1px solid #999",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
        boxShadow={1}
      >
        {(qty)}
      </Typography>

      <Button variant='contained' onClick={handleDecrement} disabled={qty === 1}>
        <RemoveIcon />
      </Button>
    </ButtonGroup>
  );
};

export default QtySelector;
