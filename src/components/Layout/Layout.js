import * as React from "react"
import PropTypes from "prop-types"
import "./Layout.css"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const Layout = ({ children }) => {
  return (
    <div className="site">
      <Header />
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
