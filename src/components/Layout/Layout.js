import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../Header/Header"
import "./Layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `j0w0 | Josh Woodcock`} />
      <div className="container">
        <main>{children}</main>
        <footer className="site-footer">
          <a href="https://www.j0w0.com">Josh Woodcock</a> &#47;&#47; Front-End Software Engineer 🏳️‍🌈 ✌🏼
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
