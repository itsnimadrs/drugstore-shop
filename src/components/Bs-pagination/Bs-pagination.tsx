// "use client";

// import { Pagination } from "flowbite-react";
// import React, { useEffect } from "react";
// import { useState } from "react";
// import axios from "axios";
// import { BASE_URL } from "../../api/api";

// export default function BsPagination({ count, params, active, setActive }) {
//   const [currentPage, setCurrentPage] = useState(1);
//   const onPageChange = (page: number) => {
//     setCurrentPage(page);
    
//     params.set('page', page.toString());
//   };

//   // useEffect(() => {

//   //   setCurrentPage(Number(params.get('page')) || 1);
//   // }, [params]);

//   // useEffect(() =>{
//   // setActive(params.get("page"))
//   // })
//   //   let items = []

//     // for(let number =1;number<=count/params.get("limit");number++){
//     //   items.push(

//     //   )
//     // }

//   return (
//     <div className="flex overflow-x-auto sm:justify-center mb-8">
//       <Pagination currentPage={currentPage} totalPages={50} onPageChange={onPageChange} showIcons />
//     </div>
//   );
// }


// 'use client';

// import { Pagination } from 'flowbite-react';
// import React from 'react';
// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// export default function Bspagination({nPages}) {

//   const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

//   const [currentPage, setCurrentPage] = useState(1);
//   const dispatch = useDispatch();
//   const products = useSelector((state: any) => state.products.products);
  
  
//   const [previousPage, setPreviousPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

    
//   const handlePrevPage = () => {
//   if (currentPage > 1) {
//     setCurrentPage(currentPage - 1);
//   }
// };

//  const handleNextPage = () => {
//   if (currentPage < 100) {
//     setCurrentPage(currentPage + 1);
//   }
// };
 

 
//   const onPageChange = (page: number) => setCurrentPage(page);

//   return (
    
//     <div className="flex overflow-x-auto sm:justify-center my-10 justify-center">
//       <Pagination
//         currentPage={currentPage}
//         totalPages={100}
//         onPageChange={onPageChange}
//       />
//     </div>
//   );
// }

// import React, { useEffect } from "react";
// import usePagination from "./usePagination";

// const Pagination = (props) => {
//   const { pageNumber, changePage, pageData, nextPage, previousPage } =
//     usePagination(props.items, props.pageLimit);

//   useEffect(() => {
//     props.setPageItems(pageData);
//   }, [pageNumber]);

//   return (
//     <div>
//       <b onClick={previousPage}>Prev</b>
//       <input
//         value={pageNumber}
//         onChange={(e) => {
//           changePage(e.target.valueAsNumber);
//         }}
//         type="number"
//       />
//       <b onClick={nextPage}>Next</b>
//     </div>
//   );
// };

// export default Pagination;

import React, { useState } from 'react';
import { Pagination } from 'react-bootstrap';

export default function TodoPagination({
  count,
  paginate,
  pagesPerPage,
  currentPage,
}) {
  const pagesCount = Math.ceil(count / pagesPerPage);
  const onPageNumberClick = (i: number) => {
    paginate(i);
  };
  return (
    <>
      <Pagination>
        {[...new Array(pagesCount)].map((_, i) => (
          <Pagination.Item
            key={i}
            active={i + 1 === currentPage}
            onClick={() => onPageNumberClick(i + 1)}
          >
            {i + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </>
  );
}