import React from "react"
import { Link } from "gatsby"

const HomePage = () => {
  return (
    <div>
      This is the home page
      <br />
      <iframe
        id="widget_3"
        width="300"
        height="100"
        style={{ border: "0px" }}
        referrerPolicy="origin"
        src="http://localhost:3000/widget?provider=eea%26lang=en%26longitude=10.67167%26latitude=53.85819%26token=3bd6fcb3-c0c4-4e5c-80a2-1796da12894a"
      ></iframe>
      <iframe
        id="widget_4"
        width="300"
        height="100"
        style={{ border: "0px" }}
        referrerPolicy="origin"
        src="http://localhost:3000/widget?provider=eea&amp;lang=en&amp;longitude=10.67167&amp;latitude=53.85819&amp;token=3bd6fcb3-c0c4-4e5c-80a2-1796da12894a"
      ></iframe>
      <Link to="/">Go back to the index page</Link>
    </div>
  )
}

export default HomePage
