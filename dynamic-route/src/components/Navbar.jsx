import React from "react";
import { Link } from "react-router-dom"
import { Nav } from "../stylecomponents/style";

export const Navbar = () => {
  return (
    <div>
      <Nav>
        <h1>Masai</h1>
        <div className="innerDiv">
          <Link to="/"><p>Home</p></Link>
          <Link to="/product"><p>Product</p></Link>
          <Link to="/product/:id"><p>ProductsDetails</p></Link>
          <Link to="/contact"><p>Contact</p></Link>
          <Link to="/login"><p>Login</p></Link>
        </div>
      </Nav>
    </div>
  );
};