import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import SiteMeta from '../components/SiteMeta/SiteMeta'
import ContactCTA from '../components/ContactCTA/ContactCTA'

const Page = ({ data }) => {
  const page = data.allWpPage.nodes[0]
  const slug = page.slug;

  return (
    <Layout>
      <SiteMeta title={page.title} />
      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content }} />

      {slug === "contact" && (
        /* { TODO: add form to contact page } */
        <div>this is where the contact form goes</div>
      )}

      {slug !== "contact" && <ContactCTA />}
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