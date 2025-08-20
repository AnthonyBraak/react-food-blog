import RecipeCard from "./RecipeCard";

type Recipe = {
  title: string;
  image: string;
  authorImg: string;
  text: string;
};

type Props = {
  recipes: Recipe[];
};

export default function RecipeContainer({ recipes }: Props) {
  return (
    <div className="recipe-container">
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </div>
  );
}
