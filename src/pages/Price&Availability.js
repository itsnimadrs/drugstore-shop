"use client";

import { Button } from "flowbite-react";
import AdministrationPanel from "./AdministrationPanel";
export default function PriceAndAvailability() {
  return (
    <>
      <AdministrationPanel />
      <div className="flex flex-wrap gap-2 ">
        <div className="text-2xl font-bold absolute right-6 m-4">مدیریت کالاها</div>
        <Button className="m-4">ذخیره</Button>
      </div>
    </>
  );
}
