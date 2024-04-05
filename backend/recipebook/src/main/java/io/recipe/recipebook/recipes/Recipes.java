package io.recipe.recipebook.recipes;

import java.util.Date;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;

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

	@Column(columnDefinition = "LONGTEXT")
	private String imageURL;
	
	@Column
	private String source;
	
	@Column
	private List<String>  tags;
	
	@Column
	private List<String> ingredients;
	
	@Column(columnDefinition = "LONGTEXT")
	private String method;
	
	@Column
	private String comments;
	
	@Column
	private Number servings;
	
	@Column(nullable = false)
	@NotNull
	private Boolean favourite;



	public Recipes() {
		super();
		 
		        this.favourite = false; 
		    
	}
	
	

	public Long getId() {
		return Id;
	}

	public boolean isFavourite() {
		return favourite;
	}



	public void setFavourite(boolean favourite) {
		this.favourite = favourite;
	}



	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}

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

	public List<String>  getTags() {
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

	@PrePersist
	public void onCreate() {
		Date timestamp = new Date();
		createdAt = timestamp;
		updatedAt = timestamp;
	}

	@PreUpdate
	public void onUpdate() {
		updatedAt = new Date();
	}


}

