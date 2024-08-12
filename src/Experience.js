// src/components/Experience.js

import React from 'react';
import './Header.css';


function Experience() {
  const experiences = [
    {
      company: 'Company One',
      role: 'Software Engineer',
      duration: 'Jan 2022 - Present',
      responsibilities: [
        'Developed web applications using React and Node.js.',
        'Collaborated with cross-functional teams to deliver high-quality software.',
        'Implemented best practices in coding and UI design.',
      ],
    },
    {
      company: 'Company Two',
      role: 'Frontend Developer',
      duration: 'Jan 2020 - Dec 2021',
      responsibilities: [
        'Built responsive user interfaces using HTML, CSS, and JavaScript.',
        'Worked closely with designers to create intuitive and user-friendly experiences.',
        'Optimized web applications for performance and accessibility.',
      ],
    },
    // Add more experiences as needed
  ];

  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-item">
            <h3>{experience.company}</h3>
            <h4>{experience.role}</h4>
            <p>{experience.duration}</p>
            <ul>
              {experience.responsibilities.map((responsibility, i) => (
                <li key={i}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
