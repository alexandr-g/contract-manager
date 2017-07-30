import React, { Component } from 'react'
import gql from 'graphql-tag'

class CategoryCreate extends Component {
  constructor(props) {
    super(props)

    this.state = { name: '' }
  }

  onSubmit(event) {
    event.preventDefaut()
  }

  render() {
    return (
      <div>
        <h3>Create a new category</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Category Name:</label>
          <input
            onChange={event => this.setState({ name: event.target.value })}
            value={this.state.name}
          />
        </form>
      </div>
    )
  }
}

const mutation = gql`
  mutation {
    addCategory(name: "insurance") {
      id
    }
  }
`

export default CategoryCreate
