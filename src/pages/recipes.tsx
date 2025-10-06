import { useEffect, useState } from "react";
import PreviousSearches from "../components/PreviousSearches";
import RecipeContainer from "../components/RecipeContainer";

type Recipe = {
  title: string;
  image: string;
  authorImg: string;
  text: string;
};

export default function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);

  // Fetch all recipes on mount, when testing locally, use "http://localhost:4000/api/recipes"
  useEffect(() => {
    fetch("/api/recipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
        setFilteredRecipes(data); // Initially show all
      });
  }, []);

  // Function to update filtered recipes from search
  const handleSearchResults = (searchTerm: string) => {
    const lowerSearch = searchTerm.toLowerCase();
    const filtered = recipes.filter(
      (recipe) =>
        recipe.title.toLowerCase().includes(lowerSearch) ||
        recipe.text.toLowerCase().includes(lowerSearch)
    );
    setFilteredRecipes(filtered);
  };

  return (
    <div>
      <PreviousSearches onSearchResults={handleSearchResults} />
      {filteredRecipes.length > 0 ? (
        <RecipeContainer recipes={filteredRecipes} />
      ) : (
        <p className="no-recipe">No recipes found for this search.</p>
      )}
    </div>
  );
}
