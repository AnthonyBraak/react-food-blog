import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const recipes = [
  {
    title: "Noodles",
    image: "/img/gallery/img_1.jpg",
    authorImg: "/img/chefs/chef_1.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Chicken",
    image: "/img/gallery/img_2.jpg",
    authorImg: "img/chefs/chef_2.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Burger",
    image: "/img/gallery/img_3.jpg",
    authorImg: "img/chefs/chef_4.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Salad",
    image: "/img/gallery/img_4.jpg",
    authorImg: "img/chefs/chef_1.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Bowl Almond",
    image: "/img/gallery/img_5.jpg",
    authorImg: "img/chefs/chef_3.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Bowl Kiwi",
    image: "/img/gallery/img_6.jpg",
    authorImg: "img/chefs/chef_3.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
  },
];

app.get("/api/recipes", (req, res) => {
  res.json(recipes);
});

app.get("/api/recipes/search", (req, res) => {
  const query = req.query.q?.toLowerCase();

  if (!query) {
    return res.status(400).json({ error: "Missing search query" });
  }

  const filtered = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(query) ||
      recipe.text.toLowerCase().includes(query)
  );

  res.json(filtered);
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
