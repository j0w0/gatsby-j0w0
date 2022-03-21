import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./Layout.css"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

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
    <div className="site">
      <Header siteTitle={data.site.siteMetadata?.title || `j0w0 | Josh Woodcock`} />
      <main className="site-content">
        <div className="container">{children}</div>
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
