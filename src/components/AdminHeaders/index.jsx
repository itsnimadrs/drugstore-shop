"use client";

import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";

export default function AdminHeader() {
  const navigate = useNavigate();

  return (
    <Button.Group>
      <Button
        onClick={() =>
          navigate("/admin/administrationPanel/adminHeader/ordersTab")
        }
        className="bg-gray-200"
        color="gray"
      >
        سفارش ها
      </Button>
      <Button
        onClick={() =>
          navigate(
            "/admin/administrationPanel/adminHeader/priceAndAvailability"
          )
        }
        className="bg-gray-200"
        color="gray"
      >
        موجودی و قیمت
      </Button>
      <Button onClick={() =>
          navigate(
            "/admin/administrationPanel/adminHeader/AdminProducts"
          )
        } className="bg-gray-200" color="gray">
        کالا ها
      </Button>
    </Button.Group>
  );
}
