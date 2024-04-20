"use client";

import { Button } from "flowbite-react";
import AdministrationPanel from "./AdministrationPanel";
import OrdersTable from "../pages/OrdersTable";
import { Link } from "react-router-dom";
import { Tabs } from "flowbite-react";
import DeliveredOrder from "./DeliveredOrder.tsx";
import WaitingOrder from "./WaitingOrder.tsx";
export default function OrdersTab() {
  return (
    <>
      <AdministrationPanel />

      <div className="flex mt-10 w-full">
        <div className="text-2xl font-bold absolute right-6 ">
          مدیریت سفارش ها
        </div>
        <Tabs className="ml-4 w-full" aria-label="Default tabs" style="default">
          <Tabs.Item active title="سفارش های تحویل داده شده">
            <DeliveredOrder />
          </Tabs.Item>
          <Tabs.Item className="w-full" title="سفارش های در انتظار ارسال">
            <WaitingOrder />
          </Tabs.Item>
        </Tabs>
        {/* <Button.Group>
      <Link to="DeliveredOrder">
      <Button className="p-4 ml-4 bg-blue-300" color="gray">سفارش های تحویل شده</Button>
      </Link>
      <Link to="WaitingOrder">
      <Button className="p-4  bg-blue-300" color="gray">سفارش های در انتظار ارسال</Button>
      </Link>
    </Button.Group> */}
      </div>
      <div></div>
    </>
  );
}
