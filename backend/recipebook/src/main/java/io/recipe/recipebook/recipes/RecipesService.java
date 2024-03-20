package io.recipe.recipebook.recipes;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class RecipesService {
	
	@Autowired
	private RecipeRepository repo;

	public Recipes createPost(CreateRecipesDTO data) {
		Recipes newPost = new Recipes();
		newPost.setTags(data.getTags().trim().toLowerCase());
		newPost.setTitle(data.getTitle().trim());
		newPost.setCreatedAt(new Date());
		return this.repo.save(newPost);
	}

}
