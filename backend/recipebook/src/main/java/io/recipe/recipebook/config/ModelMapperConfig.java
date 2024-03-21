package io.recipe.recipebook.config;


import org.modelmapper.Converter;
import org.modelmapper.ModelMapper;
import org.modelmapper.spi.MappingContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.recipe.recipebook.recipes.CreateRecipesDTO;
import io.recipe.recipebook.recipes.Recipes;
import io.recipe.recipebook.recipes.UpdateRecipeDTO;


@Configuration
public class ModelMapperConfig {
	
	@Bean
	public ModelMapper modelMapper() {
		ModelMapper mapper = new ModelMapper();
		mapper.typeMap(String.class, String.class).setConverter(new StringTrimConverter());
		mapper.getConfiguration().setSkipNullEnabled(true);
		mapper.typeMap(CreateRecipesDTO.class, Recipes.class).addMappings(
		m -> m.using(new LowerCaseConverter()).map(CreateRecipesDTO::getTags, Recipes::setTags));
		mapper.typeMap(UpdateRecipeDTO.class, Recipes.class).addMappings(
		m -> m.using(new LowerCaseConverter()).map(UpdateRecipeDTO::getTags, Recipes::setTags));		

			return mapper;
		
	}
	
	private class StringTrimConverter implements Converter<String, String> {

		@Override
		public String convert(MappingContext<String, String> context) {
			if (context.getSource() == null) {
				return null;
			}
			return context.getSource().trim();
		}
	}
	
	private class LowerCaseConverter implements Converter<String, String> {

		@Override
		public String convert(MappingContext<String, String> context) {
			if (context.getSource() == null) {
				return null;
			}
			return context.getSource().toLowerCase();
		}
	}
}

