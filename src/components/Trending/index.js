import {Component} from 'react'
import {HiFire} from 'react-icons/hi'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Cookies from 'js-cookie'

import ThemeChange from '../../context/ThemeChange'

import Header from '../Header'

import SideMenu from '../SideMenu'

import TrendingVideoItem from '../TrendingVideoItem'

import {
  NoVideoCon,
  NoVideoImage,
  NoVideoHead,
  RetryVideosButton,
  LoaderCon,
  NoVideoPara,
  TrendingMain,
  TrendingBody,
  HeadAndList,
  HeadCon,
  IconCon,
  TrendingListCon,
  ContentHead,
} from './styledComponents'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    trendingList: [],
    apiStatusForTrending: apiStatusConstant.initial,
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatusForTrending: apiStatusConstant.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
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
        channel: {
          name: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
        },
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        trendingList: formattedData,
        apiStatusForTrending: apiStatusConstant.success,
      })
    } else {
      this.setState({apiStatusForTrending: apiStatusConstant.failure})
    }
  }

  getTrendingVideosView = () => {
    const {trendingList} = this.state
    return (
      <ThemeChange.Consumer>
        {value => {
          const {darkTheme} = value
          const theme = darkTheme ? 'dark' : 'light'
          return (
            <div>
              <HeadCon theme={theme}>
                <IconCon theme={theme}>
                  <HiFire size={35} color="#ff0b37" />
                </IconCon>
                <ContentHead theme={theme}>Trending</ContentHead>
              </HeadCon>
              <TrendingListCon>
                {trendingList.map(each => (
                  <TrendingVideoItem videoItem={each} key={each.id} />
                ))}
              </TrendingListCon>
            </div>
          )
        }}
      </ThemeChange.Consumer>
    )
  }

  getTrendingVideoFailureView = () => (
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
            <NoVideoHead theme={theme}>Oops! Something Went Wrong</NoVideoHead>
            <NoVideoPara>
              We are having some trouble to complete your request. <br />
              Please try again
            </NoVideoPara>
            <RetryVideosButton type="button" onClick={this.getTrendingVideos}>
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

  renderApiStatusViewForTrending = () => {
    const {apiStatusForTrending} = this.state
    switch (apiStatusForTrending) {
      case apiStatusConstant.success:
        return this.getTrendingVideosView()
      case apiStatusConstant.failure:
        return this.getTrendingVideoFailureView()
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
            <TrendingMain data-testid="trending">
              <Header />
              <TrendingBody>
                <SideMenu />
                <HeadAndList theme={theme}>
                  {this.renderApiStatusViewForTrending()}
                </HeadAndList>
              </TrendingBody>
            </TrendingMain>
          )
        }}
      </ThemeChange.Consumer>
    )
  }
}

export default Trending
