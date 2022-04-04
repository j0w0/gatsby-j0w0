import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'

const ProjectGallery = ({ projects }) => {
  return (
    <div className="row">
      {projects.map(project => {
        return (
          <div className="col-sm-6 col-lg-4" key={project.id}>
            <ProjectCard project={project} />
          </div>
        )
      })}
    </div>
  )
}

export default ProjectGallery