function CategoriesSelect({ categories, onChange ,value }) {
  return (
    <div className="select">
      <select className="mt-5" onChange={onChange} value={value}>
        <option value="" disabled>Choose Your Category</option>
        {categories.map((category, index) => (
          <option key={index} value={category.slug}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoriesSelect;
