export const getAllRecipes = async () => {
  const response = await fetch("http://localhost:8080/posts");
  if (!response.ok) {
    throw new Error("Failed to get posts");
  }
  const data = await response.json();
  return data;
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
    throw new Error("Failed to get posts");
  }
  return response.json();
};
