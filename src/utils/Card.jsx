"use client";

import { Card } from "flowbite-react";
import { useEffect, useState } from "react";

export default function Cards() {
  const [name, setName] = useState([]);

  useEffect(() => {
    names();
  }, []);

  const names = async () => {
    const response = await fetch(`http://localhost:8000/api/products`);

    setName(await response.json())
  };

  return (
    <>
      <div className="flex justify-end">
        <Card href="#" className="max-w-sm m-28 ">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Card>
      </div>
    </>
  );
}
