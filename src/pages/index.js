import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/layout"
import LinkList from "../components/linkList"
import SEO from "../components/seo"

const linkPaths = ["/home", "/about", "/doggos", "/exercisesIndex"]

const IndexPage = () => (
  <div id="root">
    <Layout>
      <SEO title="Home" />
      <h1>Index page</h1>

      <LinkList paths={linkPaths} />
    </Layout>
  </div>
)

export default IndexPage
