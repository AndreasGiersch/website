import React from "react"

import { Link } from "gatsby"

import TicTacToe from "../../components/exercises/TicTacToe"

const style = {
  margin: "2em",
}

const exercisePage = () => {
  return (
    <div style={style}>
      <TicTacToe />

      <a href="https://reactjs.org/tutorial/tutorial.html">See exercise here</a>
      <br />
      <Link to="/exercisesIndex">Go back</Link>
    </div>
  )
}

export default exercisePage
