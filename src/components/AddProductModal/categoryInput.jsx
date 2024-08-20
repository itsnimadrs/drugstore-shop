// import { Fragment } from 'react'
// import { Menu, Transition } from '@headlessui/react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function CategoryInput() {
//   return (
//     <Menu as="div" className="relative inline-block text-left">
//       <div>
//         <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
//           Options
//           <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
//         </Menu.Button>
//       </div>

//       <Transition
//         as={Fragment}
//         enter="transition ease-out duration-100"
//         enterFrom="transform opacity-0 scale-95"
//         enterTo="transform opacity-100 scale-100"
//         leave="transition ease-in duration-75"
//         leaveFrom="transform opacity-100 scale-100"
//         leaveTo="transform opacity-0 scale-95"
//       >
//         <Menu.Items className=" z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
//           <div className="py-1">
//             <Menu.Item>
//               {({ active }) => (
//                 <a
//                   href="#"
//                   className={classNames(
//                     active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                     'block px-4 py-2 text-sm'
//                   )}
//                 >
//                   Account settings
//                 </a>
//               )}
//             </Menu.Item>
//             <Menu.Item>
//               {({ active }) => (
//                 <a
//                   href="#"
//                   className={classNames(
//                     active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                     'block px-4 py-2 text-sm'
//                   )}
//                 >
//                   Support
//                 </a>
//               )}
//             </Menu.Item>
//             <Menu.Item>
//               {({ active }) => (
//                 <a
//                   href="#"
//                   className={classNames(
//                     active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                     'block px-4 py-2 text-sm'
//                   )}
//                 >
//                   License
//                 </a>
//               )}
//             </Menu.Item>
//             <form method="POST" action="#">
//               <Menu.Item>
//                 {({ active }) => (
//                   <button
//                     type="submit"
//                     className={classNames(
//                       active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                       'block w-full px-4 py-2 text-left text-sm'
//                     )}
//                   >
//                     Sign out
//                   </button>
//                 )}
//               </Menu.Item>
//             </form>
//           </div>
//         </Menu.Items>
//       </Transition>
//     </Menu>
//   )
// }

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
// export default function Example() {
//     return (
//       <div>
//         <div className="relative rounded-md shadow-sm -mt-4">
//           <input
//             type="text"
//             name="price"
//             id="price"
//             className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//             placeholder="دسته بندی"
//           />
//           <div className="absolute inset-y-0 right-0 flex items-center">
//             <label htmlFor="currency" className="sr-only">
//               Currency
//             </label>
//             <select
//               id="currency"
//               name="currency"
//               className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
//             >
//               <option>آرایشی بهداشتی</option>
//               <option>مکمل غذایی</option>

//             </select>
//           </div>
//         </div>
//       </div>
//     )
//   }

// import React, { useState } from "react";
// import { Dropdown } from 'primereact/dropdown';

// export default function BasicDemo() {
//     const [selectedCity, setSelectedCity] = useState(null);
//     const cities = [
//         { name: 'آرایشی بهداشتی', code: 'NY' },
//         { name: 'مکمل غذایی', code: 'RM' }
//     ];

//     return (
//         <div className="card flex justify-end">
//             <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
//                 placeholder="دسته بندی" className="w-40 md:w-14rem" />
//         </div>
//     )
// }

"use client";

import { Dropdown } from "flowbite-react";
import { useState } from "react";

export default function Category({ onChanage, value, array , categoryId}) {
  const [selected, setSelected] = useState(null);

  // console.log(data)

  return (
    <Dropdown
      value={value}
      onChange={onChanage}
      label={selected || "انتخاب دسته"}
      dismissOnClick={true}
    >
      {array?.map((item, index) => (
        <Dropdown.Item
          key={item._id || index}
          onClick={() => setSelected(item.name)}
          value={item._id}
          
        >
          {item.name}
        </Dropdown.Item>
      ))}
      {/* <Dropdown.Item onClick={() => setSelected("آرایشی بهداشتی")}>
        آرایشی بهداشتی
      </Dropdown.Item> */}
    </Dropdown>
  );
}
