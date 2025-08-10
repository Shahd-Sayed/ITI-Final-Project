import { Container, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import CategoriesSelect from "./Products/CategoriesSelect";
import ProductsList from "./Products/ProductList";
import PaginationControls from "./Products/PaginationControls";
import "../layouts/Category.css";
import { Link } from "react-router-dom";

function Category() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");

  const itemsPerPage = 8;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems =
    products.length > 0
      ? products.slice(indexOfFirstItem, indexOfLastItem)
      : allProducts.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(
    (products.length > 0 ? products.length : allProducts.length) / itemsPerPage
  );

  useEffect(() => {
    axios.get("https://dummyjson.com/products/categories").then((res) => {
      setCategories(res.data);
    });
    axios.get("https://dummyjson.com/products?limit=194").then((res) => {
      setAllProducts(res.data.products);
    });
  }, []);

  const handleCategoryChange = (e) => {
    const slug = e.target.value;
    setSelectedCategory(slug);

    if (!slug) {
      setProducts([]);
      setCurrentPage(1);
      return;
    }
    axios.get(`https://dummyjson.com/products/category/${slug}`).then((res) => {
      setProducts(res.data.products);
      setCurrentPage(1);
    });
  };

  return (
    <>
      <div className="allCategories">
        <Container>
          <div className="titles">
            <p>
              Not sure what to choose? We will guide you to the perfect product.
            </p>
            <h5>Explore Our Categories</h5>
          </div>

          <CategoriesSelect
            categories={categories}
            value={selectedCategory}
            onChange={handleCategoryChange}
          />
        </Container>
      </div>

      <Container className="my-5">
        {products.length > 0 ? (
          <div className="headingFlex">
            <h3 className="category mb-4">{products[0].category}</h3>
            <Link
              className="mb-4"
              onClick={() => {
                setProducts([]);
                setCurrentPage(1);
                setSelectedCategory("");
              }}
              to="#"
              style={{ cursor: "pointer" }}>
              All Products
            </Link>
          </div>
        ) : (
          <h3 className="category mb-4">all Products</h3>
        )}

        <ProductsList products={currentItems} />

        {totalPages > 1 && (
          <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            onPrev={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            onNext={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          />
        )}
      </Container>
    </>
  );
}

export default Category;
