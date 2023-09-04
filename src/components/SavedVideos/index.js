import {HiFire} from 'react-icons/hi'

import ThemeChange from '../../context/ThemeChange'
import SavedVideoContext from '../../context/SavedVideoContext'
import Header from '../Header'

import SideMenu from '../SideMenu'
import TrendingVideoItem from '../TrendingVideoItem'

import {
  HeadCon,
  IconCon,
  ContentHead,
  SavedVideosCon,
  SavedVideoList,
  SavedVideoListCon,
  NoSavedCon,
  NoSavedImage,
  NoSavedHead,
  NoSavedPara,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeChange.Consumer>
    {value => {
      const {darkTheme} = value
      const theme = darkTheme ? 'dark' : 'light'
      return (
        <div data-testid="savedVideos">
          <Header />
          <SavedVideosCon>
            <SideMenu />
            <SavedVideoList theme={theme}>
              <HeadCon theme={theme}>
                <IconCon theme={theme}>
                  <HiFire size={35} color="#ff0b37" />
                </IconCon>
                <ContentHead theme={theme}>Saved Videos</ContentHead>
              </HeadCon>
              <SavedVideoContext.Consumer>
                {val => {
                  const {savedVideosList} = val
                  if (savedVideosList.length === 0) {
                    return (
                      <NoSavedCon>
                        <NoSavedImage
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                          alt="no saved videos"
                        />
                        <NoSavedHead theme={theme}>
                          No saved videos found
                        </NoSavedHead>
                        <NoSavedPara>
                          You can save your videos while watching them
                        </NoSavedPara>
                      </NoSavedCon>
                    )
                  }
                  return (
                    <SavedVideoListCon>
                      {savedVideosList.map(each => (
                        <TrendingVideoItem videoItem={each} key={each.id} />
                      ))}
                    </SavedVideoListCon>
                  )
                }}
              </SavedVideoContext.Consumer>
            </SavedVideoList>
          </SavedVideosCon>
        </div>
      )
    }}
  </ThemeChange.Consumer>
)

export default SavedVideos
