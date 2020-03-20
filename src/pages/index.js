import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const linkTags = ["/home", "/about", "/doggos"]

const linkItems = linkTags.map(linkTag => (
  <li key={linkTag}>
    <Link to={linkTag}>Go to {linkTag}</Link>
  </li>
))

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Index page</h1>

    <ul>{linkItems}</ul>
  </Layout>
)

export default IndexPage
