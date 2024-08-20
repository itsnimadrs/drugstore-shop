"use client";

import { Dropdown } from "flowbite-react";

export default function Sidebar() {
  return (
    <div className="m-16 text-xl ">
    <div className="flex flex-wrap gap-4 w-38 text-2xl h-14 items-stretch font-bold justify-end bg-white">
      <Dropdown
        label="آرایشی بهداشتی"
        placement="right-start"
        className="h-full overflow-y-hidden overflow-hidden text-2xl font-bold"
      >
        <Dropdown.Item className="flex flex-col justify-end text-end align-baseline">
          <div>
            <h1 className="text-xl flex justify-end font-medium text-right">
              آرایشی بهداشتی{" "}
            </h1>
          </div>
        </Dropdown.Item>
        <Dropdown.Item className="flex justify-end">
          <div>
            <p>ضد آفتاب</p>
          </div>
        </Dropdown.Item>
        <Dropdown.Item className="flex flex-col justify-end text-end align-baseline">
          <div>
            <h1 className="text-xl flex justify-end font-medium text-right">
              مکمل غذایی
            </h1>
          </div>
        </Dropdown.Item>
        <Dropdown.Item className="flex  justify-end text-end align-baseline">
          <div>
            <p>مکمل گیاهی</p>
          </div>
        </Dropdown.Item>
      </Dropdown>
    </div>
    </div>
  );
}
