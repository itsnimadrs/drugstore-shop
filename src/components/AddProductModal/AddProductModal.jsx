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
    image: null, // Added image field
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    
    // If it's a file input, use the first selected file
    const file = name === "image" ? files[0] : null;

    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "image" ? file : value,
    }));
  };

  const handleSubmit = () => {
    // Perform API request here
    const formDataToSend = new FormData();
    
    // Append form data to FormData object
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    fetch("http://localhost:8000/api/products", {
        method: "POST",
        body: formDataToSend,
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response from the API
          console.log(data);
          // Close the modal if needed
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
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              for="file_input"
            >
              بارگذاری عکس
            </label>
            <input
              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="file_input"
              type="file"
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

            <BasicDemo />
          </div>
          <div class="mb-6 mt-8">
            <label
              for="large-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white my-8"
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
          <Button onClick={handleSubmit}  >ذخیره</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
