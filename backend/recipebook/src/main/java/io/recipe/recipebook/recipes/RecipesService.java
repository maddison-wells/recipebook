package io.recipe.recipebook.recipes;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@Service
@Transactional
public class RecipesService {
	
	@Autowired
	private RecipeRepository repo;
	
	@Autowired
	private ModelMapper mapper;

	public Recipes createPost(CreateRecipesDTO data) {
//		Recipes newPost = new Recipes();
//		newPost.setTags(data.getTags());
//		newPost.setTitle(data.getTitle().trim());
//		newPost.setIngredients(data.getIngredients());
//
//		newPost.setMethod(data.getMethod().trim());

		Recipes newPost = mapper.map(data,  Recipes.class);
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
		if(data.getIngredients() != null) {
			foundPost.setIngredients(data.getIngredients());
		}
		if(data.getTags() != null) {
			foundPost.setTags(data.getTags());
		}
		if(data.getMethod() != null) {
			foundPost.setMethod(data.getMethod());
		}
		if(data.getCreator() != null) {
			foundPost.setCreator(data.getCreator());
		}
		if(data.getImageURL() != null) {
			foundPost.setImageURL(data.getImageURL());
		}
		if(data.getSource() != null) {
			foundPost.setSource(data.getSource());
		}
		if(data.getComments() != null) {
			foundPost.setComments(data.getComments());
		}
		if(data.getServings() != null) {
			foundPost.setServings(data.getServings());
		}
		
		foundPost.setFavourite(data.isFavourite());

		
		Recipes updated = this.repo.save(foundPost);
		return Optional.of(updated);
	
	}

	public boolean deleteById(Long id) {
		Optional<Recipes> maybePost = this.repo.findById(id);
		if(maybePost.isEmpty()) {
			return false;
		}
		this.repo.delete(maybePost.get());
		return true;
		
	}

	

}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	
