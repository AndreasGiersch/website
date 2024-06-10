import React from "react"

import { Link } from "gatsby"
import LinkList from "../components/linkList"
import Layout from "../components/layout"

const url = "/exercisesIndex"
const exercisePaths = ["/filterableProductTable", "/tic-tac-toe"]

const ExercisesPage = () => {
  return (
    <Layout>
      <h3>Here you can find a list of all implemented coding exercises</h3>
      <LinkList baseUrl={url} paths={exercisePaths} />
      <Link to="/">Go back</Link>
    </Layout>
  )
}

export default ExercisesPage
