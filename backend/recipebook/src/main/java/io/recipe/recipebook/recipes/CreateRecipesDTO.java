package io.recipe.recipebook.recipes;

import java.util.Date;
import java.util.List;

import jakarta.validation.constraints.NotBlank;

public class CreateRecipesDTO {
	
	@NotBlank
	private String title;
	
	
	private List<String> tags;
	
	private List<String> ingredients;
	
	@NotBlank
	private String method;
	
	private Date createdAt;
	
	private String creator;

	private String imageURL;
	
	private String source;
	
	private Boolean favourite;
	
	public String getCreator() {
		return creator;
	}

	public void setCreator(String creator) {
		this.creator = creator;
	}

	public String getImageURL() {
		return imageURL;
	}

	public void setImageURL(String imageURL) {
		this.imageURL = imageURL;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public Number getServings() {
		return servings;
	}

	public void setServings(Number servings) {
		this.servings = servings;
	}

	private String comments;
	
	
	private Number servings;
	
	
	
	

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

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public boolean isFavourite() {
		return favourite;
	}

	public void setFavourite(Boolean favourite) {
		this.favourite = favourite;
	}
	
	

}
