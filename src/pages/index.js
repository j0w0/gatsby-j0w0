import React from 'react'
import { Link } from "gatsby"
import Layout from '../layout/Layout/Layout'
import SiteMeta from '../layout/SiteMeta/SiteMeta'

const Index = () => {
  return (
    <Layout fullWidth>
      <SiteMeta title="Home" />

      <section>
        <div className="container">
          <h1>Hello, World!</h1>
          <p>I am a <strong>Front-End Software Engineer</strong> experienced in building reliable, manageable, and scalable websites and web applications. I develop quality products by utilizing appropriate technologies and applying best practices for data organization and code optimization.</p>

          <p>
            <a href="https://github.com/j0w00" target="_blank" rel="noreferrer">
              View code repositories and demos on my Github.
            </a>
          </p>

          <p><Link to="/portfolio">Check out my portfolio.</Link></p>
        </div>
      </section>
    </Layout>
  )
}

export default Index