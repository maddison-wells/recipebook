import Button from "../Button/Button";
import { useRef } from "react";
import styles from "./Searchbar.module.scss";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Searchbar = ({ setSearchTerm }) => {
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputRef.current.value);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.search}
        type="text"
        placeholder="Search recipe ..."
        ref={inputRef}
      />
      <button className={styles.button} type="submit">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
};

export default Searchbar;
