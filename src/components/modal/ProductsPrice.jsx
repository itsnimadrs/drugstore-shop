import React from "react";
import DataTable from "react-data-table-component";

function ProductsPrice() {
  const columns = [
    {
      name: "کالا",
      selector: (row) => row.product,
      sortable: true,
    },
    {
      name: "قیمت",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "موجودی",
      selector: (row) => row.inventory,
      sortable: true,
    },
  ];

  const data = [
    { id: 1, product: "محصول 1", price: "100,000 تومان", inventory: 10 },
    { id: 2, product: "محصول 2", price: "150,000 تومان", inventory: 15 },
    { id: 3, product: "محصول 3", price: "200,000 تومان", inventory: 20 },
  ];

  return (
    <div>
      <div className="w-full h-[100px] flex justify-end items-end pl-10 ">
        <button className="w-[150px] text-white h-[50px] bg-green-500">
          ذخیره
        </button>
      </div>
      <DataTable
        title="جدول محصولات"
        columns={columns}
        data={data}
        pagination
      />
    </div>
  );
}

export default ProductsPrice;
