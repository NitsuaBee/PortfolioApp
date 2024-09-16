import React from 'react'
import './ProjectSection.css'

const ProjectSection = () => {

    const projects = [
        {
            title: "Restaurant Web Template",
            description: "A website template for showcasing your restaurant.",
            link: "https://heartfelt-hotteok-2cc46a.netlify.app/"
        }
    ]

  return (
    <div className="panel-project">
        <div className="panel-title-project">
            <h1>My Projects</h1>
        </div>
            <div className="project-list">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </div>
        
        
    </div>
  )
}

export default ProjectSection