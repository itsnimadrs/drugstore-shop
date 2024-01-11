import { useSelector } from "react-redux";
import LoginForm from "./LoginForm.js";
export default function Admin() {
  // const shouldNavigate = useSelector((state) => 
  // state.auth);

  return (
    <>
      <div>
        <LoginForm  />
      </div>
    </>
  );
}
