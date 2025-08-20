import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <div className="section about">
      <h1 className="title">About the Developer</h1>
      <p className="info">
        I'm a Junior Fullstack Developer with a Bachelor degree in Robotics from
        Berlin, Germany. Currently residing in Saitama, Japan, I'm always
        looking for a new opportunity to make an impact and continue to learn
        new things.
      </p>
      <div className="about-link">
        <a href="https://github.com/AnthonyBraak">
          <FaGithub /> Github
        </a>
        <a href="https://www.linkedin.com/in/anthony-braak-63b1b9371/">
          <FaLinkedin /> LinkedIn
        </a>
      </div>
      <div></div>
    </div>
  );
}
