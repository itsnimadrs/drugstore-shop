"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";

export default function OrderModal() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>بررسی سفارش</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>سفارشات</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 flex justify-end">
              نمایش سفارش
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 flex justify-end">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
              ut? : آدرس 
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 flex justify-end">
              تلفن: 09195555555
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 flex justify-end">
              زمان تحویل: 6/1/1402
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 flex justify-end">
              زمان سفارش: 6/1/1402
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>تحویل شد</Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}
