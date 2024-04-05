import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "./HamburgerNav.module.scss";

const HamburgerNav = () => {
  const [showOptions, setShowOptions] = useState(false);

  const options = [
    { value: "home", label: "Home" },
    { value: "favourites", label: "Favourites" },
    { value: "categories", label: "Categories" },
  ];

  return (
    <div>
      <FontAwesomeIcon
        icon={faBars}
        onClick={() => setShowOptions(!showOptions)}
        style={{ cursor: "pointer" }}
      />

      {showOptions && (
        <ul className={styles.dropdown}>
          {options.map((option) => (
            <li className={styles.dropdown__item} key={option.value}>
              <NavLink
                to={option.value === "home" ? "/" : `/${option.value}`}
                exact={option.value === "home"}
                activeClassName="active"
                onClick={() => setShowOptions(false)}
                className={styles.dropdown__itemLabel}
              >
                {option.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HamburgerNav;
