import PropTypes from "prop-types"
import React from "react"

import Navigationbar from "./navbar"
// import Image from "./image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
      marginBottom: `5rem`,
    }}
  >
    <Navigationbar />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
