"use client";

import { Button } from "flowbite-react";
import AdministrationPanel from "./AdministrationPanel";
import OrdersTable from "../pages/OrdersTable";
export default function OrdersTab() {
  

  return (
    <>
    <AdministrationPanel/>
    <div className="flex mt-10 ">
    <div className="text-2xl font-bold absolute right-6">مدیریت سفارش ها</div>
    <Button.Group>
      <Button className="p-4 ml-4 bg-blue-300" color="gray">سفارش های تحویل شده</Button>
      <Button className="p-4  bg-blue-300" color="gray">سفارش های در انتظار ارسال</Button>
    </Button.Group>
    </div>
    <div><OrdersTable/></div>
    </>
  );
}
