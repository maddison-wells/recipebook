import React, { useState } from "react";
import { addRecipe } from "../../services/recipebook-services";

const AddRecipe = () => {
  const [formData, setFormData] = useState({
    title: "",
    creator: "",
    source: "",
    // updatedAt: "",
    // createdAt: "",
    imageURL: "",
    servings: "",
    ingredients: "",
    method: "",
    comments: "",
    tags: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addRecipe(formData);
      console.log("Recipe added successfully!");
    } catch (error) {
      console.error("Error adding recipe:", error);
    }
  };

  return (
    <div>
      <h1>Add New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />

        <label>Creator:</label>
        <input
          type="text"
          name="creator"
          value={formData.creator}
          onChange={handleChange}
        />

        <label>Source:</label>
        <input
          type="text"
          name="source"
          value={formData.source}
          onChange={handleChange}
        />
        {/* 
        <label>Updated At:</label>
        <input
          type="text"
          name="updatedAt"
          value={formData.updatedAt}
          onChange={handleChange}
        />

        <label>Created At:</label>
        <input
          type="text"
          name="createdAt"
          value={formData.createdAt}
          onChange={handleChange}
        /> */}

        <label>Image URL:</label>
        <input
          type="text"
          name="imageURL"
          value={formData.imageURL}
          onChange={handleChange}
        />

        <label>Servings:</label>
        <input
          type="text"
          name="servings"
          value={formData.servings}
          onChange={handleChange}
        />

        <label>Ingredients:</label>
        <textarea
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
        ></textarea>

        <label>Method:</label>
        <textarea
          name="method"
          value={formData.method}
          onChange={handleChange}
        ></textarea>

        <label>Comments:</label>
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
        ></textarea>

        <label>Tags:</label>
        <input
          type="text"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
        />

        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;
