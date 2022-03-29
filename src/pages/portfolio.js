import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import SiteMeta from '../components/SiteMeta/SiteMeta'
import ProjectGallery from '../components/ProjectGallery/ProjectGallery'

const Portfolio = ({ data }) => {
  return (
    <Layout>
      <SiteMeta title="Portfolio" />
      <h1>Portfolio</h1>
      <ProjectGallery projects={data.allWpProject.nodes} />
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
              height: 768
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