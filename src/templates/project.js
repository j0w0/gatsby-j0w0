import React from 'react'
import Layout from '../components/Layout/Layout'
import SiteMeta from '../components/SiteMeta/SiteMeta'
import { Link, graphql } from 'gatsby'

const Project = ({ data }) => {
  const project = data.allWpProject.nodes[0]
  const {
    name: categoryName,
    uri: categoryUri
  } = project.projectCategories.nodes[0];

  return (
    <Layout>
      <SiteMeta title={project.title} />
      <h1>{project.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: project.content }} />

      {/* { TODO: add image/video slider } */}
      {/* { TODO: get/display custom post fields } */}

      <p>Category:</p>
      <ul>
        <li><Link to={categoryUri}>{categoryName}</Link></li>
      </ul>

      <p>Tags:</p>
      <ul>
        {project.projectTags.nodes.map(tag => {
          return <li key={tag.id}><Link to={tag.uri}>{tag.name}</Link></li>
        })}
      </ul>

      {/* { TODO: side column of related projects } */}
      {/* { TODO: side column of contact cta } */}

      <Link to="/portfolio">Back to Portfolio</Link>
    </Layout>
  )
}

export default Project

export const query = graphql`
  query($slug: String!) {
    allWpProject(filter: {
      slug: { eq: $slug }
    }) {
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
            uri
          }
        }
        projectTags {
          nodes {
            name
            uri
            id
          }
        }
      }
    }
  }
`