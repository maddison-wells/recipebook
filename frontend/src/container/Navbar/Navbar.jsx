import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Searchbar from "../../components/Searchbar/Searchbar";
import styles from "./Navbar.module.scss";
import Select from "react-select";
import HamburgerNav from "../../components/HamburgerNav/HamburgerNav";

const Navbar = ({ setSearchTerm }) => {
  return (
    <div className={styles.nav}>
      <div className={styles.nav__row}>
        <HamburgerNav />

        <Link to="/">
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
