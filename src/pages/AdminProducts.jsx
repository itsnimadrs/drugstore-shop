"use client";


import AdministrationPanel from "./AdministrationPanel";
import AdminProductsTable from "../components/AdminProductsTable/AdminProductsTable";
import React from "react";
import { useState } from "react";
import AddProductModal from "../components/AddProductModal/AddProductModal";

export default function AdminProducts() {
  const [showLogin, setShowLogin] = useState(false);
    
  return (
    <>
      <AdministrationPanel />
      <div className="flex gap-2 ">
        <div className="text-2xl font-bold absolute right-6 m-4">
          مدیریت کالاها
        </div>
        
        <AddProductModal show={showLogin} close={() => setShowLogin(false)} />
        <div>
          
        </div>
      </div>
      < AdminProductsTable />
      {/* <div><BsPagination/></div> */}
    </>
  );
  }
