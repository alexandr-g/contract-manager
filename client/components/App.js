import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

export default ({ children }) => {
  return (
    <div className={{ width: '100%' }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography type="title" color="inherit">
            Contract Manager
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="container">
        {children}
      </div>
    </div>
  )
}
