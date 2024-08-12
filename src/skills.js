import React from "react";
import './Header.css';

function Skills(){
    const skills=[
        'HTML',
        'CSS',
            'JavaScript',
            'React',
            'Next.js',
            'C#',
            'SQL Server'
    ];

    return(
        <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">{skill}</li>
        ))}
      </ul>
    </section>
    )
}

export default Skills;