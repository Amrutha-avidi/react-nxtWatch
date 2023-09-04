import {Component} from 'react'
import Cookies from 'js-cookie'

import {FiSun, FiLogOut} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {Link, withRouter} from 'react-router-dom'

import Popup from 'reactjs-popup'

import ThemeChange from '../../context/ThemeChange'

import ActiveMenuItemContext from '../../context/ActiveMenuItemContext'

import {
  MobileNav,
  LargeNav,
  HomeLogo,
  ThemeProfileLogout,
  ProfileImage,
  LogoutButton,
  PopupContainer,
  CancelButton,
  ConfirmButton,
  LogoutMsg,
  MobileLogoutButton,
  ThemeButton,
} from './styledComponents'

class Header extends Component {
  render() {
    return (
      <ThemeChange.Consumer>
        {value => {
          const {darkTheme, changeTheme} = value

          const logout = () => {
            const {history} = this.props
            Cookies.remove('jwt_token')
            history.replace('/login')
          }

          const websiteImage = darkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const theme = darkTheme ? 'dark' : 'light'

          const color = darkTheme ? 'white' : 'black'

          return (
            <>
              <MobileNav theme={theme}>
                <ActiveMenuItemContext.Consumer>
                  {val => {
                    const {changeMenu} = val
                    return (
                      <Link to="/">
                        <HomeLogo
                          src={websiteImage}
                          onClick={() => changeMenu('HOME')}
                          alt="website logo"
                        />
                      </Link>
                    )
                  }}
                </ActiveMenuItemContext.Consumer>
                <ThemeProfileLogout>
                  <ThemeButton
                    type="button"
                    data-testid="theme"
                    onClick={() => changeTheme()}
                  >
                    {darkTheme ? (
                      <FiSun color="white" size={25} />
                    ) : (
                      <FaMoon size={25} />
                    )}
                  </ThemeButton>

                  <GiHamburgerMenu color={color} size={25} />

                  <div>
                    <Popup
                      modal
                      trigger={
                        <MobileLogoutButton type="button">
                          <FiLogOut color={color} size={25} />
                        </MobileLogoutButton>
                      }
                    >
                      {close => (
                        <PopupContainer theme={theme}>
                          <div>
                            <LogoutMsg theme={theme}>
                              Are you sure, you want to logout
                            </LogoutMsg>
                          </div>
                          <CancelButton
                            onClick={() => close()}
                            theme={theme}
                            type="button"
                          >
                            Cancel
                          </CancelButton>
                          <ConfirmButton
                            theme={theme}
                            type="button"
                            className="trigger-button"
                            onClick={logout}
                          >
                            Confirm
                          </ConfirmButton>
                        </PopupContainer>
                      )}
                    </Popup>
                  </div>
                </ThemeProfileLogout>
              </MobileNav>
              <LargeNav theme={theme}>
                <ActiveMenuItemContext.Consumer>
                  {val => {
                    const {changeMenu} = val
                    return (
                      <Link to="/">
                        <HomeLogo
                          src={websiteImage}
                          onClick={() => changeMenu('HOME')}
                          alt="website logo"
                        />
                      </Link>
                    )
                  }}
                </ActiveMenuItemContext.Consumer>
                <ThemeProfileLogout>
                  <ThemeButton
                    type="button"
                    data-testid="theme"
                    onClick={() => changeTheme()}
                  >
                    {darkTheme ? (
                      <FiSun color="white" size={25} />
                    ) : (
                      <FaMoon size={25} />
                    )}
                  </ThemeButton>
                  <ProfileImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />

                  <div>
                    <Popup
                      modal
                      trigger={
                        <LogoutButton theme={theme} type="button">
                          Logout
                        </LogoutButton>
                      }
                    >
                      {close => (
                        <PopupContainer theme={theme}>
                          <div>
                            <LogoutMsg theme={theme}>
                              Are you sure, you want to logout
                            </LogoutMsg>
                          </div>
                          <CancelButton
                            onClick={() => close()}
                            theme={theme}
                            type="button"
                          >
                            Cancel
                          </CancelButton>
                          <ConfirmButton
                            theme={theme}
                            type="button"
                            className="trigger-button"
                            onClick={logout}
                          >
                            Confirm
                          </ConfirmButton>
                        </PopupContainer>
                      )}
                    </Popup>
                  </div>
                </ThemeProfileLogout>
              </LargeNav>
            </>
          )
        }}
      </ThemeChange.Consumer>
    )
  }
}

export default withRouter(Header)
