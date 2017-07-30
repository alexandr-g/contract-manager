import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

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
      <ul className="collection">
        {this.renderCategories()}
      </ul>
    )
  }
}

const query = gql`
  {
    categories {
      id
      name
    }
  }
`

export default graphql(query)(Categories)
