import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
type ChefProps = {
  name: string;
  img: string;
  count: string;
  cuisine: string;
};

export default function ChefCard({ name, img, count, cuisine }: ChefProps) {
  return (
    <div className="chef-card">
      <img src={img} alt={name} />
      <div className="card-info">
        <h3 className="card-name">{name}</h3>
        <p className="card-count">
          Recipes: <b>{count}</b>
        </p>
        <p className="card-cuisine">
          Cuisine: <b>{cuisine}</b>
        </p>
        <p className="card-icons">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
        </p>
      </div>
    </div>
  );
}
