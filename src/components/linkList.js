import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "gatsby"

const LinkList = props => {
  let baseUrl = props.baseUrl ? props.baseUrl : ""

  const linkItems = props.paths.map(path => (
    <li key={path}>
      <Link to={`${baseUrl}${path}`}>Go to {path.replace(/\//g, "")}</Link>
    </li>
  ))

  return <ul>{linkItems}</ul>
}

export default LinkList
