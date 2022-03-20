import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import SiteMeta from '../components/SiteMeta/SiteMeta'

const About = ({ data }) => {
  const { content, title } = data.wpPage;
  return (
    <Layout>
      <SiteMeta title={title} />
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{__html: content}} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query getAboutPage {
    wpPage(
      id: {eq: "cG9zdDo5"},
    ) {
      title
      content
      uri
    }
  }
`;

export default About;