import { Link , Outlet } from "react-router-dom";
import AdminHeader from "../components/AdminHeaders";

export default function AdministrationPanel() {
  return (
    <div className="w-full bg-blue-500 p-2 flex ">
      
      <div className="p-2 underline text-white mr-20">
        <Link to="/">بازگشت به سایت</Link>
      </div>
      <AdminHeader/>
      <div className="text-2xl font-bold absolute right-10">پنل مدیریت فروشگاه</div>
      <div><Outlet/></div>
    </div>
  );
}
