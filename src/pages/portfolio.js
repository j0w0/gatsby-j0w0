import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layout/Layout/Layout'
import SiteMeta from '../layout/SiteMeta/SiteMeta'
import ProjectGallery from '../components/ProjectGallery/ProjectGallery'
import ContactCTA from '../components/ContactCTA/ContactCTA'

const Portfolio = ({ data }) => {
  return (
    <Layout fullWidth>
      <SiteMeta title="Portfolio" />
      <div className="container container-fluid">
        <h1>Portfolio</h1>
        <div className="row">
          <div className="col-md-9">
            <ProjectGallery projects={data.allWpProject.nodes} />
          </div>
          <div className="col-md-3">
            <ContactCTA />
          </div>
        </div>
      </div>
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
              layout: FULL_WIDTH
              width: 16
              height: 9
              fit: FILL
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