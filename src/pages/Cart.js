import { Link, Outlet } from "react-router-dom";
export default function Cart() {
  return (
    <div>
      <div>
        <Outlet />
        <Link to="finalizationOrder"> نهایی کردن سبد خرید</Link>
      </div>
      Cart
    </div>
  );
}
