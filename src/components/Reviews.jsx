import { Container } from "react-bootstrap";
import "../layouts/Reviews.css";
import { useEffect, useState } from "react";
import axios from "axios";
import ReviewCard from "./ReviewCard";
function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=4").then((res) => {
      const products = res.data.products;
      const oneReviewFromEach = products
        .filter((product) => product.reviews?.length)
        .map((product) => ({
          productTitle: product.title,
          productImage: product.images[0],
          ...product.reviews[0],
        }));
      setReviews(oneReviewFromEach);
      console.log(oneReviewFromEach);
    });
  }, []);
  return (
    <>
      <div className="review mb-5">
        <Container>
          <div className="heading">
            <p>
              Discover what is new! Check out the latest reviews and see what
              everyone is saying about our hottest products.
            </p>
            <h5>Latest Products Review</h5>
          </div>
          <ReviewCard reviews={reviews} showImage={true} />
        </Container>
      </div>
    </>
  );
}

export default Reviews;
