import React, { useState, useEffect } from 'react';

export  const ProductsPage = () => {

  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    let url = 'http://localhost:8000/api/products';

    if (filter.category) {
      url += `?category=${filter.category}`;
    }

    if (sort) {
      url += `&_sort=${sort}&_order=asc`; 
    }

    const res = await fetch(url);
    const data = await res.json();

    setProducts(data);
  }

  const handleCategoryFilter = (category) => {
    setFilter({
      category
    });
  }

  const handleSortChange = (sortField) => {
    setSort(sortField);
  }

  return (
    <div>
      <h1>محصولات</h1>

      {/* <Filters 
        onCategoryChange={handleCategoryFilter}
        onSortChange={handleSortChange}
      /> */}

      {/* <ProductsList products={products} /> */}

      

    </div>
  );

}


