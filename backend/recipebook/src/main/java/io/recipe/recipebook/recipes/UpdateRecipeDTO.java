package io.recipe.recipebook.recipes;

import java.util.List;

import jakarta.validation.constraints.Pattern;

public class UpdateRecipeDTO {

	@Pattern(regexp = "^(?=\\S).*$", message = "Title Cannot be empty")
	private String title;
	
	
	private List<String> tags;
	
	private List<String> ingredients;
	
	private String method;

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public List<String> getTags() {
		return tags;
	}

	public void setTags(List<String> tags) {
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
	

	
	
}
