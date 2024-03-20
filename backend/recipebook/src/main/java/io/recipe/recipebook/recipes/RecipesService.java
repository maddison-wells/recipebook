package io.recipe.recipebook.recipes;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@Service
@Transactional
public class RecipesService {
	
	@Autowired
	private RecipeRepository repo;

	public Recipes createPost(CreateRecipesDTO data) {
		Recipes newPost = new Recipes();
		newPost.setTags(data.getTags());
		newPost.setTitle(data.getTitle().trim());
		newPost.setIngredients(data.getIngredients());

		newPost.setMethod(data.getMethod().trim());

		newPost.setCreatedAt(new Date());
		return this.repo.save(newPost);
	}

	public List<Recipes> getAll() {
		return this.repo.findAll();
	}

	public Optional<Recipes> findById(Long id) {
		return this.repo.findById(id);	
		
	}

	public Optional<Recipes> updateById(@Valid UpdateRecipeDTO data, Long id) {
		Optional<Recipes> maybePost = this.findById(id);
		if(maybePost.isEmpty()) {
			return maybePost;
		}
		Recipes foundPost = maybePost.get();
		if(data.getTitle() != null) {
			foundPost.setTitle(data.getTitle().trim());
		}
		return null;
	}

	
}
