import React, { useState } from "react";
import { addRecipe } from "../../services/recipebook-services";
import styles from "./AddRecipe.module.scss";
import Button from "../Button/Button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddRecipe = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    creator: "",
    source: "",
    imageURL: "",
    servings: "",
    ingredients: "",
    method: "",
    comments: "",
    tags: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "tags") {
      setFormData({
        ...formData,
        [name]: value.split(",").map((item) => item.trim()),
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addRecipe(formData);
      toast.success("Recipe added successfully!");
      navigate("/");
    } catch (error) {
      toast.error("Error adding recipe: " + error.toString());
    }
  };

  return (
    <div className={styles.add}>
      <h1 className={styles.add__title}>Add New Recipe</h1>
      <form className={styles.add__form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          placeholder="Recipe Name"
        />

        <input
          type="text"
          name="creator"
          value={formData.creator}
          onChange={handleChange}
          placeholder="Creator"
        />

        <input
          type="text"
          name="source"
          value={formData.source}
          onChange={handleChange}
          placeholder="Link"
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

        <input
          type="text"
          name="imageURL"
          value={formData.imageURL}
          onChange={handleChange}
          placeholder="Image URL"
        />
        <input
          type="text"
          name="servings"
          value={formData.servings}
          onChange={handleChange}
          placeholder="Servings"
        />
        <textarea
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          placeholder="Ingredients: use comma to seperate"
          required
        ></textarea>
        <textarea
          name="method"
          value={formData.method}
          onChange={handleChange}
          required
          placeholder="Directions"
        ></textarea>
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          placeholder="Comments"
        ></textarea>
        <input
          type="text"
          name="tags"
          value={formData.tags.join(",")}
          onChange={handleChange}
          placeholder="Tags: use comma to seperate"
        />
        <Button label={"Add Recipe"} onClick={handleSubmit} />

        {/* <button type="submit">Add Recipe</button> */}
      </form>
    </div>
  );
};

export default AddRecipe;
