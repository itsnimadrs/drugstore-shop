import { Link, Outlet } from "react-router-dom";

export default function FinalizationOrder() {
  return (
    <div>
      <div>
        <Outlet />
        <Link to="payment">پرداخت</Link>
      </div>
      FinalizationOrder
    </div>
  );
}
