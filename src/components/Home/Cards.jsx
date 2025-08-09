import { Container } from "react-bootstrap";
import "../../layouts/Cards.css";
import { useEffect, useState } from "react";
import axios from "axios";
import CardsComponents from "./CardsComponents";
import { Link } from "react-router-dom";

function Cards() {
  const categories = ["beauty", "fragrances", "furniture", "groceries"];
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = categories.map((category) =>
        axios.get(
          `https://dummyjson.com/products/category/${category}?limit=1&skip=2`
        )
      );
      Promise.all(data).then((responses) => {
        const allProducts = responses.flatMap((res) => res.data.products);
        setProducts(allProducts);
      });
    };

    fetchProducts();
  }, []);

  return (
    <Container>
      <div className="headings my-5">
        <div className="all">
          <p>
            Too many products to choose from? We will help you find the right
            one
          </p>
          <h5>Our Products</h5>
        </div>
        <div className="btn-view">
          <Link to={"/product"}>
            View more <i className="fa-solid fa-angle-right ps-2"></i>
          </Link>
        </div>
      </div>
      <CardsComponents products={products} />
    </Container>
  );
}

export default Cards;
