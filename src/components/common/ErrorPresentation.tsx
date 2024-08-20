import { AxiosError } from "axios";
import Typography from "@mui/material/Typography";

interface ErrorPresentationProps {
  error: AxiosError;
  itemTitle?: string;
  mt?: number;
}

const ErrorPresentation = ({ error, itemTitle = "آیتم", mt = 30 }: ErrorPresentationProps) => {
  if (error?.response?.status === 404)
    return (
      <Typography mt={mt} textAlign='center'>
        {itemTitle} مورد نظر پیدا نشد!
      </Typography>
    );

  if (error?.response?.status !== 404)
    return (
      <Typography mt={mt} textAlign='center' fontSize={30}>
        خطا!
      </Typography>
    );

  return null;
};

export default ErrorPresentation;
