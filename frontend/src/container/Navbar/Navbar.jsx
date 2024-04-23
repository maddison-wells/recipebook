import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "../../components/Searchbar/Searchbar";
import styles from "./Navbar.module.scss";
import HamburgerNav from "../../components/HamburgerNav/HamburgerNav";

const Navbar = ({ setSearchTerm }) => {
  const handleHomeLinkClick = () => {
    setSearchTerm("");
  };
  return (
    <div className={styles.nav}>
      <div className={styles.nav__row}>
        <HamburgerNav />

        <Link to="/" onClick={handleHomeLinkClick}>
          <h1 className={styles.nav__title}>Mads Recipe Book</h1>
        </Link>
      </div>
      <div>
        <Searchbar setSearchTerm={setSearchTerm} />
      </div>
    </div>
  );
};

export default Navbar;
