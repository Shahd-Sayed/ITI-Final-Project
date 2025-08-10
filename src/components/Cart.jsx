import { Button, Container, Table } from "react-bootstrap";
import "../layouts/Cart.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Cart() {
  const navigate = useNavigate();
  const [cart, setCart] = useState(null);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) setCart(savedCart);
  }, []);

  const updateQuantity = (id, change) => {
    const updatedProducts = cart.products.map((product) => {
      if (product.id === id) {
        const newQuantity = Math.max(1, product.quantity + change);
        return { ...product, quantity: newQuantity };
      }
      return product;
    });

    const updatedCart = { ...cart, products: updatedProducts };
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeCartItem = (id) => {
    Swal.fire({
      title: "Are you sure to remove?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Cancel",
      confirmButtonText: "Yes, remove it!",
      confirmButtonColor: "var(--main-color)",
      cancelButtonColor: "#d33",
      background: "var(--main-bg-color)",
      color: "var(--main-color)",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedProducts = cart.products.filter(
          (product) => product.id !== id
        );
        const updatedCart = { ...cart, products: updatedProducts };

        if (updatedProducts.length === 0) {
          localStorage.removeItem("cart");
          setCart(null);
        } else {
          localStorage.setItem("cart", JSON.stringify(updatedCart));
          setCart(updatedCart);
        }

        Swal.fire({
          title: "Removed!",
          text: "The item has been removed successfully.",
          icon: "success",
          confirmButtonColor: "var(--main-color)",
          background: "var(--main-bg-color)",
          color: "var(--main-color)",
        }).then(() => {
          if (updatedProducts.length === 0) {
            navigate("/product", { replace: true });
          }
        });
      }
    });
  };

  if (!cart) {
    return (
      <div className="cart my-5 ">
        <Container>
          <p className="d-flex justify-content-center align-items-center m-auto text-danger fs-5 fw-bold">
            <i className="fas fa-exclamation-triangle me-3"></i>
            Your cart is empty.
          </p>
        </Container>
      </div>
    );
  }

  const complete = () => {
    navigate("/payement");
  };

  return (
    <div className="cart my-5">
      <Container>
        <div className="headingCart">
          <div className="titles">
            <p>
              <i className="fa-solid fa-cart-shopping me-2"></i>
              You're now viewing your shopping cart. Review your selected items
              before checkout.
            </p>
            <h5>Ready to Checkout ? </h5>
          </div>
          <button onClick={complete}>Complete Purchase</button>
        </div>
        <Table bordered responsive className="custom-striped">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Quantity</th>
              <th>Price (one)</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.products.map((product) => (
              <tr key={product.id}>
                <td>
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    style={{
                      width: "70px",
                      height: "70px",
                      objectFit: "cover",
                    }}
                  />
                </td>
                <td>{product.title}</td>
                <td>
                  <div
                    style={{
                      display: "inline-flex",
                      gap: "8px",
                      alignItems: "center",
                    }}>
                    <Button
                      size="sm"
                      onClick={() => updateQuantity(product.id, -1)}>
                      −
                    </Button>
                    <span>{product.quantity}</span>
                    <Button
                      size="sm"
                      onClick={() => updateQuantity(product.id, 1)}>
                      +
                    </Button>
                  </div>
                </td>
                <td>
                  $
                  {(
                    product.price *
                    (1 - product.discountPercentage / 100)
                  ).toFixed(2)}
                </td>
                <td>
                  $
                  {(
                    product.price *
                    (1 - product.discountPercentage / 100) *
                    product.quantity
                  ).toFixed(2)}
                </td>
                <td>
                  <Button
                    className="btn btn-danger"
                    size="sm"
                    onClick={() => removeCartItem(product.id)}>
                    <i className="fa-solid fa-trash me-2"></i>Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Cart;
