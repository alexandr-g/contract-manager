import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import PermanentDrawer from './PermanentDrawer'

export default ({ children }) => {
  return (
    <div className={{ width: '100%' }}>
      <PermanentDrawer />
      <div className="container">
        {children}
      </div>
    </div>
  )
}
