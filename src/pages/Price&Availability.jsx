"use client";
import PriceAvailabilityTable from "../pages/Price&AvailabilityTable";
import { Button } from "flowbite-react";
import AdministrationPanel from "./AdministrationPanel";
import { useState } from "react";
import axios from "axios";
export default function PriceAndAvailabilitys() {
  // const [editedValues, setEditedValues] = useState({});
  // const [editing, setEditing] = useState({});
  // const [saveButtonActive, setSaveButtonActive] = useState(false);

  // const fetchProducts = async () => {
  //   try {
  //     const response = await fetch(
  //       `http://localhost:8000/api/products`
  //     );

  //     if (!response.ok) {
  //       throw new Error(`Failed to fetch products. Status: ${response.status}`);
  //     }

  //     const data = await response.json();
  //     const productList = data?.data?.products || [];
  //     dispatch(setProducts(productList));
  //     dispatch(setError(null));

  //     const totalItems = data?.total || 0;
  //     const calculatedTotalPages = Math.ceil(totalItems / limit);

  //     dispatch(setTotalPages(calculatedTotalPages));
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     dispatch(setProducts([]));
  //     dispatch(setError("Failed to fetch products. Please try again later."));
  //   }
  // };

  // const handleSaveClick = async () => {
  //   try {
  //     const editedItems = [];

  //     for (const [fieldName, value] of Object.entries(editedValues)) {
  //       if (!fieldName || !value) {
  //         console.error(`Invalid product ID or field: ${fieldName}`);
  //         continue;
  //       }

  //       console.log("fieldName:", fieldName);

  //       const productId = fieldName.split("_")[0];
  //       const modifiedFieldName = fieldName.replace(`${productId}_`, "");

  //       const formData = new FormData();
  //       formData.append(modifiedFieldName, value);

  //       const response = await axios.patch(
  //         `http://localhost:8000/api/products/${productId}`,
  //         formData,
  //         {
  //           headers: {
  //             "Content-Type": "multipart/form-data",
  //             Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjlhYmU0MmJlMTA0ZTFmMmVlOWVmYyIsImlhdCI6MTcwMjU4OTQ4NSwiZXhwIjoxNzA1MTgxNDg1fQ.hQ5rfFFO47ZuiDU5i-3PXC4GT-59o6R3TZXuJTUyXSc`,
  //           },
  //         }
  //       );

  //       if (response.status !== 200) {
  //         console.error("Failed to save:", response);
  //         throw new Error(
  //           `Failed to save ${fieldName}. Status: ${response.status}`
  //         );
  //       }

  //       editedItems.push(response.data);
  //     }

  //     await Promise.all(editedItems);

  //     setEditing({});
  //     setEditedValues({});
  //     setSaveButtonActive(false);

  //     fetchProducts();
  //   } catch (error) {
  //     console.error("Error saving data:", error);
  //   }
  // };
  return (
    <>
      <AdministrationPanel />
      <div className="flex flex-wrap gap-2 ">
        <div className="text-2xl font-bold absolute right-6 m-4">
          مدیریت کالاها
        </div>
        <Button className="m-4">ذخیره</Button>
      </div>
      <div>
        <PriceAvailabilityTable />
      </div>
    </>
  );
}
