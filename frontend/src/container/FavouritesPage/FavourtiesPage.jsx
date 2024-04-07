import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import { getAllRecipes } from "../../services/recipebook-services";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const FavourtiesPage = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  const handleAddRecipeClick = () => {
    navigate("/add");
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const allRecipes = await getAllRecipes();
        const favouriteRecipes = allRecipes.filter(
          (recipe) => recipe.favourite === true
        );
        setRecipes(favouriteRecipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

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
          id={recipe.id}
        />
      ))}
    </div>
  );
};

export default FavourtiesPage;
