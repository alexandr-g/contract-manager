import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class CategoryCreate extends Component {
  constructor(props) {
    super(props)

    this.state = { name: '' }
  }

  onSubmit(event) {
    event.preventDefault()

    this.props.mutate({
      variables: {
        name: this.state.name,
      },
    })
  }

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
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
  mutation AddCategory($name: String) {
    addCategory(name: $name) {
      id
      name
    }
  }
`

export default graphql(mutation)(CategoryCreate)
