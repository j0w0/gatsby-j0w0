import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../layout/Layout/Layout'
import SiteMeta from '../../layout/SiteMeta/SiteMeta'
import ContactCTA from '../../components/ContactCTA/ContactCTA'
import ProjectGallery from '../../components/ProjectGallery/ProjectGallery'

const ProjectTag = ({ data }) => {
  const page = data.allWpProjectTag.nodes[0]
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

export default ProjectTag

export const query = graphql`
  query($slug: String!) {
    allWpProjectTag(filter: {
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
              layout: FULL_WIDTH
              width: 16
              height: 9
              placeholder: BLURRED
              quality: 50
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
      }
    }
  }
`