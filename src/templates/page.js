import React from 'react'
import Layout from '../components/Layout/Layout'
import SiteMeta from '../components/SiteMeta/SiteMeta'
import { Link, graphql } from 'gatsby'

const Page = ({ data }) => {
  const page = data.allWpPage.nodes[0]

  return (
    <Layout>
      <SiteMeta title={page.title} />
      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
      <Link to="/">Back to Home</Link>
    </Layout>
  )
}

export default Page

export const query = graphql`
  query($slug: String!) {
    allWpPage(filter: {
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
      }
    }
  }
`