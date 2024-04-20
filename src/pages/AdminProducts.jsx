"use client";

import AdministrationPanel from "./AdministrationPanel";
import AdminProductsTable from "../components/AdminProductsTable/AdminProductsTable";
import React from "react";
import { useState } from "react";
// import AddProductModal from "../components/AddProductModal/AddProductModal.jsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../api/http.ts";
import { PRODUCTS_URL } from "../api/api";
import AddProduct from "../components/modal/AddProduct.jsx";


export default function AdminProducts() {
  const [showLogin, setShowLogin] = useState(false);
  
  const queryClient = useQueryClient();

  const addProduct = useMutation({
    mutationFn: (product) =>
      api.post(`${PRODUCTS_URL}`, product, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),

    // onMutate: () => {
    //   setShowModal((prevModal) => ({ ...prevModal, spinner: true }));
    // },
    onError: async (error) => {
      console.log("error", error);
      // await queryClient.invalidateQueries({ queryKey: ["panelProductsData"] });

      // toast.error("🥲 محصول اضافه نشد", {
      //   autoClose: 2000,
      //   theme: "dark",
      // });
    },
    onSuccess: async () => {
      console.log("با موفقیت اضافه شد");
      // await queryClient.invalidateQueries({ queryKey: ["panelProductsData"] });
      // toast.success("محصول به درستی اضافه شد😍", {
      //   autoClose: 2000,
      //   theme: "dark",
      // });
    },
    // onSettled: () => {
    //   setShowModal((prevModal) => ({ ...prevModal, spinner: false }));
    // },
  });

  const handleAdd = (formDate) => {
    addProduct.mutate(formDate);
  };

  return (
    <>
      <AdministrationPanel />
      <div className="flex gap-2 ">
        <div className="text-2xl font-bold absolute right-6 m-4">
          مدیریت کالاها
        </div>

        <AddProduct show={showLogin} onAdd={handleAdd} close={() => setShowLogin(false)} />
        <div></div>
      </div>
     
      <AdminProductsTable />
      {/* <div><BsPagination/></div> */}
    </>
  );
}
