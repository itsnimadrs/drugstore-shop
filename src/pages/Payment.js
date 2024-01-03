"use client";

import React from "react";
import payment from "../assets/payment.png";

import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import Success from "./success";
export default function Payment() {
  return (
    <>
      <div>
        <img src={payment} />
      </div>
      <div>
        <Link to="/cart/finalizationOrder/payment/success">
          <Button
            className="w-[22rem] rounded-2xl absolute bottom-10 right-[23rem]"
            color="success"
          >
            پرداخت
          </Button>
        </Link>
      </div>
      <div>
        <Link to="/cart/finalizationOrder/payment/notsuccess">
          <Button
            className="w-[8rem] rounded-2xl absolute bottom-10 right-[46rem]"
            color="warning"
          >
            انصراف
          </Button>
        </Link>
      </div>
    </>
  );
}
