package io.recipe.recipebook.recipes;

import jakarta.validation.constraints.NotBlank;

public class CreateRecipesDTO {
	
	@NotBlank
	private String title;
	
	@NotBlank
	private String tags;
	
	@NotBlank
	private String ingredients;
	
	@NotBlank
	private String method;
	
	

}
