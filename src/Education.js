// src/components/Education.js

import React from 'react';
import './Header.css';


function Education() {
  const education = [
    {
      institution: 'University One',
      degree: 'Bachelor of Science in Computer Science',
      duration: '2018 - 2022',
      achievements: [
        'Graduated with honors',
        'Member of the Computer Science Club',
      ],
    },
    {
      institution: 'University Two',
      degree: 'Diploma in Web Development',
      duration: '2016 - 2018',
      achievements: [
        'Developed an award-winning web application project',
        'Participated in hackathons and coding competitions',
      ],
    },
    // Add more education entries as needed
  ];

  return (
    <section id="education" className="education-section">
      <h2>Education</h2>
      <div className="education-list">
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.institution}</h3>
            <h4>{edu.degree}</h4>
            <p>{edu.duration}</p>
            <ul>
              {edu.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
