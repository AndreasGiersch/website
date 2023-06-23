import React from "react"
import { Link } from "gatsby"
import {
  Container,
  Row,
  Col,
  Button,
  Dropdown,
  DropdownButton,
} from "react-bootstrap"
import LinkList from "../components/linkList"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../css/home.css"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "portrait.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      className="portrait"
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  )
}

const texts = {
  name: "Andreas Giersch",
  occupation: "Web Developer at breeze technologies",
}

const linkPaths = [
  { link: "/about", label: "About" },
  { link: "/doggos", label: "Doggos" },
  { link: "/exercisesIndex", label: "Code Exercises" },
]
{
  /* <LinkList paths={linkPaths} /> */
}

const HomePage = () => {
  return (
    <Container className="wrapper home">
      <Row className="nav-row"></Row>
      <Row className="content-row">
        <Col className="sidebar">
          <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            {linkPaths.map(linkPath => (
              <Dropdown.Item href={linkPath.link}>
                {linkPath.label}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </Col>
        <Col className="content-col">
          <Image />
          <Row>
            {texts.name} <br />
            {texts.occupation}
          </Row>
          <Row></Row>
        </Col>
        <Col className="link-list">
          List of links:
          <Link to="/">Go back to the index page</Link>
        </Col>
      </Row>
      <Row className="footer-row">
        <footer>
          {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          <br />© Andreas Giersch
        </footer>
      </Row>
    </Container>
  )
}

export default HomePage
