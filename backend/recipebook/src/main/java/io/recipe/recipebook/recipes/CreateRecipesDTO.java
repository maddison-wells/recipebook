package io.recipe.recipebook.recipes;

import java.util.Date;
import java.util.List;

import jakarta.validation.constraints.NotBlank;

public class CreateRecipesDTO {
	
	@NotBlank
	private String title;
	
	@NotBlank
	private String tags;
	
	private List<String> ingredients;
	
	@NotBlank
	private String method;
	
	private Date createdAt;

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getTags() {
		return tags;
	}

	public void setTags(String tags) {
		this.tags = tags;
	}

	public List<String> getIngredients() {
		return ingredients;
	}

	public void setIngredients(List<String> ingredients) {
		this.ingredients = ingredients;
	}

	public String getMethod() {
		return method;
	}

	public void setMethod(String method) {
		this.method = method;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
	
	

}
