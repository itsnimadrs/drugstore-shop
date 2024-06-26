"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import BasicDemo from "./categoryInput";

export default function AddProductModal(props) {
  const [openModal, setOpenModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    const file = name === "image" ? files[0] : null;

    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "image" ? file : value,
    }));
  };

  const handleSubmit = () => {
    const formDataToSend = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    fetch("http://localhost:8000/api/products", {
      method: "POST",
      body: formDataToSend,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setOpenModal(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Button className="m-4" onClick={() => setOpenModal(true)}>
        افزودن کالا
      </Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>افزودن کالا</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="file_input"
            >
              بارگذاری عکس
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="file_input"
              type="file"
              required
            />
            <div className="mb-6">
              <label
                htmlFor="default-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                نام کالا
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="default-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                قیمت
              </label>
              <input
                type="number"
                id="default-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <label
              htmlFor="default-input"
              className="block text-sm font-medium text-gray-900 dark:text-white"
            >
              دسته بندی
            </label>

            <BasicDemo />
          </div>
          <label
            htmlFor="default-input"
            className="block text-sm font-medium text-gray-900 dark:text-white mb-4 w-full"
          >
            زیردسته
          </label>
          <input
            type="number"
            id="default-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <div className="mb-6 mt-8">
            <label
              htmlFor="large-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white my-8"
            >
              توضیحات
            </label>
            <input
              type="text"
              id="large-input"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit}>ذخیره</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
