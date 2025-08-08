import { Container, Form, Button } from "react-bootstrap";
import "../layouts/Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { useFormik } from "formik";
import * as Yup from "yup";

function Register() {
  const navigator = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .max(12, "Password must be at most 12 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      axios
        .post(
          "https://reqres.in/api/register",
          {
            email: values.email,
            password: values.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
              "x-api-key": "reqres-free-v1",
            },
          }
        )
        .then((result) => {
          localStorage.setItem("Login", result.data.token);
          navigator("/home", { replace: true });
        });
    },
  });
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const navigator = useNavigate();
  // const handleRegister = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post(
  //       "https://reqres.in/api/register",
  //       {
  //         email,
  //         password,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           "x-api-key": "reqres-free-v1",
  //         },
  //       }
  //     )
  //     .then(navigator("/", { replace: true }));
  // };
  return (
    <>
      <Container className="d-flex justify-content-center flex-column align-items-center min-vh-100">
        <div className="p-4  login-card">
          <h2 className="text-center mb-4 fs-4">
            Create your <b>Montio</b> account
          </h2>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.email && !!formik.errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.password && !!formik.errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <div className="text-center mb-3">
              <Link to="/login">
                Do you have an account? <b>Login</b>
              </Link>
            </div>

            <div className="d-grid">
              <Button type="submit">Regitser</Button>
            </div>
          </Form>
        </div>
      </Container>
    </>
  );
}

export default Register;
