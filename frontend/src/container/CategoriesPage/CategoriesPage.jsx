import React, { useState, useEffect } from "react";
import { getAllRecipes } from "../../services/recipebook-services";
import { useNavigate } from "react-router-dom";
import styles from "./CategoriesPage.module.scss";

const CategoriesPage = ({ setSearchTerm }) => {
  const [tagGroups, setTagGroups] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const recipesData = await getAllRecipes();
        const allTags = recipesData.reduce((acc, recipe) => {
          recipe.tags.forEach((tag) => {
            const lowercaseTag = tag.toLowerCase();
            const firstLetter = lowercaseTag.charAt(0);
            if (!acc[firstLetter]) {
              acc[firstLetter] = [];
            }
            if (!acc[firstLetter].includes(lowercaseTag)) {
              acc[firstLetter].push(lowercaseTag);
            }
          });
          return acc;
        }, {});
        const sortedGroups = {};
        Object.keys(allTags)
          .sort()
          .forEach((key) => {
            sortedGroups[key] = allTags[key].sort();
          });
        setTagGroups(sortedGroups);
      } catch (error) {
        console.error("Error fetching tags:", error);
      }
    };

    fetchTags();
  }, []);

  const handleTagClick = (tag) => {
    const lowercaseTag = tag.toLowerCase();
    setSearchTerm(lowercaseTag);
    navigate("/");
  };

  return (
    <div>
      <div>
        <h2 className={styles.categories__heading}>Categories</h2>
      </div>
      <div className={styles.categories}>
        {Object.keys(tagGroups)
          .sort()
          .map((letter) => (
            <div className={styles.categories__list} key={letter}>
              <h3 className={styles.categories__letter}>
                {letter.toUpperCase()}
              </h3>
              <ul>
                {tagGroups[letter].map((tag) => (
                  <li key={tag}>
                    <a
                      href="/"
                      onClick={(e) => {
                        e.preventDefault();
                        handleTagClick(tag);
                      }}
                    >
                      {tag.toUpperCase()}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
