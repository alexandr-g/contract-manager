import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Link } from 'react-router'
import query from '../queries/fetchCategories'
import mutation from '../mutations/deleteCategory'

class Categories extends Component {
  onCategoryDelete(id) {
    this.props
      .mutate({ variables: { id } })
      .then(() => this.props.data.refetch())
  }

  renderCategories() {
    return this.props.data.categories.map(({ id, name }) => {
      return (
        <li key={id} className="collection-item">
          {name}
          <i
            className="material-icons"
            onClick={() => this.onCategoryDelete(id)}
          >
            delete
          </i>
        </li>
      )
    })
  }

  render() {
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

export default graphql(mutation)(graphql(query)(Categories))
