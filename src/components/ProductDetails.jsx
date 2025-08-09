import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import "../layouts/ProductDetails.css";
import StarRating from "./Star";
import ReviewCard from "./Home/ReviewCard";
import { AuthContext } from "../contexts/AuthContext";

function ProductDetails() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [reviews, setReviews] = useState([]);
  const { slug } = useParams();
  const [details, setDetails] = useState({});
  const [count, setCount] = useState(1);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${slug}`).then((res) => {
      setReviews(res.data.reviews || []);
      setDetails(res.data);
    });
  }, [slug]);

  const addCart = () => {
    if (!user) {
      alert("Please login first to add products to cart");
      navigate("/login");
      return;
    }

    const existingCart = JSON.parse(localStorage.getItem("cart")) || {
      userId: 1,
      products: [],
    };

    const existingProductIndex = existingCart.products.findIndex(
      (p) => p.id === details.id
    );

    if (existingProductIndex > -1) {
      existingCart.products[existingProductIndex].quantity += count || 1;
    } else {
      existingCart.products.push({
        id: details.id,
        title: details.title,
        price: details.price,
        discountPercentage: details.discountPercentage,
        thumbnail:
          details.thumbnail || (details.images?.length ? details.images[0] : ""),
        quantity: count || 1,
      });
    }

    axios
      .post("https://dummyjson.com/carts/add", {
        userId: existingCart.userId,
        products: existingCart.products,
      })
      .then((res) => {
        localStorage.setItem("cart", JSON.stringify(res.data));
        alert("Product added to cart!");
      });
  };

  return (
    <>
      <div className="products my-5">
        <Container>
          <div className="heading ">
            <p>
              category / <b>{details.category}</b>
            </p>
          </div>

          <div className="flex pt-3">
            <div className="images">
              {details.images && details.images.length > 0 && (
                <>
                  <div
                    className="imgss"
                    data-discount={`discount ${details.discountPercentage} %`}
                  >
                    <img src={details.images[0]} alt={details.title} />
                  </div>

                  {details.images.length > 1 && (
                    <div className="img_child">
                      {details.images.slice(1, 3).map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          alt={`${details.title} ${index + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>

            <div className="section">
              <h3>{details.title}</h3>

              <div
                className="rate"
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <StarRating rate={details.rating || 0} />
              </div>

              <div className="dimensions">
                <p>
                  <b>Width: </b>
                  {details.dimensions?.width} cm
                </p>
                <p>
                  <b>Height: </b>
                  {details.dimensions?.height} cm
                </p>
                <p>
                  <b>Depth: </b>
                  {details.dimensions?.depth} cm
                </p>
              </div>

              <div className="price">
                <p>
                  <b>Price :</b> $
                  {details.price && details.discountPercentage
                    ? (
                        details.price *
                        (1 - details.discountPercentage / 100)
                      ).toFixed(2)
                    : "N/A"}
                </p>
                <s>${details.price?.toFixed(2)}</s>
              </div>

              <hr />

              <div className="desc">
                <p>
                  <b>Description: </b> {details.description}
                </p>

                <div className="all">
                  <p>
                    <b>Tags: </b> {details.tags?.join(" - ")}
                  </p>
                  <p>
                    <b>Brand: </b> {details.brand}
                  </p>
                </div>
              </div>

              <hr />

              <div className="code">
                <img src={details.meta?.qrCode} alt={details.title} />
                <p>
                  <b>Barcode: </b> {details.meta?.barcode}
                </p>
              </div>

              <hr />

              <div className="btns">
                <div className="counter">
                  <button onClick={() => setCount((prev) => Math.max(1, prev - 1))}>
                    −
                  </button>
                  <span>{count}</span>
                  <button onClick={() => setCount((prev) => prev + 1)}>+</button>
                </div>

                <Link
                  onClick={addCart}
                  style={{ cursor: "pointer" }}
                >
                  Add to cart
                </Link>
              </div>
            </div>
          </div>

          <hr className="mt-5" />

          <div className="headingReviews my-5">
            <p>See what our customers are saying about this product!</p>
            <h5>Reviews and Rating</h5>
          </div>

          <ReviewCard reviews={reviews} showImage={false} showEmail={true} />
        </Container>
      </div>
    </>
  );
}

export default ProductDetails;
