import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import { getAllRecipes } from "../../services/recipebook-services";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";

const RecipeList = ({ searchTerm }) => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  const handleAddRecipeClick = () => {
    navigate("/add");
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const recipesData = await getAllRecipes(searchTerm);
        setRecipes(recipesData);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, [searchTerm]);

  return (
    <div>
      <Button label={"Add Recipe"} onClick={handleAddRecipeClick} />
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
          favourite={recipe.favourite}
        />
      ))}
    </div>
  );
};

export default RecipeList;
