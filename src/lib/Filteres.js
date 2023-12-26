const Filters = ({ onCategoryChange, onSortChange }) => {
  return (
    <div>
      <select onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="">همه دسته‌بندی‌ها</option>
        <option value="">آرایشی بهداشتی</option>
        <option value=""> مکمل غذایی</option>
      </select>

      <select onChange={(e) => onSortChange(e.target.value)}>
        <option value="">مرتب‌سازی</option>
        <option value="price">قیمت</option>
        <option value="date">تاریخ</option>
      </select>
    </div>
  );
};
