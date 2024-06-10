import React from "react"
import { Link } from "gatsby"

const About = () => {
  return (
    <div>
      This website is going to feature information about some individual
      projects
      <p>
        <b>Add links to github/gitlab</b>
      </p>
      <Link to="/">Go back to the index page</Link>
    </div>
  )
}

export default About
