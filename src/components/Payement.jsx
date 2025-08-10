import { Container } from "react-bootstrap";
import "../layouts/Payment.css";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { replace, useNavigate } from "react-router-dom";

function Payement() {
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) setCart(savedCart);
  }, []);

  const total = cart
    ? cart.products.reduce((sum, product) => {
        return (
          sum +
          product.quantity *
            product.price *
            (1 - product.discountPercentage / 100)
        );
      }, 0)
    : 0;

  if (!cart) {
    return (
      <Container className="my-5 text-center text-danger fs-4">
        <p>Your cart is empty.</p>
      </Container>
    );
  }
  const handlePay = () => {
    localStorage.removeItem("cart");
    setCart(null);
    Swal.fire({
      title: "Payment Successful!",
      text: "Your order has been placed successfully!",
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "var(--main-color)",
      background: "var(--main-bg-color)",
      color: "var(--main-color)",
    }).then(() => {
      navigate("/product", { replace: true });
    });
  };
  return (
    <>
      <Container>
        <div className="payment">
          <div className="sectionOnes">
            <h6>payment</h6>
            <hr />
            <p>pay with : </p>
            <div className="check">
              <label>
                <input type="radio" name="payment" />
                Card
              </label>
              <label>
                <input type="radio" name="payment" />
                Bank
              </label>
              <label>
                <input type="radio" name="payment" />
                Transfer
              </label>
            </div>
            <label>
              Card Number
              <input
                type="text"
                name="payment"
                placeholder="1234 5678 9102 3456"
              />
            </label>
            <div className="alls">
              <label>
                Expiration Date
                <input type="date" name="payment" placeholder="MM/YY" />
              </label>
              <label>
                CVV
                <input type="text" name="payment" placeholder="123" />
              </label>
            </div>
            <button onClick={handlePay}>Pay ${total.toFixed(2)}</button>
            <p className="mt-3">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our privacy policy.
            </p>
          </div>
          <div className="sectionTwos">
            <h6>Orderd Summary</h6>
            <hr />
            {cart.products.map((product) => (
              <div
                key={product.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px",
                  gap: "20px",
                  borderBottom: "1px solid #ccc",
                  paddingBottom: "10px",
                }}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  style={{
                    width: 80,
                    height: 80,
                    objectFit: "cover",
                    borderRadius: 6,
                  }}
                />
                <div style={{ flex: 1 }}>
                  <h5 style={{ marginBottom: 5 }}>{product.title}</h5>
                  <p style={{ margin: 0 }}>
                    Quantity: {product.quantity} | Price per item: $
                    {(
                      product.price *
                      (1 - product.discountPercentage / 100)
                    ).toFixed(2)}
                  </p>
                </div>
                <div style={{ fontWeight: "bold" }}>
                  $
                  {(
                    product.quantity *
                    product.price *
                    (1 - product.discountPercentage / 100)
                  ).toFixed(2)}
                </div>
              </div>
            ))}
            <h5 className="text-center">Total: ${total.toFixed(2)}</h5>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Payement;
