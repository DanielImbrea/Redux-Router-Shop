import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "../../App.css";
const Home = () => {
  return (
    <div className="to__shop">
      <Link to="/shop" className="to__shop__link">
        <FaShoppingCart className="to__shop__icon" />
        <p>To Killer's shop &#9758;</p>
      </Link>
    </div>
  );
};

export default Home;
