("use client");

import { Table } from "flowbite-react";
import React, { useState } from "react";
import OrderModal from "../services/OrderModal.jsx";
function OrdersTable() {
  const [setShowModal] = useState(false);
  return (
    <>
      <div className="overflow-x-auto mb-10 mt-2">
        <Table>
          <Table.Head>
            <Table.HeadCell></Table.HeadCell>
            <Table.HeadCell> زمان ثبت سفارش</Table.HeadCell>
            <Table.HeadCell>مجموع مبلغ </Table.HeadCell>
            <Table.HeadCell>نام کاربر</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>

          <Table.Body className="divide-y">
            <React.Fragment>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>
                  <span onClick={() => setShowModal(true)}></span>
                  {<OrderModal onClose={() => setShowModal(false)} />}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  5/1/1402
                </Table.Cell>
                <Table.Cell>284000</Table.Cell>
                <Table.Cell>محمدرضا کاظمی</Table.Cell>
              </Table.Row>
            </React.Fragment>
          </Table.Body>
        </Table>
      </div>
    </>
  );
}

export default OrdersTable;
