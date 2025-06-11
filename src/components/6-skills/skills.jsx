import React from "react";
import "./skills.css";

const skillsTimeline = [
    { year: "2019", skill: "HTML, CSS, JavaScript" },
    { year: "2020", skill: "PHP, MySQL" },
    { year: "2021", skill: "Laravel, REST APIs" },
    { year: "2022", skill: "React, ,Next.js, Git, Docker" },
    { year: "2023", skill: "Livewire, Reverb, WebSockets" },
    { year: "2024", skill: "System Architecture, DevOps basics" },
];

export default function skills() {
    return (
        <div id="skills" className="timeline-container">
            {/* <h1 className="title">
                <span className='icon-envelope'></span> Skills Timeline
            </h1> */}
            {/* <h2 className="timeline-header">Skills Timeline</h2> */}
            <ul className="timeline">
                {skillsTimeline.map((item, index) => (
                    <li key={index} className="timeline-item">
                        <span className="timeline-year">{item.year}</span>
                        <div className="timeline-content">{item.skill}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
