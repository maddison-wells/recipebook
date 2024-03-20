package io.recipe.recipebook.recipes;

import java.util.List;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.recipe.recipebook.exceptions.NotFoundException;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/posts")
public class RecipesController {
	
	@Autowired
	private RecipesService recipesService;
	
	@PostMapping
	public ResponseEntity<Recipes> createPost(@Valid @RequestBody CreateRecipesDTO data) {
		Recipes createdPost = this.recipesService.createPost(data);
		return new ResponseEntity<>(createdPost, HttpStatus.CREATED);
	}

	@GetMapping
	public ResponseEntity<List<Recipes>> getAllPosts(){
		List<Recipes> allPosts = this.recipesService.getAll();
		return new ResponseEntity<>(allPosts, HttpStatus.OK);
	}
	
	
	@GetMapping("/{id}")
	public ResponseEntity<Recipes> getPostById(@PathVariable Long id)throws NotFoundException {
		Optional<Recipes> maybePost = this.recipesService.findById(id);
		Recipes foundPost = maybePost.orElseThrow(()-> new NotFoundException(Recipes.class, id));
		return new ResponseEntity<>(foundPost, HttpStatus.OK);
	}
	
	@PatchMapping("/{id}")
	public ResponseEntity<Recipes> updatePostById(@Valid @RequestBody UpdateRecipeDTO data, @PathVariable Long id) throws NotFoundException{
		Optional<Recipes> maybeUpdatedPost = this.recipesService.updateById(id);
		Recipes updatedPost = maybeUpdatedPost.orElseThrow(()-> new NotFoundException(Recipes.class, id));
		return new ResponseEntity<>(updatedPost, HttpStatus.OK);
	}
	
}



















