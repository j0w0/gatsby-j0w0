import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import SiteMeta from '../components/SiteMeta/SiteMeta'
import ContactCTA from '../components/ContactCTA/ContactCTA'

const ProjectTag = ({ data }) => {
  const page = data.allWpProjectTag.nodes[0]
  const projects = data.allWpProject?.nodes;

  return (
    <Layout>
      <SiteMeta title={page.name} />
      <h1>{page.name}</h1>

      {projects.map(project => {
        return (
          <div key={project.id}>
            <p><Link to={project.uri}>{project.title}</Link></p>
          </div>
        )
      })}

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
      }
    }
  }
`