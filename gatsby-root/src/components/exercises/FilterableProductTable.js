import React from "react"

import ToggleButton from "react-bootstrap/ToggleButton"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

/**
 * Exercise taken from
 * https://reactjs.org/docs/thinking-in-react.html
 *
 */

/**
 * styles for this page
 */
const cellStyle = { textAlign: "center", verticalAlign: "middle" }

const cellStyleNotInStock = {
  textAlign: "center",
  verticalAlign: "middle",
  color: "red",
}

const tableStyle = {
  marginLeft: "auto",
  marginRight: "auto",
}

const searchStyle = {
  marginTop: "2em",
  textAlign: "center",
}

const searchButtonStyle = {
  marginTop: "1em",
  marginBottom: "1em",
}

const formControlStyle = {
  width: "50%",
  textAlign: "center",
}

const formGroupStyle = {
  textAlign: "center",
}

/**
 * data could be replaced with a fetched data object
 */

const data = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Sporting Goods",
    price: "$19.99",
    stocked: true,
    name: "Volleyball",
  },
  {
    category: "Sporting Goods",
    price: "$39.99",
    stocked: false,
    name: "Jersey",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
  {
    category: "Electronics",
    price: "$799.99",
    stocked: true,
    name: "ASUS Notebook",
  },
]

/**
 * generate categories from data
 */

const categories = []
data.forEach(element => {
  if (!categories.includes(element.category)) {
    categories.push(element.category)
  }
})

/**
 * Displays a single row containing the product category
 */
const ProductCategoryRow = props => {
  return (
    <tr colSpan={2}>
      <td>{props.title}</td>
    </tr>
  )
}

/**
 * Displays a single row containing product info
 */
const ProductRow = props => {
  return (
    <tr>
      <td style={props.stocked ? cellStyle : cellStyleNotInStock}>
        {props.name}
      </td>
      <td style={props.stocked ? cellStyle : cellStyleNotInStock}>
        {props.price}
      </td>
    </tr>
  )
}

/**
 * Filters a given array of products by the following criteria:
 *
 * @param {*} products an array of product objects
 * @param {*} category the category to be filtered by
 * @param {*} filterText the user entered input from the search bar
 * @param {*} inStockOnly the user selected input from the checkbox
 * @param {*} sort the user selected sorting
 */
function filterProducts(products, category, filterText, inStockOnly, sort) {
  let filteredProducts = products.filter(
    product => product.category === category
  )

  if (filterText) {
    filteredProducts = filteredProducts.filter(product =>
      product.name.toUpperCase().includes(filterText.toUpperCase())
    )
  }

  if (inStockOnly) {
    filteredProducts = filteredProducts.filter(product => product.stocked)
  }

  if (sort) {
    filteredProducts.sort((a, b) => {
      let aPrice
      let bPrice
      switch (sort) {
        case "Name/asc":
          if (a.name < b.name) return -1
          return a.name > b.name ? 1 : 0

        case "Name/desc":
          if (a.name > b.name) return -1
          return a.name < b.name ? 1 : 0

        case "Price/asc":
          aPrice = parseFloat(a.price.replace("$", ""))
          bPrice = parseFloat(b.price.replace("$", ""))

          if (aPrice < bPrice) return -1
          return aPrice > bPrice ? 1 : 0

        case "Price/desc":
          aPrice = parseFloat(a.price.replace("$", ""))
          bPrice = parseFloat(b.price.replace("$", ""))

          if (aPrice > bPrice) return -1
          return aPrice < bPrice ? 1 : 0

        default:
          break
      }
      return 0
    })
  }

  return filteredProducts
}

const ProductTable = props => {
  const productsPerCategory = categories.map(category => {
    return (
      <>
        <ProductCategoryRow title={category} />
        {filterProducts(
          props.products,
          category,
          props.filterText,
          props.inStockOnly,
          props.sort
        ).map(product => {
          return (
            <ProductRow
              name={product.name}
              price={product.price}
              stocked={product.stocked}
            />
          )
        })}
      </>
    )
  })
  return (
    <table className="center" style={tableStyle}>
      <thead>
        <tr>
          <th style={cellStyle}>
            <Button onClick={props.onSortChange} value="Name">
              Name
            </Button>
          </th>
          <th style={cellStyle}>
            <Button onClick={props.onSortChange} value="Price">
              Price
            </Button>
          </th>
        </tr>
      </thead>
      <tbody>{productsPerCategory}</tbody>
    </table>
  )
}

const SearchBar = props => {
  return (
    <div style={searchStyle}>
      <Form.Group style={formGroupStyle} controlId="exampleForm.ControlInput1">
        <Form.Label>Search for products</Form.Label>
        <Form.Control
          style={formControlStyle}
          onChange={props.onTextChange}
          type="email"
          placeholder="e.g. 'Football'"
        />
      </Form.Group>
      <div style={searchButtonStyle}>
        <ToggleButton
          type="checkbox"
          checked={props.inStockOnly}
          onChange={props.onCheckChange}
        >
          Only show products in stock
        </ToggleButton>
      </div>
    </div>
  )
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = { filterText: "", inStockOnly: false, sort: "" }
  }

  onSortChange = e => {
    let sorting
    if (this.state.sort.includes("asc")) {
      sorting = "desc"
    } else {
      sorting = "asc"
    }
    this.setState({ sort: `${e.target.value}/${sorting}` })
  }

  onTextChange = e => {
    this.setState({ filterText: e.target.value })
  }

  onCheckChange = () => {
    this.setState(prevState => ({
      inStockOnly: !prevState.inStockOnly,
    }))
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onTextChange={this.onTextChange}
          onCheckChange={this.onCheckChange}
        />
        <ProductTable
          products={data}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onSortChange={this.onSortChange}
          sort={this.state.sort}
        />
      </div>
    )
  }
}

export default FilterableProductTable
