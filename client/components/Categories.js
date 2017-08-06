import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Link } from 'react-router'
import query from '../queries/fetchCategories'

class Categories extends Component {
  renderCategories() {
    return this.props.data.categories.map(category => {
      return (
        <li key={category.id} className="collection-item">
          {category.name}
        </li>
      )
    })
  }

  render() {
    console.log(this.props)

    if (this.props.data.loading) {
      return <div>loading...</div>
    }

    return (
      <div>
        <h2>Categories</h2>
        <ul className="collection">
          {this.renderCategories()}
        </ul>
        <Link to="categories/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    )
  }
}

export default graphql(query)(Categories)
