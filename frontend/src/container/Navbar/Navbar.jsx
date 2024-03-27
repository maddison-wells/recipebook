import React from "react";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleAddRecipeClick = () => {
    navigate("/add");
  };
  return (
    <div>
      <ul>
        <Link to="/">Home</Link>
        <li>A-Z</li>
      </ul>
      <Button label={"+"} onClick={handleAddRecipeClick} />
    </div>
  );
};

export default Navbar;
