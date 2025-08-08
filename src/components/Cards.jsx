import { Container } from "react-bootstrap";
import "../layouts/Cards.css";
import { useEffect, useState } from "react";
import axios from "axios";

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
          <button>
            <span>View more</span>
            <i className="fa-solid fa-angle-right ps-2"></i>
          </button>
        </div>
      </div>

      <div className="allCards">
        {products.map((product) => (
          <div
            className="card"
            key={product.id}
            data-precentage={`${product.discountPercentage.toFixed(1)}%`}>
            <img src={product.images[0]} alt={product.title} loading="lazy" />
            <h4>
              {product.title.length > 20
                ? `${product.title.slice(0, 20)}`
                : product.title}
            </h4>

            <p>
              category: <b>{product.category}</b>
            </p>
            <h4>${product.price}</h4>
            <p className="rate">
              <i className="me-1 fa-solid fa-star"></i>
              <b>{product.rating} </b>
            </p>
            <div className="read_more mt-2">
                <button>read more</button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Cards;
