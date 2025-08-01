import RecipeCard from "./RecipeCard";

export default function RecipeContainer(){
    const recipes = [
        {
            title: "Lorem ipsum",
            image: "/img/gallery/img_1.jpg",
            authorImg: "/img/chefs/chef_1.jpg",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua."
        },
        {
            title: "Lorem ipsum",
            image: "/img/gallery/img_2.jpg",
            authorImg: "img/chefs/chef_2.jpg",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua."
        },
        {
            title: "Lorem ipsum",
            image: "/img/gallery/img_3.jpg",
            authorImg: "img/chefs/chef_4.jpg",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua."
        },
        {
            title: "Lorem ipsum",
            image: "/img/gallery/img_4.jpg",
            authorImg: "img/chefs/chef_1.jpg",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua."
        },
        {
            title: "Lorem ipsum",
            image: "/img/gallery/img_5.jpg",
            authorImg: "img/chefs/chef_3.jpg",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua."
        },
        {
            title: "Lorem ipsum",
            image: "/img/gallery/img_6.jpg",
            authorImg: "img/chefs/chef_3.jpg",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua."
        }
    ].sort(()=> Math.random() - 0.5)
    return(
        <div className="recipe-container">
            {recipes.map((recipe, index) => (
                <RecipeCard key={index} recipe={recipe} />
            ))}
        </div>
    )
}