import React from 'react'
import Layout from '../components/Layout/Layout'
import SiteMeta from '../components/SiteMeta/SiteMeta'
import { Link, graphql } from 'gatsby'

const ProjectTag = ({ data }) => {
  const page = data.allWpProjectTag.nodes[0]

  return (
    <Layout>
      <SiteMeta title={page.name} />
      <h1>{page.name}</h1>
      {/* { query for projects with this tag } */}
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
  }
`