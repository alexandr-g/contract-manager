import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Link } from 'react-router'
import { compose, withState, withHandlers } from 'recompose'
import query from '../queries/fetchCategories'
import mutation from '../mutations/deleteCategory'

const Categories = ({ onCategoryDelete, data: { loading, categories } }) => {
  if (loading) {
    return <div>loading...</div>
  }

  return (
    <div>
      <h2>Categories</h2>
      <ul className="collection">
        <div>
          {categories.map(({ id, name }) =>
            <li key={id} className="collection-item">
              {name}
              <i
                className="material-icons"
                onClick={() => onCategoryDelete(id)}
              >
                delete
              </i>
            </li>
          )}
        </div>
      </ul>
      <Link to="categories/new" className="btn-floating btn-large red right">
        <i className="material-icons">add</i>
      </Link>
    </div>
  )
}

export default compose(
  graphql(mutation),
  graphql(query),
  withHandlers({
    onCategoryDelete: ({ mutate, data }) => id =>
      mutate({ variables: { id } }).then(() => data.refetch()),
  })
)(Categories)
