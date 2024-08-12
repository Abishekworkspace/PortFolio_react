// src/components/Education.js

import React from 'react';
import './Header.css';


function Education() {
  const education = [
    {
      institution: ' Kongu Matric Higher sec school',
      degree: 'HSLC',
      duration: '2015 - 2017',
      achievements: [
        'scored 90.45 % in the final Exams ',
        'Participated and won several Speech debates and poetry competitons. ',
      ],
    },
    {
      institution: 'Sri Krishna College of Technology',
      degree: 'Bachelor of Engineering in Mechanical Engineering',
      duration: '2017 - 2021',
      achievements: [
        'Part of debate Club',
        'Member of Design components club',
      ]
    }
  
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
            <strong><p>{edu.duration}</p></strong>
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
