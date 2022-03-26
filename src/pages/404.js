import React, { useEffect } from "react"
import { Link, navigate } from "gatsby"
import Layout from "../components/Layout/Layout"
import SiteMeta from "../components/SiteMeta/SiteMeta"

const NotFoundPage = () => {
  useEffect(() => {
    // redirect to index/home
    navigate('/')
  }, [])
  
  return (
    <Layout>
      <SiteMeta title="Not Found" />
      <h1>404</h1>
      <p>Whoops, couldn't find that page. <Link to="/">Go home.</Link></p>
    </Layout>
  )
}

export default NotFoundPage
