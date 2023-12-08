"use client";

import { Button } from "flowbite-react";
import AdministrationPanel from "./AdministrationPanel";
export default function AdminProducts() {
  return (
    <>
      <AdministrationPanel />
      <div className="flex flex-wrap gap-2 ">
        <div className="text-2xl font-bold absolute right-6 m-4">
          مدیریت کالاها
        </div>
        <Button className="m-4"> افزودن کالا</Button>
      </div>
    </>
  );
}
