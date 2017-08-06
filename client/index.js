import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import App from './components/App'
import Categories from './components/Categories'
import CategoryCreate from './components/CategoryCreate'

const client = new ApolloClient({})

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Categories} />
          <Route path="categories/new" component={CategoryCreate} />
        </Route>
      </Router>
    </ApolloProvider>
  )
}

ReactDOM.render(<Root />, document.querySelector('#root'))
