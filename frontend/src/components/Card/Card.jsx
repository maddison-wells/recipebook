import React, { useState } from "react";
import styles from "./Card.module.scss";
import noImage from "../../assets/no-image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";

function formatDate(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleDateString("en-AU", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const Card = ({
  title,
  tags,
  ingredients,
  method,
  updatedAt,
  createdAt,
  imageURL,
  source,
  comments,
  servings,
  creator,
  id,
  favourite,
}) => {
  const [isFavorite, setIsFavorite] = useState(favourite);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <img
        className={styles.card__image}
        src={imageURL || noImage}
        alt={title}
      />

      <div className={styles.card__details}>
        <div className={styles.card__title}>
          <h1 className={styles.card__heading}>{title.toUpperCase()}</h1>
          <FontAwesomeIcon
            icon={isFavorite ? fasHeart : farHeart}
            className={styles.card__heart}
            onClick={toggleFavorite}
          />
        </div>
        {updatedAt ? (
          <p className={styles.card__timestamp}>
            Last updated {formatDate(updatedAt)}
          </p>
        ) : (
          <p className={styles.card__timestamp}>
            Created {formatDate(createdAt)}
          </p>
        )}
        <div className={styles.card__image}>
          {source ? (
            <a href={source} target="_blank">
              {creator}
              <FontAwesomeIcon icon={faLink} />
            </a>
          ) : (
            <span>{creator}</span>
          )}
          {servings && <p>Servings {servings}</p>}
        </div>
        <h2 className={styles.card__subheading}>INGREDIENTS</h2>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2 className={styles.card__subheading}>DIRECTIONS</h2>
        <p>{method}</p>
        {comments && (
          <>
            <h2 className={styles.card__subheading}>COMMENTS:</h2>
            <p>{comments}</p>
          </>
        )}
        <p className={styles.card__tags}>Tags: {tags.join(", ")}</p>{" "}
      </div>
    </div>
  );
};

export default Card;
