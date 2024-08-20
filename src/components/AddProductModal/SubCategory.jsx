"use client";

import { Dropdown } from "flowbite-react";
import { useState } from "react";
export default function SubCategory() {
  const [selected, setSelected] = useState(null);

  return (
    <Dropdown label={selected || "انتخاب زیردسته"} dismissOnClick={true}>
      <Dropdown.Item onClick={() => setSelected("ضد آفتاب")}>
        ضد آفتاب
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setSelected("مکمل گیاهی")}>
        مکمل گیاهی
      </Dropdown.Item>
    </Dropdown>
  );
}
