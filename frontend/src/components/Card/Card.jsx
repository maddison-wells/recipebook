import React, { useState } from "react";
import styles from "./Card.module.scss";
import noImage from "../../assets/no-image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faHeart as fasHeart,
  faLightbulb as fasLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { faLightbulb as farLightbulb } from "@fortawesome/free-regular-svg-icons";

import {
  updateRecipeFavouriteStatus,
  updateRecipeIdeaStatus,
} from "../../services/recipebook-services";
import { toast } from "react-toastify";

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
  idea,
}) => {
  const [isFavorite, setIsFavorite] = useState(favourite);
  const [isIdea, setIsIdea] = useState(idea);

  const toggleFavorite = () => {
    const newFavouriteStatus = !isFavorite;
    setIsFavorite(newFavouriteStatus);

    updateRecipeFavouriteStatus(id, newFavouriteStatus)
      .then(() => {
        toast.success("Recipe added to favorites!");
      })
      .catch((error) => {
        console.error("Failed to update favorite status:", error);
        setIsFavorite(!newFavouriteStatus);
      });
  };

  const toggleIdea = () => {
    const newIdeaStatus = !isIdea;
    setIsIdea(newIdeaStatus);

    updateRecipeIdeaStatus(id, newIdeaStatus)
      .then(() => {
        toast.success("Recipe added to ideas!");
      })
      .catch((error) => {
        console.error("Failed to update idea status:", error);
        setIsIdea(!newIdeaStatus);
      });
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
          <FontAwesomeIcon
            icon={isIdea ? fasLightbulb : farLightbulb}
            className={styles.card__idea}
            onClick={toggleIdea}
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
            <a href={source} target="_blank" rel="noopener noreferrer">
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
          {ingredients.split(",").map((ingredient, index) => (
            <li key={index}>{ingredient.trim()}</li>
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
