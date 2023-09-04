import React from 'react'

const ThemeChange = React.createContext({
  darkTheme: false,
  changeTheme: () => {},
})

export default ThemeChange
