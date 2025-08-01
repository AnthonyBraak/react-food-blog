import ChefCard from "./ChefCard";

export default function chef(){
    const chefs = [
        {
            name: "Mario Rossi",
            img: "img/chefs/chef_1.jpg",
            count: "14",
            cuisine: "Italian",
        },
        {
            name: "Max Mustermann",
            img: "img/chefs/chef_2.jpg",
            count: "09",
            cuisine: "German",
        },
        {
            name: "Jean Dupont",
            img: "img/chefs/chef_3.jpg",
            count: "21",
            cuisine: "French",
        },
        {
            name: "John Doe",
            img: "img/chefs/chef_4.jpg",
            count: "17",
            cuisine: "American",
        },
    ]
    return(
        <div className="section chefs">
            <h1 className="title">Our best Chefs</h1>
            <div className="chef-container">
                {chefs.map(chef => <ChefCard key={chef.img} {...chef}/>)}
            </div>
        </div>
    )
}