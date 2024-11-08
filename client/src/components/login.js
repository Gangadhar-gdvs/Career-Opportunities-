import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
  } from "mdb-react-ui-kit";
  import { Link } from "react-router-dom";
  import { useNavigate } from "react-router-dom";
  import React, { useState } from "react";
  
  function Login() {
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    });
  
    const [error, setError] = useState("");
    const navigate = useNavigate();
  
    const onChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const onSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch("http://localhost:5000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        const result = await response.json();
        if (response.ok) {
          alert("Login successful!");
          localStorage.setItem("authToken", result.token); // Save the token if needed
          navigate("/dashboard");  // Redirect to dashboard or desired page
        } else {
          setError(result.message || "Login failed. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        setError("An error occurred. Please try again.");
      }
    };
  
    return (
      <MDBContainer fluid>
        <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center"
              >
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Login
                </p>
  
                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}
  
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size="lg" />
                  <MDBInput
                    label="Your Email"
                    id="form2"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={onChange}
                    required
                  />
                </div>
  
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size="lg" />
                  <MDBInput
                    label="Password"
                    id="form3"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={onChange}
                    required
                  />
                </div>
  
                <MDBBtn type="submit" onClick={onSubmit} className="mb-4" size="lg">
                  Login
                </MDBBtn>
  
                {/* Register Button */}
                <div className="d-flex flex-row align-items-center justify-content-center mb-4">
                  <p className="text-center mb-0 me-2">Don't have an account?</p>
                  <Link to="/register">
                    <MDBBtn size="md">Register</MDBBtn>
                  </Link>
                </div>
              </MDBCol>
  
              <MDBCol
                md="10"
                lg="6"
                className="order-1 order-lg-2 d-flex align-items-center"
              >
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  fluid
                />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    );
  }
  
  export default Login;
  