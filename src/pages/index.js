import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const Home = ({ data }) => {
  return (
    <Layout>
      <Seo title="Home" />
      <h1>Portfolio</h1>
      {data.allWpProject.nodes.map(project => {
        return (
          <div key={project.id}>
            <h3>{project.title}</h3>
          </div>
        )
      })}
    </Layout>
  )
}

export const pageQuery = graphql`
  query getProjects {
    allWpProject {
      nodes {
        id
        slug
        title
        content
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

export default Home