package io.recipe.recipebook.recipes;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import jakarta.persistence.Id;

@Entity
@Table(name = "recipe_posts")
public class Recipes {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id;
	
	
	@Column
	private String title;
	
	@Column
	private Date createdAt;
	
	@Column
	private Date updatedAt;
	
	@Column
	private String creator;

	@Column
	private String imageURL;
	
	@Column
	private String source;
	
	@Column
	private String tags;
	
	@Column
	private String ingredients;
	
	@Column
	private String method;
	
	@Column
	private String comments;
	
	@Column
	private Number servings;
	

}

