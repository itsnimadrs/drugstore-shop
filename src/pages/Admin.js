import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
export default function Admin() {
  return (
    <>
    <div><LoginForm/>
      </div>
      <div>
        <div>
          <Link to="/">بازگشت به سایت</Link>
        </div>
        <div>
          <Link to="administrationPanel">ورود</Link>
        </div>
      </div>
    </>
  );
}
