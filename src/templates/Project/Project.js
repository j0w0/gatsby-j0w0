import React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { iframe, iframeSrc } from './Project.module.css'
import Layout from '../../layout/Layout/Layout'
import SiteMeta from '../../layout/SiteMeta/SiteMeta'
import ContactCTA from '../../components/ContactCTA/ContactCTA'

const Project = ({ data }) => {
  const project = data.wpProject;
  const projectPdf = data.wpMediaItem?.localFile?.publicURL;
  const attachedMedia = project.attachedMedia.nodes;

  const {
    name: categoryName,
    uri: categoryUri
  } = project.projectCategories.nodes[0];

  return (
    <Layout>
      <SiteMeta title={project.title} />
      <h1>{project.title}</h1>

      <div className="row">
        <div className="col-md-9">
          <div dangerouslySetInnerHTML={{ __html: project.content }} />

          {/* { TODO: add image/video slider } */}
          {attachedMedia && attachedMedia.map(item => {
            const image = getImage(item.gatsbyImage)
            return item.gatsbyImage ? (
              <GatsbyImage image={image} alt={item.altText} key={item.id} />
            ) : null;
          })}

          {project.videoUrl && (
            <div className={iframe}>
              <iframe
                src={project.videoUrl}
                title={`${project.title} Video`}
                className={iframeSrc}>
              </iframe>
            </div>
          )}

          {project.websiteUrl && (
            <p>Website URL: <a href={project.websiteUrl} target="_blank" rel="noreferrer">Demo</a></p>
          )}

          {projectPdf && (
            <p><a href={projectPdf} target="_blank" rel="noreferrer">View Project PDF</a></p>
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
        </div>
        <div className="col-md-3">
          {/* { TODO: related projects } */}
          <ContactCTA />
        </div>
      </div>

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
      attachedMedia {
        nodes {
          id
          altText
          gatsbyImage(
            layout: FULL_WIDTH
            width: 16
            height: 9
            fit: FILL
          )
          localFile {
            publicURL
          }
        }
      }
      featuredImage {
        node {
          id
          altText
          gatsbyImage(
            layout: FULL_WIDTH
            width: 16
            height: 9
            fit: FILL
          )
          localFile {
            publicURL
          }
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
      localFile {
        publicURL
      }
    }
  }
`