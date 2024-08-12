import React from 'react'
import './Header.css';

function Projects() {
    const projects=[
        {
            title:'PortFolio Project',
            Description:"It's a complete walkthrough of my project"
            ,link:''
        },{
            
            title:'Brand App',
            Description:"I'ts a automobile application built in mvc application performing crud operations."
            ,link:''

        }
    ]

    
    return(
        <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <h3>{project.title}</h3>
              <p>{project.Description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>  
    )
 
}

export default Projects
