import { useState } from "react";
import {
  GetCategoryById,
  GetSubcategoryById,
  instance,
  useGetAllProducts,
} from "../api";
import { OutlineButton, Pagination, SelectBox, Table } from "../components";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PRODUCTS_URL } from "../config";
import { AddEditModal, DeleteModal } from "../common";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "../common";

const PanelProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const [showModal, setShowModal] = useState({
    add: false,
    delete: false,
    edit: false,
    spinner: false,
  });
  const [selectedProductForDelete, setSelectedProductForDelete] = useState([]);
  const [selectedProductForEdit, setSelectedProductForEdit] = useState(null);

  const [showToast, setShowToast] = useState(false);

  const queryClient = useQueryClient();
  const TRowsPerPage = 4;

  const [products, total, total_pages, isPending] = useGetAllProducts(
    currentPage,
    TRowsPerPage,
    selectedCategory
  );

  const handlePageChange = (page) => setCurrentPage(page);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  // delete mutation ....
  const mutation = useMutation({
    mutationFn: (id) => instance.delete(`${PRODUCTS_URL}/${id}`),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["panelProductsData"] });
      toast.success("محصول با موفقیت حذف شد", {
        autoClose: 2000,
        theme: "dark",
      });
    },
    onError: async () => {
      toast.error("محصول حذف نشد", {
        autoClose: 2000,
        theme: "dark",
      });
    },
  });

  //add mutation ...
  const addProduct = useMutation({
    mutationFn: (product) =>
      instance.post(`${PRODUCTS_URL}`, product, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),

    onMutate: () => {
      setShowModal((prevModal) => ({ ...prevModal, spinner: true }));
    },
    onError: async (error) => {
      console.log("error", error);
      await queryClient.invalidateQueries({ queryKey: ["panelProductsData"] });

      toast.error("🥲 محصول اضافه نشد", {
        autoClose: 2000,
        theme: "dark",
      });
    },
    onSuccess: async () => {
      console.log("با موفقیت اضافه شد");
      await queryClient.invalidateQueries({ queryKey: ["panelProductsData"] });
      toast.success("محصول به درستی اضافه شد😍", {
        autoClose: 2000,
        theme: "dark",
      });
    },
    onSettled: () => {
      setShowModal((prevModal) => ({ ...prevModal, spinner: false }));
    },
  });

  //edit mutation ...
  const editProduct = useMutation({
    mutationFn: (product) => {
      return instance.patch(
        `${PRODUCTS_URL}/${selectedProductForEdit.id}`,
        product
      );
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["panelProductsData"] });
      setSelectedProductForEdit(null);
      toast.success("محصول به درستی ویرایش شد 🤩", {
        autoClose: 2000,
        theme: "dark",
      });
    },
    onError: (error) => {
      console.log("error", error);
      toast.error("محصول ویرایش نشد 😒", {
        autoClose: 2000,
        theme: "dark",
      });
    },
  });

  // delete
  const handleDelete = (id) => {
    mutation.mutate(id);
    setShowModal((prevShowModal) => ({ ...prevShowModal, delete: false }));
    setShowToast(true);
    setSelectedProductForDelete(null);

    if (total === (currentPage - 1) * TRowsPerPage + 1) {
      handlePageChange(currentPage - 1);
    }
  };

  if (mutation.isLoading) {
    return <span>Deleting...</span>;
  }

  const handleShowDeleteModal = (productId, productName) => {
    setShowModal((prevShowModal) => ({ ...prevShowModal, delete: true }));

    setSelectedProductForDelete([productId, productName]);
  };

  // add ...
  const handleShowAddModal = () => {
    setShowModal((prevShowModal) => ({ ...prevShowModal, add: true }));
  };

  const handleAdd = (formDate) => {
    addProduct.mutate(formDate);
  };

  // edit ...
  const handleShowEditModal = (productId, productForEdit) => {
    setShowModal((prevShowModal) => ({ ...prevShowModal, edit: true }));
    setSelectedProductForEdit({ id: productId, data: { ...productForEdit } });
  };

  const handleEdit = (product) => {
    editProduct.mutate(product);
    console.log("formDate edit p1", product);
    setShowModal((prevShowModal) => ({ ...prevShowModal, edit: false }));
    setShowToast(true);
  };

  if (isPending) return <Spinner />;

  const columns = [
    {
      id: 1,
      lable: "تصویر",
      width: "w-[10%]",
    },
    {
      id: 2,
      lable: "نام کالا",
      width: "w-[35%]",
    },
    {
      id: 3,
      lable: <SelectBox onCategoryChange={handleCategoryChange} />,
      width: "w-[35%]",
    },
    {
      id: 4,
      lable: "",
      width: "w-[20%]",
    },
  ];

  return (
    <div className="w-4/5 mx-auto">
      <div className="flex items-center justify-between mb-2 ml-4">
        <h1 className="mr-4 text-xl text-orange-500 font-bold">
          مدیریت کالاها
        </h1>
        <OutlineButton
          bordercolorDark="border-green-700"
          bordercolorLight="border-green-500"
          textcolorDark="text-green-700"
          textcolorLight="text-green-500"
          onClick={handleShowAddModal}
        >
          افزودن کالا
        </OutlineButton>
      </div>
      <Table columns={columns}>
        {Array.isArray(products) &&
          products.map((row, index) => (
            <tr
              key={row._id}
              className={`bg-neutral-100 dark:border-neutral-500 text-orange-200 ${
                index % 2 === 0 ? "dark:bg-neutral-700" : "dark:bg-neutral-600"
              }  `}
            >
              <td className="whitespace-nowrap px-4 font-medium">
                <div>
                  <img
                    alt="thumbnail"
                    src={`http://localhost:8000/images/products/thumbnails/${row.thumbnail}`}
                    className="rounded-lg"
                  />
                </div>
              </td>
              <td className="whitespace-nowrap px-6 py-4">{row.name}</td>
              <td className="whitespace-nowrap pr-10 pl-6 py-4">
                <GetCategoryById categoryId={row.category} />
                <span> / </span>
                <GetSubcategoryById subCategoryId={row.subcategory} />
              </td>
              <td className="whitespace-nowrap px-6 py-4 flex items-center gap-2">
                <OutlineButton
                  className="ml-4"
                  bordercolorLight="border-orange-600"
                  bordercolorDark="border-orange-700"
                  textcolorLight="text-orange-600"
                  textcolorDark="text-orange-700"
                  onClick={() => handleShowEditModal(row._id, row)}
                >
                  ویرایش
                </OutlineButton>

                <OutlineButton
                  bordercolorLight="border-red-600"
                  bordercolorDark="border-red-700"
                  textcolorLight="text-red-600"
                  textcolorDark="text-red-700"
                  onClick={() => handleShowDeleteModal(row._id, row.name)}
                >
                  حذف
                </OutlineButton>
              </td>
            </tr>
          ))}
      </Table>
      <Pagination
        TRowsPerPage={TRowsPerPage}
        total={total}
        totalPages={total_pages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />

      {showModal.delete && (
        <DeleteModal
          label="حذف محصول"
          productName={selectedProductForDelete[1]}
          onDelete={() => handleDelete(selectedProductForDelete[0])}
          onClose={() =>
            setShowModal((prevShowModal) => ({
              ...prevShowModal,
              delete: false,
            }))
          }
        />
      )}
      {showToast && <ToastContainer />}

      {showModal.add && (
        <AddEditModal
          onAdd={(formDate) => handleAdd(formDate)}
          onClose={() =>
            setShowModal((prevShowModal) => ({
              ...prevShowModal,
              add: false,
            }))
          }
        />
      )}

      {showModal.edit && (
        <AddEditModal
          product={selectedProductForEdit.data}
          onEdit={(formData) => handleEdit(formData)}
          onClose={() =>
            setShowModal((prevShowModal) => ({
              ...prevShowModal,
              edit: false,
            }))
          }
        />
      )}
    </div>
  );
};

export default PanelProducts;
