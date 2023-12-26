
'use client';

import { Pagination } from 'flowbite-react';
import React, { useEffect } from 'react';
import { useState } from 'react';



export default function BsPagination({count,params,active,setActive}) {
  const [currentPage, setCurrentPage] = useState(active);
  const onPageChange = (page: number) => {
    setCurrentPage(page);
    setActive(page); // Update active page in parent component
    params.set('page', page.toString()); // Update URL search params
  };

  useEffect(() => {
    // Update pagination state when params change
    setCurrentPage(Number(params.get('page')) || 1);
  }, [params]);
  
 
// useEffect(() =>{
// setActive(params.get("page"))
// })
//   let items = []

//   for(let number =1;number<=count/params.get("limit");number++){
//     items.push(
      
//     ) 
//   }
  
  return (
    <div className="flex overflow-x-auto sm:justify-center mb-8">
      <Pagination   currentPage={currentPage} totalPages={10} onPageChange={onPageChange} showIcons />
    </div>
  );
  }

