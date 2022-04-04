import React from 'react'
import { projectGallery } from './ProjectGallery.module.css'
import ProjectCard from '../ProjectCard/ProjectCard'

const ProjectGallery = ({ projects }) => {
  return (
    <div className={projectGallery}>
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