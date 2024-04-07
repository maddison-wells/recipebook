export const getAllRecipes = async (searchTerm) => {
  console.log(searchTerm);
  const response = await fetch("http://localhost:8080/posts");
  if (!response.ok) {
    throw new Error("Failed to get posts");
  }
  const data = await response.json();

  if (searchTerm) {
    return data.filter(
      (recipe) =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (recipe.tags &&
          recipe.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          ))
    );
  } else {
    return data;
  }
};

export const addRecipe = async (recipeData) => {
  const response = await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(recipeData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to add recipe");
  }
  return response.json();
};

export const updateRecipe = async (recipeData) => {
  const response = await fetch("http://localhost:8080/posts", {
    method: "PATCH",
    body: JSON.stringify(recipeData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to update Recipe");
  }
  return response.json();
};

export const updateRecipeFavouriteStatus = async (id, favourite) => {
  const response = await fetch(`http://localhost:8080/posts/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ favourite }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    console.log({ id });
    console.log(JSON.stringify({ favourite }));
    throw new Error("Failed to update recipe's favourite status.");
  }
  return response.json();
};
