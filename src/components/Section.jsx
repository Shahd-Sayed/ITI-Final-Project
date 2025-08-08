import { Button, Container } from "react-bootstrap";
import "../layouts/Section.css";
import { Link } from "react-router-dom";

function Section() {
  return (
    <>
      <Container>
        <div className="sections my-5">
          <div className="img">
            <img
              //   src="https://cdn.dummyjson.com/product-images/kitchen-accessories/black-aluminium-cup/2.webp"
              src="https://cdn.dummyjson.com/product-images/kitchen-accessories/microwave-oven/4.webp"
              alt=""
            />
          </div>
          <div className="section">
            <h2>Thousands more possibilities!</h2>
            <h5>
              Upgrading your kitchen means more comfort, better cooking, and
              smarter solutions.
            </h5>
            <p>
              We offer 200+ high-quality kitchen products designed to make your
              daily life easier and more enjoyable!
            </p>
            <div className="btnSection">
                <Link to="/product/kitchen-accessories">Explore All Kitchen Items</Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Section;
