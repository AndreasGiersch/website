import React from "react"
import { Link } from "gatsby"
import Dahla from "../components/image"
import Django1 from "../components/Django1"
import Django2 from "../components/Django2"
import Django3 from "../components/Django3"


const Doggos = () => {
  return (
    <div>
      This page is going to feature a list of doggo pictures, that are used for
      my memory <br />

      <div className="doggogrid" style = {{display: "flex", justifyContent: "center"}}>
        <div style = {{width: "25%", margin: "0 1rem", marginBottom: "1.5rem"}}>
            <Dahla style={{display: "inline-block"}} imgStyle={{ objectFit: 'contain' }} />
        </div>
        <div style = {{width: "25%", margin: "0 1rem", marginBottom: "1.5rem"}}>
            <Django1 style={{display: "inline-block"}} />
        </div>
        <div style = {{width: "25%", margin: "0 1rem", marginBottom: "1.5rem"}}>
            <Django2 style={{display: "inline-block"}} imgStyle={{ objectFit: 'contain' }} />
        </div>
        <div style = {{width: "25%", margin: "0 1rem", marginBottom: "1.5rem"}}>
            <Django3 style={{display: "inline-block"}} />
        </div>
      </div>
      <Link to="/">Go back to the index page</Link>
    </div>
  )
}

export default Doggos
