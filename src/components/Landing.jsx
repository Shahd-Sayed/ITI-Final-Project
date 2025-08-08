import { Button, Container } from "react-bootstrap";
import "../layouts/Landing.css";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <>
      <div className="landing ">
        <Container>
          <div className="grid py-4 ">
            <div className="cards ">
              <h2>One more product,</h2>
              <h5 className="my-2">Thousands more possibilities!</h5>
              <p>
                Having great products means more joy, more convenience, and more
                ways to make life better. We offer 200+ unique items to match
                your needs and style!
              </p>
              <div className="btns">
                <Link to="/product">Show All Products</Link>
              </div>
            </div>
            <div className="cardsGrid">
              <div className="card-image" data-category="beauty">
                <img
                  src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
                  alt="image 1"
                  loading="lazy"
                />
              </div>
              <div className="card-image" data-category="fragrances">
                <img
                  src="https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/2.webp"
                  alt="image 2"
                  loading="lazy"
                />
              </div>
              <div className="card-image" data-category="laptops">
                <img
                  src="https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/2.webp"
                  alt="image 3"
                  loading="lazy"
                />
              </div>
              <div className="card-image" data-category="home-decoration">
                <img
                  src="https://cdn.dummyjson.com/product-images/home-decoration/decoration-swing/3.webp"
                  alt="image 4"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Landing;
