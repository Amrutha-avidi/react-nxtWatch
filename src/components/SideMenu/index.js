import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'

import {HiFire} from 'react-icons/hi'

import {SiYoutubegaming} from 'react-icons/si'

import {CgPlayListAdd} from 'react-icons/cg'

import {
  MenuButtonsCon,
  MenuButton,
  SideMenuCon,
  ContactUsCon,
  ContactUsImageCon,
  ContactImage,
  ContactPara,
  ContactUsHead,
} from './styledComponents'
import ActiveMenuItemContext from '../../context/ActiveMenuItemContext'
import ThemeChange from '../../context/ThemeChange'

const activeMenuConstants = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
}

const SideMenu = () => (
  <ThemeChange.Consumer>
    {value => {
      const {darkTheme} = value
      const theme = darkTheme ? 'dark' : 'light'
      return (
        <ActiveMenuItemContext.Consumer>
          {activeMenuValue => {
            const {activeMenu, changeMenu} = activeMenuValue
            const iconColor = darkTheme ? '#424242' : '#7e858e'
            const iconActive = '#ff0b37'

            return (
              <SideMenuCon theme={theme}>
                <MenuButtonsCon>
                  <Link to="/">
                    <MenuButton
                      theme={theme}
                      onClick={() => changeMenu(activeMenuConstants.home)}
                      isActive={activeMenu === activeMenuConstants.home}
                      key="HOME"
                    >
                      <AiFillHome
                        size={22}
                        color={
                          activeMenu === activeMenuConstants.home
                            ? iconActive
                            : iconColor
                        }
                      />
                      Home
                    </MenuButton>
                  </Link>
                  <Link to="/trending">
                    <MenuButton
                      theme={theme}
                      onClick={() => changeMenu(activeMenuConstants.trending)}
                      isActive={activeMenu === activeMenuConstants.trending}
                      key="TRENDING"
                    >
                      <HiFire
                        size={22}
                        color={
                          activeMenu === activeMenuConstants.trending
                            ? iconActive
                            : iconColor
                        }
                      />
                      Trending
                    </MenuButton>
                  </Link>
                  <Link to="/gaming">
                    <MenuButton
                      theme={theme}
                      onClick={() => changeMenu(activeMenuConstants.gaming)}
                      isActive={activeMenu === activeMenuConstants.gaming}
                      key="GAMING"
                    >
                      <SiYoutubegaming
                        size={22}
                        color={
                          activeMenu === activeMenuConstants.gaming
                            ? iconActive
                            : iconColor
                        }
                      />
                      Gaming
                    </MenuButton>
                  </Link>
                  <Link to="/saved-videos">
                    <MenuButton
                      theme={theme}
                      isActive={activeMenu === activeMenuConstants.savedVideos}
                      key="SAVED_VIDEOS"
                      onClick={() =>
                        changeMenu(activeMenuConstants.savedVideos)
                      }
                    >
                      <CgPlayListAdd
                        size={22}
                        color={
                          activeMenu === activeMenuConstants.savedVideos
                            ? iconActive
                            : iconColor
                        }
                      />
                      Saved Videos
                    </MenuButton>
                  </Link>
                </MenuButtonsCon>
                <ContactUsCon theme={theme}>
                  <ContactUsHead>CONTACT US</ContactUsHead>
                  <ContactUsImageCon>
                    <ContactImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                      alt="facebook logo"
                    />
                    <ContactImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                      alt="twitter logo"
                    />
                    <ContactImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                      alt="linked in logo"
                    />
                  </ContactUsImageCon>
                  <ContactPara>
                    Enjoy! Now to see your channels and recommendations!
                  </ContactPara>
                </ContactUsCon>
              </SideMenuCon>
            )
          }}
        </ActiveMenuItemContext.Consumer>
      )
    }}
  </ThemeChange.Consumer>
)

export default SideMenu
