import {Component} from 'react'
import {Link} from 'react-router-dom'

import {SiYoutubegaming} from 'react-icons/si'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Cookies from 'js-cookie'

import ThemeChange from '../../context/ThemeChange'

import Header from '../Header'

import SideMenu from '../SideMenu'

import {
  NoVideoCon,
  NoVideoImage,
  NoVideoHead,
  RetryVideosButton,
  LoaderCon,
  NoVideoPara,
  GamingMain,
  GamingBody,
  HeadAndList,
  HeadCon,
  IconCon,
  TrendingListCon,
  ContentHead,
  GamingItem,
  GamingImage,
  Title,
  Para,
} from './styledComponents'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    gamingList: [],
    apiStatusForGaming: apiStatusConstant.initial,
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatusForGaming: apiStatusConstant.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()
      const formattedData = data.videos.map(eachItem => ({
        id: eachItem.id,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        gamingList: formattedData,
        apiStatusForGaming: apiStatusConstant.success,
      })
    } else {
      this.setState({apiStatusForGaming: apiStatusConstant.failure})
    }
  }

  getGamingVideosView = () => {
    const {gamingList} = this.state
    console.log(gamingList)
    return (
      <ThemeChange.Consumer>
        {value => {
          const {darkTheme} = value
          const theme = darkTheme ? 'dark' : 'light'
          return (
            <TrendingListCon>
              {gamingList.map(each => (
                <Link
                  to={`/videos/${each.id}`}
                  style={{textDecoration: 'none'}}
                >
                  <GamingItem key={each.id}>
                    <GamingImage
                      src={each.thumbnailUrl}
                      alt="video thumbnail"
                    />
                    <Title theme={theme}>{each.title}</Title>
                    <Para theme={theme}>
                      {each.viewCount} Watching Worldwide
                    </Para>
                  </GamingItem>
                </Link>
              ))}
            </TrendingListCon>
          )
        }}
      </ThemeChange.Consumer>
    )
  }

  getGamingVideoFailureView = () => (
    <ThemeChange.Consumer>
      {value => {
        const {darkTheme} = value
        const theme = darkTheme ? 'dark' : 'light'
        const imgUrl = darkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <NoVideoCon theme={theme}>
            <NoVideoImage src={imgUrl} alt="failure view" />
            <NoVideoHead>Oops! Something Went Wrong</NoVideoHead>
            <NoVideoPara>
              We are having some trouble to complete your request. <br />
              Please try again
            </NoVideoPara>
            <RetryVideosButton type="button" onClick={this.getGamingVideos}>
              Retry
            </RetryVideosButton>
          </NoVideoCon>
        )
      }}
    </ThemeChange.Consumer>
  )

  getLoadingView = () => (
    <ThemeChange.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <LoaderCon data-testid="loader">
            <Loader
              type="ThreeDots"
              color={darkTheme ? '#ffffff' : '#000000'}
              height="50"
              width="50"
            />
          </LoaderCon>
        )
      }}
    </ThemeChange.Consumer>
  )

  renderApiStatusViewForGaming = () => {
    const {apiStatusForGaming} = this.state
    switch (apiStatusForGaming) {
      case apiStatusConstant.success:
        return this.getGamingVideosView()
      case apiStatusConstant.failure:
        return this.getGamingVideoFailureView()
      case apiStatusConstant.inProgress:
        return this.getLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeChange.Consumer>
        {value => {
          const {darkTheme} = value
          const theme = darkTheme ? 'dark' : 'light'
          return (
            <GamingMain data-testid="gaming">
              <Header />
              <GamingBody>
                <SideMenu />
                <HeadAndList theme={theme}>
                  <HeadCon theme={theme}>
                    <IconCon theme={theme}>
                      <SiYoutubegaming size={40} color="#ff0b37" />
                    </IconCon>
                    <ContentHead theme={theme}>Gaming</ContentHead>
                  </HeadCon>
                  {this.renderApiStatusViewForGaming()}
                </HeadAndList>
              </GamingBody>
            </GamingMain>
          )
        }}
      </ThemeChange.Consumer>
    )
  }
}

export default Gaming
