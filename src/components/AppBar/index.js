import React from 'react'
import PropTypes from 'prop-types'

import StyledAppBar from './style'

/**
- Use an AppBar for fixed view or section navigation and/or branding.
**/

const AppBar = ({ children, ...styledProps }) => (
  <StyledAppBar
    data-testid="app-bar"
    flexDirection="row"
    alignItems="center"
    justifyItems="space-between"
    pl={20}
    {...styledProps}
  >
    {children}
  </StyledAppBar>
)

AppBar.propTypes = {
  /**
   The children prop is satisfied when the AppBar is populated with an element node or string.
  */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
}

export default AppBar
