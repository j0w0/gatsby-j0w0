import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import SiteMeta from '../components/SiteMeta/SiteMeta'

const Portfolio = ({ data }) => {
  return (
    <Layout>
      <SiteMeta title="Portfolio" />
      <h1>Portfolio</h1>
      {data.allWpProject.nodes.map(project => {
        return (
          <div key={project.id}>
            <p>
              <Link to={project.uri}>{project.title}</Link><br />
              <small>{project.projectCategories.nodes[0].name}</small>
            </p>
          </div>
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
            sourceUrl
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