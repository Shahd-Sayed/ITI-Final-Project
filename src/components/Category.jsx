import { Button, Card, Container } from "react-bootstrap";
import "../layouts/Category.css";
import { useEffect, useState } from "react";
import axios from "axios";
import CardsComponents from "./CardsComponents";
import { useParams } from "react-router-dom";

function Category() {
  const { slug } = useParams();
  
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
  const currentItemsProducts = allProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const totalPagesProducts = Math.ceil(allProducts.length / itemsPerPage);

  useEffect(() => {
    axios.get("https://dummyjson.com/products/categories").then((response) => {
      setCategories(response.data);
    });

    axios.get("https://dummyjson.com/products?limit=194").then((res) => {
      setAllProducts(res.data.products);
    });
  }, []);

  useEffect(() => {
    if (slug) {
      axios
        .get(`https://dummyjson.com/products/category/${slug}`)
        .then((response) => {
          setProducts(response.data.products);
          setCurrentPage(1);
        });
    } else {
      setProducts([]);
    }
  }, [slug]);

  const handleClick = (e) => {
    const slug = e.target.value;
    axios
      .get(`https://dummyjson.com/products/category/${slug}`)
      .then((response) => {
        setProducts(response.data.products);
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
          <div className="select">
            <select className="mt-5" onChange={handleClick}>
              <option value="" disabled>
                Choose Your Category
              </option>
              {categories.map((category, index) => (
                <option key={index} value={category.slug}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </Container>
      </div>
      <Container className="my-5">
        {products.length > 0 ? (
          <div className="headingFlex">
            <h3 className="category mb-4">{products[0].category}</h3>
            <button
              className="mb-4"
              onClick={() => {
                setProducts([]);
                setCurrentPage(1);
              }}>
              All Products
            </button>
          </div>
        ) : (
          <h3 className="category mb-4">all Products</h3>
        )}
        <CardsComponents
          products={products.length > 0 ? currentItems : currentItemsProducts}
        />
        {(products.length > 0
          ? products.length > itemsPerPage
          : allProducts.length > itemsPerPage) && (
          <div className="mt-3 d-flex justify-content-center gap-3 align-items-center pagination">
            <Button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}>
              <i className="fa-solid fa-arrow-left"></i>
            </Button>
            <span>
              {currentPage} /
              {products.length > 0 ? totalPages : totalPagesProducts}
            </span>
            <Button
              onClick={() =>
                setCurrentPage((prev) =>
                  Math.min(
                    prev + 1,
                    products.length > 0 ? totalPages : totalPagesProducts
                  )
                )
              }
              disabled={
                currentPage ===
                (products.length > 0 ? totalPages : totalPagesProducts)
              }>
              <i className="fa-solid fa-arrow-right"></i>
            </Button>
          </div>
        )}
      </Container>
    </>
  );
}

export default Category;
