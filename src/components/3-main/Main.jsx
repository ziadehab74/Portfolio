import { useState } from "react";
import "./main.css";

const myProjects = [
  // { id: 1, title: "Weather App", category: "react" },
  {
    id: 1,
    title: "Cairo Transportation Authority (CTA)",
    subtitle: "It is a project that aims to automate and govern electronic payment in the Cairo Public Transport Authority.",
    category: "laravel",
    associatedWith: ["ACME SAICO"],
    image: "/cta.jpg",
    link: "https://www.youm7.com/story/2024/5/18/%D9%86%D9%82%D9%8A%D8%A8-%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D9%84%D9%8A%D9%86-%D8%A8%D8%A7%D9%84%D9%86%D9%82%D9%84-%D8%A7%D9%84%D8%B9%D8%A7%D9%85-%D9%81%D9%89-%D8%AD%D9%88%D8%A7%D8%B1-%D9%84%D9%80-%D8%A7%D9%84%D9%8A%D9%88%D9%85-%D8%A7%D9%84%D8%B3%D8%A7%D8%A8%D8%B9-%D8%A8%D8%AF%D8%A1/6577036",
  },
  {
    id: 2,
    title: "Alexandria Passenger Transport Authority (APTA)",
    subtitle: "It is a project that aims to govern electronic payment in the Alexandria Public Transport Authority.",
    category: "laravel",
    associatedWith: ["ACME SAICO"],
    image: "/apta.jpg",
    link: "https://www.youm7.com/story/2017/11/20/%D8%B5%D9%88%D8%B1-%D9%86%D9%82%D9%84%D8%A9-%D9%86%D9%88%D8%B9%D9%8A%D8%A9-%D9%81%D9%89-%D9%85%D8%B1%D9%81%D9%82-%D8%A7%D9%84%D9%86%D9%82%D9%84-%D8%A8%D8%A7%D9%84%D8%A5%D8%B3%D9%83%D9%86%D8%AF%D8%B1%D9%8A%D8%A9-%D8%AA%D8%B7%D8%A8%D9%8A%D9%82-%D9%85%D9%86%D8%B8%D9%88%D9%85%D8%A9-%D8%A7%D9%84%D8%AA%D8%B0%D8%A7%D9%83%D8%B1/3517542",
  },
  // { id: 3, title: "Landing Page", category: "css" },
  {
    id: 3,
    category: "BPMN",
    title: "Egyption Silos",
    subtitle: "It is a project that aims to mechanize Egyptian wheat silos and govern local and imported wheat across the country.",
    associatedWith: ["ACME SAICO", "IBM"],
    image: "/silos.jpg",
    link: "https://almalnews.com/1089530/%D8%A7%D9%84%D8%AA%D9%85%D9%88%D9%8A%D9%86-%D8%AA%D8%B7%D8%A8%D9%82-%D9%85%D8%B4%D8%B1%D9%88%D8%B9-%D9%85%D9%8A%D9%83%D9%86%D8%A9-%D8%B5%D9%88%D8%A7%D9%85%D8%B9-%D8%A7%D9%84%D9%82%D9%85/"
  },
];

export default function Main() {
  const [currentActive, setCurrentActive] = useState("laravel");
  const [isFading, setIsFading] = useState(false);

  const handleFilter = (category) => {
    if (category === currentActive) return;

    setIsFading(true);
    setTimeout(() => {
      setCurrentActive(category);
      setIsFading(false);
    }, 300); // Match with CSS transition time
  };

  const filteredProjects = myProjects.filter((p) => p.category === currentActive);

  return (
    <main id="main" className="flex">
      <section className="flex left-section">
        {["laravel", "BPMN"].map((cat) => (
          <button
            key={cat}
            onClick={() => handleFilter(cat)}
            className={currentActive === cat ? "active" : null}
          >
            {cat === "css" ? "HTML & CSS" : cat}
          </button>
        ))}
      </section>

      <section className={`flex right-section ${isFading ? "fade" : ""}`}>
        {filteredProjects.map((item) => (
          <article key={item.id} className="card">
            <img width={400} src={item.image} alt="" />
            <div style={{ width: "266px" }} className="box">
              <h1 className="title">{item.title}</h1>
              <h4 className="sub-title">
                {item.associatedWith && item.associatedWith.map((company, index) => (
                  <span key={index}>
                    {company}
                    {index !== item.associatedWith.length - 1 && ', '}
                  </span>
                ))}
              </h4>

              <p className="sub-title">{item.subtitle}</p>

              <div className="flex right-icons">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <div className="icon-link" />
                </a>
                {/* <a href={item.github} target="_blank" rel="noopener noreferrer">
                  <div className="icon-github" />
                </a> */}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
