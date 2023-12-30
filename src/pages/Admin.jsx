import { useSelector } from "react-redux";
import LoginForm from "./LoginForm.js";


export default function Admin() {
  const shouldNavigate = useSelector((state) => <state className="auth"></state>.isLogin);
  return (
    <>
      <div>
        <LoginForm shouldNavigate={shouldNavigate} />
      </div>
    </>
  );
}
