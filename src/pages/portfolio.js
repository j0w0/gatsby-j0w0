import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import SiteMeta from '../components/SiteMeta/SiteMeta'
import ProjectCard from '../components/ProjectCard/ProjectCard'

const Portfolio = ({ data }) => {
  return (
    <Layout>
      <SiteMeta title="Portfolio" />
      <h1>Portfolio</h1>
      {data.allWpProject.nodes.map(project => {
        return (
          <ProjectCard
            project={project}
            key={project.id}
          />
        )
      })}
    </Layout>
  )
}

export const pageQuery = graphql`
  query getProjects {
    allWpProject(
      filter: {projectCategories: {nodes: {elemMatch: {slug: {eq: "interactive"}}}}}
    ) {
      nodes {
        id
        slug
        title
        content
        uri
        featuredImage {
          node {
            id
            altText
            gatsbyImage(
              width: 960
              layout: FULL_WIDTH
            )
          }
        }
        projectCategories {
          nodes {
            name
            slug
            taxonomyName
          }
        }
        projectTags {
          nodes {
            name
            slug
            taxonomyName
          }
        }
      }
    }
  }
`

export default Portfolio