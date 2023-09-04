import ThemeChange from '../../context/ThemeChange'

import Header from '../Header'

import SideMenu from '../SideMenu'

import {
  NotFoundCon,
  NotFoundImg,
  NotFoundHead,
  NotFoundPara,
  Main,
} from './styledComponents'

const NotFound = () => (
  <ThemeChange.Consumer>
    {value => {
      const {darkTheme} = value
      const imageUrl = darkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      const theme = darkTheme ? 'dark' : 'light'
      return (
        <div>
          <Header />
          <Main>
            <SideMenu />
            <NotFoundCon theme={theme}>
              <NotFoundImg src={imageUrl} alt="not found" />
              <NotFoundHead theme={theme}>Page Not Found</NotFoundHead>
              <NotFoundPara>
                we are sorry, the page you requested could not be found.
              </NotFoundPara>
            </NotFoundCon>
          </Main>
        </div>
      )
    }}
  </ThemeChange.Consumer>
)

export default NotFound
