import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/layout"

import SEO from "../components/seo"
import HomePage from "./home"

import "bootstrap/dist/css/bootstrap.min.css"

const IndexPage = () => (
  <div id="root">
    <Layout>
      <SEO title="Home" />
      <h1>Index page</h1>

      <HomePage />
    </Layout>
  </div>
)

export default IndexPage
