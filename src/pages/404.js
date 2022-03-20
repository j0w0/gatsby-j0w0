import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/Layout"
import SiteMeta from "../components/SiteMeta/SiteMeta"

const NotFoundPage = () => (
  <Layout>
    <SiteMeta title="404: Not Found" />
    <h1>404</h1>
    <p>Whoops, couldn't find that page. <Link to="/">Go home.</Link></p>
  </Layout>
)

export default NotFoundPage
