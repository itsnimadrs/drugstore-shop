"use client";

import { Button } from "flowbite-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpg";
export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="bg-blue-500 w-full h-20 flex p-4">
      <Button.Group>
        <div className="rounded-full bg-red-600 w-4 h-4 text-xs align-middle text-center justify-start -mr-[0.71rem] z-10">
          0
        </div>
        <Button onClick={() => navigate("/cart")} color="gray">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18 14C18.2175 14.0001 18.4291 13.9292 18.6027 13.7982C18.7763 13.6672 18.9024 13.4832 18.962 13.274L20.962 6.274C21.0044 6.12518 21.0117 5.96855 20.9833 5.81644C20.9549 5.66433 20.8916 5.52089 20.7983 5.3974C20.7051 5.27391 20.5844 5.17374 20.4459 5.10479C20.3074 5.03583 20.1547 4.99996 20 5H6.77L6.175 2.745C6.11869 2.53148 5.99329 2.3426 5.81836 2.20783C5.64344 2.07307 5.42882 1.99999 5.208 2H4C3.73478 2 3.48043 2.10536 3.29289 2.29289C3.10536 2.48043 3 2.73478 3 3C3 3.26522 3.10536 3.51957 3.29289 3.70711C3.48043 3.89464 3.73478 4 4 4H4.438L5.038 6.255V6.265V6.274L7.038 13.274L7.784 16.26C7.29013 16.479 6.86456 16.8272 6.55222 17.268C6.23988 17.7088 6.05237 18.2258 6.00947 18.7643C5.96658 19.3028 6.0699 19.843 6.30853 20.3276C6.54715 20.8123 6.91223 21.2236 7.3652 21.5179C7.81818 21.8123 8.34224 21.9789 8.88206 22.0002C9.42188 22.0214 9.95741 21.8965 10.4321 21.6386C10.9068 21.3807 11.3031 20.9994 11.579 20.535C11.855 20.0706 12.0005 19.5402 12 19C11.9967 18.6586 11.9344 18.3203 11.816 18H14.184C14.0656 18.3203 14.0033 18.6586 14 19C14 19.5933 14.1759 20.1734 14.5056 20.6667C14.8352 21.1601 15.3038 21.5446 15.8519 21.7716C16.4001 21.9987 17.0033 22.0581 17.5853 21.9424C18.1672 21.8266 18.7018 21.5409 19.1213 21.1213C19.5409 20.7018 19.8266 20.1672 19.9424 19.5853C20.0581 19.0033 19.9987 18.4001 19.7716 17.8519C19.5446 17.3038 19.1601 16.8352 18.6667 16.5056C18.1734 16.1759 17.5933 16 17 16H9.78L9.28 14H18Z"
              fill="#2F2F38"
            />
          </svg>
          <p>سبد خرید</p>
        </Button>

        <Button onClick={() => navigate("/admin")} color="gray">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C21.9971 9.34873 20.9426 6.80688 19.0679 4.93215C17.1931 3.05742 14.6513 2.00291 12 2ZM12 7C12.5933 7 13.1734 7.17595 13.6667 7.50559C14.1601 7.83524 14.5446 8.30377 14.7716 8.85195C14.9987 9.40013 15.0581 10.0033 14.9424 10.5853C14.8266 11.1672 14.5409 11.7018 14.1213 12.1213C13.7018 12.5409 13.1672 12.8266 12.5853 12.9424C12.0033 13.0581 11.4001 12.9987 10.852 12.7716C10.3038 12.5446 9.83524 12.1601 9.5056 11.6667C9.17595 11.1734 9 10.5933 9 10C9 9.20435 9.31607 8.44129 9.87868 7.87868C10.4413 7.31607 11.2044 7 12 7ZM12 20C10.2392 20.0019 8.51699 19.4843 7.049 18.512C7.16502 17.5451 7.63092 16.6541 8.35879 16.0071C9.08666 15.3601 10.0262 15.0019 11 15H13C13.9739 15.0019 14.9134 15.3601 15.6412 16.0071C16.3691 16.6541 16.835 17.5451 16.951 18.512C15.483 19.4843 13.7608 20.0019 12 20Z"
              fill="#2F2F38"
            />
          </svg>
          <p>ادمین</p>
        </Button>
        <div className="text-3xl font-bold absolute right-8 text-white">
          دراگ استور
        </div>
        <div className="absolute right-[12rem]">
          <img className="w-14 h-14 rounded-full" src={logo} alt="" />
        </div>
        <div className="absolute right-[18rem]">
          <form class="max-w-4xl mx-auto w-[22rem]">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="جستجو محصولات"
                required
              />
              <button
                type="submit"
                class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                جستجو
              </button>
            </div>
          </form>
        </div>
      </Button.Group>
    </div>
  );
}
