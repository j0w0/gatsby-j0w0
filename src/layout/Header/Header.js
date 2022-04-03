import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import './Header.css'

const Header = () => {
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
    <header className="site-header">
      <div className="container">
        <h1>
          <Link to="/">
            {data.site.siteMetadata?.title || `j0w0`}
          </Link>
        </h1>

        <nav className="site-header-menu">
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {}
Header.defaultProps = {}

export default Header
