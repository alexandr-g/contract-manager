import './style/style.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset'
import { ApolloProvider } from 'react-apollo'
import App from './components/App'
import Categories from './components/Categories'
import CategoryCreate from './components/CategoryCreate'
import CategoryDetails from './components/CategoryDetails'

const client = new ApolloClient({
  link: new HttpLink(),
  cache: new InMemoryCache()
})

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Categories} />
          <Route path="categories/new" component={CategoryCreate} />
          <Route path="categories/:id" component={CategoryDetails} />
        </Route>
      </Router>
    </ApolloProvider>
  )
}

ReactDOM.render(<Root />, document.querySelector('#root'))
