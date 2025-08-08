import { Container } from "react-bootstrap";
import "../layouts/Category.css";
import { useEffect, useState } from "react";
import axios from "axios";
// import Product from "./Product";

function Category() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products/categories").then((response) => {
      setCategories(response.data);
    });
  }, []);

  const handleClick = (e) => {
    const slug = e.target.value;
    axios
      .get(`https://dummyjson.com/products/category/${slug}`)
      .then((response) => {
        setProducts(response.data.products);
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
            <select className="mt-5" onChange={handleClick} defaultValue="">
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

      {products.map((product) => (
        <p>{product.title}</p>
      ))}
    </>
  );
}

export default Category;
