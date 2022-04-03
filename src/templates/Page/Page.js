import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../layout/Layout/Layout'
import SiteMeta from '../../layout/SiteMeta/SiteMeta'
import ContactForm from '../../components/ContactForm/ContactForm'
import ContactCTA from '../../components/ContactCTA/ContactCTA'

const Page = ({ data }) => {
  const page = data.allWpPage.nodes[0]
  const slug = page.slug

  return (
    <Layout>
      <SiteMeta title={page.title} />
      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
      {slug === "contact" ? <ContactForm /> : <ContactCTA />}
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