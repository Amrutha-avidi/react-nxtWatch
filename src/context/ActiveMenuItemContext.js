import React from 'react'

const ActiveMenuItemContext = React.createContext({
  activeMenu: 'INITIAL',
  changeMenu: () => {},
})

export default ActiveMenuItemContext
