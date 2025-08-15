import { useNavigate } from "react-router-dom";
import CustomImage from "./CustomImage";

export default function HeroSection() {
  const navigate = useNavigate();
  function goToRecipes() {
    navigate("/recipes");
  }
  const images = [
    "/img/gallery/img_1.jpg",
    "/img/gallery/img_2.jpg",
    "/img/gallery/img_3.jpg",
    "/img/gallery/img_4.jpg",
    "/img/gallery/img_5.jpg",
    "/img/gallery/img_6.jpg",
    "/img/gallery/img_7.jpg",
    "/img/gallery/img_8.jpg",
    "/img/gallery/img_9.jpg",
  ];
  return (
    <div className="section hero">
      <div className="col typography">
        <h1 className="title">What You Can Expect</h1>
        <p className="info">
          This website helps you find the perfect recipe for you today. Start
          exploring now!
        </p>
        <button className="btn" onClick={goToRecipes}>
          Explore now!
        </button>
      </div>
      <div className="col gallery">
        {images.map((src, index) => (
          <CustomImage key={index} imgSrc={src} pt={"90%"} />
        ))}
      </div>
    </div>
  );
}
