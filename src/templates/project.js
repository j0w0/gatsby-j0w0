import React from 'react'
import Layout from '../components/Layout/Layout'
import SiteMeta from '../components/SiteMeta/SiteMeta'
import { Link, graphql } from 'gatsby'

const Project = ({ data }) => {

  const project = data.wpProject;
  const {
    name: categoryName,
    uri: categoryUri
  } = project.projectCategories.nodes[0];

  const projectPdf = data.wpMediaItem?.mediaItemUrl;

  return (
    <Layout>
      <SiteMeta title={project.title} />
      <h1>{project.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: project.content }} />

      {/* { TODO: add image/video slider } */}

      {project.websiteUrl && (
        <div>Website URL: <a href={project.websiteUrl}target="_blank" rel="noreferrer">Demo</a></div>
      )}

      {project.videoUrl && (
        <div className="iframe">
          <iframe
            src={project.videoUrl}
            title={`${project.title} Video`}
            className="iframe-src">
          </iframe>
        </div>
      )}

      {projectPdf && (
        <div><a href={projectPdf} target="_blank" rel="noreferrer">View Project PDF</a></div>
      )}

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
  query($slug: String!, $pdfId: Int!) {
    wpProject(slug: { eq: $slug }) {
      id
      slug
      title
      content
      websiteUrl
      videoUrl
      portfolioPdf
      uri
      featuredImage {
        node {
          id
          altText
          sourceUrl
          mediaItemUrl
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
    wpMediaItem(databaseId: { eq: $pdfId }) {
      id
      mediaItemUrl
    }
  }
`