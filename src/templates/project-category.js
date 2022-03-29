import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import SiteMeta from '../components/SiteMeta/SiteMeta'
import ContactCTA from '../components/ContactCTA/ContactCTA'
import ProjectGallery from '../components/ProjectGallery/ProjectGallery'

const ProjectCategory = ({ data }) => {
  const page = data.allWpProjectCategory.nodes[0]
  const projects = data.allWpProject?.nodes;

  return (
    <Layout>
      <SiteMeta title={page.name} />
      <h1>{page.name}</h1>
      <ProjectGallery projects={projects} />

      {/* { TODO: side column of categories/tags } */}

      <ContactCTA />
      <Link to="/portfolio">Back to Portfolio</Link>
    </Layout>
  )
}

export default ProjectCategory

export const query = graphql`
  query($slug: String!) {
    allWpProjectCategory(filter: {
      slug: { eq: $slug }
    }) {
      nodes {
        id
        slug
        name
      }
    }
    allWpProject(filter: {
      projectTags: {nodes: {elemMatch: {slug: {eq: $slug}}}}
    }) {
      nodes {
        id
        slug
        title
        uri
        featuredImage {
          node {
            id
            altText
            gatsbyImage(
              width: 768
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
      }
    }
  }
`