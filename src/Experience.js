// src/components/Experience.js

import React from 'react';
import './Header.css';


function Experience() {
  const experiences = [
    {
      company: 'Infosys',
      role: 'Systems Engineer',
      duration: 'Feb 2022 - June 2023',
      responsibilities: [
        "Designed and implemented Robotic Process Automation (RPA) solutions using Assist Edge tool to automate repetitive tasks, resulting in [quantifiable benefits].",
        'Led an end-to-end implementation and maintained use case involving analyzing requirements, design documents, developing the solution, testing and deploying it, and providing post implementation support to ensure the solution was running smoothly.',
        'Assisted in project planning worked in end-end process migration support from RDC to Thycotic migration connection a provider of privileged access management (PAM) solutions that help secure their critical systems and data by managing and controlling access to privileged accounts',
      ],
    },
    {
      company: 'Redspeck solutions Pvt Limited',
      role: 'FullStack Developer',
      duration: 'April 2024 - Present',
      responsibilities: [
        'Building responsive user interfaces using React Next JS',
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
