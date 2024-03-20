package io.recipe.recipebook.recipes;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipeRepository extends JpaRepository <Recipes, Long > {

	
	
}
