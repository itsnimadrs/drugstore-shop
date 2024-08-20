import toast from "react-hot-toast";

function showToast(message, isError = false) {
  const toastConfig = {
    position: "top-left",
    style: {
      padding: "10px",
      fontWeight: 700,
    },
  };
  if (isError) {
    toast.error(message, toastConfig);
  } else {
    toast.success(message, toastConfig);
  }
}

export function dismissToast() {
  toast.dismiss();
}
export default showToast;
