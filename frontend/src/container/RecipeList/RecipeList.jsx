import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import { getAllRecipes } from "../../services/recipebook-services";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const recipesData = await getAllRecipes();
        setRecipes(recipesData);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      {recipes.map((recipe) => (
        <Card
          key={recipe.id}
          title={recipe.title}
          tags={recipe.tags}
          ingredients={recipe.ingredients}
          method={recipe.method}
          updatedAt={recipe.updatedAt}
          createdAt={recipe.createdAt}
          imageURL={recipe.imageURL}
          source={recipe.source}
          comments={recipe.comments}
          servings={recipe.servings}
          creator={recipe.creator}
        />
      ))}
    </div>
  );
};

export default RecipeList;
