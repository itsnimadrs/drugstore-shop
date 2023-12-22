"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import CategoryInput from "../AddProductModal/categoryInput";
import { useEffect } from "react";

export default function EditModal(props) {
  const [openModal, setOpenModal] = useState(false);
  

    useEffect(() => {
        
      }, []);

  return (
    <>
      {/* <Button className="m-4" onClick={() => setOpenModal(true)}>
        افزودن کالا
      </Button> */}
      <span onClick={() => setOpenModal(true)} className="p-2 font-medium text-cyan-600 hover:underline dark:text-cyan-500 cursor-pointer">
        ویرایش
      </span>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>افزودن/ویرایش کالا</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              for="file_input"
            >
              بارگذاری عکس
            </label>
            <input
              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="file_input"
              type="file"
              accept="image/*"
              required
            />
            <div class="mb-6">
              <label
                for="default-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                نام کالا
              </label>
              <input
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <label
              for="default-input"
              class="block text-sm font-medium text-gray-900 dark:text-white"
            >
              دسته بندی
            </label>

            <CategoryInput />
          </div>
          <div class="mb-6">
            <label
              for="large-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4"
            >
              توضیحات
            </label>
            <input
              type="text"
              id="large-input"
              class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button >ذخیره</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
