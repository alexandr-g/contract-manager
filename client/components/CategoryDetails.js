import React from 'react'
import { compose, withHandlers } from 'recompose'

const CategoryDetails = ({ id }) =>
  <div>
    <h3>Category Details</h3>
  </div>

export default compose(
  withHandlers({
    onCategoryDelete: ({ mutate, data }) => id =>
      mutate({ variables: { id } }).then(() => data.refetch()),
  })
)(CategoryDetails)
