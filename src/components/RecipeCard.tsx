import CustomImage from "./CustomImage";
type RecipeProps = {
  recipe: {
    title: string;
    image: string;
    authorImg: string;
    text: string;
  };
};
export default function RecipeCard({ recipe }: RecipeProps) {
  return (
    <div className="recipe-card">
      <CustomImage imgSrc={recipe.image} pt="70%" />
      <div className="recipe-card-info">
        <img className="author-img" src={recipe.authorImg} />
        <p className="recipe-title">{recipe.title}</p>
        <p className="recipe-desc">{recipe.text}</p>
        <a className="view-btn" href="#!">
          VIEW RECIPE
        </a>
      </div>
    </div>
  );
}
