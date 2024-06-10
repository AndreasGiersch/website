import React from "react"

import { Link } from "gatsby"

import FilterableProductTable from "../../components/exercises/FilterableProductTable"

const style = {
  margin: "2em",
}

const exercisePage = () => {
  return (
    <div style={style}>
      <FilterableProductTable />

      <a href="https://reactjs.org/docs/thinking-in-react.html">
        See exercise here
      </a>
      <br />
      <Link to="/exercisesIndex">Go back</Link>
    </div>
  )
}

export default exercisePage
