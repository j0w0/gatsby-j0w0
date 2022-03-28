import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const ProjectCard = ({ ...props }) => {
  const project = props.project;
  const ftImg = project.featuredImage.node;
  const image = getImage(ftImg.gatsbyImage)

  return (
    <div>
      <p>
        <Link to={project.uri}>{project.title}</Link><br />
        <small>{project.projectCategories.nodes[0].name}</small>
      </p>
      <GatsbyImage image={image} alt={ftImg.altText} />
    </div>
  )
}

export default ProjectCard