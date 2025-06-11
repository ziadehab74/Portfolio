import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Speaking</a>
        </li>
        <li>
          <a href="">Uses</a>
        </li>
      </ul>

      
      <p>© 2023 Spencer Sharp. All rights reserved.</p>
      <a href="#up">
      <button className="scroll2Top icon-arrow-up"></button>
      </a>
    </footer>
  );
};

export default Footer;