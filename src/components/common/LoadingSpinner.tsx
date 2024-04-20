import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const LoadingSpinner = ({ size = 40, mt, mb, color = "primary" }: { size?: number; mt?: number; mb?: number; color?: any }) => {
  return (
    <Box sx={{ display: "flex", height: "100%", justifyContent: "center", alignItems: "center", p: 1, mt, mb }}>
      <CircularProgress size={size} color={color} />
    </Box>
  );
};

export default LoadingSpinner;
