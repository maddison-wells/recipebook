package io.recipe.recipebook.recipes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}
