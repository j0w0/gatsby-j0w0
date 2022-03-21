import React from 'react'
import Layout from '../components/Layout/Layout'
import SiteMeta from '../components/SiteMeta/SiteMeta'
import { Link, graphql } from 'gatsby'

const ProjectCategory = ({ data }) => {
  const page = data.allWpProjectCategory.nodes[0]

  return (
    <Layout>
      <SiteMeta title={page.name} />
      <h1>{page.name}</h1>
      {/* { TODO: query for projects in this category } */}
      {/* { TODO: side column of categories/tags } */}
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
  }
`