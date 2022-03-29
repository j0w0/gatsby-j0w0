import React from 'react'
import './ProjectGallery.css'
import ProjectCard from '../ProjectCard/ProjectCard'

const ProjectGallery = ({ projects }) => {
  return (
    <div className="project-gallery">
      {projects.map(project => {
        return (
          <ProjectCard
            project={project}
            key={project.id}
          />
        )
      })}
    </div>
  )
}

export default ProjectGallery