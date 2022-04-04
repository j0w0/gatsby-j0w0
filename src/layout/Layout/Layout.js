import * as React from "react"
import PropTypes from "prop-types"
import { site, siteContent } from "./Layout.module.css"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const Layout = ({ fullWidth = false, children }) => {
  return (
    <div className={site}>
      <Header />
      <main className={siteContent}>
        <div className={fullWidth ? null : `container`}>{children}</div>
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
