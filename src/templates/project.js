import React from 'react'
import Layout from '../components/Layout/Layout'
import SiteMeta from '../components/SiteMeta/SiteMeta'
import { Link, graphql } from 'gatsby'

const Project = ({ data }) => {
  const post = data.allWpProject.nodes[0]

  const tags = []
  post.projectTags.nodes.forEach((tag) => {
    tags.push(tag.name)
  })

  return (
    <Layout>
      <SiteMeta title={post.title} />
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      <p>Category: {post.projectCategories.nodes[0].name}</p>
      <p>Tags: {tags.join(", ")}</p>
      <Link to="/">Go Back Home</Link>
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