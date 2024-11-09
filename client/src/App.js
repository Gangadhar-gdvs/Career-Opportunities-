import React from "react";
import { BrowserRouter as Router, Routes, Route ,Navigate } from "react-router-dom";
import {  MDBContainer } from "mdb-react-ui-kit";
import Register from "./components/Register";
import Login from "./components/login";

function App() {
  return (
    <Router>
      <MDBContainer className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </MDBContainer>
    </Router>
  );
}

export default App;
