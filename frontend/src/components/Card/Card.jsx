import React from "react";
import styles from "./Card.module.scss";
import noImage from "../../assets/no-image.png";

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
}) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.card__image}
        src={imageURL || noImage}
        alt={title}
      />

      <div className={styles.card__details}>
        <h1 className={styles.card__title}>{title.toUpperCase()}</h1>
        {updatedAt ? (
          <p className={styles.card__timestamp}>
            Last updated {formatDate(updatedAt)}
          </p>
        ) : (
          <p className={styles.card__timestamp}>
            Created {formatDate(createdAt)}
          </p>
        )}
        <div className={styles.card}>
          <a href={source}>{creator}</a>
          {servings && <p>Servings {servings}</p>}
        </div>
        <h2 className={styles.card__subheading}>INGREDIENTS</h2>
        <ul>
          {ingredients.map((ingredients, index) => (
            <li key={index}>{ingredients}</li>
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
