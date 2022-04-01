import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import './ProjectCard.css';

const ProjectCard = ({ ...props }) => {
  const project = props.project;
  const ftImg = project.featuredImage.node;
  const image = getImage(ftImg.gatsbyImage)

  return (
    <div className="project">
      <Link to={project.uri}>
        <GatsbyImage image={image} alt={ftImg.altText} />
        <p>{project.title}</p>
        <small>{project.projectCategories.nodes[0].name}</small>
      </Link>
    </div>
  )
}

export default ProjectCard