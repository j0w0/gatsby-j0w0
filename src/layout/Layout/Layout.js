import * as React from "react"
import PropTypes from "prop-types"
import { site, siteContent } from "./Layout.module.css"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const Layout = ({ children }) => {
  return (
    <div className={site}>
      <Header />
      <main className={siteContent}>
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
