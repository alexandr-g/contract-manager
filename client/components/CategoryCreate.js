import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Link, hashHistory } from 'react-router'
import { compose, withState, withHandlers } from 'recompose'
import query from '../queries/fetchCategories'

const CategoryCreate = ({ name, setName, onChange, onSubmit }) =>
  <div>
    <Link to="/">Back</Link>
    <h3>Create a new category</h3>
    <form onSubmit={onSubmit}>
      <label>Category Name:</label>
      <input autoFocus value={name} onChange={onChange} />
    </form>
  </div>

const mutation = gql`
  mutation AddCategory($name: String) {
    addCategory(name: $name) {
      id
      name
    }
  }
`

export default compose(
  graphql(mutation),
  withState('name', 'setName', ({ value }) => value),
  withHandlers({
    onChange: ({ setName }) => ({ target }) => setName(target.value),
    onSubmit: ({ mutate, name }) => event => {
      event.preventDefault()
      mutate({ variables: { name }, refetchQueries: [{ query }] }).then(() =>
        hashHistory.push('/')
      )
    },
  })
)(CategoryCreate)
