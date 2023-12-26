
'use client';

import { Breadcrumb } from 'flowbite-react';


export default function Main() {
  return (
    <Breadcrumb aria-label="Default breadcrumb example">
      <Breadcrumb.Item href="#" >
       <h3 className='text-4xl w-full m-5 flex justify-end absolute right-6 mt-20'>آرایشی بهداشتی</h3>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}
