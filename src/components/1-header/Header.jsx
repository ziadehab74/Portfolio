import { useState, useEffect } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Apply the theme class to the <html> element
    document.documentElement.className = theme === "light" ? "light" : "";
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <header className="flex">
      <button onClick={() => setShowModal(true)} className="menu icon-menu" />
      <div />
      <nav>
        <ul className="flex">
          <li><a href="#hero">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#main">Projects</a></li>
          <li><a href="#contact-us">Contact</a></li>
        </ul>
      </nav>
      <button className="mode" onClick={toggleTheme}>
        <FontAwesomeIcon icon={theme === "light" ? faSun : faMoon} />
      </button>


      {showModal && (
        <div className=" fixed">
          <ul className="modal">
            <li>
              <button className="icon-cancel" onClick={() => setShowModal(false)} />
            </li>
            <li><a href="#about">About</a></li>
            <li><a href="#articles">Articles</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#speaking">Speaking</a></li>
            <li><a href="#uses">Uses</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
