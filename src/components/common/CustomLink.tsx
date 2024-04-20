import { Link } from "react-router-dom";
import { styled, Theme } from "@mui/material/styles";

interface CustomLinkProps {
  theme?: Theme;
  underline?: boolean;
  colors?: {
    light: string;
    dark: string;
  };
}

const CustomLink = styled(Link, {
  shouldForwardProp: prop => prop !== "underline"
})<CustomLinkProps>(({ theme, underline = false, colors }) => ({
  textDecoration: underline ? "underline" : "none",
  color: colors ? (theme?.palette.mode === "light" ? colors.light : colors.dark) : "inherit"
}));

export default CustomLink;
